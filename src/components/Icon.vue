<template>
<i class="uil" :class="[`uil-${icon}`, `-size${size}`]" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'heart'
    },
    size: {
      type: String,
      default: 'm'
    }
  }
}
</script>

<style lang="scss">
.uil {
  display: inline-block;

  &:before {
    margin: 0;
    vertical-align: top;
  }

  &.-sizexs {
    font-size: 16px;
    height: 16px;
  }
  &.-sizes {
    font-size: 20px;
    height: 20px;
  }
  &.-sizem {
    font-size: 24px;
    height: 24px;
  }
  &.-sizel {
    font-size: 28px;
    height: 28px;
  }
  &.-sizexl {
    font-size: 32px;
    height: 32px;
  }
}
</style>
