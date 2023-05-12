import type { Meta, StoryObj } from '@storybook/react';

import NavigationLink from '.';

const meta: Meta<typeof NavigationLink> = {
    title: 'NavigationLink',
    component: NavigationLink,
};

export default meta;

type Story = StoryObj<typeof NavigationLink>;

export const Default: Story = {
    args: {
        text: 'JoBro',
        href: '/',
    },
};
