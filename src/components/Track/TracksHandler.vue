<template>
  <v-col>
    <HeaderTitle
      title="Top Tracks"
      type="track"
      :extended="extended"
    />
    <TrackInfo
      v-for="(track, t) in tracks"
      :key="t"
      :track="track"
      style="text-align: left"
      :extended="extended"
    />
  </v-col>
</template>

<script lang="ts">
import { Component, State, Prop, Vue } from 'nuxt-property-decorator'
import { getUserTopTracks } from '@/api/tracks'

@Component
export default class TopTracksHandler extends Vue {
  @Prop(Boolean) private readonly extended!: boolean
  @State private topTracksState!: TimeRange

  private tracksShort: Track[] = []
  private tracksMedium: Track[] = []
  private tracksLong: Track[] = []

  get tracks() {
    if (!this.extended)
      return this.tracksLong

    switch(this.topTracksState) {
      case 'short':
        return this.tracksShort
      case 'medium':
        return this.tracksMedium
      case 'long':
        return this.tracksLong
    }
  }

  async mounted() {
    let [tracksShort, tracksMedium, tracksLong] = await Promise.all([
      getUserTopTracks('short', 50),
      getUserTopTracks('medium', 50),
      getUserTopTracks('long', this.extended ? 50 : 10)
    ])

    this.tracksShort = tracksShort
    this.tracksMedium = tracksMedium
    this.tracksLong = tracksLong
  }
}
</script>