<template>
  <v-bottom-navigation
    color="spotify-dark-green"
    background-color="black"
    dark
    grow
    fixed
  >
    <v-btn
      v-for="{ title, icon, path } in navbarItems"
      :key="title"
      @click="goTo(path)"
    >
      <span class="navTitle"> {{ title }}</span>
      <v-icon class="icon"> {{ icon }} </v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<style scoped>
@import '@/assets/css/navigation.css';
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import navbarItems from '@/config/navbarItems'

@Component
export default class BottomNavbar extends Vue {
  private readonly navbarItems: NavbarItem[] = navbarItems

  private goTo(path: string): void {
    this.$router.push(path)
  }
}
</script>