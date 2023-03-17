import { Link } from 'react-router-dom';
import { useState } from 'react';

const Pet = (props) => {
    const { name, animal, breed, images, location, id, delay } = props;
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
            className={`relative block min-h-[12.5rem] p-0 shadow-xl  ${
                isImageLoaded ? '' : 'opacity-0'
            }`}
            style={{
                animationDelay: `${delay}ms`,
                animation: isImageLoaded ? '2s appear ease-out' : 'none'
            }}
        >
            <div className="relative overflow-hidden">
                <img
                    src={hero}
                    alt={name}
                    className="h-auto w-full scale-110 transform object-cover object-center  "
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
