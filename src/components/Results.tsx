import { Pet as PetType } from '../APIResponsesTypes';
import Pet from './Pet';

interface ResultsProps {
    pets: PetType[];
    page: number;
    setPage: (value: number | ((old: number) => number)) => void;
    isLoading: boolean;
    isFetching: boolean;
    isPreviousData: boolean;
    isError: boolean;
    error: Error;
    resultsRef: React.RefObject<HTMLElement>;
    scrollToTop: () => void;
}

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
}: ResultsProps) => {
    const handleButtonClick = (pageUpdater: (old: number) => number) => {
        scrollToTop();
        setTimeout(() => {
            setPage((old) => pageUpdater(old));
        }, 1000);
    };

    return (
        <section
            ref={resultsRef}
            className="mx-2 flex flex-col rounded-lg bg-light-lightNavy p-2 dark:bg-dark-lightGrey lg:col-span-8 xl:col-span-9"
        >
            <article className="m-2 grid basis-52 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:basis-full xl:grid-cols-4 xl:grid-rows-2">
                {isError ? (
                    <div>Error: {error.message} </div>
                ) : isFetching || isLoading ? (
                    <div>Loading...</div>
                ) : !pets.length ? (
                    <div>No Pets Found😩</div>
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
                    data-testid={`prev-button-${page}`}
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
                    <span data-testid="spinner" className="inline animate-spin">
                        {page + 1}
                    </span>
                ) : (
                    <span className="flex h-10 w-10 items-center justify-center text-light-darkNavy dark:text-dark-darkRed">
                        {page + 1}
                    </span>
                )}

                <button
                    type="button"
                    data-testid={`next-button-${page}`}
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
