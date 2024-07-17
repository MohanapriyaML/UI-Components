import React from 'react';

export interface EcPopoverProps {
    id: string;
    onClose: () => void;
    handlMouseEnter?: () => void;
    children: string | React.ReactNode;
    open: boolean;
    hoverenabled?: boolean;
    anchorEl?: HTMLElement | null; 
}