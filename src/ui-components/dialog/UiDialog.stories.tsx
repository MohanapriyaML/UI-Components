import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { UiDialogProps } from './types';
import UiDialog from './UiDialog';

const meta: Meta<UiDialogProps> = {
    title: 'UI/Dialog',
    component: UiDialog,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template = (args: UiDialogProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
          <button onClick={() => setOpen(true)}>Open Dialog</button>
          <UiDialog {...args} open={open} handleClose={handleClose}>
            {args.children}
          </UiDialog>
        </>
      );
};

export const Collapse: StoryObj<UiDialogProps> = {
    render: Template,
    args: {
        children: 'DialogBox Content',
        open: false
    }
}
