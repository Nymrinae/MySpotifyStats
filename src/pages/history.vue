<template>
  <v-container
    fill-height
    style="padding: 48px;"
    :class="{ 'mb-8': $vuetify.breakpoint.xs }"
  >
    <Header title="Recently Played" />
    <TrackInfo
      v-for="(track, t) in tracks"
      :key="t"
      :track="track"
      style="text-align: left"
      extended
    />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator"
import { getRecentlyPlayed } from '@/api/user'

@Component({
  head: {
    title: 'MySpotifyStats - History'
  },
})
export default class History extends Vue {
  private tracks: Track[] = []

  async mounted() {
    this.tracks = await getRecentlyPlayed()
  }
}
</script>

<style scoped>
</style>