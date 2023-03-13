import { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

const useIntersectionObserverForAnimateOnce = (
    ref,
    callback,
    oncePerApp = true,
    options = {}
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    // const { hasAnimated, _ } = useContext(AppContext);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entry) => {
                console.log('entry:-----> ', entry, 'for: ', ref);

                if (entry.isIntersecting) {
                    console.log('intersecting!!!');
                    // setIsIntersecting(true);
                    callback();
                }

                if (oncePerApp) {
                    observer.disconnect();
                }
            },
            {
                ...options
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        // return () => {
        //     observer.disconnect();
        // };

        // return () => {};

        // if (ref.current) {
        //     observer.observe(ref.current);
        // }

        return () => {
            observer.disconnect();
        };
    });

    // useEffect(() => {
    //     // if (isIntersecting && hasAnimated[ref.current?.id] === undefined) {
    //     //     callback();
    //     // }
    //     if (isIntersecting) {
    //         callback();
    //     }
    // }, [callback, isIntersecting]);

    return [ref, isIntersecting];
};

export default useIntersectionObserverForAnimateOnce;
