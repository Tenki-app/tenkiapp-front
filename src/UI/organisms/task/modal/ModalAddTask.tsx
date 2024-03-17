import { useTranslation } from 'react-i18next';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

import type { TypeAddTaskForm } from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

type TypeModalAddTaskProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    onSubmit: SubmitHandler<TypeAddTaskForm>;
};

const ModalAddTask = ({
    showModal,
    setShowModal,
    onSubmit,
}: TypeModalAddTaskProps) => {
    const { t } = useTranslation();

    return (
        <ModalTemplate
            title={t('addTask')}
            content={<FormAddTask onSubmit={onSubmit} />}
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export { ModalAddTask };
