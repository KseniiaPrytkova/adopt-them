import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(
        <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-light-darkNavy opacity-70 backdrop-filter backdrop-blur-sm"></div>
            {children}
        </div>,
        elRef.current
    );
};

export default Modal;
