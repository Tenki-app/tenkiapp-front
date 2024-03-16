import { useTranslation } from 'react-i18next';

import { defaultTaskFormValues } from '@/lib/data/tasks';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

import type { TypeAddTaskForm } from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

type TypeModalEditTaskProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    formInitialValues: TypeAddTaskForm | null;
    onSubmit: SubmitHandler<TypeAddTaskForm>;
};

const ModalEditTask = ({
    showModal,
    setShowModal,
    formInitialValues,
    onSubmit,
}: TypeModalEditTaskProps) => {
    const { t } = useTranslation();

    return (
        <ModalTemplate
            title={t('editTask')}
            content={
                <FormAddTask
                    formInitialValues={
                        formInitialValues ?? defaultTaskFormValues
                    }
                    onSubmit={onSubmit}
                />
            }
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export { ModalEditTask };
