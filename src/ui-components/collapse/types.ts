import { IconButtonProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ExpandMoreProps {
    title: string;
    children: React.ReactNode;
    secondaryAction?: ReactNode;
    expanded?: boolean;
    onToggle?: () => void;
  }
