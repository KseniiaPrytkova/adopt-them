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
        <section className="mx-2 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg bg-light-lightNavy p-4 dark:bg-dark-lightGrey  sm:grid-cols-2 lg:col-span-8 lg:grid-cols-3 lg:grid-rows-2 xl:col-span-9 xl:col-start-4 xl:grid-cols-4">
            {!pets.length ? (
                <div className="flex items-center justify-center p-10">
                    <h1>No Pets Found</h1>
                </div>
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

            {pets.length ? (
                <div className="flex items-center justify-center gap-4 sm:col-span-2 lg:col-span-3 lg:row-start-4 xl:col-span-4">
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
                        className="text-light-darkNavy disabled:cursor-not-allowed dark:text-dark-darkRed"
                    >
                        Prev
                    </button>
                    <span className="flex h-10 w-10 items-center justify-center text-light-darkNavy dark:text-dark-darkRed">
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
                        className="text-light-darkNavy disabled:cursor-not-allowed dark:text-dark-darkRed"
                    >
                        Next
                    </button>
                </div>
            ) : null}
        </section>
    );
};

export default Results;
