import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from '.';

const meta: Meta<typeof ProgressBar> = {
    title: 'Atoms/ProgressBar',
    component: ProgressBar,
};

export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
    args: {
        percentage: 20,
    },
};

export const WarnColor: Story = {
    args: {
        percentage: 60,
    },
};

export const DangerColor: Story = {
    args: {
        percentage: 90,
    },
};
