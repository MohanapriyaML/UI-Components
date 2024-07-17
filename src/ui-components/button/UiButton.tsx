'use client';
import React from 'react';
import { PropsWithChildren } from 'react';
import { UiButtonProps} from './types';
import { Button } from '@mui/material';

const UiButton = ({ children, ...props }: PropsWithChildren<UiButtonProps>) => {
    return (
        <Button {...props} disableRipple>
            {children}
        </Button>
    );
};

export default UiButton;
