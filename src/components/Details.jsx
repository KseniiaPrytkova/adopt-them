import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ErrorBoundary from '../ErrorBoundary';
import fetchPet from '../fetchPet';
import Carousel from './Carousel';
import { AppContext } from '../AppContext';

const Details = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const results = useQuery(['details', id], fetchPet);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const { _, setAdoptedPet } = useContext(AppContext);

    // wrapperRef is a reference to the DOM node and can be used later in
    // the component if needed
    // eslint-disable-next-line no-unused-vars
    const [wrapperRef, setWrapperRef] = useState(null);

    // A callback ref is a function that you pass to the ref attribute of a
    // component. React will automatically call this function when
    // the component mounts, passing the DOM node as an argument, and again
    // when the component unmounts, passing null as the argument.
    // The primary purpose of a callback ref is to allow you to execute some
    // code as soon as the ref is set.
    const handleRef = useCallback((node) => {
        if (node !== null) {
            setWrapperRef(node);
            node.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (results.isLoading) {
        return (
            <div className="flex h-full items-center  justify-center ">
                <span className="inline animate-spin text-5xl">🌀</span>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <section
            ref={handleRef}
            className="my-10 grid   min-h-[50vh] grid-cols-12 grid-rows-detailsLayout "
        >
            <Link
                to="/"
                className="col-span-12 col-start-2 row-span-1 row-start-1 mb-10 text-xl text-light-darkNavy dark:text-dark-darkRed lg:col-start-3"
            >
                <button>
                    <svg
                        className="mr-2 inline-block h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                    Back
                </button>
            </Link>

            <article className="col-span-12 col-start-1 row-span-1 row-start-2 rounded-lg  bg-light-lightNavy p-4 dark:bg-dark-lightGrey sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3">
                <Carousel images={pet.images} />

                <div className="text-center">
                    <h1 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-light-navy dark:text-dark-lightPurple">
                        {pet.name}
                    </h1>
                    <h2 className="text-light-darkNavy dark:text-dark-darkRed">{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                    <button
                        // ref={ref}
                        onClick={() => setShowModal(true)}
                        // className={`m-2 rounded bg-light-teal py-2 px-4 text-white hover:opacity-50 dark:bg-dark-green ${
                        //     isIntersecting ? 'animate-zoom-in-out' : ''
                        // }`}
                        className={`m-2 rounded bg-light-teal py-2 px-4 text-white hover:opacity-50 dark:bg-dark-green`}
                    >
                        Adopt {pet.name}
                    </button>
                    <div className="m-2 flex flex-col items-center rounded-lg text-light-darkNavy dark:text-dark-darkRed lg:flex-row">
                        <p className="text-left">{pet.description}</p>
                    </div>

                    {showModal ? (
                        <Modal>
                            <div className="z-20 col-span-10 col-start-2 flex flex-col rounded-xl bg-light-lightNavy text-center dark:bg-dark-lightGrey">
                                <h1 className="px-8 py-4 text-xl bg-blend-darken md:px-11 md:py-6">
                                    Would you like to adopt&nbsp;
                                    <span className="font-semibold uppercase tracking-wide text-light-orange dark:text-dark-teal">
                                        {pet.name}?
                                    </span>
                                </h1>
                                <div className="py-8 text-center">
                                    <button
                                        // ref={ref}
                                        onClick={() => {
                                            setAdoptedPet(pet);
                                            localStorage.setItem(
                                                'adopted',
                                                JSON.stringify(pet)
                                            );
                                            navigate('/');
                                        }}
                                        // className={`mr-4 w-20 rounded bg-light-tan py-2 px-6 text-white hover:opacity-50 dark:bg-dark-purple ${
                                        //     isIntersecting
                                        //         ? 'animate-shake-immediately'
                                        //         : ''
                                        // }`}
                                        className={`mr-4 w-20 rounded bg-light-tan py-2 px-6 text-white hover:opacity-50 dark:bg-dark-purple `}
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="w-20 rounded bg-light-darkNavy py-2 px-6 text-white hover:opacity-50 dark:bg-dark-paleTeal"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </article>
        </section>
    );
};

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
