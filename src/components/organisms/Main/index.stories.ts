import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Main from '.';
import { Provider } from 'react-redux';
import { wrapper } from '../../../redux/store';

const meta: Meta<typeof Main> = {
    title: 'Organisms/Main',
    component: Main,
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {
    args: {},
};
