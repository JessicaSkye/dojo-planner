<template>
  <div class="icon-btn">
    <Icon v-if="type === 'uni'" :icon="icon" />
    <img v-if="type === 'local'" :src="require(`../assets/icons/${icon}.svg`)">
  </div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'IconButton',
  components: { Icon },
  props: {
    type: {
      type: String,
      default: 'local',
      validator: (value) => {
        return value === 'uni' || value === 'local'
      }
    },
    icon: {
      type: String,
      default: 'menu'
    }
  }
}
</script>

<style lang="scss">
.icon-btn {
  padding: 20px;
  width: auto;
  height: 24px;

  cursor: pointer;
  &:hover { background: $bg-2; }

  &:after {
    content: '';
    position: absolute;
    top: 32px;
    left: 0;
    height: 0%;
    border-radius: 0 4px 4px 0;
    transition: 0.15s ease;
  }

  &.-active {
    position: relative;
    background: $bg-4;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      width: 4px;
      height: 100%;
      background: white;
    }
  }
}
</style>
