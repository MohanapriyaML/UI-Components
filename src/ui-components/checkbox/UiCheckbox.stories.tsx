import { Meta, StoryFn, StoryObj } from "@storybook/react";
import UiCheckbox from "./UiCheckbox";
import React from "react";

type ComponentType = typeof UiCheckbox;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "Ui/Checkbox",
    component: UiCheckbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta;

const Template: StoryFn<typeof UiCheckbox> = (args) => <UiCheckbox {...args} />;

export const Checkbox = Template.bind({});
    Checkbox.args = {
        label: "Checkbox content",
        name: "Priya",
        checked: true,
        disabled: false,
        size: "medium"
    };