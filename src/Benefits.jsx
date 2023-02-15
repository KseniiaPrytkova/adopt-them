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
            <h2 className="text-4xl font-bold pl-10 mb-10 lg:mb-0 lg:basis-2/6 lg:pl-10">
                All our animals are...
            </h2>
            <ul className="flex flex-wrap px-6 lg:basis-4/6 lg:py-0 items-center">
                {ddd.map((word, index) => (
                    <li
                        key={`word-${index}`}
                        className={`m-1 px-4 py-2 ${
                            index % 7 === 0
                                ? 'text-lg lg:text-xl'
                                : index % 7 === 1
                                ? 'border-2 border-yellow-600 rounded-md text-yellow-500 text-base'
                                : index % 7 === 2
                                ? 'bg-green-500 border-2 border-green-700 rounded text-white text-sm'
                                : index % 7 === 3
                                ? 'border-2 border-indigo-700 rounded-md text-indigo-500 text-2xl'
                                : index % 7 === 4
                                ? 'bg-purple-600 border-2 border-purple-800 rounded-lg text-white text-lg'
                                : index % 7 === 5
                                ? ' text-pink-500 text-xl lg:text-2xl'
                                : 'border-2 border-teal-700 rounded-md text-teal-500 text-lg lg:text-xl'
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
