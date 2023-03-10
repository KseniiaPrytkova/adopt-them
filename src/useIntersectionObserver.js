import { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';
// import AdoptedPetContext from './AppContext';

// const useIntersectionObserver = (elements, callback, options) => {
//     useEffect(() => {
//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     callback(entry.target);
//                 }
//             });
//         }, options);

//         elements.forEach((element) => {
//             observer.observe(element);
//         });

//         return () => {
//             observer.disconnect();
//         };
//     }, [elements, callback, options]);
// };

const useIntersectionObserver = (
    ref,
    callback,
    oncePerPage = true,
    oncePerApp = true,
    options = {}
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { hasAnimated1, _ } = useContext(AppContext);

    useEffect(() => {
        console.log('inside obsever');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log('intersecting!!');

                        setIsIntersecting(true);
                        if (oncePerPage) {
                            console.log('once per page ---> disconnect!');
                            console.log(observer);
                            observer.disconnect();
                        }
                    }
                });
            },
            {
                ...options
            }
        );

        if (ref.current) {
            console.log('if ref.current', ref.current);
            observer.observe(ref.current);
        }

        return () => {
            console.log('disconnect');
            observer.disconnect();
        };
    });

    useEffect(() => {
        console.log('))', hasAnimated1[ref.current?.id]);
        if (isIntersecting && hasAnimated1[ref.current?.id] === undefined) {
            console.log(':::::::');
            callback();
        }
        // if (isIntersecting) {
        //     callback();
        // }
    }, [callback, hasAnimated1, isIntersecting, ref]);

    return [ref, isIntersecting];
};

export { useIntersectionObserver };
