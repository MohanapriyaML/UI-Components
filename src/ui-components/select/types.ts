import { SelectChangeEvent } from '@mui/material';
export interface EcSelectProps {
    id: string;                   
    options: OptionsProps[];
    open: boolean;      
    multiple?: boolean;          
    handleChange: (event: SelectChangeEvent<string[]>, child?: React.ReactNode) => void;
    selectedValues: any;        
    onOpen?: () => void;          
    onClose?: () => void;        
    onOptionClick?: (value: string, event: React.MouseEvent<HTMLElement>) => void;
  } 

export interface OptionsProps {
    value: string;
    label: string;
}
