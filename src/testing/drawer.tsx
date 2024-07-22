import { Button } from '@mui/material';
import React, { Children, useState } from 'react';
import UiDrawer from '../ui-components/drawer/UiDrawer';
import UiTypography from '../ui-components/typography/UiTypography';

const Drawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDrawerOpen = () => {
        setIsOpen(true);
    };

    const handleDrawerClose = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <h1>Drawer</h1>
            <Button onClick={handleDrawerOpen}>open</Button>
            <UiDrawer title="Drawer Items" open={isOpen} onClick={handleDrawerClose}>
                <UiTypography>Drawer items</UiTypography>
            </UiDrawer>
        </div>
    );
}

export default Drawer;
