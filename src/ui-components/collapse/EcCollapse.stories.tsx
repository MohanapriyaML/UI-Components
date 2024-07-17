import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import EcCollapse from './EcCollapse';
import { ExpandMoreProps } from './types';

const meta: Meta<ExpandMoreProps> = {
    title: 'UI/Collapse',
    component: EcCollapse,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template = (args: ExpandMoreProps) => {
    const [expanded, setExpanded] = useState(args.expanded);

    const handleToggle = () => {
        setExpanded((prevExpanded: any) => !prevExpanded);
    };

    return <EcCollapse {...args} expanded={expanded} onToggle={handleToggle} />;
};

export const Collapse: StoryObj<ExpandMoreProps> = {
    render: Template,
    args: {
        children: 'Collapse Content',
        title: 'Collapse',
        secondaryAction: 'Toggle Content',
        expanded: true,
    }
}
