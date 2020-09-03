<template>
  <v-btn
    v-if="type === 'button'"
    class="spotify-dark-green white--text px-4"
    @click="action === 'login' ? loginWithSpotify() : logout()"
    rounded
  >
    {{ content }}
  </v-btn>
  <v-icon
    v-else
    class="icon pointer"
    style="margin-bottom: 24px;"
    size="32"
    @click="logout"
  >
    mdi-logout
  </v-icon>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { getSpotifyAuthURL } from '@/api/auth'

@Component
export default class ButtonSpotify extends Vue {
  @Prop({ default: 'button' }) type!: string
  @Prop({ default: '' }) content!: string
  @Prop({ required: true }) action!: ButtonActionType

  loginWithSpotify(): void {
    window.location.href = getSpotifyAuthURL(this.$config.spotifyClientID)
  }

  logout() {
    this.$cookies.remove('spotifyAccessToken')
    this.$router.replace({ path: '/' })
  }
}
</script>

<style scoped>
</style>