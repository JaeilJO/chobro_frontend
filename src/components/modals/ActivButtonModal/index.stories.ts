import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import ActiveButtonModal from '.';

const meta: Meta<typeof ActiveButtonModal> = {
    title: 'Modals/ActiveButtonModal',
    component: ActiveButtonModal,
};

export default meta;

type Story = StoryObj<typeof ActiveButtonModal>;

export const Default: Story = {
    args: {},
};
