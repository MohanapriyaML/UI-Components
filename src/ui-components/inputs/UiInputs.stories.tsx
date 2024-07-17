import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiInput from './UiInputs';

type ComponentType = typeof UiInput;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Input',
  component: UiInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <UiInput {...args} />;

export const Input: Story = Template.bind({});
Input.args = {
  id: 'story-input',
  placeholder: 'Search',
  width: 100,
};
