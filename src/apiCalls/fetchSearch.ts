import { QueryFunction } from '@tanstack/react-query';
import { PetAPIResponse } from '../APIResponsesTypes';

const fetchSearch: QueryFunction<
    PetAPIResponse,
    [
        'search',
        {
            location: string;
            animal: string;
            breed: string;
            page: number;
        }
    ]
> = async ({ queryKey }) => {
    const { animal, location, breed, page } = queryKey[1];

    const res = await fetch(
        `https://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}&page=${page}`
    );

    if (!res.ok)
        throw new Error(
            `pet search not okay: ${animal}, ${location}, ${breed}, ${page}`
        );

    return res.json();
};

export default fetchSearch;
