import React from 'react';

export interface UiDialogProps {
    children: string | React.ReactNode;
    open: boolean;
    handleClose: () => void;
    fullScreen?: boolean;
}