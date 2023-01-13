export default {
  model: {},
  qiankun: {
    slave: {},
  },
  mfsu: false,
  base: 'manual-slave',
  routes: [
    { path: '/home', component: 'home' },
    { path: '/count', component: 'count' },
    { path: '/nav', component: 'nav' },
  ],
};
