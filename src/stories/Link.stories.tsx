import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { PlainLink, PlainLinkProps } from './components/Link';

export default {
  title: 'Components/PlainLink',
  component: PlainLink,
  argTypes: {
    path: { control: 'text', description: 'The URL or path to navigate to' },
    target: { control: 'text', description: 'The target attribute for the link' },
    rel: { control: 'text', description: 'The rel attribute for the link' },
    className: { control: 'text', description: 'Additional CSS classes' },
    children: { control: 'text', description: 'Link content' },
  },
} as Meta;

const Template: StoryFn<PlainLinkProps> = (args) => <PlainLink {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: '/example',
  children: 'Default Link',
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  path: 'https://example.com',
  children: 'External Link',
  target: '_blank',
  rel: 'noopener noreferrer',
};

export const CustomStyled = Template.bind({});
CustomStyled.args = {
  path: '/example',
  children: 'Custom Styled Link',
  className: 'text-lg font-bold',
};