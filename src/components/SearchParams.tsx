import {
    Fragment,
    useState,
    useContext,
    useEffect,
    useRef,
    useLayoutEffect
} from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import useBreedList from '../customHooks/useBreedList';
import fetchSearch from '../apiCalls/fetchSearch';
import Header from './Header';
import HeaderSecondary from './HeaderSecondary';
import Benefits from './Benefits';
import { useAnimateOnceOnIntersection } from '../customHooks/useAnimateOnceOnIntersection';
import { AppContext } from '../AppContext';
import { Animal } from '../APIResponsesTypes';

const ANIMALS: Animal[] = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

interface AdoptedPet {
    name: string;
    images: string[];
}

const SearchParams = () => {
    const [page, setPage] = useState(0);
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '' as Animal,
        breed: ''
    });
    const { adoptedPet } = useContext(AppContext);
    const [animal, setAnimal] = useState('' as Animal);
    const [breeds] = useBreedList(animal);
    const { isLoading, isError, error, data, isFetching, isPreviousData } =
        useQuery(['search', { ...requestParams, page }], fetchSearch, {
            keepPreviousData: true
        });
    const { hasAnimated, resultsPage } = useContext(AppContext);
    const resultsRef = useRef<HTMLDivElement>(null);
    const [isRef, setIsRef] = useState(false);
    const pets = data?.pets ?? [];

    const scrollToTop = () => {
        if (resultsRef.current) {
            resultsRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };

    useEffect(() => {
        if (resultsPage !== null) {
            setPage(resultsPage);
            setIsRef(true);
        }
    }, [resultsPage]);

    // componentDidMount && componentDidUpdate
    // that it will be executed after the component's layout has been updated,
    // ensuring that resultsRef.current is available and set correctly
    useLayoutEffect(() => {
        if (isRef) {
            scrollToTop();
        }
    }, [isRef]);

    const [nodeRef, animated] = useAnimateOnceOnIntersection({
        animationName: 'fade-in-fast',
        animationDuration: 2000,
        options: { threshold: 0.1 }
    });

    return (
        <Fragment>
            <Header />
            <HeaderSecondary />

            <div
                id="searchParams"
                ref={nodeRef}
                className={`grid-rows-auto grid grid-cols-1 lg:grid-cols-12 ${
                    animated || hasAnimated['searchParams']
                        ? 'animate-fade-in-fast opacity-100'
                        : 'opacity-0'
                } transition-opacity`}
            >
                <h2 className="flex p-10 text-4xl text-light-navy dark:text-dark-purple lg:col-span-12 lg:justify-end">
                    Pets avaliable for adoption:
                </h2>
                <form
                    className="mx-2 mb-2 grid grid-cols-12 rounded-lg bg-light-lightNavy bg-opacity-80 py-4 dark:bg-dark-lightGrey md:col-span-2 lg:col-span-4 lg:mb-0 lg:flex lg:flex-col xl:col-span-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const obj = {
                            animal:
                                (formData
                                    .get('animal')
                                    ?.toString() as Animal) ?? ('' as Animal),
                            breed: formData.get('breed')?.toString() ?? '',
                            location: formData.get('location')?.toString() ?? ''
                        };
                        setRequestParams(obj);
                        setPage(0);
                    }}
                >
                    {adoptedPet || localStorage.getItem('adopted') ? (
                        <div className="col-span-10 col-start-2 my-4 flex flex-col items-center rounded-lg bg-light-teal p-4 text-light-lightNavy dark:bg-dark-green dark:text-dark-lightGrey lg:m-4">
                            <h1>
                                You adopted{' '}
                                {adoptedPet
                                    ? adoptedPet.name
                                    : (
                                          JSON.parse(
                                              localStorage.getItem(
                                                  'adopted'
                                              ) as string
                                          ) as AdoptedPet
                                      ).name}
                            </h1>
                            <img
                                src={
                                    adoptedPet
                                        ? adoptedPet.images[0]
                                        : (
                                              JSON.parse(
                                                  localStorage.getItem(
                                                      'adopted'
                                                  ) as string
                                              ) as AdoptedPet
                                          ).images[0]
                                }
                                alt={
                                    adoptedPet
                                        ? adoptedPet.name
                                        : (
                                              JSON.parse(
                                                  localStorage.getItem(
                                                      'adopted'
                                                  ) as string
                                              ) as AdoptedPet
                                          ).name
                                }
                                className="mt-2 w-1/4 rounded-full"
                            />
                        </div>
                    ) : null}

                    <label
                        htmlFor="location"
                        className="col-span-8 col-start-3 flex flex-col self-stretch sm:col-span-6 sm:col-start-4 lg:mx-8"
                    >
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Location
                        </span>
                        <input
                            id="location"
                            name="location"
                            placeholder="Location"
                            type="text"
                            className="mb-5 block border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple"
                        />
                    </label>

                    <label
                        htmlFor="animal"
                        className="col-span-8 col-start-3 flex flex-col self-stretch sm:col-span-6 sm:col-start-4 lg:mx-8"
                    >
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Animal
                        </span>
                        <select
                            id="animal"
                            name="animal"
                            className="mb-5 block border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple"
                            onChange={(e) => {
                                setAnimal(e.target.value as Animal);
                            }}
                            onBlur={(e) => {
                                setAnimal(e.target.value as Animal);
                            }}
                        >
                            <option />
                            {ANIMALS.map((animal) => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label
                        htmlFor="breed"
                        className="col-span-8 col-start-3 flex flex-col self-stretch sm:col-span-6 sm:col-start-4 lg:mx-8"
                    >
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Breed
                        </span>
                        <select
                            disabled={!breeds.length}
                            id="breed"
                            name="breed"
                            className="mb-5 block border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold disabled:opacity-50 dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple"
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>

                    <div className="col-span-10 col-start-2 flex justify-center">
                        <button
                            className={`rounded border-none bg-light-tan py-2 px-8 text-white hover:opacity-50 dark:bg-dark-green sm:px-10 md:px-12`}
                        >
                            Submit
                        </button>
                    </div>
                </form>

                <Results
                    pets={pets}
                    page={page}
                    setPage={setPage}
                    isLoading={isLoading}
                    isFetching={isFetching}
                    isPreviousData={isPreviousData}
                    isError={isError}
                    error={error as Error}
                    resultsRef={resultsRef}
                    scrollToTop={scrollToTop}
                />
            </div>

            <Benefits />
        </Fragment>
    );
};

export default SearchParams;
