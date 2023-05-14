import type { Meta, StoryObj } from '@storybook/react';

import DropDownButton from '.';

const meta: Meta<typeof DropDownButton> = {
    title: 'Atoms/DropDownButton',
    component: DropDownButton,
};

export default meta;

type Story = StoryObj<typeof DropDownButton>;

export const Default: Story = {
    args: {
        text: 'Drop Down Button',
    },
};
