type typeDropdownProps = {
    dropdownOptions: Array<{ label: string; value: string }>;
};

const Dropdown = ({ dropdownOptions }: typeDropdownProps): JSX.Element => {
    return (
        <select className='w-full rounded outline-none font-medium focus:outline-none text-base border-dark-blue border'>
            {dropdownOptions.map((option, index) => (
                <option
                    key={index}
                    value={option.value}
                >
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export { Dropdown };
