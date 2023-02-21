import { useState, useEffect } from 'react';
import Pet from './Pet';

const Results = ({ pets }) => {
    const ITEMS_PER_PAGE = 8;
    const MAX_ITEMS = pets.length;

    const [pageConfig, setPageConfig] = useState({
        page: 1,
        from: 0,
        to: ITEMS_PER_PAGE
    });

    useEffect(() => {
        setPageConfig({
            page: 1,
            from: 0,
            to: ITEMS_PER_PAGE
        });
    }, [pets]);

    return (
        <section className=" bg-light-lightNavy dark:bg-dark-lightGrey mx-2 p-4 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg  sm:grid-cols-2 lg:grid-rows-2 lg:col-span-8 lg:grid-cols-3 xl:col-span-9 xl:col-start-4 xl:grid-cols-4">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.slice(pageConfig.from, pageConfig.to).map((pet) => {
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

            <div className=" flex justify-center  items-center gap-4 lg:row-start-4 sm:col-span-2  lg:col-span-3 xl:col-span-4">
                <button
                    disabled={pageConfig.from === 0}
                    onClick={() => {
                        setPageConfig({
                            ...pageConfig,
                            page: pageConfig.page - 1,
                            from: pageConfig.from - ITEMS_PER_PAGE,
                            to: pageConfig.to - ITEMS_PER_PAGE
                        });
                    }}
                    className="disabled:cursor-not-allowed text-light-darkNavy dark:text-dark-darkRed"
                >
                    Prev
                </button>
                <span className="w-10 h-10 flex justify-center items-center text-light-darkNavy dark:text-dark-darkRed">
                    {pageConfig.page}
                </span>
                <button
                    disabled={pageConfig.to >= MAX_ITEMS}
                    onClick={() => {
                        setPageConfig({
                            ...pageConfig,
                            page: pageConfig.page + 1,
                            from: pageConfig.from + ITEMS_PER_PAGE,
                            to: pageConfig.to + ITEMS_PER_PAGE
                        });
                    }}
                    className="disabled:cursor-not-allowed text-light-darkNavy dark:text-dark-darkRed"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Results;
