import { Button } from '@mui/material';
import React, { Children, useState } from 'react';
import UiDrawer from '../ui-components/drawer/UiDrawer';

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
                Drawer items
            </UiDrawer>
        </div>
    );
}

export default Drawer;
