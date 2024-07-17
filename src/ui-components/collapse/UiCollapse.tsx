'use client';

import React from 'react';
import Collapse from '@mui/material/Collapse';
import { ExpandMoreProps } from './types';
import { ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const EcCollapse = (props: ExpandMoreProps) => {
    const { children, title, expanded = false, onToggle,secondaryAction } = props;
    return (
        <>
            <ListItemButton onClick={onToggle}>
                <ListItemText primary={title} />
                {secondaryAction}
                {expanded ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                {children}
            </Collapse>
        </>
    );
};

export default EcCollapse;
