'use client';

import * as React from 'react';
import Radio from '@mui/material/Radio';
import { PropsWithChildren } from 'react';
import { UiRadioProps } from './types';

const UiRadioButton = (props: PropsWithChildren<UiRadioProps>) => {
    const {
        name = 'radio-buttons',
        value,
        isSelectedValue,
        setSelectedValue,
        disabled
    } = props;
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === isSelectedValue) {
            setSelectedValue('');
        } else {
            setSelectedValue(event.target.value);
        }
    };
    return (
        <Radio
            value={value}
            name={name}
            checked={isSelectedValue === value}
            disabled={disabled}
            onChange={handleChange} 
            inputProps={{ 'aria-label': name }}
        />
    );
};

export default UiRadioButton;
