import { Link } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { Animal } from '../APIResponsesTypes';

export interface IProps {
    name: string;
    animal: Animal;
    breed: string;
    images: string[];
    location: string;
    id: number;
    delay: number;
    currentPage: number;
}

const Pet = (props: IProps) => {
    const { name, animal, breed, images, location, id, delay, currentPage } =
        props;
    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
    const [isImageLoaded, setImageLoaded] = useState(false);

    if (images && images.length) {
        hero = images[0];
    }

    const handleImageLoad = (e: MouseEvent<HTMLImageElement>) => {
        setTimeout(() => {
            setImageLoaded(true);
            (e.target as HTMLImageElement).style.opacity = '1';
        }, delay);
    };

    return (
        <Link
            to={`/details/${id}`}
            state={currentPage}
            className={`relative block min-h-[12.5rem] p-0 shadow-xl ${
                isImageLoaded ? '' : 'opacity-0'
            }`}
            style={{
                animationDelay: `${delay}ms`,
                animation: isImageLoaded ? '2s appear ease-out' : 'none'
            }}
        >
            <div className="relative overflow-hidden">
                <img
                    data-testid={`thumbnail-${id}`}
                    src={hero}
                    alt={name}
                    className="h-auto w-full scale-110 transform object-cover object-center"
                    onLoad={handleImageLoad}
                />
            </div>

            <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent p-2">
                <h1 className="text-lg font-bold uppercase tracking-wide text-light-blue dark:text-dark-purple">
                    {name}
                </h1>

                <h2 className="text-md block font-medium leading-tight text-light-darkNavy dark:text-dark-darkRed">{`${animal} — ${breed} — ${location}`}</h2>
            </div>
        </Link>
    );
};

export default Pet;
