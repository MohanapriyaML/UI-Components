import React, { useState } from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import UiRadioButton from './UiRadio';

type ComponentType = typeof UiRadioButton;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: 'UI/RadioButton',
    component: UiRadioButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;

const Template: StoryFn<ComponentType> = (args: any) => {
    const [selectedValue, setSelectedValue] = useState(args.isSelectedValue);

    return (
        <div>
            <UiRadioButton
                {...args}
                value="Option 1"
                isSelectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
            option 1
            <UiRadioButton
                {...args}
                value="Option 2"
                isSelectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
            />
            option 2
        </div>
    );
};

export const RadioButton: Story = Template.bind({});
RadioButton.args = {
    name: "RadioGroup",
    disabled: false,
    isSelectedValue: "Option 1",
};
