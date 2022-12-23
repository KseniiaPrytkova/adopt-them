import { Link } from 'react-router-dom';
import { FingerPrintIcon } from '@heroicons/react/24/solid';

const Footer = () => {
    return (
        <footer className=" bg-dark-sky   text-center text-white">
            <p className="my-3">Legal disclaimer, copyright, etc.</p>
            <ul>
                <li className="peer-only-2 inline-block px-3">
                    <a href="/">
                        <FingerPrintIcon className="h-8 w-8 text-juicy-sun" />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
