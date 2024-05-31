import { useTranslation } from 'react-i18next';

import { ModalTitleTemplate } from '@/UI/molecules/modal/ModalTitleTemplate';

import { Text } from '@/UI/atoms/text/Text';
import { Button } from '@/UI/atoms/button/Button';

type TypeModalConfirmProps = {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	title: string;
	description: string;
	confirmButtonText?: string;
	cancelButtonText?: string;
	onClick: () => void;
	onCancel?: () => void;
};

const ModalConfirm = ({
	showModal,
	setShowModal,
	title,
	description,
	confirmButtonText,
	cancelButtonText,
	onClick,
	onCancel,
}: TypeModalConfirmProps) => {
	const { t } = useTranslation();

	return (
		<ModalTitleTemplate
			title={title}
			modalContainerStyles='h-auto max-h-[240px]'
			content={
				<div className=''>
					<Text className='text-center mt-6'>{description}</Text>
					<div className='mt-8 flex justify-center gap-x-6 '>
						<Button
							onClick={onClick}
							variant='blue'
						>
							{confirmButtonText ? confirmButtonText : t('yes')}
						</Button>
						<Button
							onClick={() => {
								if (onCancel) {
									onCancel();
								} else {
									setShowModal(false);
								}
							}}
							variant='bordered'
						>
							{cancelButtonText ? cancelButtonText : t('no')}
						</Button>
					</div>
				</div>
			}
			showModal={showModal}
			setShowModal={setShowModal}
		/>
	);
};

export { ModalConfirm };
