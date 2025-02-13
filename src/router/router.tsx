import React from 'react'

import LazyLoad from './LazyLoad/LazyLoad'

const router: Route[] = [
  {
    path: '/',
    element: LazyLoad(import('@/views/layout')),
    name: '/layout',
    children: [
      {
        path: '/',
        element: LazyLoad(import('@/views/page')),
        name: 'home',
      },
      {
        path: '/:scienceId',
        element: LazyLoad(import('@/views/[scienceId]/page')),
        name: 'scienceId',
      },
    ],
  },
  {
    path: '/*',
    element: LazyLoad(import('@/views/notfound')),
    name: 'Not Found',
  },
]
export default router
export interface Route {
  path: string
  element: React.ReactNode
  name: string
  children?: Route[]
  isHidden?: boolean
  label?: string
}
