import CButton from './Button.vue';
CButton.install = Vue => {
  Vue.component(CButton.name, CButton);
};
export const Button = CButton;
export default CButton;
