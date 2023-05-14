import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import DropDown from '.';
import theme from '../../../styles/theme';
import { loginModalDropDownItems } from '../../../utils/listItems';

const meta: Meta<typeof DropDown> = {
    title: 'MOLECULES/DropDown',
    component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

const MockDatas = [
    { id: 1, text: 'Item1' },
    { id: 2, text: 'Item2' },
    { id: 3, text: 'Item3' },
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
