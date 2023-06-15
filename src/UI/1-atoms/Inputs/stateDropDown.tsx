/* import { ReactNode } from "react"; */
import { Text } from '../Text/Text';
import FinishIcon from '@/svg/task/finishStateIcon.svg';
import PendingIcon from '@/svg/task/pendingStateIcon.svg';
import InProgressIcon from '@/svg/task/inProgressIcon.svg';

export type typeStateDropDown = {
	className?: string;
	showModal?: () => void;
};

const StateDropdown = ({
	className,
	showModal,
}: typeStateDropDown): JSX.Element => {
	const iconStyles = 'w-[25px] h-[25px]';
	const optionStyles = 'p-[10px] w-full flex option-styles';
	const textStyles = 'ml-[10px]';
	const selectOption = (option: string) => {
		if (showModal) showModal();
		console.log(option);
	};
	return (
		<div
			className={`hidden flex flex-col justify-between border-2 border-dark-blue rounded-lg w-[200px] h-[150px] ${
				className ?? ''
			}`}
		>
			<div
				className={optionStyles}
				onClick={() => selectOption('finish')}
			>
				<FinishIcon className={iconStyles} />
				<Text className={textStyles}>Finalizado</Text>
			</div>
			<div
				className={optionStyles}
				onClick={() => selectOption('pending')}
			>
				<PendingIcon className={iconStyles} />
				<Text className={textStyles}>Pendiente</Text>
			</div>
			<div
				className={optionStyles}
				onClick={() => selectOption('in progress')}
			>
				<InProgressIcon className={iconStyles} />
				<Text className={textStyles}>En progreso</Text>
			</div>
		</div>
	);
};

export { StateDropdown };
