import { faDog, faCat, faKiwiBird } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuickSearch = () => {
    return (
        <section className=" text-center">
            <FontAwesomeIcon
                icon={faDog}
                className="bord m-2 cursor-pointer rounded-lg border border-purple-sky p-10 text-8xl text-bright-sky transition duration-700 ease-in-out hover:border-juicy-sun hover:text-juicy-sun hover:opacity-60"
            />

            <FontAwesomeIcon
                icon={faKiwiBird}
                className="bord m-2 cursor-pointer rounded-lg border border-purple-sky p-10 text-8xl text-bright-sky transition duration-700 ease-in-out hover:border-juicy-sun hover:text-juicy-sun hover:opacity-60"
            />

            <FontAwesomeIcon
                icon={faCat}
                className="bord m-2 cursor-pointer rounded-lg border border-purple-sky p-10 text-8xl text-bright-sky transition duration-700 ease-in-out hover:border-juicy-sun hover:text-juicy-sun hover:opacity-60"
            />
        </section>
    );
};

export default QuickSearch;
