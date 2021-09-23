const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: 'Index',
        path: '',
        component: () => import('pages/index/Index.vue')
      },
      {
        name: 'Instance',
        path: 'instance',
        component: () => import('pages/instance/Instance.vue')
      },
      {
        name: 'Community',
        path: 'community',
        component: () => import('pages/community/Community.vue')
      },
      {
        name: 'Message',
        path: 'message',
        component: () => import('pages/message/MessageList.vue')
      },
      {
        name: 'EmailMe',
        path: 'email-me',
        component: () => import('pages/EmailMe.vue')
      },
      {
        name: 'About',
        path: 'about',
        component: () => import('pages/about/About.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
