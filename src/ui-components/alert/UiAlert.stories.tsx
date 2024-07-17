import type { Meta, StoryObj } from '@storybook/react';
import UiAlert from './UiAlert';
import React from 'react';

type ComponentType = typeof UiAlert;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Alert: Story = {
  args: {
    title: "Alert",
    children: <h1>Alert Content</h1>,
    color:"error",
    variant:"filled",
    severity:"success"
  },
};
