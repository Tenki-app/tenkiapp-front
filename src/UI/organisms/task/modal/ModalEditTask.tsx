import { useTranslation } from 'react-i18next';

import { defaultTaskFormValues } from '@/lib/data/tasks';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

import type { TypeAddTaskForm, TypeTask } from '@/lib/types/tasks';
import type { SubmitHandler } from 'react-hook-form';

type TypeModalEditTaskProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    formInitialValues: TypeTask | null;
    onSubmit: SubmitHandler<TypeAddTaskForm>;
    isLoadingSubmit?: boolean;
};

const ModalEditTask = ({
    showModal,
    setShowModal,
    formInitialValues,
    onSubmit,
    isLoadingSubmit,
}: TypeModalEditTaskProps) => {
    const { t } = useTranslation();

    const initialValuesFormatted = () => {
        if (!formInitialValues) {
            return undefined;
        }

        const taskInitialData = {
            title: formInitialValues.title,
            description: formInitialValues.description,
            category: formInitialValues.category,
            date: formInitialValues.date_task,
            hour: formInitialValues.time,
        };

        return taskInitialData;
    };

    return (
        <ModalTemplate
            title={t('editTask')}
            content={
                <FormAddTask
                    formInitialValues={initialValuesFormatted()}
                    onSubmit={onSubmit}
                    isLoadingSubmit={isLoadingSubmit}
                />
            }
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export { ModalEditTask };
