import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import ErrorBoundary from './ErrorBoundary';
import fetchPet from './fetchPet';
import Carousel from './Carousel';
import AdoptedPetContext from './AdoptedPetContext';

const Details = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const results = useQuery(['details', id], fetchPet);
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptedPetContext);

    if (results.isLoading) {
        return (
            <div className="flex h-full  items-center  justify-center">
                <span className="inline animate-spin text-5xl">🌀</span>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <div className="my-10 grid grid-cols-12">
            <Link
                to="/"
                className="text-xl col-span-12 col-start-3 mb-10 text-light-darkNavy dark:text-dark-darkRed"
            >
                <button>
                    <svg
                        className="inline-block w-4 h-4 mr-2"
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

            <div className="bg-light-lightNavy dark:bg-dark-lightGrey col-span-12 col-start-1 rounded-lg p-4 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3">
                <Carousel images={pet.images} />

                <div className="text-center">
                    <h1 className="mt-2 text-3xl font-semibold uppercase tracking-wide text-light-navy dark:text-dark-lightPurple">
                        {pet.name}
                    </h1>
                    <h2 className="text-light-darkNavy dark:text-dark-darkRed">{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="m-2 rounded py-2 px-4 text-white hover:opacity-50 bg-light-teal dark:bg-dark-green"
                    >
                        Adopt {pet.name}
                    </button>
                    <div className="m-2 flex flex-col items-center rounded-lg lg:flex-row text-light-darkNavy dark:text-dark-darkRed">
                        <p className="text-left">{pet.description}</p>
                    </div>

                    {showModal ? (
                        <Modal>
                            <div className="flex flex-col z-20 bg-light-lightNavy dark:bg-dark-lightGrey rounded-xl">
                                <h1 className="    text-xl  bg-blend-darken px-8 py-4 md:px-11 md:py-6">
                                    Would you like to adopt&nbsp;
                                    <span className="font-semibold uppercase tracking-wide text-light-orange dark:text-dark-teal">
                                        {pet.name}?
                                    </span>
                                </h1>
                                <div className="text-center py-8">
                                    <button
                                        onClick={() => {
                                            setAdoptedPet(pet);
                                            navigate('/');
                                        }}
                                        className="mr-4 rounded py-2 px-6 text-white hover:opacity-50 bg-light-tan dark:bg-dark-purple w-20"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className="rounded py-2 px-6 text-white hover:opacity-50 bg-light-darkNavy dark:bg-dark-paleTeal w-20"
                                    >
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
