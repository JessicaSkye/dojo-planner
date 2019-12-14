<template>
<div
  id="canvas"
>
</div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
#canvas {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  background: url('../assets/grid.svg');
}
</style>
