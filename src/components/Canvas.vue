<template>
<div
  id="canvas"

  @mousedown.middle="panning = true"
  @mouseup.middle="panning = false"
  @mousemove="moveView"
  @wheel="zoomView"

  :class="{'-panning': panning}"
  :style="{
    'background-position': `${x}px ${y}px`,
    'background-size': `${128*zoom}px`
  }"
>
  <div
    class="viewport"
    :style="{
      top: `${y}px`,
      left: `${x}px`,
      transform: `translate(-50%,-50%) scale(${zoom})`
    }"
  >

  </div>
</div>
</template>

<script>
export default {
  name: 'Canvas',
  data () {
    return {
      panning: false,
      x: 100,
      y: 100,

      zoom: 1,
      zoomMax: 4,
      zoomMin: 0.125,
      zoomSensitivity: 0.25
    }
  },
  methods: {
    moveView (e) {
      if (this.panning) {
        this.x += e.movementX
        this.y += e.movementY
      }
    },
    zoomView (e) {
      this.zoom = Math.min(Math.max(this.zoom + (-e.deltaY / 100) * this.zoomSensitivity, this.zoomMin), this.zoomMax)
    }
  },
  mounted () {
    // Center Viewport on Load
    this.x = this.$el.offsetWidth / 2
    this.y = this.$el.offsetHeight / 2
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

  transition: background-size 0.15s ease;

  &.-panning { cursor: grabbing; }

  > .viewport {
    width: 128px;
    height: 128px;

    position: absolute;
    transform: translate(-50%,-50%);

    background: $bg-2;

    transition: transform 0.15s ease;
  }
}
</style>
