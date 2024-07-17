import { Meta, StoryObj } from "@storybook/react";
import UiDropDown from "./UiDropDown";



type ComponentType = typeof UiDropDown;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "UI/DropDown",
    component: UiDropDown,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta;

export const Dropdown: Story = {
    args: {
        items: [
            {name:"Priya",children:"Option 1"},
            {name:"Sanjay",children:"Option 2"},
            {name:"Santhosh",children:"Option 3"},
        ],
        button:{
            children:"DropDown",
            variant:"contained"
        }
    }
}