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
        <div className="mt-5 mb-5 grid grid-cols-12">
            <Link to="/" className="text-xl col-span-12 col-start-3 mb-5">
                <button>Back</button>
            </Link>

            <div className="col-span-12 col-start-1 rounded-lg bg-grey-snow p-4 sm:col-span-10 sm:col-start-2 lg:col-span-8 lg:col-start-3">
                <Carousel images={pet.images} />

                <div className=" text-center">
                    <h1 className=" mt-2 text-3xl font-semibold uppercase tracking-wide text-bright-sky">
                        {pet.name}
                    </h1>
                    <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                    <button
                        onClick={() => setShowModal(true)}
                        className="m-2 rounded bg-juicy-sun py-2 px-4 text-white hover:opacity-50"
                    >
                        Adopt {pet.name}
                    </button>
                    <div className="m-2 flex flex-col items-center rounded-lg lg:flex-row">
                        <p className="text-left">{pet.description}</p>
                    </div>

                    {showModal ? (
                        <Modal>
                            <div className=" flex flex-col  rounded-lg  bg-grey-snow ">
                                <h1 className=" rounded-lg bg-neutral-200 p-4 text-xl  bg-blend-darken">
                                    Would you like to adopt&nbsp;
                                    <span className="font-semibold uppercase tracking-wide text-bright-sky">
                                        {pet.name}?
                                    </span>
                                </h1>
                                <div className="  m-4 rounded-b-lg text-center">
                                    <button
                                        onClick={() => {
                                            setAdoptedPet(pet);
                                            navigate('/');
                                        }}
                                        className="mr-4 rounded bg-juicy-sun py-2 px-6 text-white hover:opacity-50"
                                    >
                                        Yes
                                    </button>
                                    <button
                                        onClick={() => setShowModal(false)}
                                        className=" rounded bg-purple-sky py-2 px-6 text-white hover:opacity-50"
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
