import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '.';

const meta: Meta<typeof Navigation> = {
    title: 'Navigation',
    component: Navigation,
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
    args: {
        justify_content: 'flex-start',
    },
};

export const NavigationFlexEnd: Story = {
    args: {
        justify_content: 'flex-end',
    },
};

export const NavigationCenter: Story = {
    args: {
        justify_content: 'center',
    },
};

export const NavigationSpaceBetween: Story = {
    args: {
        justify_content: 'space-between',
    },
};
