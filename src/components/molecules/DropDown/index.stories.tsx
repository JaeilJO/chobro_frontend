import type { Meta, StoryObj } from '@storybook/react';

import DropDown from '.';

const meta: Meta<typeof DropDown> = {
    title: 'MOLECULES/DropDown',
    component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

const MockDatas = [
    { id: 1, text: 'Item1', type: 'logout' },
    { id: 2, text: 'Item2', type: '' },
    { id: 3, text: 'Item3', type: '' },
];

export const Default: Story = {
    args: {
        dropdown_datas: MockDatas,
        dropdown_toggle: true,
    },
    decorators: [
        (Story) => (
            <div style={{ width: '100px', height: '10px', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
};
