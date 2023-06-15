type typeDropdownProps = {
	dropdownOptions: Array<{ label: string; value: string }>;
};

const Dropdown = ({ dropdownOptions }: typeDropdownProps): JSX.Element => {
	return (
		<select className="w-full rounded text-xl p-1 text-gray outline-none bg-transparent font-medium focus:outline-none border-dark-blue border">
			{dropdownOptions.map((option, index) => (
				<option
					key={index}
					value={option.value}
					className="bg-champagne-white"
				>
					{option.label}
				</option>
			))}
		</select>
	);
};

export { Dropdown };
