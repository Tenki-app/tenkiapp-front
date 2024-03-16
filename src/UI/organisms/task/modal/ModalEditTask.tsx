import { useTranslation } from 'react-i18next';

import { defaultTaskFormValues } from '@/lib/data/tasks';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

import type { TypeAddTaskForm } from '@/lib/types/tasks';

type TypeModalEditTaskProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    formInitialValues: TypeAddTaskForm | null;
};

const ModalEditTask = ({
    showModal,
    setShowModal,
    formInitialValues,
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
                />
            }
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export { ModalEditTask };
