import { CheckboxProps as MUICheckboxProps } from '@mui/material/Checkbox';

export type UpCheckBoxProps = {
    label: string;
    name?: string;
    checked: boolean;
    ariaLabel?: string;
    disabled?: boolean;
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
    checkedIcon?: React.ReactNode;
   
} & MUICheckboxProps;