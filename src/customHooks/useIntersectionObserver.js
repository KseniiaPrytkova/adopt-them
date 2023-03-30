import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            const observer = new IntersectionObserver(([entry]) => {
                setIsIntersecting(entry.isIntersecting);
            }, options);

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                observer.disconnect();
            };
        }
    }, [options]);

    return [ref, isIntersecting];
};

export default useIntersectionObserver;
