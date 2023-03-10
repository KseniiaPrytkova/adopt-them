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
    // const [adoptedPet] = useContext(AdoptedPetContext);

    useEffect(() => {
        // if (!adoptedPet) {
        // console.log('inobserfer');
        // if (oncePerApp && !hasAnimated1) {

        console.log('inside obsever');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // console.log(
                        //     'isIntersecting:',
                        //     isIntersecting,
                        //     'ref:',
                        //     ref
                        // );

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
            observer.disconnect();
        };
        // }
        // }
    });

    useEffect(() => {
        // if (isIntersecting && !hasAnimated1) {
        //     callback();
        // }
        if (isIntersecting) {
            callback();
        }
    }, [isIntersecting, callback]);

    return [ref, isIntersecting];
};

export { useIntersectionObserver };
