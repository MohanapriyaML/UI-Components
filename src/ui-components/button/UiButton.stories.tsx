import { Meta, StoryObj } from "@storybook/react";
import UiButton from "./UiButton";

type ComponentType = typeof UiButton;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "UI/Button",
    component: UiButton,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta;

export const Button: Story = {
    args: {
        children: "Button",
        variant: "contained",
        color: "primary",
    }
}