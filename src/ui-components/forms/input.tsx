'use client';

import { Controller } from 'react-hook-form';
import { UiFormsProps} from './types';
import UiInput from '../inputs/UiInputs';
import React from 'react';

const FormInput = (props: UiFormsProps) => {
    const { id, name = 'UpInput', control, rules, errorText, prefix, sufix, showCheckIcon } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
                <UiInput
                    {...ref}
                    id={id ? id : name}
                    fullWidth
                    onInputHandler={onChange}
                    value={value}
                    helperText={errorText as string}
                />
            )}
        />
    );
};

export default FormInput;
