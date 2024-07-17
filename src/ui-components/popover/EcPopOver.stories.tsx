import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcButton from '../button/EcButton';
import EcPopOver from './EcPopOver';

type ComponentType = typeof EcPopOver;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/PopOver',
  component: EcPopOver,
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
      <EcButton variant="contained" onClick={handleOpen}>
        Open Popover
      </EcButton>
      <EcPopOver {...args} open={isOpen} onClose={handleClose} />
    </div>
  );
};

export const PopOver: Story = Template.bind({});
PopOver.args = {
  children: "Popover Content",
  open: false,
};
