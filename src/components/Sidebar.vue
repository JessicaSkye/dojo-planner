<template>
<div id="sidebar">
  <div class="rooms">
    <IconButton
      icon="all"
      :class="{'-active': $store.state.activeDrawer === 'all'}"
      @click.native="$store.dispatch('commitActiveDrawer', 'all')"
    />
    <IconButton
      v-for="category in Object.keys(rooms)"
      :key="category"
      :icon="category"
      :class="{'-active': $store.state.activeDrawer === category}"
      @click.native="$store.dispatch('commitActiveDrawer', category)"
    />
  </div>
  <IconButton
    type="uni"
    icon="cog"
    :class="{'-active': $store.state.activeDrawer === 'settings'}"
    @click.native="$store.dispatch('commitActiveDrawer', 'settings')"
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
}
</style>
