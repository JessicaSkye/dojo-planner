<template>
<div class="rooms-drawer sub-drawer">
  <SearchBar v-model="search" />

  <!-- ALL -->
  <div v-if="sub === 'all'" class="tiles">
    <div
      v-for="(c, ckey) in rooms(sub)"
      :key="ckey"
      class="category"
    >
      <p class="title">{{ ckey }}</p>
      <div class="room-grid">
        <div
          v-for="(r, rkey) in c"
          :key="rkey"
          class="room-tile"
        >
          <div class="tile">
            <div class="preview">
              <img :src="getTileSVG(rkey, r)">
            </div>
            <div class="title">{{ rkey.replace(/_/g, ' ') }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- SPECIFIC CATEGORY -->
  <div v-if="sub !== 'all'" class="tiles -padding">
    <div class="room-grid">
      <div
        v-for="(r, rkey) in rooms(sub)"
        :key="rkey"
        class="room-tile"
      >
        <div class="tile">
          <div class="preview">
            <img :src="getTileSVG(rkey, r)">
          </div>
          <div class="title">{{ rkey.replace(/_/g, ' ') }}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'RoomsDrawer',
  components: { SearchBar },
  props: {
    sub: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    getTileSVG (name, tile) {
      try {
        return tile.image ? require(`../../assets/room/${tile.image}.svg`) : require(`../../assets/room/${name}.svg`)
      } catch {
        return ''
      }
    }
  },
  computed: { ...mapGetters(['rooms']) }
}
</script>

<style lang="scss">
.rooms-drawer {
  .tiles {
    height: calc(100vh - 214px);
    overflow-y: auto;
    @include scrollbar();
    margin: 16px 0;
  }

  .category {
    > .title {
      padding: 0 16px;
      text-transform: capitalize;
      font-size: 18px;
      color: rgba(white, 0.5);
      margin: 0 0 16px 0;
    }
  }

  .room-grid {
    padding: 0 16px;
    margin-bottom: 16px;

    display: grid;
    grid-template-columns: repeat(2, 128px);
    grid-gap: 16px;

    .tile {
      width: 128px;
      height: 100%;
      background: $bg-4;
      border-radius: 4px;

      cursor: grab;
      transition: 0.15s ease;
      &:hover { box-shadow: 0 0 0 4px $bg-3; }

      > .preview {
        width: 128px;
        height: 128px;
        background: $bg-1;
        border-radius: 4px;
        > img {
          margin: auto;
          display: block;
          max-width: 128px;
          max-height: 128px;
        }
      }

      > .title {
        text-transform: capitalize;
        padding: 8px;
      }
    }
  }
}
</style>
