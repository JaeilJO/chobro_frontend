import type { Meta, StoryObj } from '@storybook/react';

import AvatarIcon from '.';

const meta: Meta<typeof AvatarIcon> = {
    title: 'Atoms/AvatarIcon',
    component: AvatarIcon,
};

export default meta;

type Story = StoryObj<typeof AvatarIcon>;

export const Default: Story = {
    args: {
        height: 50,
        width: 50,
        username: 'Kim',
    },
};
