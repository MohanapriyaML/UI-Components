'use client';

import { Controller } from 'react-hook-form';
import { EcFormsProps} from './types';
import EcInput from '../inputs/EcInputs';

const FormInput = (props: EcFormsProps) => {
    const { id, name = 'UpInput', control, rules, errorText, prefix, sufix, showCheckIcon } = props;

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({ field: { onChange, value, ref } }) => (
                <EcInput
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
