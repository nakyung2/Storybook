import React from "react";
import Checkbox from "./Checkbox.js";

export default {
    component: Checkbox,
    title: 'components/Checkbox'
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args={
        id : '1',
        state : 'none'
}

export const Checked = Template.bind({});
Checked.args={
        id: '2',
        state : 'checked'
}
