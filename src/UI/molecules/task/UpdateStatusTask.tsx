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
    const buttonStyles =
        'flex gap-x-5 items-center w-full py-3 px-4 hover:bg-[#dbd6bc] main-transition';
    const iconStyles =
        'w-[25px] mt-[2px] h-[25px] md:w-[32px] md:h-[32px] cursor-pointer';

    return (
        <div className='flex flex-col bg-champagne-white border border-black z-50 p-[6px] absolute w-[230px] rounded-lg'>
            <Button
                variant='custom'
                className={`${buttonStyles}`}
                onClick={() => handleUpdateStatus('done')}
            >
                <DoneIcon className={`${iconStyles}`} />

                <Text className=''>Done</Text>
            </Button>
            <Button
                variant='custom'
                className={`border-t border-b border-black ${buttonStyles}`}
                onClick={() => handleUpdateStatus('pending')}
            >
                <PendingIcon className={`${iconStyles}`} />
                <Text className=''>Pending</Text>
            </Button>
            <Button
                variant='custom'
                className={`${buttonStyles}`}
                onClick={() => handleUpdateStatus('progress')}
            >
                <InProgressIcon className={`${iconStyles}`} />
                <Text className=''>In progress</Text>
            </Button>
        </div>
    );
};

export { UpdateStatusTask };
