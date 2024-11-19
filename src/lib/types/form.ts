export type TypeFormValidations = {
	required?: string;
	maxLength?: {
		value: number;
		message: string;
	};
	minLength?: {
		value: number;
		message: string;
	};
};

export type TypeDropdownOptions = {
	label: string;
	value: string;
};
