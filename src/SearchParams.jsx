import { Fragment, useState, useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import AdoptedPetContext from './AdoptedPetContext';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
import Header from './Header';
import HeaderSecondary from './HeaderSecondary';
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
                <form
                    className="mt-2 mb-2 grid content-start justify-items-center rounded-lg bg-grey-snow bg-opacity-80 py-4 md:col-span-2 lg:col-span-4  xl:col-span-3 2xl:col-span-3 "
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
                        <div className=" m-4 flex flex-col items-center rounded-lg bg-bright-sky p-4">
                            <h1>You adopted {adoptedPet.name}</h1>
                            <img
                                src={adoptedPet.images[0]}
                                alt={adoptedPet.name}
                                className="w-1/4 rounded-full"
                            />
                        </div>
                    ) : null}

                    <label htmlFor="location">
                        Location
                        <input
                            id="location"
                            name="location"
                            placeholder="Location"
                            type="text"
                            className="mb-5 block w-80 sm:w-96 lg:w-72 2xl:w-80"
                        />
                    </label>

                    <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            name="animal"
                            className="mb-5 block w-80 sm:w-96 lg:w-72 2xl:w-80"
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
                        Breed
                        <select
                            disabled={!breeds.length}
                            id="breed"
                            name="breed"
                            className="mb-5 block w-80 disabled:opacity-50 sm:w-96 lg:w-72 2xl:w-80"
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>

                    <button className="w-36 rounded border-none bg-juicy-sun px-6 py-2 text-white hover:opacity-50 ">
                        Submit
                    </button>
                </form>

                <Results pets={pets} />
            </div>
        </Fragment>
    );
};

export default SearchParams;
