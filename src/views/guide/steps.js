const steps = [
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: '打开&关闭侧边栏',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: '指示当前页面位置',
      position: 'bottom'
    }
  },
  {
    element: '#header-search',
    popover: {
      title: 'Page Search',
      description: '页面搜索，快速导航',
      position: 'left'
    }
  },
  {
    element: '#screenfull',
    popover: {
      title: 'Screenfull',
      description: '将页面设置为全屏',
      position: 'left'
    }
  },
  {
    element: '#size-select',
    popover: {
      title: 'Switch Size',
      description: '切换系统大小',
      position: 'left'
    }
  },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: '您访问过的页面的历史',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
