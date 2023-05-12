import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import AuthInput from '.';
import theme from '../../../styles/theme';

const meta: Meta<typeof AuthInput> = {
    title: 'AuthInput',
    component: AuthInput,
};

export default meta;

type Story = StoryObj<typeof AuthInput>;

export const Default: Story = {
    args: {},
};
