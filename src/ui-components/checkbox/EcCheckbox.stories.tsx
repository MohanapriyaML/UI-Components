import { Meta, StoryFn, StoryObj } from "@storybook/react";
import EcCheckbox from "./EcCheckbox";

type ComponentType = typeof EcCheckbox;
type Story = StoryObj<ComponentType>;
type MetaStory = Meta<ComponentType>;

const meta: MetaStory = {
    title: "Ui/Checkbox",
    component: EcCheckbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export default meta;

const Template: StoryFn<typeof EcCheckbox> = (args) => <EcCheckbox {...args} />;

export const Checkbox = Template.bind({});
    Checkbox.args = {
        label: "Checkbox content",
        name: "Priya",
        checked: true,
        disabled: false,
        size: "medium"
    };