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
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
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
        }
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
