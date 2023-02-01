export default {
    title: 'assets/Image',
    component: 'Image',
    argTypes: {
        "src": {
            description: "이미지 파일 절대경로"
        },
      },
  };

const Template = args => <img src={args.src} />;

export const Bamong = Template.bind({})
Bamong.args = {
    src: 'http://localhost:3000/img/bamong.png',
}
Bamong.storyName = 'Bamong(PNG)'

export const Bombom = Template.bind({})
Bombom.args = {
    src: 'http://localhost:3000/img/bombom.png',
}
Bombom.storyName = 'Bombom(PNG)'

export const Cu = Template.bind({})
Cu.args = {
    src: 'http://localhost:3000/img/cu.png',
}
Cu.storyName = 'Cu(PNG)'