<template>
<div
  id="planner"
  class="view"
  :class="{'-opendrawer': $store.state.activeDrawer}"
>
  <Header />
  <Sidebar />
  <Drawer />
  <Canvas />
  <StatusBar />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Drawer from '@/components/Drawer.vue'
import Canvas from '@/components/Canvas.vue'
import StatusBar from '@/components/StatusBar.vue'

export default {
  name: 'Planner',
  components: { Header, Sidebar, Drawer, Canvas, StatusBar }
}
</script>

<style lang="scss">
#planner.view {
  display: grid;
  grid-template-columns: 64px 0px auto;
  grid-template-rows: 64px auto 32px;

  transition: 0.15s ease;
  &.-opendrawer { grid-template-columns: 64px 304px auto; }
}
</style>
