/* import { ReactNode } from "react"; */
import { Text } from "../Text/Text";
import FinishIcon from '@/svg/task/finishStateIcon.svg';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

/* type stateDropdownProps = {
    icon: ReactNode,
    text: string
}; */

const StateDropdown = (): JSX.Element => {
    const iconStyles = 'w-[25px] h-[25px]';
    const optionStyles = 'flex';
    const textStyles = 'ml-[10px]';
    return (
        <div className='flex flex-col justify-between border-2 border-dark-blue rounded-lg w-[200px] h-[130px] p-[10px]'>
            <div className={optionStyles}>
                <FinishIcon className={iconStyles} />
                <Text className={textStyles}>Finalizado</Text>
            </div>
            <div className={optionStyles}>
                <PendingIcon className={iconStyles}/>
                <Text className={textStyles}>Pendiente</Text>
            </div>
            <div className={optionStyles}>
                <InProgressIcon className={iconStyles}/>
                <Text className={textStyles}>En progreso</Text>
            </div>
        </div>
    );
};

export { StateDropdown };
