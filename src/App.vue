<template>
<div id="app">
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
* { font-family: 'Montserrat', sans-serif; color: white; }

body { margin: 0; }

#app {
  background: $bg-1;
  height: 100vh;
  width: 100vw;

  .view {
    height: 100%;
    width: 100%;
  }
}
</style>
