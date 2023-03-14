import { useRef, useState, useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

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
        if (node) {
            if (hasAnimated[node.id] && !animated) {
                // setAnimated(true);
                node.classList.remove(`animate-${animationName}`);
                console.log('}}}}', node.classList);
                return;
            }
        }

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                    console.log('intersecting...');
                    observer.current.disconnect();
                }
            },
            {
                ...options
            }
        );

        const { current: currentObserver } = observer;

        if (node && !hasAnimated[node?.id]) currentObserver.observe(node);
        // console.log('node:', node);

        return () => currentObserver.disconnect();
    }, [node, options]);

    useEffect(() => {
        if (animated) {
            const element = node;
            if (element) {
                console.log('in animation adding:');
                setHasAnimated((prevState) => ({
                    ...prevState,
                    [element.id]: true
                }));

                // element.classList.add(`animate-${animationName}`);
                // console.log('!!!!!!!!!!!', element.classList);

                setTimeout(() => {
                    element.classList.remove(`animate-${animationName}`);
                }, animationDuration);
            }
        }
    }, [animated, node, animationName]);

    // return [setNode, entry];
    return [setNode, animated];
};
