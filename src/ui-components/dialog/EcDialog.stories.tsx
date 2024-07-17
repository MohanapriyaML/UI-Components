import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { EcDialogProps } from './types';
import EcDialog from './EcDialog';

const meta: Meta<EcDialogProps> = {
    title: 'UI/Dialog',
    component: EcDialog,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template = (args: EcDialogProps) => {
    const [open, setOpen] = useState(args.open);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
          <button onClick={() => setOpen(true)}>Open Dialog</button>
          <EcDialog {...args} open={open} handleClose={handleClose}>
            {args.children}
          </EcDialog>
        </>
      );
};

export const Collapse: StoryObj<EcDialogProps> = {
    render: Template,
    args: {
        children: 'DialogBox Content',
        open: false
    }
}
