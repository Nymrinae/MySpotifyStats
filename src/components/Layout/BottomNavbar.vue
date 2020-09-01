<template>
  <v-bottom-navigation
    color="spotify-dark-green"
    background-color="black"
    height="64"
    dark
    grow
    fixed
  >
    <div
      v-for="{ icon, path, title } in navbarItems"
      :key="title"
      :id="path"
      class="mobileListItem px-6 pt-1"
      style="width: 100%"
      @click="goTo(path)"
    >
      <v-icon class="icon" v-html="icon" />
      <v-list-item-title class="navTitle" v-html="title" />
    </div>
  </v-bottom-navigation>
</template>

<style scoped>
@import '@/assets/css/navigation.css';
</style>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import navbarItems from '@/config/navbarItems'
import { handleCurrentRoute } from '@/helpers/functions'

@Component({
  watch: {
    '$route': {
      deep: true,
      handler: (newRoute, oldRoute) => handleCurrentRoute(newRoute, oldRoute, true)
    }
  }
})
export default class BottomNavbar extends Vue {
  private readonly navbarItems: NavbarItem[] = navbarItems

  mounted() {
    document.getElementById(this.$route.path)!.classList.add('navbarMobileItemActive')
  }

  private goTo(path: string): void {
    this.$router.push(path)
  }
}
</script>