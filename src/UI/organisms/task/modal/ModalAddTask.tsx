import { useTranslation } from 'react-i18next';

import { ModalTemplate } from '@/UI/molecules/modal/ModalTemplate';
import { FormAddTask } from '../forms/FormAddTask';

type TypeModalAddTaskProps = {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
};

const ModalAddTask = ({ showModal, setShowModal }: TypeModalAddTaskProps) => {
    const { t } = useTranslation();

    return (
        <ModalTemplate
            title={t('addTask')}
            content={<FormAddTask />}
            showModal={showModal}
            setShowModal={setShowModal}
        />
    );
};

export { ModalAddTask };
