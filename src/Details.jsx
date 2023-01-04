import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import Modal from './Modal';
import ErrorBoundary from './ErrorBoundary';
import fetchPet from './fetchPet';
import Carousel from './Carousel';

const Details = () => {
    const { id } = useParams();
    const [showModal, setShowModal] = useState(false);
    const results = useQuery(['details', id], fetchPet);

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>
        );
    }

    const pet = results.data.pets[0];

    return (
        <main className="flex-auto">
            <div className="details     mx-auto max-w-5xl bg-grey-snow sm:px-6 lg:px-8">
                <Carousel images={pet.images} />
                <div className="border border-red-400">
                    <h1>{pet.name}</h1>
                    <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                    <button onClick={() => setShowModal(true)}>
                        Adopt {pet.name}
                    </button>
                    <p>{pet.description}</p>
                    {showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}?</h1>
                                <div className="buttons">
                                    <button>Yes</button>
                                    <button onClick={() => setShowModal(false)}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null}
                </div>
            </div>
        </main>
    );
};

export default function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    );
}
