import { Button } from '@/UI/atoms/button/Button';
import { Text } from '@/UI/atoms/text/Text';

import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import DoneIcon from '@/svg/task/finishStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

import type { TypeTaskState } from '@/lib/types/tasks';

type TypeUpdateStatusTaskProps = {
    handleUpdateStatus: (stateToUpdate: TypeTaskState) => void;
};

const UpdateStatusTask = ({
    handleUpdateStatus,
}: TypeUpdateStatusTaskProps) => {
    const buttonStyles = 'flex gap-x-3 items-center w-full';
    const iconStyles =
        'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px] cursor-pointer';

    return (
        <div className='flex flex-col bg-champagne-white border border-black z-[999999] absolute'>
            <Button
                variant='custom'
                className={`${buttonStyles}`}
            >
                <PendingIcon
                    className={`${iconStyles}`}
                    onClick={() => handleUpdateStatus('pending')}
                />
                <Text>Pending</Text>
            </Button>
            <InProgressIcon
                className={`${iconStyles}`}
                onClick={() => handleUpdateStatus('progress')}
            />
            <DoneIcon
                className={`${iconStyles}`}
                onClick={() => handleUpdateStatus('done')}
            />
        </div>
    );
};

export { UpdateStatusTask };
