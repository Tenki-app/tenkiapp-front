import { ModalTemplate } from '../../modal/ModalTemplate';

type TypeAddTaskModalProps = {
	setShowModal: (value: boolean) => void;
};

const AddTaskModal = ({ setShowModal }: TypeAddTaskModalProps) => {
	return (
		<ModalTemplate
			title='Añadir tarea'
			content={<div></div>}
			setShowModal={setShowModal}
		/>
	);
};

export default AddTaskModal;
