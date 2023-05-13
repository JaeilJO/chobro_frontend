import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Header from '.';
import { Provider } from 'react-redux';
import { wrapper } from '../../../redux/store';

const meta: Meta<typeof Header> = {
    title: 'Organisms/Header',
    component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {},
};
