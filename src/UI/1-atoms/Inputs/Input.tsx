import type { ReactNode } from 'react';

export type typeInput = {
    className?: string;
    text?: string;
    type?: string;
    icon?: ReactNode;
};

const Input = ({ className, text, type, icon }: typeInput): JSX.Element => {
    return (
        <div className='relative'>
            <input
                type={type}
                className={`text-xl
                    text-gray w-full
                    border-b-[2px]
                    focus:outline-none border-b-rounded border-dark-blue-transparency bg-transparent placeholder:text-dark-blue-transparency font-medium ${className}`}
                placeholder={text}
            />
            <div className='absolute top-[10px] right-0 w-[20px] h-[19px]'>{icon && icon}</div>
        </div>
    );
};
export { Input };
