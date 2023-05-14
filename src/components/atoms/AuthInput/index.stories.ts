import type { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, getByText } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import AuthInput from ".";
import theme from "../../../styles/theme";

const meta: Meta<typeof AuthInput> = {
  title: "Atoms/AuthInput",
  component: AuthInput,
};

export default meta;

type Story = StoryObj<typeof AuthInput>;

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "E-mail",
  },
};

export const PasswordInput: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const TextInput: Story = {
  args: {
    type: "text",
    placeholder: "Text Input",
  },
};
