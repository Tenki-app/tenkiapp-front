import { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useCloseWhenClickOutside } from '@/lib/hooks/useCloseWhenClickOutside';

import type { Dispatch, ReactNode, SetStateAction } from 'react';

type TypeModalCustomPositionTemplateProps = {
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    content: ReactNode;
};

const ModalCustomPositionTemplate = ({
    showModal,
    content,
    setShowModal,
}: TypeModalCustomPositionTemplateProps) => {
    const modalRef = useRef(null);

    useCloseWhenClickOutside({
        showElement: showModal,
        setShowElement: setShowModal,
        elementRef: modalRef,
    });

    return (
        <AnimatePresence>
            {showModal && (
                <div className='w-screen h-screen fixed z-[30] left-0 top-0'>
                    <motion.div
                        className='bg-black w-full h-full main-transition'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                    />
                    <div
                        className={`absolute left-0 right-0 main-transition rounded-md top-0 max-w-[340px] xs:max-w-[375px] max-h-[400px] bottom-0 m-auto z-[90] bg-champagne-white py-4 px-2}`}
                        ref={modalRef}
                    >
                        <div className={``}>{content}</div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export { ModalCustomPositionTemplate };
