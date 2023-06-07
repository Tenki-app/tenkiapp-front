export type typesFormValidations = {
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
