import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcSelect from './EcSelect';

type ComponentType = typeof EcSelect;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Select',
  component: EcSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <EcSelect {...args} />;

export const Select: Story = Template.bind({});
Select.args = {
  id: 'story-input',
  options: [
    { value: "Option1", label: "Option 1" },
    { value: "Option2", label: "Option 2" },
    { value: "Option3", label: "Option 3" },
  ],
};
