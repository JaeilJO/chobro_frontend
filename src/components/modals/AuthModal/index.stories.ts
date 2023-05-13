import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import AuthModal from '.';

const meta: Meta<typeof AuthModal> = {
    title: 'Modals/AuthModal',
    component: AuthModal,
};

export default meta;

type Story = StoryObj<typeof AuthModal>;

export const LoginMode: Story = {
    args: {
        mode: 'login',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = await canvas.getByTestId('E-mail');
        await userEvent.type(emailInput, 'Example@gmail.com');

        const passwordInput = await canvas.getByTestId('Password');
        await userEvent.type(passwordInput, 'password');
    },
};
export const SignUpMode: Story = {
    args: {
        mode: 'signup',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const firstNameInput = await canvas.getByTestId('First Name');
        await userEvent.type(firstNameInput, 'First Name');

        const lastNameInput = await canvas.getByTestId('Last Name');
        await userEvent.type(lastNameInput, 'Last Name');

        const emailInput = await canvas.getByTestId('E-mail');
        await userEvent.type(emailInput, 'Example@gmail.com');

        const passwordInput = await canvas.getByTestId('Password');
        await userEvent.type(passwordInput, 'password');
    },
};
