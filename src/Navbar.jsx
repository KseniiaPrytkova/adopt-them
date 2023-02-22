import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex items-center justify-center sm:justify-between">
                <li>
                    <Link to="/" className="font-gloria text-3xl">
                        <span className="text-2xl text-light-navy dark:text-dark-purple md:text-3xl">
                            Adopt Them!
                        </span>
                    </Link>
                </li>
                <li className="hidden animate-shake sm:block">
                    <a
                        href="https://www.petfinder.com/"
                        target={'blank'}
                        className="rounded bg-light-orange py-2 px-8 text-white hover:opacity-50 dark:bg-dark-teal"
                    >
                        Explore
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
