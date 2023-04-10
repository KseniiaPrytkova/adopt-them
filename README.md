# adopt-them

The design of this project is a product of my imagination. Do not judge strictly
😱

## What has been done:

-   [x] smooth pagination for the list of pets available for adoption; elements
        appear one by one with a slight delay, and smooth scrolling to the top
        of the container with elements is added for a comfortable user
        experience;
-   [x] theme switching capability (2 choices available); selected theme will
        persist even after page reloads, using localStorage;
-   [x] adopted pets are displayed above the search form and will remain even
        after page refreshes - `useContext` and `localStorage`;
-   [x] implementation of
        [`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
        to trigger animations when the user reaches specific parts of the web
        app; two hooks were created for simplicity, debugging, and general
        usage - one to play the animation once during the entire web
        application's lifetime (until a full reload), and another to animate
        every time the element intersects. Implementation can be found
        [here](#observers);
-   [x] the search form allows users to search for animals by type and breed
        (the list of breeds is dependent on the animal type and appears when an
        animal type is selected);
-   [x] `react-query` is used for API calls to minimize effects in the code;
-   [x] smooth scrolling to the top of the Animal detail container is provided
        for a comfortable user experience. When returning to the homepage, users
        will land on the top of the container with animals and on the page where
        they previously stopped;
-   [x] [server-side rendering](https://github.com/KseniiaPrytkova/adopt-them/commit/1c81211ee92a7608021f94d503eec266b85d7b66)
        and code splitting were explored and implemented initially, but later
        removed due to the nature of this small app. With its already
        satisfactory enough performance, the addition of SSR would be an
        overkill, introducing unnecessary complexity. Furthermore, the benefits
        of SSR, such as improved SEO and faster initial page load times, are not
        critical factors for this project. As someone wise said, "solve
        performance problems when you have them." In this case, it was decided
        to focus on maintaining simplicity, ease of maintenance, and the overall
        user experience for this particular project;
-   [x] tests with `Vitest`;
-   [x] app-level state management using `React Context`; alternatively, I would
        use `Redux Toolkit (RTK)` together with `RTK Query`;
-   [x] migrate to `TypeScript`;
        [here](https://github.com/KseniiaPrytkova/adopt-them/tree/319b9aa1d99e7ea4b397a7f2b11ba65b3b759620)
        is the JavaScript version of the project before I merged the branch that
        contained the TypeScript migration.

## Custom Hooks for Using Intersection Observer API <a id="observers"></a>:

### 🛸 Managing animations to occur only once per lifetime of web app:

In this case, the `Intersection Observer API` is used for animations. The
`React Context` is used to keep track of DOM elements that have already been
animated by storing their `id` within an object:

```JSX
import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [hasAnimatedItems, setHasAnimatedItems] = useState({});

    const contextValue = {
        hasAnimatedItems,
        setHasAnimatedItems,
    };

    return <AppContext.Provider value={contextValue} {...props} />;
};

export { AppContextProvider, AppContext };
```

`useAnimateOnceOnIntesection`:

```JSX
import { useRef, useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

export const useAnimateOnceOnIntersection = ({
    animationName = '',
    animationDuration = 2000,
    options
}) => {
    // Access the hasAnimatedItems object and setHasAnimatedItems function from AppContext
    const { hasAnimatedItems, setHasAnimatedItems } = useContext(AppContext);
    const [animated, setAnimated] = useState(false);
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        if (node) {
            // If the element has already been animated and is already in the hasAnimatedItems object, remove the animation class
            if (hasAnimatedItems[node.id] && !animated) {
                node.classList.remove(`animate-${animationName}`);
                return;
            }
        }

        // Disconnect any previous observer instance
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            ([entry]) => {
                // If the element is intersecting, set 'animated' to true and disconnect the observer
                if (entry.isIntersecting) {
                    setAnimated(true);
                    observer.current.disconnect();
                }
            },
            {
                ...options
            }
        );

        const { current: currentObserver } = observer;
        // If the element hasn't been animated yet, observe the element
        if (node && !hasAnimatedItems[node?.id]) currentObserver.observe(node);

        // Disconnect the observer when the component is unmounted
        return () => currentObserver.disconnect();
    }, [animated, animationName, hasAnimatedItems, node, options]);

    useEffect(() => {
        // If the element has been animated
        if (animated) {
            const element = node;
            if (element) {
                // Update the hasAnimatedItems object in the AppContext with the current element's id
                setHasAnimated((prevState) => ({
                    ...prevState,
                    [element.id]: true
                }));

                // Remove the animation class after the animation duration
                setTimeout(() => {
                    element.classList.remove(`animate-${animationName}`);
                }, animationDuration);
            }
        }
    }, [animated, node, animationName, setHasAnimated, animationDuration]);

    // Return a tuple with a function to set the ref and the animated state
    return [setNode, animated];
};
```

The `useAnimateOnceOnIntersection` hook takes `animationName`,
`animationDuration`, and `options` as parameters. The options are native to the
Intersection Observer API and include the following:

-   **root**: The element used as the viewport for checking the visibility of
    the target element. By default, this is set to null, which means the
    browser's viewport is used.
-   **rootMargin**: A set of margins that are added to the root's bounding box
    when calculating intersections, effectively growing or shrinking the area
    used for intersection calculations. The default value is
    `"0px 0px 0px 0px"`.
-   **threshold**: A single number or an array of numbers between 0 and 1,
    representing the percentage of the target's visibility within the root. The
    observer's callback will be executed when the visibility of the target
    element passes a threshold. The default value is 0, meaning the callback
    will be executed as soon as even one pixel of the target is visible.

`useAnimateOnceOnIntersection` hook returns a reference to the observed DOM
element and a boolean `animated` that indicates whether the animation has
already occurred. When animated is initially set to false, a new
`IntersectionObserver` instance is created, and the `hasAnimatedItems` object is
updated with a property corresponding to the ID of the monitored DOM element:

```JSX
 setHasAnimated((prevState) => ({
    ...prevState,
    [element.id]: true
}));
```

For all subsequent intersections, the following check ensures that a new
`IntersectionObserver` is not created if the element has already been animated
by simple `return`:

```JSX
 if (hasAnimatedItems[node.id] && !animated) {
    node.classList.remove(`animate-${animationName}`);
    return;
}
```

So, the `useAnimateOnceOnIntersection` hook simplifies the process of animating
a DOM element using the Intersection Observer API. It ensures that the animation
is only applied once per lifetime of your web application and keeps track of
animated elements using the `hasAnimatedItems` object in the context.

Here is an example of how to use the hook within a component:

```JSX
import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const HeaderSecondary = () => {
    // Access the hasAnimatedItems object from the AppContext
    const { hasAnimatedItems, _ } = useContext(AppContext);

    // Use the custom hook, passing in the animation details and options
    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-fast',
        animationDuration: 2000,
        options: { threshold: 0.5 }
    });

    return (
        <p
            id="headerSecondary" // Assign an id to the DOM element you want to observe
            ref={nodeRef} // Attach the ref returned from the hook
            className={`${
                // Apply the animation if it hasn't been animated before and the hasAnimatedItems object doesn't have the corresponding id
                animated || hasAnimatedItems['headerSecondary']
                    ? 'animate-fade-in-fast opacity-100'
                    : 'opacity-0'
            } transition-opacity duration-1000 ease-in-out`}
        >
            London is a capital of Great Britain
        </p>
    );
};

export default HeaderSecondary;
```

### 🛸 Continuously Monitor Element Intersection:

This custom hook, `useIntersectionObserver`, continuously monitors a DOM
element's intersection with a specified root element (or the viewport by
default). It accepts options as an argument, which configures the
`Intersection Observer API` behavior, and returns a `ref` to be attached to the
target DOM element and a boolean `isIntersecting`, which indicates whether the
element is currently intersecting with the root. The hook leverages the
`useEffect` hook to create and manage the Intersection Observer instance,
ensuring proper cleanup when the component is unmounted:

```JSX
import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [options]);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;
```

Example Usage of the Hook in a Component:

```JSX
import useIntersectionObserver from '../customHooks/useIntersectionObserver';

const Benefits = () => {
    // ...

    // Use the custom useIntersectionObserver hook with a threshold of 0.5
    const [benefitsRef, isBenefitsIntersecting] = useIntersectionObserver({
        threshold: 0.5
    });

    return (
        <div ref={elementRef} className={`transition-all duration-500 ease-in-out ${
            isIntersecting ? 'animate-swing' : ''
        }`}>
            London is a capital of Great Britain
        </div>
    );
};

export default Benefits;
```
