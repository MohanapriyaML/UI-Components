import React from 'react';
export interface EcDrawerProps {
    title: string;
    open: boolean;
    onClick: () => void;
    position?: 'left' | 'right' | 'top' | 'bottom';
    children?: string | React.ReactNode;
}
