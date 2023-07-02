import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';

import { Text } from '../Text/Text';

import type { ReactNode } from 'react';
import type { typesFormValidations } from '@/lib/types/form';

export type typeInputFormProps = {
    name: string;
    formValidations?: typesFormValidations;
    designContainer?: string;
    placeholder?: string;
    designErrorMessage?: string;
    type?: 'input' | 'textarea';
    icon?: ReactNode;
};

const InputForm = ({
    name,
    formValidations,
    designContainer,
    placeholder,
    designErrorMessage,
    type = 'input',
    icon,
}: typeInputFormProps): JSX.Element => {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    return (
        <div className={`${designContainer ?? ''}`}>
            <div className='relative'>
                {type === 'input' && (
                    <input
                        className={`text-xl text-gray w-full border-b-[2px] focus:outline-none border-b-rounded border-dark-blue-transparency bg-transparent placeholder:text-dark-blue-transparency font-medium`}
                        placeholder={placeholder}
                        {...register(name, formValidations)}
                    />
                )}
                {type === 'textarea' && <textarea />}
                {icon && (
                    <div className='absolute top-[6px] right-0'>{icon}</div>
                )}
            </div>
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => {
                    return (
                        <Text
                            className={`text-red-500 font-semibold text-right ${
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
