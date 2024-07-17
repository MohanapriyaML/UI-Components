import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiPopOver from './UiPopOver';
import UiButton from '../button/UiButton';

type ComponentType = typeof UiPopOver;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/PopOver',
  component: UiPopOver,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div>
      <UiButton variant="contained" onClick={handleOpen}>
        Open Popover
      </UiButton>
      <UiPopOver {...args} open={isOpen} onClose={handleClose} />
    </div>
  );
};

export const PopOver: Story = Template.bind({});
PopOver.args = {
  children: "Popover Content",
  open: false,
};
