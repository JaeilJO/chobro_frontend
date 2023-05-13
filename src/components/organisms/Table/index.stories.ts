import type { Meta, StoryObj } from '@storybook/react';
import Table from '.';

const meta: Meta<typeof Table> = {
    title: 'Organisms/Table',
    component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
    args: {},
};
