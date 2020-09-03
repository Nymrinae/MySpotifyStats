<template>
  <v-container fill-height style="padding: 72px;">
    <Header title="Playlists" />
    <PlaylistCard
      v-for="(playlist, p) in playlists"
      :key="p"
      :playlist="playlist"
      style="text-align: left"
    />
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator"
import { getUserPlaylists } from "@/api/playlists"

@Component
export default class Playlists extends Vue {
  private playlists: PlaylistT[] = []

  async mounted() {
    this.playlists = await getUserPlaylists()
  }
}
</script>