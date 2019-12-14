<template>
<div class="drawer">
  <div class="header">
    <p class="title">
      {{ $store.state.activeDrawer.core }}
      <span v-if="$store.state.activeDrawer.sub">
        /
        {{ $store.state.activeDrawer.sub }}
      </span>
    </p>
    <Icon
      icon="multiply"
      @click.native="$store.dispatch('clearDrawer')"
      class="close-btn"
    />
  </div>
  <Component
    v-if="$store.state.activeDrawer.core"
    :is="$store.state.activeDrawer.core+'Drawer'"
    :sub="$store.state.activeDrawer.sub"
  />
</div>
</template>

<script>
import menuDrawer from '@/components/Drawer/Menu.vue'
import roomsDrawer from '@/components/Drawer/Rooms.vue'
import resourcesDrawer from '@/components/Drawer/Resources.vue'
import settingsDrawer from '@/components/Drawer/Settings.vue'

import Icon from '@/components/Icon.vue'

export default {
  name: 'Drawer',
  components: { menuDrawer, roomsDrawer, resourcesDrawer, settingsDrawer, Icon }
}
</script>

<style lang="scss">
.drawer {
  background: $bg-2;
  overflow: hidden;

  > .header {
    display: grid;
    grid-template-columns: auto 64px;
    align-items: center;

    > .title {
      margin: 0;
      text-transform: capitalize;
      padding: 21px 16px;
      font-size: 18px;
    }

    > .close-btn {
      cursor: pointer;
      opacity: 0.5;
      padding: 20px;
      border-radius: 0 0 0 4px;
      &:hover {
        opacity: 1;
        background: $bg-3;
      }
    }
  }
}
</style>
