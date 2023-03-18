import Pet from './Pet';

const Results = ({
    pets,
    page,
    setPage,
    isLoading,
    isFetching,
    isPreviousData,
    isError,
    error,
    resultsRef,
    scrollToTop
}) => {
    const handleButtonClick = (newPage) => {
        scrollToTop();
        setTimeout(() => {
            setPage(newPage);
        }, 1000);
    };

    return (
        <section
            ref={resultsRef}
            className="mx-2 flex flex-col rounded-lg bg-light-lightNavy p-2 dark:bg-dark-lightGrey lg:col-span-8 xl:col-span-9 "
        >
            <article className="m-2 grid basis-52 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:basis-full xl:grid-cols-4 xl:grid-rows-2">
                {!pets.length ? (
                    <div>No Pets Found😩</div>
                ) : isError ? (
                    <div>Error: {error.message}</div>
                ) : isFetching || isLoading ? (
                    <div>Loading...</div>
                ) : (
                    pets.map((pet, index) => {
                        return (
                            <Pet
                                animal={pet.animal}
                                key={pet.id}
                                name={pet.name}
                                breed={pet.breed}
                                images={pet.images}
                                location={`${pet.city}, ${pet.state}`}
                                id={pet.id}
                                delay={index * 100}
                                currentPage={page}
                            />
                        );
                    })
                )}
            </article>

            <nav className="mb-2 flex justify-center gap-4">
                <button
                    type="button"
                    onClick={() =>
                        handleButtonClick((old) => Math.max(old - 1, 0))
                    }
                    disabled={page === 0}
                    className={`text-light-darkNavy dark:text-dark-darkRed ${
                        page === 0
                            ? 'cursor-not-allowed opacity-50'
                            : ' opacity-100'
                    }`}
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
                    type="button"
                    onClick={() => handleButtonClick((old) => old + 1)}
                    disabled={isFetching || isPreviousData || pets.length < 10}
                    className={`text-light-darkNavy dark:text-dark-darkRed ${
                        isFetching || isPreviousData || pets.length < 10
                            ? 'cursor-not-allowed opacity-50'
                            : 'opacity-100'
                    }`}
                >
                    Next
                </button>
            </nav>
        </section>
    );
};

export default Results;
