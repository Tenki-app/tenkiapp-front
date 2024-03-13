import { useTranslation } from 'react-i18next';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

type TypeModalAddTaskProps = {
    showAddTaskModal: boolean;
    setShowAddTaskModal: (show: boolean) => void;
};

const ModalAddTask = ({
    showAddTaskModal,
    setShowAddTaskModal,
}: TypeModalAddTaskProps) => {
    const { t } = useTranslation();

    return (
        <ModalTemplate
            title={t('addTask')}
            content={<FormAddTask />}
            showModal={showAddTaskModal}
            setShowModal={setShowAddTaskModal}
        />
    );
};

export { ModalAddTask };
