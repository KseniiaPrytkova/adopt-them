# adopt-them

The design of this project is a product of my imagination. Do not judge strictly 😱

## What has been implemented:
- [x] pagination for list of pets avalibale for adoption;
- [x] ability to change theme (2 choices available), theme will be saved even if the user reloads the page - `localStorage` usage;
- [x] when the user adopts a pet, this pet will appear above the search form and will remain even if the user refreshes the page - usage of `useContext` and `localStorage`;
- [x] use [`Intersection Observer API`](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to perform animation when the user reaches a particular part of the web app; 2 hooks were created (for simplicity to readon about and, debbuging and usgae in general) - one to play the animation 1 time during the life of the entire web application (until a full reload), and the second - to be able to animate every time the element intersects. Implementation is [here](#).
- [x] the search form provides the ability to search for animals by animal type and breed (the list of breeds depends on the type of animal and appears when the animal type is selected);
- [x] use `react-query` for API call to minimize efffects in the code;

### custom hooks for Intersection Observer API use:
in this case I am using Intersection Observer API for animations. To animate once per lifetime of web app I am using `React Context` to memorize DOM elements that have been already animated in object

```
import { createContext, useState } from 'react';

const AppContext = createContext();

const AppContextProvider = (props) => {
    const [hasAnimated, setHasAnimated] = useState({});

    const contextValue = {
        hasAnimated,
        setHasAnimated,
    };

    return <AppContext.Provider value={contextValue} {...props} />;
};

export { AppContextProvider, AppContext };
```

`useAnimateOnceOnIntesection`:
```
import { useRef, useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

export const useAnimateOnceOnIntersection = ({
    animationName = '',
    animationDuration = 2000,
    options
}) => {
    const { hasAnimated, setHasAnimated } = useContext(AppContext);
    const [animated, setAnimated] = useState(false);
    const [node, setNode] = useState(null);
    const observer = useRef(null);

    useEffect(() => {
        if (node) {
            if (hasAnimated[node.id] && !animated) {
                node.classList.remove(`animate-${animationName}`);
                return;
            }
        }

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            ([entry]) => {
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
        if (node && !hasAnimated[node?.id]) currentObserver.observe(node);

        return () => currentObserver.disconnect();
    }, [animated, animationName, hasAnimated, node, options]);

    useEffect(() => {
        if (animated) {
            const element = node;
            if (element) {
                setHasAnimated((prevState) => ({
                    ...prevState,
                    [element.id]: true
                }));

                setTimeout(() => {
                    element.classList.remove(`animate-${animationName}`);
                }, animationDuration);
            }
        }
    }, [animated, node, animationName, setHasAnimated, animationDuration]);

    return [setNode, animated];
};
```
this hook accepts ` animationName`, `animationDuration` and `options` of course (options are native to Intersection Observer API) and returns reference to DOM element and a boolean `animated`which indicates if animation already happenned. Initially `animated` is false, so new `new IntersectionObserver` will be created and to `hasAnimated` object will be added property which is id of a DOM element that is monitored for intersections:
```
 setHasAnimated((prevState) => ({
    ...prevState,
    [element.id]: true
}));
```

on all following intersections this check:
```
 if (hasAnimated[node.id] && !animated) {
    node.classList.remove(`animate-${animationName}`);
    return;
}
```
will forse to return and not create new `IntersectionObserver`.

Here is usage inside component:
```
import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const HeaderSecondary = () => {
    // eslint-disable-next-line no-unused-vars
    const { hasAnimated, _ } = useContext(AppContext); // define Context

    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-fast',
        animationDuration: 2000,
        options: { threshold: 0.5 }
    }); // usage of the hook

    return (
        <article className="grid grid-cols-12 bg-light-gold px-20 pt-10 pb-16 dark:bg-dark-lightPurple">
            <p
                id="headerSecondary" // give id to DOM element you want to observe
                ref={nodeRef} // stick a ref
                className={`col-span-10 col-start-2 text-center text-light-navy dark:text-dark-paleGreen lg:text-xl
                // animate if it didn't animate before and Context doesnt have property with such id yet
                ${
                    animated || hasAnimated['headerSecondary']
                        ? 'animate-fade-in-fast opacity-100'
                        : 'opacity-0'
                } transition-opacity duration-1000 ease-in-out`}
            >
                From the comfort of their personal computers, pet lovers can
                search for a pet that best matches their needs. They can then
                reference a shelter’s web page and discover what services it
                offers.
            </p>
        </article>
    );
};

export default HeaderSecondary;
```

