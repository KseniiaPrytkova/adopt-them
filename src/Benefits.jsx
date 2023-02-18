const Benefits = () => {
    const ddd = [
        'Vet checked',
        'Spayed/Neutered',
        'Housetrained',
        'Friendly',
        'Wormed',
        'Litter trained',
        'In this updated code, I added an SVG icon before the "Back" ',
        'Microchipped',

        'Good with kids',
        'Up to date on shots',
        'Vaccinated',
        'Playful',
        'Intelligent',
        'Affectionate',
        'Energetic',
        'Curious',
        'I hope this updated code meets your needs. Let me know if you have any other questions! I also added a class attribute to the SVG element to set the size and position of the icon, using the Tailwind CSS utility classes'
    ];

    return (
        <article className="lg:mt-10 lg:mb-10 py-10 lg:p-0 lg:flex lg:flex-wrap lg:justify-evenly">
            <h2 className="text-light-navy dark:text-dark-purple text-4xl font-bold pl-10 mb-10 lg:mb-0 lg:basis-2/6 lg:pl-10">
                All our animals are...
            </h2>
            <ul className="flex flex-wrap px-6 lg:basis-4/6 lg:py-0 items-center">
                {ddd.map((word, index) => (
                    <li
                        key={`word-${index}`}
                        className={`m-1 px-4 py-2 ${
                            index % 7 === 0
                                ? 'text-lg lg:text-xl text-light-blue dark:text-dark-darkRed'
                                : index % 7 === 1
                                ? 'border-2 border-light-gold dark:border-dark-paleTeal rounded-md text-light-darkNavy dark:text-dark-purple text-base'
                                : //   'border border-yellow-600 bg-gradient-to-tr from-yellow-100  to-transparent  text-yellow-500 text-base'
                                index % 7 === 2
                                ? 'bg-light-teal dark:bg-dark-paleGreen border-2 border-light-navy dark:border-dark-purple dark:text-dark-purple rounded text-light-lightNavy text-sm'
                                : index % 7 === 3
                                ? 'border-2 border-light-teal dark:border-dark-teal rounded-md text-light-navy dark:text-dark-purple text-2xl'
                                : index % 7 === 4
                                ? ' text-light-tan dark:text-dark-lightPurple text-xl lg:text-2xl'
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
