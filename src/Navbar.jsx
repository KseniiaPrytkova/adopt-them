import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="grid grid-cols-12">
            <div className="col-span-12 col-start-1 p-4  2xl:col-span-10 2xl:col-start-2">
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
            </div>
        </nav>
    );
};

export default Navbar;
