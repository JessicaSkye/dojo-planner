<template>
<div id="sidebar">
  <div class="rooms">
    <IconButton icon="all" />
    <IconButton icon="garden" />
    <IconButton icon="lab" />
    <IconButton icon="halls" class="-active" />
    <IconButton icon="energy" />
    <IconButton icon="connector" />
    <IconButton icon="barracks" />
  </div>
  <IconButton type="uni" icon="cog" />
</div>
</template>

<script>
import IconButton from '@/components/IconButton.vue'

export default {
  name: 'Sidebar',
  components: { IconButton }
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
