import React from 'react';
// import './Task.css'
import Task from './Task';

export default {
     // 해당 컴포넌트
     component: Task,
    // 스토리북 앱의 사이드바에서 컴포넌트를 참조하는 방법
     title: 'components/Task',
}

// 순열(permutations)이 여러 개이기 때문에 Template 변수에 할당하는 것이 편리
// args의 값이 변하면 컴포넌트도 함께 변함
const Template = (args) => <Task {...args} />;

// 함수의 복사본을 만드는 표준 JavaScript의 한 기법
// 각각의 스토리가 고유한 속성(properties)을 갖지만 동일한 결과물을 사용하도록
export const Default = Template.bind({});
Default.args={
    task:{
        id:'1',
        title: "default"
        // state:'default'
    }
};

export const Pinned = Template.bind({});
Pinned.args={
    task:{
        id:'2',
        title: "pinned",
        pinned: true,
                ...Default.args.task,
                // state:'pinned'
    }
};

export const Archived = Template.bind({});
Archived.args={
    task:{
        id:'3',
        title: "archived",
        archived: true,
                ...Default.args.task,
        // state:'archived'
    }
}

// export const Default = Template.bind({});
// Default.args = {
//     task: {
//         id: '1',
//         title: 'Test task',
//         state: 'TASK_INBOX',
//         updateAt: new Date(2023, 0, 1, 9, 0)
//     },
// };

// export const Pinned = Template.bind({});
// Pinned.args = {
//     task : {
//         ...Default.args.task,
//         state: 'TASK_PINNED',
//     },
// };

// export const Archived = Template.bind({});
// Archived.args = {
//     task:{
//         ...Default.args.task,
//         state: 'TASK_ARCHIVED',
//     },
// };