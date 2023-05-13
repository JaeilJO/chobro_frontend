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

export const Default: Story = {
    args: {},
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const emailInput = await canvas.getByTestId('E-mail');
        await userEvent.type(emailInput, 'Example@gmail.com');

        const passwordInput = await canvas.getByTestId('Password');
        await userEvent.type(passwordInput, 'password');
    },
};
