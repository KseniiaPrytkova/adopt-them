import { Fragment, useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import AdoptedPetContext from './AdoptedPetContext';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
import Header from './Header';
import HeaderSecondary from './HeaderSecondary';
import Benefits from './Benefits';
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

    return (
        <Fragment>
            <Header />
            <HeaderSecondary />

            <div className=" grid-rows-auto   grid grid-cols-1 lg:grid-cols-12 ">
                <h2 className="text-light-navy dark:text-dark-purple text-4xl p-10 flex  lg:col-span-12  lg:justify-end">
                    Pets avaliable for adoption:
                </h2>
                <form
                    className="bg-light-lightNavy dark:bg-dark-lightGrey py-4 mb-2 mx-2 grid content-start justify-items-center rounded-lg  bg-opacity-80 md:col-span-2 lg:col-span-4 lg:mb-0 xl:col-span-3  "
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
                    {adoptedPet ? (
                        <div className=" m-4 flex flex-col items-center rounded-lg  p-4">
                            <h1>You adopted {adoptedPet.name}</h1>
                            <img
                                src={adoptedPet.images[0]}
                                alt={adoptedPet.name}
                                className="w-1/4 rounded-full"
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
                            className=" mb-5 block w-80 sm:w-96 lg:w-72 2xl:w-64"
                        />
                    </label>

                    <label htmlFor="animal">
                        <span className="text-light-darkNavy dark:text-dark-purple">
                            Animal
                        </span>
                        <select
                            id="animal"
                            name="animal"
                            className="mb-5 block w-80 sm:w-96 lg:w-72 2xl:w-64"
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
                            className="mb-5 block w-80 disabled:opacity-50 sm:w-96 lg:w-72 2xl:w-64"
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>

                    <button className="bg-light-tan dark:bg-dark-green text-white w-36 rounded border-none  px-6 py-2  hover:opacity-50 ">
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
