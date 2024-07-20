import { TypeDropdownOptions } from '@/lib/types/form';
import { useFormContext } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Text } from '../text/Text';

import type { TypeFormValidations } from '@/lib/types/form';
import { useTranslation } from 'react-i18next';

type TypeDropdownFormProps = {
	dropdownOptions: Array<TypeDropdownOptions>;
	name: string;
	formValidations?: TypeFormValidations;
	designSelect?: string;
	placeholder?: string;
	designErrorMessage?: string;
};

const DropdownForm = ({
	dropdownOptions,
	name,
	formValidations,
	designSelect,
	placeholder,
	designErrorMessage,
}: TypeDropdownFormProps): JSX.Element => {
	const { t } = useTranslation();
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<div>
			<select
				className={`w-full rounded text-lg p-1 text-dark-blue outline-none bg-transparent font-medium focus:outline-none border-dark-blue border font-primary ${
					designSelect ?? ''
				}`}
				placeholder={placeholder}
				{...register(name, formValidations)}
			>
				{dropdownOptions.map((option, index) => (
					<option
						key={index}
						value={option.value}
						className='bg-champagne-white'
					>
						{t(option.label)}
					</option>
				))}
			</select>
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
							{t(message)}
						</Text>
					);
				}}
			/>
		</div>
	);
};

export { DropdownForm };
