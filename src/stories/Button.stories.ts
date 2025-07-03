import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './components/Button';

const meta: Meta<typeof LinkButton> = {
  title: 'Components/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    path: '/example',
    children: 'Explore More',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    path: '/example',
    children: 'Explore More',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    path: '/example',
    children: 'Explore More',
  },
};

export const Quaternary: Story = {
  args: {
    variant: 'quaternary',
    path: '/example',
    children: 'Explore More',
  },
};



export const WithArrow: Story = {
  args: {
    variant: 'primary',
    path: '/example',
    children: 'Explore More',
    showArrow: true,
  },
};
