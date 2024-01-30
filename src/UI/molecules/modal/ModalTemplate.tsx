import { Text } from '@/UI/atoms/text/Text';
import CloseIcon from '@/svg/task/closeIcon.svg';

import type { ReactNode } from 'react';

type TypeModalTemplateProps = {
	title: string;
	setShowModal: (value: boolean) => void;
	content: ReactNode;
	contentStyles?: string;
};

const ModalTemplate = ({
	title,
	setShowModal,
	content,
	contentStyles,
}: TypeModalTemplateProps) => {
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className=''>
			<div className='flex justify-end'>
				<CloseIcon />
			</div>
			<Text className='text-center w-full border-b border-[1px] pb-1 border-dark-blue'>
				{title}
			</Text>
			<div className={`${contentStyles}`}>{content}</div>
		</div>
	);
};

export { ModalTemplate };
