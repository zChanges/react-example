export interface Menus {
  key: string;
  title: string;
  icon: string;
  link?: string;
  sub?: Array<Menus>;
}
export const menus: Array<Menus> = [
  { key: '/app', title: '首页', icon: 'mobile' },
  // {
  //   key: '/app/ui',
  //   title: 'UI',
  //   icon: 'scan',
  //   sub: [
  //     { key: '/app/ui/buttons', title: '按钮', icon: '' },
  //     { key: '/app/ui/icons', title: '图标', icon: '' },
  //     { key: '/app/ui/spins', title: '加载中', icon: '' },
  //     { key: '/app/ui/modals', title: '对话框', icon: '' },
  //     { key: '/app/ui/notifications', title: '通知提醒框', icon: '' },
  //     { key: '/app/ui/tabs', title: '标签页', icon: '' },
  //     { key: '/app/ui/banners', title: '轮播图', icon: '' },
  //     { key: '/app/ui/wysiwyg', title: '富文本', icon: '' },
  //     { key: '/app/ui/drags', title: '拖拽', icon: '' },
  //     { key: '/app/ui/gallery', title: '画廊', icon: '' }
  //   ]
  // },
  // {
  //   key: '/app/form',
  //   title: '表单',
  //   icon: 'edit',
  //   sub: [{ key: '/app/form/basicForm', title: '基础表单', icon: '' }]
  // },
  {
    key: '/page',
    title: '页面',
    icon: 'switcher',
    sub: [
      { key: '/login', title: '登录', icon: '' },
      { key: 'app/login', title: '内登陆', icon: '' }
    ]
  }
];
