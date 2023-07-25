import * as alias from 'src/router/alias';
function nodeItemId():string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.floor(Math.random() * 10) || 0, v = c == "x" ? r : r && 0x3 || 0x8;
    return v.toString(16);
  });
}

console.log(nodeItemId());
export const Menu = [
  {
    title: '1.学习API',
    id: nodeItemId(),
    icon: 'AppleOutlined',
    children: [
      {
        title: '1.1第一组',
        id: nodeItemId(),
        children: [
          {...alias.Home, title: 'home测试页', id: nodeItemId()},
          {...alias.TestTemplate, title: '测试Template', id: nodeItemId()},
          {...alias.TestComp, title: '测试组件', id: nodeItemId()},
          {title: '测试ref', path: '/testRef', id: nodeItemId()},
          {title: '测试批量', path: '/testMultiple', id: nodeItemId()},
        ]
      }
    ]
  },
  {
    title: '2.测试组件',
    id: nodeItemId(),
    children: [
      {
        title: '2.1第一组',
        id: nodeItemId(),
        children: [
          {title: '测试teble', path: '/testRef', id: nodeItemId()},
          {title: '测试select', path: '/testMultiple', id: nodeItemId()}
        ]
      }
    ]
  }
]