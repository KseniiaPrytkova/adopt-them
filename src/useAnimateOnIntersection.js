// import { useIntersectionObserver } from './useIntersectionObserver';
// import { useRef, useState } from 'react';

// const useAnimateOnIntersection = () => {
//     const [hasAnimated, setHasAnimated] = useState(false);
//     const ref = useRef(null);

//     const [intersectionRef, isIntersecting] = useIntersectionObserver(
//         ref,
//         animate
//     );

//     function animate() {
//         setHasAnimated(true);
//         ref.current.classList.add('animate-fade-in-fast');
//         setTimeout(() => {
//             ref.current.classList.remove('animate-fade-in-fast');
//         }, 2000);
//     }

//     return [intersectionRef, hasAnimated, ref];
// };

import { useEffect, useRef, useState, useContext } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';
import { AppContext } from './AppContext';
// import AdoptedPetContext from './AppContext';

const useAnimateOnIntersection = ({
    animationName = '',
    threshold = 0,
    oncePerApp = false,
    oncePerPage = false
}) => {
    console.log('in useAnimateOnIntersection');
    const { __, setHasAnimated1 } = useContext(AppContext);
    // const ref = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    const [ref, isIntersecting] = useIntersectionObserver(
        useRef(),
        animate,
        oncePerPage,
        oncePerApp,
        { threshold }
    );

    function animate() {
        console.log('in animate');

        setHasAnimated(true);

        ref.current.classList.add(`animate-${animationName}`);
        setHasAnimated1(true);
        setTimeout(() => {
            ref.current.classList.remove(`animate-${animationName}`);
        }, 2000);
    }

    if (isIntersecting) {
        console.log('intersecting!!!', ref);
    }
    return [ref, hasAnimated];
};

export { useAnimateOnIntersection };
