<template>
  <div :class="classNames" role="status" />
</template>

<script>
export default {
  name: 'spinner',
  props: {
    variant: {
      default: 'success',
      type: String
    },
    size: {
      type: String,
      default: null
    }
  },
  computed: {
    classNames() {
      const classList = ['spinner-border', `text-${this.variant}`];

      if (this.size) {
        classList.push(`spinner-border-${this.size}`);
      }

      return classList;
    }
  }
};
</script>
