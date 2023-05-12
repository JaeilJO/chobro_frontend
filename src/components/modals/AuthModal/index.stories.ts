import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import AuthModal from '.';

const meta: Meta<typeof AuthModal> = {
    title: 'AuthModal',
    component: AuthModal,
};

export default meta;

type Story = StoryObj<typeof AuthModal>;

export const Default: Story = {
    args: {},
};
