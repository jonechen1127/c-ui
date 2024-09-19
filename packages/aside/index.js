import CAside from './Aside.vue';
// 为组件提供 install 方法，供按需引入
CAside.install = function (Vue) {
  Vue.component(CAside.name, CAside);
};
export const Aside = CAside;
// 默认导出组件
export default CAside;
