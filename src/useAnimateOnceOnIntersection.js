import { useRef, useState, useContext, useEffect } from 'react';
import useIntersectionObserverForAnimateOnce from './useIntersectionObserverForAnimateOnce';
import { AppContext } from './AppContext';

const useAnimateOnceOnIntersection = ({
    animationName = '',
    threshold = 0,
    oncePerApp = false
}) => {
    const { hasAnimated, setHasAnimated } = useContext(AppContext);
    const [animated, setAnimated] = useState(false);

    const [ref, isIntersecting] = useIntersectionObserverForAnimateOnce(
        useRef(),
        animate,
        oncePerApp,
        {
            threshold
        }
    );

    function animate() {
        setAnimated(true);

        ref.current.classList.add(`animate-${animationName}`);

        setTimeout(() => {
            ref.current.classList.remove(`animate-${animationName}`);

            if (oncePerApp) {
                setHasAnimated((prevState) => ({
                    ...prevState,
                    [ref.current?.id]: true
                }));
            }
        }, 2000);
    }

    return [ref, animated];
};

export default useAnimateOnceOnIntersection;
