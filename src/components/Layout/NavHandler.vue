<template>
  <BottomNavbar v-if="windowSize < 767" />
  <Sidebar v-else />
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'

@Component
export default class NavHandler extends Vue {
  private windowSize: number = window.innerWidth

  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onWindowSizeChange)
    })
  }

  beforeDestroy() {
    window.removeEventListener('resize', this.onWindowSizeChange)
  }

  onWindowSizeChange() {
    this.windowSize = window.innerWidth
  }
}
</script>