import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcTypography from './EcTypography';

type ComponentType = typeof EcTypography;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Typography',
  component: EcTypography,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <EcTypography {...args} />;

export const Typography: Story = Template.bind({});

Typography.args = {
    children:"Typography",
    variant:"h6",
    fontStyle:"Poppines",
    decoration:"underline",
}

