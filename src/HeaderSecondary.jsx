import { useAnimateOnIntersection } from './useAnimateOnIntersection';

const HeaderSecondary = () => {
    const [intersectionRef, hasAnimated] = useAnimateOnIntersection(
        'fade-in-fast',
        0.5
    );

    return (
        <article className="grid grid-cols-12 bg-light-gold px-20 pt-10 pb-16 dark:bg-dark-lightPurple">
            <p
                ref={intersectionRef}
                // className={`col-span-10 col-start-2 text-center text-lg text-light-navy dark:text-dark-paleGreen lg:text-xl`}
                className={`col-span-10 col-start-2 text-center text-lg text-light-navy dark:text-dark-paleGreen lg:text-xl ${
                    hasAnimated ? 'opacity-100' : 'opacity-0'
                } transition-opacity`}
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
