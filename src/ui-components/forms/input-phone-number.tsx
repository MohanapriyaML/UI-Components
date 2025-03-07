'use client';

import { Controller } from 'react-hook-form';
import { FormHelperText } from '@mui/material';
import { FormPhoneNumberInputProps } from './types';
import { useCallback } from 'react';
import { PhoneNumberStyled } from './forms.styled';
import React from 'react';

const FormPhoneNumberInput = (props: FormPhoneNumberInputProps) => {
    const { name, control, rules, errorText } = props;

    const renderHelperText = useCallback(() => {
        if (errorText) {
            return (
                <FormHelperText error id="outlined-weight-helper-text">
                    {errorText}
                </FormHelperText>
            );
        }
    },[errorText]);

    return (
        <>
            <Controller
                name={name || ''}
                control={control}
                rules={rules}
                render={({ field: { onChange, value, ref } }) => {
                    return (
                        <PhoneNumberStyled
                            id={name}
                            onChange={onChange}
                            defaultCountry={'in'}
                            {...props}
                            value={value}
                            {...ref}
                        />
                    );
                }}
            />
            {renderHelperText()}
        </>
    );
};

export default FormPhoneNumberInput;
