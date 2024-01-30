import { Text } from '@/UI/atoms/text/Text';
import CloseIcon from '@/svg/task/closeIcon.svg';

import type { ReactNode } from 'react';

type TypeModalTemplateProps = {
	title: string;
	showModal: boolean;
	setShowModal: (value: boolean) => void;
	content: ReactNode;
	contentStyles?: string;
};

const ModalTemplate = ({
	title,
	showModal,
	setShowModal,
	content,
	contentStyles,
}: TypeModalTemplateProps) => {
	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<>
			{showModal && (
				<div className='w-screen h-screen fixed z-[30]'>
					<div className='bg-black opacity-60 w-full h-full' />
					<div className='absolute left-0 right-0 top-0 max-w-[375px] h-[400px] bottom-0 m-auto z-[90] bg-champagne-white p-4'>
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
			)}
		</>
	);
};

export { ModalTemplate };
