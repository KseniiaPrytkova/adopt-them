import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex items-center justify-center sm:justify-between">
                <li>
                    <Link to="/" className=" font-gloria text-3xl ">
                        <span className="text-light-navy dark:text-dark-purple text-2xl md:text-3xl">
                            Adopt Them!
                        </span>
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <a
                        href="https://www.petfinder.com/"
                        target={'blank'}
                        className="bg-light-orange dark:bg-dark-teal text-white rounded py-2 px-8 hover:opacity-50"
                    >
                        Explore
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
