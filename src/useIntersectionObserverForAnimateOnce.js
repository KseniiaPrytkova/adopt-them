import { useState, useEffect, useContext } from 'react';
import { AppContext } from './AppContext';

const useIntersectionObserverForAnimateOnce = (
    ref,
    callback,
    oncePerApp,
    options = {}
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const { hasAnimated, _ } = useContext(AppContext);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                        observer.disconnect();
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
    });

    useEffect(() => {
        if (isIntersecting && hasAnimated[ref.current?.id] === undefined) {
            callback();
        }
    }, [callback, hasAnimated, isIntersecting, ref]);

    return [ref, isIntersecting];
};

export default useIntersectionObserverForAnimateOnce;
