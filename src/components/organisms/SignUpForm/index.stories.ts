import type { Meta, StoryObj } from '@storybook/react';
import SignUp from '.';

const meta: Meta<typeof SignUp> = {
    title: 'SignUp',
    component: SignUp,
};

export default meta;

type Story = StoryObj<typeof SignUp>;

export const Default: Story = {
    args: {},
};
