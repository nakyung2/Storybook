import React from 'react';

import { Button } from './Button';
import { withDesign } from 'storybook-addon-designs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [withDesign],
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

Primary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/AcuzZ6ORFgI6bs5H8KMAd5/Untitled?node-id=85%3A2&t=torVNMbzUPhGvGIV-0",
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

Secondary.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/AcuzZ6ORFgI6bs5H8KMAd5/Untitled?node-id=97%3A2&t=torVNMbzUPhGvGIV-0",
  },
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
