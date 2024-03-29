import { useState } from 'react';
import { createPortal } from 'react-dom';

import { UpdateStatusTask } from '@/UI/molecules/task/UpdateStatusTask';
import { Button } from '@/UI/atoms/button/Button';
import { ModalCustomPositionTemplate } from '../../modal/ModalCustomPositionTemplate';

import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

import type { TypeTaskState } from '@/lib/types/tasks';

type TypeButtonStateTaskProps = {
    taskState: TypeTaskState;
    isUpdateStatusActive?: boolean;
    handleUpdateStatus: (stateToUpdate: TypeTaskState) => void;
};

const ButtonStateTask = ({
    taskState,
    isUpdateStatusActive,
    handleUpdateStatus,
}: TypeButtonStateTaskProps) => {
    const [showStatusModal, setShowStatusModal] = useState(false);

    const onClickStatusButton = () => {
        if (!isUpdateStatusActive) {
            return;
        }

        setShowStatusModal(true);
    };

    const renderStatus = () => {
        const iconStyles = 'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px]';
        if (taskState === 'done') {
            return <DoneIcon className={`${iconStyles}`} />;
        }
        if (taskState === 'pending') {
            return <PendingIcon className={`${iconStyles}`} />;
        }
        if (taskState === 'progress') {
            return <InProgressIcon className={`${iconStyles}`} />;
        }
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
            <div className='relative w-fit h-fit'>
                <Button
                    variant='custom'
                    onClick={onClickStatusButton}
                    className={`z-20 ${
                        !isUpdateStatusActive ? 'cursor-default' : ''
                    }`}
                >
                    {renderStatus()}
                </Button>
                {showStatusModal && (
                    <UpdateStatusTask
                        handleUpdateStatus={() => {
                            //handleUpdateStatus()
                        }}
                    />
                )}
            </div>
        </>
    );
};

export { ButtonStateTask };
