import { Link } from 'react-router-dom';

const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;

    let hero = 'http://pets-images.dev-apis.com/pets/none.jpg';
    if (images.length) {
        hero = images[0];
    }

    return (
        <Link
            to={`/details/${id}`}
            className="relative  block   p-0 shadow-xl "
        >
            <img
                src={hero}
                alt={name}
                // className="  rounded-3xl  border-l border-t border-bright-sky object-cover  hover:border hover:border-juicy-sun"
                className="object-cover "
            />
            {/* </div> */}
            {/* <div className="absolute bottom-0 left-0  rounded-3xl bg-gradient-to-tr from-white to-transparent p-2"> */}
            <div className="absolute bottom-0 left-0  bg-gradient-to-tr from-white to-transparent p-2">
                <h1 className="text-light-navy dark:text-dark-purple text-lg font-semibold uppercase tracking-wide ">
                    {name}
                </h1>

                <h2 className="text-light-darkNavy dark:text-dark-darkRed text-md  block font-medium leading-tight ">{`${animal} — ${breed} — ${location}`}</h2>
            </div>
        </Link>
    );
};

export default Pet;
