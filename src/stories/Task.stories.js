import React from 'react';

import Task from './Task';

export default {
    component: Task,
    title: 'components/Task',
};

const Template = (args) => <Task {...args} /> ;

export const Default = Template.bind({});

Default.args = {
    task: {
        id: '1',
        title: 'Test task',
        state: 'TASK_INBOX',
        updateAt: new Date(2023, 0, 1, 9, 0)
    },
};

export const Pinned = Template.bind({});
Pinned.args = {
    task : {
        ...Default.args.task,
        state: 'TASK_PINNED',
    },
};

export const Archived = Template.bind({});
Archived.args = {
    task:{
        ...Default.args.task,
        state: 'TASK_ARCHIVED',
    },
};