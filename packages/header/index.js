import CHeader from './Header.vue';
// 为组件提供 install 方法，供按需引入
CHeader.install = function (Vue) {
  Vue.component(CHeader.name, CHeader);
};
export const Header = CHeader;
export default CHeader;
