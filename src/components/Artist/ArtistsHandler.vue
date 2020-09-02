<template>
  <v-col :cols="extended ? 12 : 5">
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
      style="text-align: left;"
    />
  </v-col>
</template>

<script lang="ts">
import { Component, Getter, Prop, Vue } from 'nuxt-property-decorator'
import { getUserTopArtists } from '@/api/artists'

@Component
export default class TopArtistsHandler extends Vue {
  @Prop(Boolean) private readonly extended!: boolean
  @Prop({ default: 'inline' }) private readonly displayType!: DisplayType
  @Getter private topArtistsState!: TimeRange

  private artistsShort: Artist[] = []
  private artistsMedium: Artist[] = []
  private artistsLong: Artist[] = []

  get artists() {
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

  async mounted() {
    this.artistsShort = await getUserTopArtists('short', 50)
    this.artistsMedium = await getUserTopArtists('medium', 50)
    this.artistsLong = await getUserTopArtists('long', this.extended ? 50 : 10)
  }
}
</script>