<template>
  <client-only>
    <v-app id="app" no-gutters>
      <v-row no-gutters>
        <v-col v-if="!isMobile" cols="1">
          <Sidebar />
        </v-col>
        <v-col>
          <router-view />
          <BottomNavbar v-if="isMobile" />
        </v-col>
      </v-row>
    </v-app>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DefaultLayout extends Vue {
  private windowSize: number = window.innerWidth

  get isMobile(): boolean {
    return this.windowSize < 767
  }

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #191414;
}
</style>