<template>
<div id="sidebar">
  <div class="rooms">
    <IconButton
      icon="all"
      :class="{
        '-active':
          $store.state.activeDrawer.core === 'rooms' && $store.state.activeDrawer.sub === 'all'
      }"
      @click.native="$store.dispatch('commitActiveDrawer', { core: 'rooms', sub: 'all' })"
    />
    <IconButton
      v-for="category in Object.keys(rooms)"
      :key="category"
      :icon="category"
      :class="{
        '-active':
          $store.state.activeDrawer.core === 'rooms' && $store.state.activeDrawer.sub === category
      }"
      @click.native="$store.dispatch('commitActiveDrawer', { core: 'rooms', sub: category })"
    />

    <div class="divider"></div>

    <IconButton
      icon="resource"
      :class="{'-active': $store.state.activeDrawer.core === 'resources'}"
      @click.native="$store.dispatch('commitActiveDrawer', { core: 'resources' })"
    />
  </div>
  <IconButton
    type="uni"
    icon="cog"
    :class="{'-active': $store.state.activeDrawer.core === 'settings'}"
    @click.native="$store.dispatch('commitActiveDrawer', { core: 'settings' })"
  />
</div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Sidebar',
  components: { IconButton },
  computed: { ...mapGetters(['rooms']) }
}
</script>

<style lang="scss">
#sidebar {
  background: $bg-3;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: auto 64px;

  .divider {
    height: 2px;
    width: 56px;
    border-radius: 4px;
    background: $bg-4;
    margin: 8px auto;
  }
}
</style>
