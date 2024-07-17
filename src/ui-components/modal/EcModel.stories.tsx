import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcModal from './EcModal';
import EcButton from '../button/EcButton';

type ComponentType = typeof EcModal;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Modal',
  component: EcModal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args) => {
  const [isOpen, setIsOpen] = useState(args.isOpen);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <EcButton variant="contained" onClick={handleOpen}>
        Open Modal
      </EcButton>
      <EcModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export const Modal: Story = Template.bind({});
Modal.args = {
  children: "Modal Content",
  isOpen: false,
};
