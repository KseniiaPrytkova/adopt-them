import { useRef, useState, useEffect } from 'react';
import Pet from './Pet';

const useHandleButtonClick = (setPage, isFetching) => {
    const sectionRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);

    // useEffect(() => {
    //     console.log('isFetching', isFetching);
    //     if (!scrolling) {
    //         console.log('!scrolling, return ....');
    //         return;
    //     }

    //     if (isFetching) {
    //         console.log('!fetching, return ....');
    //         return;
    //     }

    //     if (!isFetching && sectionRef.current) {
    //         console.log('finally');
    //         // sectionRef.current.scrollIntoView({
    //         //     behavior: 'smooth',
    //         //     block: 'start',
    //         //     inline: 'nearest'
    //         // });
    //         setTimeout(() => {
    //             sectionRef.current.scrollIntoView({
    //                 behavior: 'smooth',
    //                 block: 'start',
    //                 inline: 'nearest'
    //             });
    //         }, 100);
    //         setScrolling(false);
    //     }
    // }, [isFetching, scrolling]);

    const handleButtonClick = (newPage) => {
        console.log('handleButtonClick');
        setTimeout(() => {
            sectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }, 100);
        setPage(newPage);
        // setScrolling(true);
    };

    return [sectionRef, handleButtonClick];
};

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
    // const sectionRef = useRef(null);

    const [sectionRef, handleButtonClick] = useHandleButtonClick(
        setPage,
        isFetching
    );

    const handlePrevClick = () => {
        handleButtonClick((old) => Math.max(old - 1, 0));
    };

    const handleNextClick = () => {
        if (!isPreviousData && pets.length === 10) {
            handleButtonClick((old) => old + 1);
        }
    };

    return (
        <section
            ref={sectionRef}
            className=" mx-2 flex flex-col   rounded-lg  bg-light-lightNavy  p-2 dark:bg-dark-lightGrey lg:col-span-8 xl:col-span-9"
        >
            <article className=" m-2 grid basis-52 gap-4  sm:grid-cols-2 md:grid-cols-3  lg:basis-full xl:grid-cols-4">
                {!pets.length ? (
                    <div>No Pets Found😩</div>
                ) : isError ? (
                    <div>Error: {error.message}</div>
                ) : isFetching ? (
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
            </article>

            <nav className="mb-2 flex  justify-center gap-4 ">
                <button
                    // onClick={() => setPage((old) => Math.max(old - 1, 0))}
                    onClick={handlePrevClick}
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
                    // onClick={() => {
                    //     if (!isPreviousData && pets.length === 10) {
                    //         setPage((old) => old + 1);
                    //     }
                    // }}
                    onClick={handleNextClick}
                    disabled={isFetching || isPreviousData || pets.length < 10}
                    className="text-light-darkNavy disabled:cursor-not-allowed dark:text-dark-darkRed"
                >
                    Next
                </button>
            </nav>
        </section>
    );
};

export default Results;
