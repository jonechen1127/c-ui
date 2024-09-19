import CSection from './Section.vue';

// 为组件提供 install 方法，供按需引入
CSection.install = function (Vue) {
  Vue.component(CSection.name, CSection);
};
export const Section = CSection;
export default CSection;
