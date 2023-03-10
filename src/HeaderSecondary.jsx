import { useAnimateOnIntersection } from './useAnimateOnIntersection';
// import AdoptedPetContext from './AppContext';
import { useEffect, useRef, useState, useContext } from 'react';

import { AppContext } from './AppContext';

const HeaderSecondary = () => {
    const [intersectionRef, hasAnimated] = useAnimateOnIntersection(
        {
            animationName: 'fade-in-fast',
            threshold: 0.5,
            oncePerApp: true,
            oncePerPage: true
        },
        []
    );

    const { adoptedPet, hasAnimated1 } = useContext(AppContext);

    console.log('hasAnimated1------------>', hasAnimated1);

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
