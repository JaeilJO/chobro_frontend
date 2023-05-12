import type { Meta, StoryObj } from "@storybook/react";

import Logo from ".";

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

const Template = (args) => <Logo {...args} />;

export const Hello: Story = {
  args: {
    width: 50,
    height: 50,
    text: "Hello",
  },
};
