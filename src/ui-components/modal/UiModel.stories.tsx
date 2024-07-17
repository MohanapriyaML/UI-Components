import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiModal from './UiModal';
import UiButton from '../button/UiButton';

type ComponentType = typeof UiModal;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Modal',
  component: UiModal,
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
      <UiButton variant="contained" onClick={handleOpen}>
        Open Modal
      </UiButton>
      <UiModal {...args} isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
};

export const Modal: Story = Template.bind({});
Modal.args = {
  children: "Modal Content",
  isOpen: false,
};
