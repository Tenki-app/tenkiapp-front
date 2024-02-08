import { useForm, FormProvider } from 'react-hook-form';

import { taskCategories } from '@/lib/data/tasks';

import { InputForm } from '@/UI/atoms/inputs/InputForm';
import { DropdownForm } from '@/UI/atoms/inputs/DropdownForm';
import { Button } from '@/UI/atoms/button/Button';
import { LinkElement } from '@/UI/atoms/link/LinkElement';

const FormAddTask = () => {
	const methods = useForm();

	return (
		<FormProvider {...methods}>
			<form className='flex flex-col gap-y-3'>
				<InputForm
					name='title'
					placeholder='Title...*'
				/>
				<InputForm
					name='description'
					type='textarea'
					placeholder={`Description...*`}
				/>
				<DropdownForm
					name='category'
					dropdownOptions={taskCategories}
				/>
				<div className='text-center'>
					<Button
						redirect='#'
						variant='underline'
						className='!text-dark-blue text-sm !font-bold'
					>
						More options
					</Button>
				</div>
				<Button
					className=''
					variant='blue'
				>
					Agregar +
				</Button>
			</form>
		</FormProvider>
	);
};

export { FormAddTask };
