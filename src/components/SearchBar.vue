<template>
<div class="search-bar">
  <input
    type="text"
    :value="value"
    placeholder="Search"
    @input="$emit('input', $event.target.value)"
  >
  <Icon icon="search" />
</div>
</template>

<script>
import Icon from '@/components/Icon.vue'

export default {
  name: 'SearchBar',
  components: { Icon },
  props: {
    value: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss">
.search-bar {
  padding: 0 16px;
  position: relative;

  > input {
    width: 100%;
    padding: 8px 16px;
    background: $bg-3;
    border: none;
    border-radius: 4px;
    color: white;
    box-sizing: border-box;
    font-size: 14px;
    transition: 0.15s ease;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px $bg-4;
    }
  }

  > .uil {
    position: absolute;
    top: 6px;
    right: 32px;
    opacity: 0.5;
  }
}
</style>
