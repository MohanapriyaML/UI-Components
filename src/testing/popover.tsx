import { Button } from '@mui/material';
import React, { useState } from 'react'
import EcPopOver from '../ui-components/popover/EcPopOver';

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
        <EcPopOver id="popover-menu" open={isOpen} onClose={handleClose} anchorEl={anchorEl}>PopOver content</EcPopOver>
    </div>
  )
}

export default Popover
