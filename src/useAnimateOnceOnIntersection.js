import { useRef, useState, useContext, useEffect } from 'react';
import useIntersectionObserverForAnimateOnce from './useIntersectionObserverForAnimateOnce';
import { AppContext } from './AppContext';

export const useAnimateOnceOnIntersection = ({
    animationName = '',
    options
}) => {
    // const [entry, updateEntry] = useState({});
    const { hasAnimated, setHasAnimated } = useContext(AppContext);
    const [animated, setAnimated] = useState(false);
    const [node, setNode] = useState(null);

    const observer = useRef(null);

    useEffect(() => {
        // console.log('++++++', hasAnimated[node?.id]);
        // if (hasAnimated[node.id])
        // if (node) {
        //     console.log('++++++', hasAnimated[node.id]);
        //     // Rest of the code here
        // }
        // console.log('++++++', hasAnimated[node.id]);
        if (node) {
            console.log('++++++++++node:', node.id);
            console.log('@@@', hasAnimated[node.id]);
            if (hasAnimated[node.id]) return;
        }

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            ([entry]) => {
                // updateEntry(entry);
                if (entry.isIntersecting) {
                    setAnimated(true);
                    console.log('intersecting...');
                    observer.current.disconnect();
                }
            },
            {
                // root,
                // rootMargin,
                // threshold
                ...options
            }
        );

        const { current: currentObserver } = observer;

        if (node) currentObserver.observe(node);
        console.log('node:', node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    useEffect(() => {
        if (animated) {
            const element = node;
            if (element) {
                console.log('el in animation adding:', element);
                setHasAnimated((prevState) => ({
                    ...prevState,
                    [element.id]: true
                }));

                element.classList.add(`animate-${animationName}`);
                console.log('!!!!!!!!!!!', element.classList);

                setTimeout(() => {
                    element.classList.remove(`animate-${animationName}`);
                }, 2000);
                // element.classList.add(animationName);
            }
        }
    }, [animated, node, animationName]);

    // return [setNode, entry];
    return [setNode, animated];
};

// const useAnimateOnceOnIntersection = ({ animationName = '', options }) => {
//     const [ref, setRef] = useState(null);
//     const [animated, setAnimated] = useState(false);

//     console.log('ref:', ref);
//     console.log('setRef:', setRef);
//     useEffect(() => {
//         const observer = new IntersectionObserver(([entry]) => {
//             console.log('entry:', entry);
//             console.log('entry.isIntersecting:', entry.isIntersecting);

//             setAnimated(entry.isIntersecting);
//         }, options);

//         if (ref) {
//             console.log('observe');
//             observer.observe(ref);
//         }

//         return () => {
//             console.log('COMPONENT WILL UNMOUNT!');
//             if (ref) {
//                 console.log('unobserve');
//                 observer.unobserve(ref);
//             }
//         };
//     }, []);

//     return [setRef, animated];
// };

// export default useAnimateOnceOnIntersection;

// const useAnimateOnceOnIntersection = ({
//     animationName = '',
//     threshold = 0
//     // oncePerApp = false
// }) => {
//     // const { hasAnimated, setHasAnimated } = useContext(AppContext);
//     const [animated, setAnimated] = useState(false);

//     const [ref, isIntersecting] = useIntersectionObserverForAnimateOnce(
//         useRef(),
//         () => animate(),
//         true,
//         {
//             threshold
//         }
//     );

//     function animate() {
//         setAnimated(true);

//         ref.current.classList.add(`animate-${animationName}`);

//         setTimeout(() => {
//             ref.current.classList.remove(`animate-${animationName}`);

//             // if (oncePerApp) {
//             //     setHasAnimated((prevState) => ({
//             //         ...prevState,
//             //         [ref.current?.id]: true
//             //     }));
//             // }
//         }, 2000);
//     }

//     return [ref, animated];
// };

// export default useAnimateOnceOnIntersection;
