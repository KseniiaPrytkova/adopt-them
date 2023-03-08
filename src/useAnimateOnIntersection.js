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

import { useEffect, useRef, useState } from 'react';
import { useIntersectionObserver } from './useIntersectionObserver';

export default function useAnimateOnIntersection(
    animationName = '',
    threshold = 0
) {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [ref, isIntersecting] = useIntersectionObserver(
        useRef(),
        animate,
        true,
        { threshold }
    );

    function animate() {
        setHasAnimated(true);
        ref.current.classList.add(`animate-${animationName}`);
        setTimeout(() => {
            ref.current.classList.remove(`animate-${animationName}`);
        }, 2000);
    }

    return [ref, hasAnimated];
}

export { useAnimateOnIntersection };
