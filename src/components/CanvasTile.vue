<template>
<div
  class="canvas-tile"
  :class="{
    '-dragging': this.moving
  }"
  :style="{
    left: multiple(value.x, 32) + 'px',
    top: multiple(value.y, 32) + 'px'
  }"

  @mousedown.prevent.left="moving = true"
  @mouseup.left="moving = false"
  @mouseout="moving = false"
  @mousemove="moveTile"
>
  <img :src="getTileSVG">
</div>
</template>

<script>
export default {
  name: 'CanvasTile',
  props: {
    value: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      moving: false
    }
  },
  methods: {
    multiple (n, m) {
      return Math.ceil(n / m) * m
    },
    moveTile (e) {
      if (this.moving) {
        this.value.x = (this.value.x + e.movementX)
        this.value.y = (this.value.y + e.movementY)
        this.$emit('input', this.value)
      }
    }
  },
  computed: {
    getTileSVG () {
      if (this.value.image) return require(`../assets/room/${this.value.image}.svg`)
      else return require(`../assets/room/${this.value.room}.svg`)
    }
  }
}
</script>

<style lang="scss">
.canvas-tile {
  position: absolute;
  line-height: 0;

  &.-dragging { z-index: 9999; }

  cursor: grab;
  &:hover { background: rgba($bg-4, 0.5); }
}
</style>
