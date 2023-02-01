import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
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
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <div className="mt-5 mb-5 grid grid-cols-12">
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

                        {/* <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172138.65427113703!2d-122.48214653604316!3d47.61317464012908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2suk!4v1673007828121!5m2!1sen!2suk"
                            title="petLocation"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowfullscreen=""
                            className="h-50 m-2 w-full rounded-lg border-x border-bright-sky p-2 lg:h-auto lg:w-full"
                        ></iframe> */}
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
