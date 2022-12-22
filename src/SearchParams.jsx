import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Results from './Results';
import useBreedList from './useBreedList';
import fetchSearch from './fetchSearch';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '',
        breed: ''
    });
    const [animal, setAnimal] = useState('');
    const [breeds] = useBreedList(animal);

    const results = useQuery(['search', requestParams], fetchSearch);
    const pets = results?.data?.pets ?? [];

    return (
        <div className="search-params">
            <form
                className="mb-10 flex flex-col items-center justify-center rounded-lg p-10 shadow-lg"
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
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        name="location"
                        placeholder="Location"
                        type="text"
                        className="mb-5 block w-80"
                    />
                </label>

                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        name="animal"
                        className="mb-5 block w-80"
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
                        className="mb-5 block w-80 disabled:opacity-50"
                    >
                        <option />
                        {breeds.map((breed) => (
                            <option key={breed} value={breed}>
                                {breed}
                            </option>
                        ))}
                    </select>
                </label>

                <button className="rounded border-none bg-orange-500 px-6 py-2 text-white hover:opacity-50">
                    Submit
                </button>
            </form>
            <Results pets={pets} />
        </div>
    );
};

export default SearchParams;