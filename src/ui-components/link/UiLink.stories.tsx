import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiLinks from './UiLinks';

type ComponentType = typeof UiLinks;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Links',
  component: UiLinks,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <UiLinks {...args} />;

export const Links: Story = Template.bind({});
Links.args = {
    children:"Website Link",
    href:"https://www.google.com/"
};
