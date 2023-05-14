import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '.';

const meta: Meta<typeof Avatar> = {
    title: 'Atoms/Avatar',
    component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        height: 50,
        width: 50,
        username: 'Kim',
    },
};
