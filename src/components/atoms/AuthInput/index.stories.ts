import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import AuthInput from '.';
import theme from '../../../styles/theme';

const meta: Meta<typeof AuthInput> = {
    title: 'Atoms/AuthInput',
    component: AuthInput,
};

export default meta;

type Story = StoryObj<typeof AuthInput>;

export const EmailInput: Story = {
    args: {
        type: 'email',
        placeholder: 'E-mail',
    },
};

export const passwordInput: Story = {
    args: {
        type: 'password',
        placeholder: 'Password',
    },
};

export const ChekcingClickAction: Story = {
    args: {
        type: 'email',
        placeholder: 'E-mail',
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const label = await canvas.getByText('E-mail');
        userEvent.click(await canvas.getByRole('textbox'));
        expect(label).toHaveStyle(`font-size:15px`);
    },
};
