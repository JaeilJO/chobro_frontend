import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Logo from '.';
import theme from '../../../styles/theme';

const meta: Meta<typeof Logo> = {
    title: 'Logo',
    component: Logo,
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
    args: {
        text: 'JoBro',
        href: '/',
    },
};
