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
  position: relative;
  padding: 20px;
  width: auto;
  height: 24px;
  @include noselect();

  cursor: pointer;
  &:hover { background: $bg-4; }

  &:after {
    content: '';
    position: absolute;
    top: 32px;
    left: 0;
    height: 0px;
    width: 4px;
    border-radius: 0 4px 4px 0;
    background: white;
    transition: 0.15s ease;
  }

  &.-active {
    background: $bg-2;
    &:after {
      content: '';
      top: 0;
      height: 64px;
    }
  }
}
</style>
