import { Link } from 'react-router-dom';
import { FingerPrintIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className="mt-2 grid grid-cols-12">
            <div className="col-span-12 col-start-1 bg-dark-sky text-center text-white  2xl:col-span-10 2xl:col-start-2  2xl:ml-2 2xl:mr-2 2xl:rounded-lg">
                <p className="my-3">Legal disclaimer, copyright, etc.</p>
                <ul>
                    <li className="peer-only-2 inline-block px-3">
                        <a href="/">
                            <FingerPrintIcon className="h-8 w-8 text-juicy-sun" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
