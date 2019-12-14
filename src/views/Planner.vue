<template>
<div id="planner" class="view">
  <Header />
  <Sidebar />
  <Canvas />
  <StatusBar />
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import Canvas from '@/components/Canvas.vue'
import StatusBar from '@/components/StatusBar.vue'

export default {
  name: 'Planner',
  components: { Header, Sidebar, Canvas, StatusBar }
}
</script>

<style lang="scss">
#planner.view {
  display: grid;
  grid-template-columns: 64px auto;
  grid-template-rows: 64px auto 32px;
}
</style>
