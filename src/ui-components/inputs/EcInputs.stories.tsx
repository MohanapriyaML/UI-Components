import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcInput from './EcInputs';

type ComponentType = typeof EcInput;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Input',
  component: EcInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <EcInput {...args} />;

export const Input: Story = Template.bind({});
Input.args = {
  id: 'story-input',
  placeholder: 'Search',
  width: 100,
};
