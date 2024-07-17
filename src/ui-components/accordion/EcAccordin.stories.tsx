import type { Meta, StoryObj } from '@storybook/react';
import EcAccordion from './EcAccordion';

type ComponentType = typeof EcAccordion;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
  title: 'UI/Accordin',
  component: EcAccordion,
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
