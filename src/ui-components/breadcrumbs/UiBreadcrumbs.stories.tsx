import React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import EcBreadcrumbs from './UiBreadcrumbs';

type ComponentType = typeof EcBreadcrumbs;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: 'UI/Breadcrumbs',
    component: EcBreadcrumbs,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => {
    return (
        <EcBreadcrumbs {...args}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
        </EcBreadcrumbs>
    );
};

export const Breadcrumbs: Story = Template.bind({});
Breadcrumbs.args = {
    separator: '/',
};
