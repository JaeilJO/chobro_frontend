import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import DropDown from '.';
import theme from '../../../styles/theme';

const meta: Meta<typeof DropDown> = {
    title: 'MOLECULES/DropDown',
    component: DropDown,
};

export default meta;

type Story = StoryObj<typeof DropDown>;

const MockOnClickHandler = () => {
    alert('Hello');
};

export const Default: Story = {
    args: {
        dropdown_datas: [
            { id: 1, text: 'Item1', on_click: MockOnClickHandler },
            { id: 2, text: 'Item2', on_click: MockOnClickHandler },
        ],
    },
};
