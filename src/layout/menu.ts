export const Menu = [
  {
    name: '1.学习API',
    id: 1,
    icon: 'AppleOutlined',
    children: [
      {
        name: '1.1第一组',
        id: 11,
        children: [
          {name: '测试ref', path: '/testRef', id: 111},
          {name: '测试批量', path: '/testMultiple', id: 112}
        ]
      }
    ]
  },
  {
    name: '2.测试组件',
    id: 2,
    children: [
      {
        name: '2.1第一组',
        id: 21,
        children: [
          {name: '测试teble', path: '/testRef', id: 211},
          {name: '测试select', path: '/testMultiple', id: 212}
        ]
      }
    ]
  }
]