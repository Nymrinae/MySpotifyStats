<template>
  <v-container fill-height style="padding: 72px;">
    <ArtistsHandler
      displayType="rounded"
      extended
    />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({
  head: {
    title: 'MySpotifyStats - Top Artists'
  },
})
export default class TopArtists extends Vue {}
</script>

<style scoped>
</style>