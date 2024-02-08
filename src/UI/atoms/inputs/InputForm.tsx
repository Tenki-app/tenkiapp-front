import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

import { Text } from '../text/Text';

import { useState, type ReactNode } from 'react';

import type { TypeFormValidations } from '@/lib/types/form';

export type typeInputFormProps = {
	name: string;
	formValidations?: TypeFormValidations;
	designContainer?: string;
	placeholder?: string;
	designErrorMessage?: string;
	type?: 'text' | 'textarea' | 'password';
	icon?: ReactNode;
};

const InputForm = ({
	name,
	formValidations,
	designContainer,
	placeholder,
	designErrorMessage,
	type = 'text',
	icon,
}: typeInputFormProps): JSX.Element => {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [showPassword, setShowPassword] = useState(false);

	const inputDesign =
		'text-lg dark:text-champagne-white text-dark-blue w-full border-[1px] focus:outline-none rounded dark:border-champagne-white-transparency border-dark-blue-transparency bg-transparent dark:placeholder:text-champagne-white-transparency placeholder:text-dark-blue-transparency font-medium p-[6px]';

	const handleIconClick = () => {
		if (type === 'password') {
			setShowPassword(!showPassword);
		}
	};

	return (
		<div className={`${designContainer ?? ''} w-full`}>
			<div className='relative w-full'>
				{type === 'text' && (
					<input
						className={inputDesign}
						placeholder={placeholder}
						type={type}
						{...register(name, formValidations)}
					/>
				)}
				{type === 'password' && (
					<input
						className={inputDesign}
						placeholder={placeholder}
						type={showPassword ? 'text' : 'password'}
						{...register(name, formValidations)}
					/>
				)}
				{type === 'textarea' && (
					<textarea
						className={`${inputDesign} min-h-[90px]`}
						{...register(name, formValidations)}
						placeholder={placeholder}
					/>
				)}
				{icon && (
					<div
						onClick={handleIconClick}
						className='absolute top-[6px] right-0'
					>
						{icon}
					</div>
				)}
			</div>
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
		</div>
	);
};
export { InputForm };
