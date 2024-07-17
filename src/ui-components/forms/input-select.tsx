import { Controller } from 'react-hook-form';
import { UnInputSelectProps } from './types';
import { useCallback } from 'react';
import { FormHelperText } from '@mui/material';
import EcSelect from '../select/EcSelect';

const FormInputSelect = (props: UnInputSelectProps) => {
    const { id, name = 'UpInput', control, rules, options = [], errorText } = props;

    const renderHelperText = useCallback(() => {
        if (errorText) {
            return (
                <FormHelperText error id="select-helper-text">
                    {errorText}
                </FormHelperText>
            );
        }
    }, [errorText]);

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={rules}
                defaultValue=""
                render={({ field: { onChange, value, ref } }) => (
                    <EcSelect
                    open={false} selectedValues={value}
                    handleChange={onChange}
                    {...ref}
                    id={id ? id : name}
                    options={options}                    />
                )}
            />
            {renderHelperText()}
        </>
    );
};

export default FormInputSelect;
