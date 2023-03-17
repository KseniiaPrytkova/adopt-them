import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;
    const [isImageLoaded, setImageLoaded] = useState(false);

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';

    if (images.length) {
        hero = images[0];
    }

    const handleImageLoad = (e) => {
        setImageLoaded(true);
        e.target.style.opacity = '1';
    };

    return (
        <Link
            to={`/details/${id}`}
            className={`relative block min-h-[12.5rem] p-0 shadow-xl transition-opacity duration-500 ease-in-out ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
            <div className="relative overflow-hidden">
                <img
                    src={hero}
                    alt={name}
                    className="h-auto w-full scale-110 transform object-cover object-center opacity-0 "
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
