import { InputHTMLAttributes } from 'react';

export interface EcInputProps extends InputHTMLAttributes<HTMLInputElement> {
    id?: string;
    placeholder?: string;
    fullWidth?: boolean;
    width?: number | string;
    variant?: 'standard' | 'outlined' | 'filled';
    ariaName?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    onInputHandler?: () => void;
    helperText?: string;
}