import { useIntersectionObserver } from './useIntersectionObserver';

const Benefits = () => {
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });
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

    return (
        <article className="py-10 lg:mt-10 lg:mb-10 lg:flex lg:flex-wrap lg:justify-evenly lg:p-0">
            <h2 className="mb-10 pl-10 text-4xl text-light-navy dark:text-dark-purple lg:mb-0 lg:basis-2/6 lg:pl-10">
                All our animals are:
            </h2>
            <ul className="flex flex-wrap items-center px-6 lg:basis-4/6 lg:py-0">
                {characteristics.map((word, index) => (
                    <li
                        ref={ref}
                        key={`word-${index}`}
                        className={`m-1 px-4 py-2 ${
                            index % 7 === 0
                                ? 'text-lg text-light-blue dark:text-dark-darkRed lg:text-xl' +
                                  (isIntersecting ? ' animate-zoom-in-out' : '')
                                : index % 7 === 1
                                ? 'rounded-md border-2 border-light-gold text-base text-light-darkNavy dark:border-dark-paleTeal dark:text-dark-purple'
                                : index % 7 === 2
                                ? 'rounded border-2 border-light-navy bg-light-teal text-sm text-light-lightNavy dark:border-dark-purple dark:bg-dark-paleGreen dark:text-dark-purple'
                                : index % 7 === 3
                                ? 'rounded-md border-2 border-light-teal text-2xl text-light-navy dark:border-dark-teal dark:text-dark-purple' +
                                  (isIntersecting ? ' animate-zoom-in-out' : '')
                                : index % 7 === 4
                                ? 'text-xl text-light-tan dark:text-dark-lightPurple lg:text-2xl'
                                : index % 7 === 5
                                ? 'rounded-lg border-2 border-light-orange bg-light-gold text-lg text-white dark:border-dark-lightPurple dark:bg-dark-paleTeal'
                                : 'rounded-md border-2 border-light-orange text-lg text-light-orange dark:border-dark-green dark:text-dark-teal lg:text-xl'
                        }`}
                    >
                        {word}
                    </li>
                ))}
            </ul>
        </article>
    );
};

export default Benefits;
