import Pet from './Pet';

const Results = ({ pets }) => {
    return (
        <section className="m-2 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg bg-grey-snow px-4 py-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-8 lg:grid-cols-3 xl:col-span-9 2xl:col-span-7 2xl:col-start-5 2xl:grid-cols-4">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.map((pet) => {
                    return (
                        <Pet
                            animal={pet.animal}
                            key={pet.id}
                            name={pet.name}
                            breed={pet.breed}
                            images={pet.images}
                            location={`${pet.city}, ${pet.state}`}
                            id={pet.id}
                        />
                    );
                })
            )}
        </section>
    );
};

export default Results;
