import type { ReactNode } from 'react';

export type typeInput = {
    className?: string;
    placeholder?: string;
    type?: string;
    icon?: ReactNode;
};

const Input = ({ className, placeholder, type, icon }: typeInput): JSX.Element => {
    return (
        <div className='relative'>
            <input
                type={type}
                className={`text-2xl
                    text-dark-blue w-full
                    border-b-[2px]
                    focus:outline-none border-b-rounded border-dark-blue-transparency bg-transparent placeholder:text-dark-blue-transparency font-medium ${className}`}
                placeholder={placeholder}
            />
            <div className='absolute top-[10px] right-0 w-[20px] h-[19px]'>{icon && icon}</div>
        </div>
    );
};
export { Input };
