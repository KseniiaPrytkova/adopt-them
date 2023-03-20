import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { AppContext } from '../AppContext';
import { useContext } from 'react';
import useIntersectionObserver from '../customHooks/useIntersectionObserver';

const Benefits = () => {
    const characteristics = [
        'Vet checked',
        'Spayed/Neutered',
        'Housetrained and well-behaved',
        'Friendly',
        'Wormed',
        'Litter trained',
        'A source of unconditional love and companionship',
        'Microchipped',
        'Good with kids',
        'Up to date on shots',
        'Vaccinated',
        'Playful',
        'Intelligent',
        'Affectionate',
        'Energetic',
        'Curious',
        "More than just animals, they are loyal companions that offer us a sense of purpose, provide comfort, and can even improve our physical and mental well-being. However, it's important to remember that caring for them requires responsibility, commitment, and providing proper nutrition, exercise, and veterinary care"
    ];
    // eslint-disable-next-line no-unused-vars
    const { hasAnimated, _ } = useContext(AppContext);

    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-fast',
        animationDuration: 2000,
        options: { threshold: 0.5 }
    });

    const [benefitsRef, isBenefitsIntersecting] = useIntersectionObserver({
        threshold: 0.5
    });

    return (
        <article
            id="benefits"
            ref={nodeRef}
            className={`py-10 lg:mt-10 lg:mb-10 lg:flex lg:flex-wrap lg:justify-evenly lg:p-0 ${
                animated || hasAnimated['benefits']
                    ? 'animate-fade-in-fast opacity-100'
                    : 'opacity-0'
            } transition-opacity`}
        >
            <h2 className="mb-10 pl-10 text-4xl text-light-navy dark:text-dark-purple lg:mb-0 lg:basis-2/6 lg:pl-10">
                All our animals are:
            </h2>
            <ul
                ref={benefitsRef}
                className="flex flex-wrap items-center px-6 lg:basis-4/6 lg:py-0"
            >
                {characteristics.map((word, index) => (
                    <li
                        key={`word-${index}`}
                        className={`m-2 cursor-pointer px-4 py-2 transition-all duration-500 ease-in-out ${
                            index % 7 === 0
                                ? 'text-lg text-light-blue dark:text-dark-darkRed lg:text-xl'
                                : index % 7 === 1
                                ? 'rounded-md border-2 border-light-gold text-base text-light-darkNavy  dark:border-dark-paleTeal dark:text-dark-purple' +
                                  (isBenefitsIntersecting
                                      ? ' animate-swing'
                                      : '')
                                : index % 7 === 2
                                ? 'rounded border-2 border-light-navy bg-light-teal text-sm text-light-lightNavy dark:border-dark-purple dark:bg-dark-paleGreen dark:text-dark-purple'
                                : index % 7 === 3
                                ? 'rounded-md border-2 border-light-teal text-2xl text-light-navy dark:border-dark-teal dark:text-dark-purple' +
                                  (isBenefitsIntersecting
                                      ? ' animate-swing'
                                      : '')
                                : index % 7 === 4
                                ? 'text-xl text-light-tan dark:text-dark-lightPurple lg:text-2xl'
                                : index % 7 === 5
                                ? 'rounded-lg border-2 border-light-orange bg-light-gold text-lg text-white  dark:border-dark-lightPurple dark:bg-dark-paleTeal'
                                : 'rounded-md border-2 border-light-orange text-lg text-light-orange  dark:border-dark-green dark:text-dark-teal lg:text-xl'
                        } `}
                    >
                        {word}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Benefits;
