import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EcImage from './EcImage';

type ComponentType = typeof EcImage;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Image',
  component: EcImage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template: Story = (args: any) => <EcImage {...args} />;


export const SmallImage: Story = Template.bind({});
SmallImage.args = {
  src: '/images/painting.png',
  alt: 'Small Placeholder Image',
  width: 50,
  height: 50,
};

export const MediumImage: Story = Template.bind({});
MediumImage.args = {
  src: '/images/painting.png',
  alt: 'Placeholder Image',
  width: 150,
  height: 150,
};

export const LargeImage: Story = Template.bind({});
LargeImage.args = {
  src: '/images/painting.png',
  alt: 'Large Placeholder Image',
  width: 600,
  height: 400,
};

