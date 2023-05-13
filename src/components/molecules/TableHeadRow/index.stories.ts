import type { Meta, StoryObj } from '@storybook/react';
import TableHeadRow from '.';

const meta: Meta<typeof TableHeadRow> = {
    title: 'Molecules/TableHeadRow',
    component: TableHeadRow,
};

export default meta;

type Story = StoryObj<typeof TableHeadRow>;

export const Default: Story = {
    args: {},
};
