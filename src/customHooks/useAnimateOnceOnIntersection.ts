import { useRef, useState, useContext, useEffect } from 'react';
import { AppContext } from '../AppContext';

interface AnimateOnceOnIntersectionOptions {
    animationName?: string;
    animationDuration?: number;
    options?: IntersectionObserverInit;
}

type SetNodeFunction = (node: HTMLElement | null) => void;

export const useAnimateOnceOnIntersection = ({
    animationName = '',
    animationDuration = 2000,
    options
}: AnimateOnceOnIntersectionOptions): [SetNodeFunction, boolean] => {
    const { hasAnimated, setHasAnimated } = useContext(AppContext);
    const [animated, setAnimated] = useState<boolean>(false);
    const [node, setNode] = useState<HTMLElement | null>(null);
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
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
                    observer.current?.disconnect();
                }
            },
            {
                ...options
            }
        );

        const { current: currentObserver } = observer;
        if (node && !hasAnimated[node?.id]) currentObserver.observe(node);

        return () => currentObserver.disconnect();
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
