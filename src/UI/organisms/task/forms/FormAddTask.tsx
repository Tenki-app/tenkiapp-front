import { useForm, FormProvider } from 'react-hook-form';

import { InputForm } from '@/UI/atoms/inputs/InputForm';

const FormAddTask = () => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form>
				<InputForm name='title' />
				<InputForm
					name='description'
					type='textarea'
				/>
			</form>
		</FormProvider>
	);
};

export { FormAddTask };
