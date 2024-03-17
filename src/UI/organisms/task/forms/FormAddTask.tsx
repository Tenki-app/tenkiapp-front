import { useForm, FormProvider } from 'react-hook-form';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { taskCategories } from '@/lib/data/tasks';

import { InputForm } from '@/UI/atoms/inputs/InputForm';
import { DropdownForm } from '@/UI/atoms/inputs/DropdownForm';
import { Button } from '@/UI/atoms/button/Button';

import type { TypeAddTaskForm } from '@/lib/types/tasks';
import { resolverAddTaskFormSchema } from '@/lib/schema/taskSchema';
import type { SubmitHandler } from 'react-hook-form';

type TypeFormAddTaskProps = {
    formInitialValues?: TypeAddTaskForm;
    onSubmit: SubmitHandler<TypeAddTaskForm>;
};

const FormAddTask = ({ formInitialValues, onSubmit }: TypeFormAddTaskProps) => {
    const methods = useForm<TypeAddTaskForm>({
        defaultValues: formInitialValues,
        resolver: zodResolver(resolverAddTaskFormSchema),
    });

    const [showMoreOptions, setShowMoreOptions] = useState(false);

    return (
        <FormProvider {...methods}>
            <form className='flex flex-col gap-y-3'>
                <InputForm
                    name='title'
                    placeholder='Title...*'
                />
                <InputForm
                    name='description'
                    type='textarea'
                    placeholder={`Description...*`}
                />
                <DropdownForm
                    name='category'
                    dropdownOptions={taskCategories}
                />
                {showMoreOptions && (
                    <>
                        <InputForm
                            name='date'
                            type='date'
                        />
                        <InputForm
                            name='hour'
                            type='time'
                        />
                    </>
                )}
                <div className='text-center'>
                    <Button
                        redirect='#'
                        variant='underline'
                        className='!text-dark-blue text-sm !font-bold'
                        onClick={() => setShowMoreOptions(!showMoreOptions)}
                    >
                        {showMoreOptions ? 'Less options' : 'More options'}
                    </Button>
                </div>
                <Button
                    className=''
                    variant='blue'
                    onClick={methods.handleSubmit(onSubmit)}
                >
                    Add +
                </Button>
            </form>
        </FormProvider>
    );
};

export { FormAddTask };
