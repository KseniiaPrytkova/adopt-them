import { Fragment, useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import AdoptedPetContext from './AdoptedPetContext';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
import Header from './Header';
import HeaderSecondary from './HeaderSecondary';
import Benefits from './Benefits';
import { useIntersectionObserver } from './useIntersectionObserver';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '',
        breed: ''
    });
    const [adoptedPet] = useContext(AdoptedPetContext);
    const [animal, setAnimal] = useState('');
    const [breeds] = useBreedList(animal);
    const results = useQuery(['search', requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];
    const [ref, isIntersecting] = useIntersectionObserver({ threshold: 0.5 });

    return (
        <Fragment>
            <Header />
            <HeaderSecondary />

            <div className="grid-rows-auto grid grid-cols-1 lg:grid-cols-12">
                <h2 className="flex p-10 text-4xl text-light-navy dark:text-dark-purple lg:col-span-12 lg:justify-end">
                    Pets avaliable for adoption:
                </h2>
                <form
                    className="mx-2 mb-2 grid content-start justify-items-center rounded-lg bg-light-lightNavy bg-opacity-80 py-4 dark:bg-dark-lightGrey md:col-span-2 lg:col-span-4 lg:mb-0 xl:col-span-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const obj = {
                            animal: formData.get('animal') ?? '',
                            breed: formData.get('breed') ?? '',
                            location: formData.get('location') ?? ''
                        };
                        setRequestParams(obj);
                    }}
                >
                    {adoptedPet || localStorage.getItem('adopted') ? (
                        <div className="m-4 flex flex-col items-center rounded-lg bg-light-teal p-4 text-light-lightNavy dark:bg-dark-green dark:text-dark-lightGrey">
                            <h1>
                                You adopted{' '}
                                {adoptedPet
                                    ? adoptedPet.name
                                    : JSON.parse(
                                          localStorage.getItem('adopted')
                                      ).name}
                            </h1>
                            <img
                                src={
                                    adoptedPet
                                        ? adoptedPet.images[0]
                                        : JSON.parse(
                                              localStorage.getItem('adopted')
                                          ).images[0]
                                }
                                alt={
                                    adoptedPet
                                        ? adoptedPet.name
                                        : JSON.parse(
                                              localStorage.getItem('adopted')
                                          ).name
                                }
                                className="mt-2 w-1/4 rounded-full"
                            />
                        </div>
                    ) : null}

                    <label htmlFor="location">
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Location
                        </span>
                        <input
                            id="location"
                            name="location"
                            placeholder="Location"
                            type="text"
                            className="mb-5 block w-80 border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple sm:w-96 lg:w-72 2xl:w-64"
                        />
                    </label>

                    <label htmlFor="animal">
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Animal
                        </span>
                        <select
                            id="animal"
                            name="animal"
                            className="mb-5 block w-80 border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple sm:w-96 lg:w-72 2xl:w-64"
                            onChange={(e) => {
                                setAnimal(e.target.value);
                            }}
                            onBlur={(e) => {
                                setAnimal(e.target.value);
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

                    <label htmlFor="breed">
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Breed
                        </span>
                        <select
                            disabled={!breeds.length}
                            id="breed"
                            name="breed"
                            className="mb-5 block w-80 border-light-darkNavy text-light-darkNavy placeholder:text-light-lightNavy focus:border-light-gold focus:ring-light-gold disabled:opacity-50 dark:border-dark-darkRed dark:text-dark-darkRed dark:focus:border-dark-lightPurple dark:focus:ring-dark-lightPurple sm:w-96 lg:w-72 2xl:w-64"
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>

                    <button
                        ref={ref}
                        className={`w-36 rounded border-none bg-light-tan px-6 py-2 text-white hover:opacity-50 dark:bg-dark-green ${
                            isIntersecting ? 'animate-zoom-in-out' : ''
                        }`}
                    >
                        Submit
                    </button>
                </form>

                <Results pets={pets} />
            </div>
            <Benefits />
        </Fragment>
    );
};

export default SearchParams;
