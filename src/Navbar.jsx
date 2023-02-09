import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-grey-snow p-4 ">
            <ul className="flex items-center justify-center sm:justify-between">
                <li>
                    <Link
                        to="/"
                        className="label f color text-d  font-gloria text-3xl text-purple-sky"
                    >
                        {/* <img
                            src="2.png"
                            alt="icon"
                            className="inline h-10 w-10 md:h-16 md:w-16"
                        />{' '} */}
                        <span className="inline  text-5xl">🦭</span>
                        <span className="text-2xl md:text-3xl">
                            Adopt Them!
                        </span>
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <a
                        href="https://www.petfinder.com/"
                        target={'blank'}
                        className="rounded bg-bright-sky py-2 px-8 text-white hover:opacity-50"
                    >
                        Explore
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
