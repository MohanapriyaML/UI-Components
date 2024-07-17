'use client';

import { PropsWithChildren } from 'react';
import { UpButtonProps } from './types';
import { Button } from '@mui/material';

const EcButton = ({ children, ...props }: PropsWithChildren<UpButtonProps>) => {
    return (
        <Button {...props} disableRipple>
            {children}
        </Button>
    );
};

export default EcButton;
