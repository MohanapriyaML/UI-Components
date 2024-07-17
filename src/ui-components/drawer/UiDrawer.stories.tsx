import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UiDrawerProps} from './types';
import UiDrawer from './UiDrawer';


const meta: Meta<UiDrawerProps> = {
    title: 'UI/Drawer',
    component: UiDrawer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template = (args: UiDrawerProps) => {
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
          <UiDrawer {...args} open={open} onClick={handleClose}>
            {args.children}
          </UiDrawer>
        </>
      );
};

export const Drawer: StoryObj<UiDrawerProps> = {
    render: Template,
    args: {
        title:"Drawer",
        children: 'Drawer Items',
        open: false
    }
}
