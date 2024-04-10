import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Text } from '@/UI/atoms/text/Text';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';

import type { ReactNode } from 'react';

type TypeAccordionElementProps = {
    title: ReactNode;
    content: ReactNode;
    accordionStyles?: string;
};

const AccordionElement = ({
    title,
    content,
    accordionStyles,
}: TypeAccordionElementProps) => {
    const [isOpen, setIsOpen] = useState(true);

    const variantsArrow = {
        close: { rotate: '180deg' },
        open: { rotate: '0' },
    };

    const handleHideDetails = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const handleShowDetails = () => {
        if (!isOpen) {
            setIsOpen(true);
        }
    };

    return (
        <motion.div
            className={`relative px-4 py-5 rounded-md ${
                accordionStyles ?? ''
            } ${!isOpen && 'cursor-pointer'}`}
            onClick={(e) => {
                handleShowDetails();
            }}
        >
            <div className='flex justify-between border-b border-b-champagne-white mb-6'>
                <Text className='!text-champagne-white font-bold !text-lg'>
                    {title}
                </Text>
                <motion.div
                    animate={isOpen ? 'open' : 'close'}
                    variants={variantsArrow}
                    onClick={handleHideDetails}
                    transition={{ duration: 0.4 }}
                    className={`cursor-pointer h-fit`}
                >
                    <ArrowIcon className='text-champagne-white w-[24px] h-[12px]' />
                </motion.div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'fit-content' }}
                        exit={{ opacity: 0, height: 0 }}
                        className='px-1'
                    >
                        <div>{content}</div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export { AccordionElement };
