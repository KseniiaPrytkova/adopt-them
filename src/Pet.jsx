import { Link } from 'react-router-dom';

const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link to={`/details/${id}`} className="relative block p-0 shadow-xl">
            <img src={hero} alt={name} className="object-cover " />

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
