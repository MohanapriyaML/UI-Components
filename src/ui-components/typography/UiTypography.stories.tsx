import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiTypography from './UiTypography';

type ComponentType = typeof UiTypography;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Typography',
  component: UiTypography,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <UiTypography {...args} />;

export const Typography: Story = Template.bind({});

Typography.args = {
    children:"Typography",
    variant:"h6",
    fontStyle:"Poppines",
    decoration:"underline",
}

