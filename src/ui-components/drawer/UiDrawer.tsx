import React from 'react';
import { IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerContainer, DrawerHeader } from './UiDrawer.styled';
import { UiDrawerProps } from './types';

const UiDrawer = (props: UiDrawerProps) => {
    const { title, position = 'right', children, open, onClick } = props;
    return (
        <DrawerContainer anchor={position} open={open}>
            <DrawerHeader>
                <Typography variant="h6" fontWeight="bold" component="h6">
                    {title}
                </Typography>
                <IconButton data-testid="ec-drawer-close-button" onClick={onClick}>
                    <CloseIcon />
                </IconButton>
            </DrawerHeader>
            {children}
        </DrawerContainer>
    );
};
export default UiDrawer;