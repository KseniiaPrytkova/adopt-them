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
        // <section className="m-2 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg bg-grey-snow px-4 py-4 sm:grid-cols-2 md:grid-cols-2 lg:col-span-8 lg:grid-cols-3 xl:col-span-9 2xl:col-span-7 2xl:col-start-5 2xl:grid-cols-4">

        <section className="mx-2 p-4 grid grid-cols-1 justify-items-stretch gap-4 rounded-lg bg-grey-snow sm:grid-cols-2 lg:grid-rows-2 lg:col-span-8 lg:grid-cols-3 xl:col-span-9 xl:col-start-4 xl:grid-cols-4">
            {!pets.length ? (
                <h1>No Pets Found</h1>
            ) : (
                pets.slice(pageConfig.from, pageConfig.to).map((pet) => {
                    // pets.map((pet) => {
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
            {/* lg:row-span-1 lg:row-start-3 */}
            <div className="flex justify-center border items-center gap-4 lg:row-start-4 sm:col-span-2  lg:col-span-3 xl:col-span-4">
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
                    className="disabled:cursor-not-allowed"
                >
                    Prev
                </button>
                <span className="w-10 h-10 flex justify-center items-center">
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
                    className="disabled:cursor-not-allowed"
                >
                    Next
                </button>
            </div>
        </section>
    );
};

export default Results;
