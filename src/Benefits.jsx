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

    return (
        <article className="lg:mt-10 lg:mb-10 py-10 lg:p-0 lg:flex lg:flex-wrap lg:justify-evenly">
            <h2 className="text-light-navy dark:text-dark-purple text-4xl pl-10 mb-10 lg:mb-0 lg:basis-2/6 lg:pl-10">
                All our animals are:
            </h2>
            <ul className="flex flex-wrap px-6 lg:basis-4/6 lg:py-0 items-center">
                {characteristics.map((word, index) => (
                    <li
                        key={`word-${index}`}
                        className={`m-1 px-4 py-2 ${
                            index % 7 === 0
                                ? 'text-lg lg:text-xl text-light-blue dark:text-dark-darkRed'
                                : index % 7 === 1
                                ? 'border-2 border-light-gold dark:border-dark-paleTeal rounded-md text-light-darkNavy dark:text-dark-purple text-base'
                                : index % 7 === 2
                                ? 'bg-light-teal dark:bg-dark-paleGreen border-2 border-light-navy dark:border-dark-purple dark:text-dark-purple rounded text-light-lightNavy text-sm'
                                : index % 7 === 3
                                ? 'border-2 border-light-teal dark:border-dark-teal rounded-md text-light-navy dark:text-dark-purple text-2xl'
                                : index % 7 === 4
                                ? 'text-light-tan dark:text-dark-lightPurple text-xl lg:text-2xl'
                                : index % 7 === 5
                                ? 'bg-light-gold border-2 dark:bg-dark-paleTeal border-light-orange dark:border-dark-lightPurple rounded-lg text-white text-lg'
                                : 'border-2 border-light-orange dark:border-dark-green rounded-md text-light-orange dark:text-dark-teal text-lg lg:text-xl'
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
