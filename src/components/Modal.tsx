import { useEffect, useRef, MutableRefObject, ReactElement } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }: { children: ReactElement }) => {
    const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    useEffect(() => {
        const modalRoot = document.getElementById('modal');

        if (!modalRoot || !elRef.current) return;

        modalRoot.appendChild(elRef.current);
        return () => {
            if (elRef.current) {
                modalRoot.removeChild(elRef.current);
            }
        };
    }, []);

    return createPortal(
        <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-light-darkNavy opacity-70 backdrop-blur-sm backdrop-filter"></div>
            <div className="grid grid-cols-12">{children}</div>
        </div>,
        elRef.current
    );
};

export default Modal;
