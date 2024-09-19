<template>
  <div class="c-button" :class="[buttonType, buttonSize]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CButton',
  setup() {
    return {};
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    buttonType() {
      return `c-button-${this.type}`;
    },
    buttonSize() {
      return `c-button-${this.size}`;
    }
  }
};
</script>

<style lang="scss" scoped></style>
