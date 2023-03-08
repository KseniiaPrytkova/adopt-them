import { useState, useEffect } from 'react';

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
    oncePerSession = true,
    options = {}
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        console.log(
                            'isIntersecting:',
                            isIntersecting,
                            'ref:',
                            ref
                        );

                        setIsIntersecting(true);
                        if (oncePerSession) {
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
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [ref, callback, oncePerSession, options]);

    useEffect(() => {
        if (isIntersecting) {
            callback();
        }
    }, [isIntersecting, callback]);

    return [ref, isIntersecting];
};

export { useIntersectionObserver };
