import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const HeaderSecondary = () => {
    // eslint-disable-next-line no-unused-vars
    const { hasAnimated, _ } = useContext(AppContext);
    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-fast',
        animationDuration: 2000,
        options: { threshold: 0.5 }
    });

    return (
        <article className="grid grid-cols-12 bg-light-gold px-20 pt-10 pb-16 dark:bg-dark-lightPurple">
            <p
                id="headerSecondary"
                ref={nodeRef}
                className={`col-span-10 col-start-2 text-center text-light-navy dark:text-dark-paleGreen lg:text-xl 
                ${
                    animated || hasAnimated['headerSecondary']
                        ? 'animate-fade-in-fast opacity-100'
                        : 'opacity-0'
                } transition-opacity duration-1000 ease-in-out`}
            >
                From the comfort of their personal computers, pet lovers can
                search for a pet that best matches their needs. They can then
                reference a shelter’s web page and discover what services it
                offers.
            </p>
        </article>
    );
};

export default HeaderSecondary;
