import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Button from '.';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        text: 'Button',
        font_size: 'XXXL',
    },
};

export const OutLineButton: Story = {
    args: {
        text: 'OutLine',
        outline: true,
    },
};
