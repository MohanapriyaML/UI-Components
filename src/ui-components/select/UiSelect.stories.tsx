import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiSelect from './UiSelect';

type ComponentType = typeof UiSelect;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Select',
  component: UiSelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <UiSelect {...args} />;

export const Select: Story = Template.bind({});
Select.args = {
  id: 'story-input',
  options: [
    { value: "Option1", label: "Option 1" },
    { value: "Option2", label: "Option 2" },
    { value: "Option3", label: "Option 3" },
  ],
};
