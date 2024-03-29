import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { useCloseWhenClickOutside } from '@/lib/hooks/useCloseWhenClickOutside';

import { Text } from '@/UI/atoms/text/Text';
import CloseIcon from '@/svg/task/closeIcon.svg';

import type { ReactNode, Dispatch, SetStateAction } from 'react';

type TypeModalTitleTemplateProps = {
    title: string;
    showModal: boolean;
    setShowModal: (value: boolean) => void;
    content: ReactNode;
    contentStyles?: string;
    modalContainerStyles?: string;
};

const ModalTitleTemplate = ({
    title,
    showModal,
    setShowModal,
    content,
    contentStyles,
    modalContainerStyles,
}: TypeModalTitleTemplateProps) => {
    const modalRef = useRef(null);

    useCloseWhenClickOutside({
        showElement: showModal,
        setShowElement: setShowModal,
        elementRef: modalRef,
    });

    const handleCloseModal = (event: MouseEvent) => {
        event.stopPropagation();
        setShowModal(false);
    };

    return (
        <AnimatePresence>
            {showModal && (
                <div className='w-screen h-screen fixed left-0 top-0 z-[30] '>
                    <motion.div
                        className='bg-black w-full h-full main-transition'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.6 }}
                    />
                    <div
                        className={`absolute left-0 right-0 main-transition rounded-md top-0 max-w-[340px] xs:max-w-[375px] max-h-[400px] bottom-0 m-auto z-[90] bg-champagne-white py-4 px-2 ${
                            modalContainerStyles ?? ''
                        }`}
                        ref={modalRef}
                    >
                        <div className='w-full h-full overflow-y-auto px-2'>
                            <div className='flex justify-end'>
                                <CloseIcon
                                    className='cursor-pointer'
                                    onClick={handleCloseModal}
                                />
                            </div>
                            <Text className='text-center font-bold text-lg w-full border-b-[1px] pb-[2px] mb-4 border-dark-blue'>
                                {title}
                            </Text>
                            <div className={`${contentStyles}`}>{content}</div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
};

export { ModalTitleTemplate };
