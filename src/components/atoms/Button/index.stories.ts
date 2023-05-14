import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "Button",
    font_size: "XXL",
  },
};

export const OutLineButton: Story = {
  args: {
    text: "OutLine",
    outline: true,
    font_size: "XXL",
  },
};

export const IsLoadingButton: Story = {
  args: {
    text: "Is Loading",
    font_size: "XXL",
    is_loading: true,
  },
};
