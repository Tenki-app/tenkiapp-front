import { ModalCustomPositionTemplate } from '@/UI/molecules/modal/ModalCustomPositionTemplate';

import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

import type { TypeTaskState } from '@/lib/types/tasks';

type TypeModalUpdateStatusTaskProps = {
    isShowStatusModal: boolean;
    setIsShowStatusModal: (value: boolean) => void;
    handleUpdateStatus: (stateToUpdate: TypeTaskState) => void;
};

const ModalUpdateStatusTask = ({
    isShowStatusModal,
    setIsShowStatusModal,
    handleUpdateStatus,
}: TypeModalUpdateStatusTaskProps) => {
    return (
        <ModalCustomPositionTemplate
            showModal={isShowStatusModal}
            setShowModal={setIsShowStatusModal}
            content={
                <div className='flex flex-col'>
                    <PendingIcon
                        className='w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px] cursor-pointer'
                        onClick={() => handleUpdateStatus('pending')}
                    />
                    <InProgressIcon
                        className='w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px] cursor-pointer'
                        onClick={() => handleUpdateStatus('progress')}
                    />
                    <DoneIcon
                        className='w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px] cursor-pointer'
                        onClick={() => handleUpdateStatus('done')}
                    />
                </div>
            }
        />
    );
};

export { ModalUpdateStatusTask };
