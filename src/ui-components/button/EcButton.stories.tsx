import { Meta, StoryObj } from "@storybook/react";
import EcButton from "./EcButton";

type ComponentType = typeof EcButton;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "UI/Button",
    component: EcButton,
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