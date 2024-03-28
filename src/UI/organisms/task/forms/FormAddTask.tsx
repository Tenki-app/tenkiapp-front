import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { defaultTaskFormValues, taskCategories } from '@/lib/data/tasks';
import { getCurrentDate, getTomorrowDate } from '@/lib/helpers/date/getDates';

import { InputForm } from '@/UI/atoms/inputs/InputForm';
import { DropdownForm } from '@/UI/atoms/inputs/DropdownForm';
import { Button } from '@/UI/atoms/button/Button';

import type { TypeAddTaskForm } from '@/lib/types/tasks';
import { resolverAddTaskFormSchema } from '@/lib/schema/taskSchema';
import type { SubmitHandler } from 'react-hook-form';

type TypeFormAddTaskProps = {
    formInitialValues?: TypeAddTaskForm;
    onSubmit: SubmitHandler<TypeAddTaskForm>;
    isLoadingSubmit?: boolean;
};

const FormAddTask = ({
    formInitialValues,
    onSubmit,
    isLoadingSubmit,
}: TypeFormAddTaskProps) => {
    const formMethods = useForm<TypeAddTaskForm>({
        defaultValues: formInitialValues ?? defaultTaskFormValues,
        resolver: zodResolver(resolverAddTaskFormSchema),
    });

    const [showMoreOptions, setShowMoreOptions] = useState(false);

    const categoryValue = formMethods.watch('category');
    const isEditFormTask = !!formInitialValues;

    const handleMinDateValidation = () => {
        if (categoryValue === 'today') {
            return getCurrentDate();
        }
        if (categoryValue === 'next') {
            return getTomorrowDate();
        }
        return undefined;
    };

    useEffect(() => {
        if (categoryValue === 'today') {
            formMethods.setValue('date', getCurrentDate());
        }
        if (categoryValue === 'next') {
            formMethods.setValue('date', getTomorrowDate());
        }
        if (categoryValue === 'someday') {
            formMethods.setValue('date', '');
        }
    }, [categoryValue, formMethods]);

    return (
        <FormProvider {...formMethods}>
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
                <InputForm
                    name='date'
                    type='date'
                    min={handleMinDateValidation()}
                    max={
                        categoryValue === 'today' ? getCurrentDate() : undefined
                    }
                    isDisabled={!!(categoryValue === 'someday')}
                />
                {showMoreOptions && (
                    <>
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
                    variant='blue'
                    onClick={formMethods.handleSubmit(onSubmit)}
                    isDisabled={isLoadingSubmit}
                >
                    {isEditFormTask ? 'Update' : '+ Create'}
                </Button>
            </form>
        </FormProvider>
    );
};

export { FormAddTask };
