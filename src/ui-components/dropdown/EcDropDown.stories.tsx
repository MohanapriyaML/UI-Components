import { Meta, StoryObj } from "@storybook/react";
import EcDropDown from "./EcDropDown";


type ComponentType = typeof EcDropDown;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "UI/DropDown",
    component: EcDropDown,
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