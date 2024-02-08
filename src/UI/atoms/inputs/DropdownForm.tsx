import { TypeDropdownOptions } from '@/lib/types/form';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Text } from '../text/Text';

import type { TypeFormValidations } from '@/lib/types/form';

type TypeDropdownFormProps = {
	dropdownOptions: Array<TypeDropdownOptions>;
	name: string;
	formValidations?: TypeFormValidations;
	designSelect?: string;
	placeholder?: string;
	designErrorMessage?: string;
	hasDefaultOption?: boolean;
};

const DropdownForm = ({
	dropdownOptions,
	name,
	formValidations,
	designSelect,
	placeholder,
	designErrorMessage,
	hasDefaultOption,
}: TypeDropdownFormProps): JSX.Element => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<select
			className={`w-full rounded text-lg p-1 text-gray outline-none bg-transparent font-medium focus:outline-none border-dark-blue border font-primary ${
				designSelect ?? ''
			}`}
			placeholder={placeholder}
		>
			{dropdownOptions.map((option, index) => (
				<option
					key={index}
					value={option.value}
					className='bg-champagne-white'
					{...register(name, formValidations)}
				>
					{option.label}
				</option>
			))}
			<ErrorMessage
				errors={errors}
				name={name}
				render={({ message }) => {
					return (
						<Text
							className={`text-red-500 font-medium text-right ${
								designErrorMessage ?? ''
							}`}
						>
							{message}
						</Text>
					);
				}}
			/>
		</select>
	);
};

export { DropdownForm };
