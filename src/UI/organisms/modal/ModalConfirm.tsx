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
			content={
				<div>
					<Text>{description}</Text>
					<div className='mt-8 flex justify-between'>
						<Button>
							{confirmButtonText ? confirmButtonText : t('yes')}
						</Button>
						<Button>
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
