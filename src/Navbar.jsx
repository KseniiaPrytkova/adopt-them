import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4">
            <ul className="flex items-center justify-between">
                <li>
                    <Link
                        href="/"
                        className="label f color text-d  font-gloria text-3xl text-purple-sky"
                    >
                        🐶 Adopt Them!
                    </Link>
                </li>
                <li>
                    <a
                        href="https://www.petfinder.com/"
                        className="rounded bg-bright-sky py-2 px-8 text-white hover:opacity-50 "
                    >
                        Explore
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
