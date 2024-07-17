import { Controller } from 'react-hook-form';
import { FormCheckboxProps } from './types';
import { Checkbox, FormControlLabel, FormHelperText, FormControl } from '@mui/material';


const FormCheckbox = (props: FormCheckboxProps) => {
    const { id, name, control, rules, label, errorText, showCheckIocn } = props;

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field: { onChange, value, ref } }) => (
                    <FormControl component="fieldset" error={!!errorText}>
                        <FormControlLabel
                            control={<Checkbox
                                name={name}
                                checked={value}
                                id={id || name}
                                onChange={onChange}
                                inputRef={ref} />}
                            label={<span>
                                {label}
                                {showCheckIocn && value && <span style={{ marginLeft: 8 }}>✔️</span>}
                            </span>} />
                        {errorText && <FormHelperText>{errorText}</FormHelperText>}
                    </FormControl>
                )} />
            <Checkbox />
        </>
    );
};

export default FormCheckbox;
