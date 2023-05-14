import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import DropDown from '.';
import theme from '../../../styles/theme';

const meta: Meta<typeof DropDown> = {
    title: 'Atoms/DropDown',
    component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

export const Default: Story = {
    args: {
        text: 'JoBro',
        href: '/',
    },
};
