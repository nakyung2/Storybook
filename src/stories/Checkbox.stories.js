import React from 'react';
import Checkbox from './Checkbox';

export default {
    component: Checkbox,
    title: 'components/Checkbox',
}

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args={
    checkbox: {
        id : '1',
        title : 'Default',
        state : 'None',
    }
}

export const Checked = Template.bind({});
Checked.args={
    checkbox: {
        id : '2',
        title : 'Checked',
        state : 'Checked',
    }
}
