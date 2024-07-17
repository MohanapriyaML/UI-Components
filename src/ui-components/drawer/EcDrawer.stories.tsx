import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EcDrawerProps} from './types';
import EcDrawer from './EcDrawer';

const meta: Meta<EcDrawerProps> = {
    title: 'UI/Drawer',
    component: EcDrawer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template = (args: EcDrawerProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
        setOpen(false);
        if (args.onClick) {
          args.onClick();
        }
      };

    return (
        <>
          <button onClick={() => setOpen(true)}>Drawer</button>
          <EcDrawer {...args} open={open} onClick={handleClose}>
            {args.children}
          </EcDrawer>
        </>
      );
};

export const Drawer: StoryObj<EcDrawerProps> = {
    render: Template,
    args: {
        title:"Drawer",
        children: 'Drawer Items',
        open: false
    }
}
