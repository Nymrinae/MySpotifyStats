<template>
  <v-navigation-drawer
    color="black"
    width="100px"
    fixed
    permanent
  >
    <template v-slot:prepend>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class="mainIcon mt-8"
        @click="goTo('/profile')"
      >
        <path
          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"
        />
      </svg>
    </template>
    <v-list dense style="margin-top: 200%">
      <div
        v-for="{ icon, path, title } in navbarItems"
        :key="title"
        :id="path"
        class="listItem py-4"
        @click="goTo(path)"
      >
        <v-icon class="icon" v-html="icon" />
        <v-list-item-title class="navTitle" v-html="title" />
      </div>
    </v-list>
    <template v-slot:append>
      <v-icon
        class="icon"
        style="margin-bottom: 24px;"
        size="32"
      >
        mdi-logout
      </v-icon>
    </template>
  </v-navigation-drawer>
</template>

<style scoped>
@import '@/assets/css/navigation.css';
</style>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import navbarItems from '@/config/navbarItems'
import { handleCurrentRoute } from '@/helpers/functions'

@Component({
  watch: {
    '$route': {
      deep: true,
      handler: (newRoute, oldRoute) => handleCurrentRoute(newRoute, oldRoute, false)
    }
  }
})
export default class Sidebar extends Vue {
  private readonly navbarItems: NavbarItem[] = navbarItems

  mounted() {
    document.getElementById(this.$route.path)!.classList.add('navbarItemActive')
  }

  private goTo(path: string): void {
    this.$router.push(path)
  }
}
</script>