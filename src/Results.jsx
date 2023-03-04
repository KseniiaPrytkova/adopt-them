import Pet from './Pet';

const Results = ({
    pets,
    page,
    setPage,
    isLoading,
    isFetching,
    isPreviousData,
    isError,
    error
}) => {
    return (
        <section className="mx-2 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg bg-light-lightNavy p-4 dark:bg-dark-lightGrey  sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:grid-rows-2 xl:col-span-9 xl:col-start-4 xl:grid-cols-4">
            {!pets.length ? (
                <div>No Pets Found</div>
            ) : isError ? (
                <div>Error: {error.message}</div>
            ) : isFetching || isLoading ? (
                <div>Loading...</div>
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

            <div className="flex items-center justify-center gap-4 sm:col-span-2 lg:col-span-3 lg:row-start-5 xl:col-span-4">
                <button
                    onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    disabled={page === 0}
                    className="text-light-darkNavy disabled:cursor-not-allowed dark:text-dark-darkRed"
                >
                    Prev
                </button>

                {isFetching ? (
                    <span className="inline animate-spin">{page + 1}</span>
                ) : (
                    <span className="flex h-10 w-10 items-center justify-center text-light-darkNavy dark:text-dark-darkRed">
                        {page + 1}
                    </span>
                )}

                <button
                    onClick={() => {
                        if (!isPreviousData && pets.length === 10) {
                            setPage((old) => old + 1);
                        }
                    }}
                    disabled={isFetching || isPreviousData || pets.length < 10}
                    className="text-light-darkNavy disabled:cursor-not-allowed dark:text-dark-darkRed"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Results;
