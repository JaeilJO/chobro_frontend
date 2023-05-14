import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, getByText } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import Avatar from '.';
import theme from '../../../styles/theme';
import { loginModalDropDownItems } from '../../../utils/listItems';

const meta: Meta<typeof Avatar> = {
    title: 'organisms/Avatar',
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const MockOnClick = () => {};

export const Default: Story = {
    args: {
        username: 'Kim',
        dropdown_datas: loginModalDropDownItems,
        avataricon_font_size: 'XXXL',
        dropdown_toggle: true,
    },
};
