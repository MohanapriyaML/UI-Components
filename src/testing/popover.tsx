import { Button } from '@mui/material';
import React, { useState } from 'react'
import UiPopOver from '../ui-components/popover/UiPopOver';

const Popover = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpen = (event: any) => {
      setIsOpen(true);
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setIsOpen(false);
        setAnchorEl(null);
    }
  return (
    <div>
        <h1>PopOver</h1>
        <Button onClick={handleOpen}>Open Popover</Button>
        <UiPopOver id="popover-menu" open={isOpen} onClose={handleClose} anchorEl={anchorEl}>PopOver content</UiPopOver>
    </div>
  )
}

export default Popover
