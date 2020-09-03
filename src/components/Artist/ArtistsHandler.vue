<template>
  <v-col :class="`${isTopArtistRoute ? 'mx-8 my-8' : ''}`">
    <HeaderTitle
      title="Top Artists"
      type="artist"
      :extended="extended"
    />
    <ArtistInfo
      v-for="artist in artists"
      :key="artist.id"
      :artist="artist"
      :displayType="displayType"
      style="text-align: left; margin-bottom: 2px;"
    />
  </v-col>
</template>

<script lang="ts">
import { Component, State, Prop, Vue } from 'nuxt-property-decorator'
import { getUserTopArtists } from '@/api/artists'

@Component
export default class TopArtistsHandler extends Vue {
  @Prop(Boolean) private readonly extended!: boolean
  @Prop({ default: 'inline' }) private readonly displayType!: DisplayType
  @State private topArtistsState!: TimeRange

  private artistsShort: Artist[] = []
  private artistsMedium: Artist[] = []
  private artistsLong: Artist[] = []

  async mounted() {
    let [artistsShort, artistsMedium, artistsLong] = await Promise.all([
      getUserTopArtists('short', 50),
      getUserTopArtists('medium', 50),
      getUserTopArtists('long', this.extended ? 50 : 10)
    ])

    this.artistsShort = artistsShort
    this.artistsMedium = artistsMedium
    this.artistsLong = artistsLong
  }

  get artists(): Artist[] {
    if (!this.extended)
      return this.artistsLong

    switch(this.topArtistsState) {
      case 'short':
        return this.artistsShort
      case 'medium':
        return this.artistsMedium
      case 'long':
        return this.artistsLong
    }
  }

  get isTopArtistRoute(): boolean {
    return this.$route.path === '/topartists'
  }
}
</script>