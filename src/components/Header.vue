<template>
<div id="header">
  <IconButton
    type="uni"
    icon="bars"
    :class="{'-active': $store.state.activeDrawer.core === 'menu' }"
    @click.native="$store.dispatch('commitActiveDrawer', { core: 'menu' })"
  />
  <p class="title">Warframe Dojo Planner</p>

  <div class="nav">
    <router-link
      class="nav-btn"
      to="/changelog"
    >
      <Icon icon="notes" />
      <p class="title">Changelog</p>
    </router-link>
    <a
      class="nav-btn"
      href="https://github.com/Sepshun/dojo-planner"
    >
      <Icon icon="github-alt" />
      <p class="title">GitHub</p>
    </a>
  </div>
</div>
</template>

<script>
import Icon from '@/components/Icon.vue'
import IconButton from '@/components/IconButton.vue'

export default {
  name: 'Header',
  components: { Icon, IconButton }
}
</script>

<style lang="scss">
#header {
  grid-column-start: span 3;

  background: $bg-4;
  width: 100%;
  height: 64px;

  display: grid;
  grid-template-columns: 64px auto auto;

  > .title {
    font-size: 18px;
    padding: 21px 16px;
    margin: 0;
  }

  > .nav {
    justify-self: end;

    > .nav-btn {
      text-decoration: none;

      display: grid;
      grid-template-columns: 24px auto;
      grid-gap: 8px;
      align-items: center;
      float: left;
      padding: 20px 16px;

      > .title { margin: 0; }

      &:hover { background: $bg-2; }
    }
  }
}
</style>
