import React from 'react';

export interface EcDialogProps {
    children: string | React.ReactNode;
    open: boolean;
    handleClose: () => void;
    fullScreen?: boolean;
}