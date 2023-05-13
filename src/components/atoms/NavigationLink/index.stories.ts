import type { Meta, StoryObj } from '@storybook/react';

import NavigationLink from '.';

const meta: Meta<typeof NavigationLink> = {
    title: 'Atoms/NavigationLink',
    component: NavigationLink,
};

export default meta;

type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
    args: {
        text: 'ACTIVE',
        href: '/active',
        active_link: true,
    },
};

export const InactiveLink: Story = {
    args: {
        text: 'INACTIVE',
        href: '/inactive',
        active_link: false,
    },
};
