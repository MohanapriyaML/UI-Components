import { FormControl } from '@mui/material';
import React, { forwardRef } from 'react';
import { UiInputProps } from './types';
import { HelperText, InputStyled } from './UiInputs.styled';

const UiInput = forwardRef((props: UiInputProps, ref) => {
    const {
        id,
        className,
        placeholder,
        fullWidth,
        width,
        variant,
        type,
        ariaName,
        startAdornment,
        endAdornment,
        onInputHandler,
        value,
        helperText
    } = props;

    const renderHelperText = () => {
        if (helperText) {
            return (
                <HelperText error id={id}>
                    {helperText}
                </HelperText>
            );
        }
    };

    return (
        <FormControl
            sx={{ width: `${fullWidth ? 100 : width}%` }}
            variant={variant}
            className={className}
        >
            <InputStyled
                id={id}
                ref={ref}
                placeholder={placeholder}
                type={type}
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                aria-describedby={id}
                inputProps={{
                    'aria-label': ariaName
                }}
                value={value}
                onChange={onInputHandler}
            />
            {renderHelperText()}
        </FormControl>
    );
});

export default UiInput;
