import type { Meta, StoryObj } from '@storybook/react';
import TableBodyRow from '.';

const meta: Meta<typeof TableBodyRow> = {
    title: 'Molecules/TableBodyRow',
    component: TableBodyRow,
};

export default meta;

type Story = StoryObj<typeof TableBodyRow>;

export const Default: Story = {
    args: {
        url: 'https://example.com',
        certificate: 'example.com',
        expiration_date: '2023-06-30',
        is_active: true,
        cert_id: 'd33146dc-1250-4d09-b697-f1668273a726',
        created_at: '2023-04-30',
        updated_at: '2023-05-03',
    },
};
