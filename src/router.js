import { createRouter, createWebHistory } from 'vue-router';

// let currentPage = Home

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/catalog/',
      name: 'catalog',
      alias: '/',

      component: () => import('@/pages/Catalog/Catalog.vue'),

      meta: {
        title: 'Каталог запчастей GILBER'
      }
    },
    // {
    //   path: '/catalog/:categoryId/',

    //   component: () => import('@/pages/Catalog/Catalog.vue'),

    //   meta: {
    //     title: 'Каталог запчастей GILBER'
    //   } 
    // },
    {
      path: '/catalog/:categoryId/:categoryName/',
      name: 'catalogCategory',

      component: () => import('@/pages/Catalog/Catalog.vue'),

      meta: {
        routs: [
          {
            name: 'Главная',
            path: '/',
          },
          {
            name: 'Каталог запчастей GILBER',
            path: '/catalog/',
          }
        ],
        title: 'Каталог запчастей GILBER',
      }
    },
    {
      path: '/product/:cardArticul/:cardName/',
      name: 'card',

      component: () => import('@/pages/Card/Card.vue'),

      meta: {
        routs: [
          {
            name: 'Главная',
            path: '/',
          },
          {
            name: 'Каталог запчастей GILBER',
            path: '/catalog/'
          }
        ],
        title: 'Каталог запчастей GILBER',
      }
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/Error404/Error404.vue'),

      meta: {
        hideNav: true,
        name: 'Страница не найдена',
      }
    },
  ],
});
