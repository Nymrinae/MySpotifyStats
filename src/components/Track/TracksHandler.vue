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
      :extended="true"
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
    this.tracksShort = await getUserTopTracks('short', 50)
    this.tracksMedium = await getUserTopTracks('medium', 50)
    this.tracksLong = await getUserTopTracks('long', this.extended ? 50 : 10)
  }
}
</script>