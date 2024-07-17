import type { Meta, StoryObj } from '@storybook/react';
import UiAccordion from './UiAccordion';
import React from 'react';


type ComponentType = typeof UiAccordion;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Accordin',
  component: UiAccordion,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Accordion: Story = {
  args: {
    id:"Ec-Accordin",
    title: "Accordion",
    children: <h1>Accordion Stories</h1>,
  },
};
