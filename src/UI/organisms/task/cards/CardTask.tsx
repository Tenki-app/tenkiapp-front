import { AnimatePresence, motion } from 'framer-motion';
import { createPortal } from 'react-dom';
import { MouseEvent, useState } from 'react';

import { usePutSingleTask } from '@/lib/hooks/queries/useQueryTask';

import { Text } from '@/UI/atoms/text/Text';
import { Button } from '@/UI/atoms/button/Button';
import { UpdateStatusTask } from '@/UI/molecules/task/UpdateStatusTask';
import { ModalCustomPositionTemplate } from '@/UI/molecules/modal/ModalCustomPositionTemplate';
import { ModalEditTask } from '../modal/ModalEditTask';

import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';
import ArrowIcon from '@/svg/task/downArrowIcon.svg';
import DeleteIcon from '@/svg/task/deleteIcon.svg';
import EditIcon from '@/svg/task/editIcon.svg';

import type {
    TypeAddTaskForm,
    TypeTask,
    TypeTaskState,
} from '@/lib/types/tasks';
import { SubmitHandler } from 'react-hook-form';

type TypeCardTaskProps = {
    taskData: TypeTask;
    cardTaskStyles?: string;
    isOpen?: boolean;
    isUpdateStatusActive?: boolean;
};

const CardTask = ({
    taskData,
    cardTaskStyles,
    isOpen = false,
    isUpdateStatusActive = true,
}: TypeCardTaskProps) => {
    const { putSingleTask, isLoadingPutTask } = usePutSingleTask();

    const [isActive, setIsActive] = useState(isOpen);
    const [showEditTaskModal, setShowEditTaskModal] = useState(false);
    const [showStatusModal, setShowStatusModal] = useState(false);

    const {
        id: taskId,
        title,
        date_task: date,
        time,
        description,
        state,
        category,
    } = taskData || {};
    const bottomIconsStyles = 'w-[18px] h-[18px] text-dark-blue cursor-pointer';

    const renderStatus = () => {
        const iconStyles = 'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px]';
        if (state === 'done') {
            return <DoneIcon className={`${iconStyles}`} />;
        }
        if (state === 'pending') {
            return <PendingIcon className={`${iconStyles}`} />;
        }
        if (state === 'progress') {
            return <InProgressIcon className={`${iconStyles}`} />;
        }
    };

    const handleShowDetails = () => {
        if (!isActive) {
            setIsActive(true);
        }
    };

    const handleHideDetails = () => {
        if (isActive) {
            setIsActive(false);
        }
    };

    const onClickStatusButton = () => {
        if (!isUpdateStatusActive) {
            return;
        }

        setShowStatusModal(true);
    };

    const handleUpdateStatus = (stateToUpdate: TypeTaskState) => {
        const taskToUpdate = {
            state: stateToUpdate,
            taskId,
        };

        putSingleTask(taskToUpdate);
    };

    const handleSubmitEditTask: SubmitHandler<TypeAddTaskForm> = async (
        formData
    ) => {
        const editTaskToSend = {
            ...formData,
            taskId: taskData.id,
        };

        putSingleTask(editTaskToSend).finally(() => {
            setShowEditTaskModal(false);
        });
    };

    const onClickEdit = (e: MouseEvent<SVGSVGElement>) => {
        e.stopPropagation();
        setShowEditTaskModal(true);
    };

    const variantsArrow = {
        open: { rotate: '180deg' },
        close: { rotate: '0' },
    };

    return (
        <>
            {createPortal(
                <ModalCustomPositionTemplate
                    showModal={showStatusModal}
                    setShowModal={setShowStatusModal}
                />,
                document.body
            )}
            {createPortal(
                <ModalEditTask
                    showModal={showEditTaskModal}
                    setShowModal={setShowEditTaskModal}
                    formInitialValues={taskData}
                    onSubmit={handleSubmitEditTask}
                    isLoadingSubmit={isLoadingPutTask}
                />,
                document.body
            )}
            <motion.div
                className={`shadow-lg bg-champagne-white relative px-4 py-5 rounded-md  ${
                    cardTaskStyles ?? ''
                } ${!isActive && 'cursor-pointer'}`}
                onClick={() => {
                    handleShowDetails();
                }}
            >
                <div className='flex justify-between'>
                    <div className='flex items-start gap-4 md:gap-6'>
                        <div className='relative w-fit h-fit'>
                            <Button
                                variant='custom'
                                onClick={onClickStatusButton}
                                className={`z-20 ${
                                    !isUpdateStatusActive
                                        ? 'cursor-default'
                                        : ''
                                }`}
                            >
                                {renderStatus()}
                            </Button>
                            {showStatusModal && (
                                <UpdateStatusTask
                                    handleUpdateStatus={() => {}}
                                />
                            )}
                        </div>
                        <div>
                            <Text className='font-bold !text-lg italic'>
                                {title}
                            </Text>
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            height: 'fit-content',
                                        }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        <Text className='!text-xs font-light'>{`${date} | ${time}`}</Text>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                <Text
                    className={`uppercase absolute !font-bold !text-xs top-2 ${
                        category === 'next' ? 'right-4' : 'right-3'
                    }`}
                >
                    {category}
                </Text>
                <motion.div
                    animate={isActive ? 'open' : 'close'}
                    variants={variantsArrow}
                    onClick={handleHideDetails}
                    transition={{ duration: 0.4 }}
                    className={`cursor-pointer right-5 h-fit absolute ${
                        isActive ? ' bottom-[20px]' : 'bottom-[25%] my-auto'
                    }`}
                >
                    <ArrowIcon className='text-dark-blue w-[24px] h-[12px]' />
                </motion.div>
                <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'fit-content' }}
                            exit={{ opacity: 0, height: 0 }}
                            className='px-1'
                        >
                            <Text className='pt-4 pb-8'>{description}</Text>
                            <div className='flex justify-start gap-5 pt-[14px] items-center border-t '>
                                <EditIcon
                                    className={bottomIconsStyles}
                                    onClick={onClickEdit}
                                />
                                <DeleteIcon className={bottomIconsStyles} />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
};

export { CardTask };
