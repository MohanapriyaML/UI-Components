import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcLinks from './EcLinks';

type ComponentType = typeof EcLinks;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Links',
  component: EcLinks,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => <EcLinks {...args} />;

export const Links: Story = Template.bind({});
Links.args = {
    children:"Website Link",
    href:"https://www.google.com/"
};
