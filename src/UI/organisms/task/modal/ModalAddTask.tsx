import { useTranslation } from 'react-i18next';

import { ModalTitleTemplate } from '@/UI/molecules/modal/ModalTitleTemplate';
import { FormTask } from '../forms/FormTask';

import type { TypeAddTaskForm } from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

type TypeModalAddTaskProps = {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	onSubmit: SubmitHandler<TypeAddTaskForm>;
	isLoadingSubmit?: boolean;
};

const ModalAddTask = ({
	showModal,
	setShowModal,
	onSubmit,
	isLoadingSubmit,
}: TypeModalAddTaskProps) => {
	const { t } = useTranslation();

	return (
		<ModalTitleTemplate
			title={t('addTask')}
			content={
				<FormTask
					onSubmit={onSubmit}
					isLoadingSubmit={isLoadingSubmit}
				/>
			}
			showModal={showModal}
			setShowModal={setShowModal}
		/>
	);
};

export { ModalAddTask };
