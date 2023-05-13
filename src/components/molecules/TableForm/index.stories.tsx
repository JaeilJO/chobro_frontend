import type { Meta, StoryObj } from '@storybook/react';

import TableForm from '.';

const meta: Meta<typeof TableForm> = {
    title: 'Molecules/TableForm',
    component: TableForm,
};

export default meta;

type Story = StoryObj<typeof TableForm>;

export const Default: Story = {
    render: () => (
        <table style={{ borderCollapse: 'collapse', borderSpacing: 0, width: '100%' }}>
            <tr>
                <th>Head1</th>
                <th>Head2</th>
                <th>Head3</th>
                <th>Haed4</th>
                <th>Haed5</th>
            </tr>
            <TableForm />
        </table>
    ),
};
