import { Button } from '@mui/material';
import React, { Children, useState } from 'react';
import EcDrawer from '../ui-components/drawer/EcDrawer';

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
            <EcDrawer title="Drawer Items" open={isOpen} onClick={handleDrawerClose}>
                
            </EcDrawer>
        </div>
    );
}

export default Drawer;
