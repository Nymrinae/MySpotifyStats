<template>
  <v-container style="padding: 48px;">
    <v-row>
      <v-col cols="12" md="4">
        <v-row no-gutters justify="center">
          <v-avatar
            size="256"
            class="mx-8 my-10"
            tile
          >
            <v-img :src="activePlaylist.img" />
          </v-avatar>
        </v-row>
        <v-row no-gutters justify="center">
          <span v-html="activePlaylist.name" class="sectionTitle" />
        </v-row>
        <v-row no-gutters justify="center" class="mb-4">
          <span v-html="`By ${activePlaylist.owner.name}`" class="baseProfileText white--text" />
        </v-row>
        <v-row no-gutters justify="center" class="mb-4">
          <span v-html="`${totalTracks} Tracks`" class="baseProfileText white--text" />
        </v-row>
        <v-row no-gutters>
          <span
            v-html="`${activePlaylist.desc}`"
            class="baseProfileText grey--text px-12"
            style="text-align: center;"
          />
        </v-row>
      </v-col>
      <v-col
        cols="12"
        md="8"
        class="mt-9"
        :class="{ 'scrollingPlaylistTracks': $vuetify.breakpoint.mdAndUp }"
        @scroll.passive="handleScrolling"
      >
        <TrackInfo
          v-for="(track, t) in tracks"
          :key="t"
          :track="track"
          style="text-align: left"
          :extended="true"
        />
      </v-col>
      <v-row
        v-if="tracks.length > 11"
        class="mt-4 spotify-light-green--text"
        style="margin-left: 60%;"
      >
        <span class="mx-4" style="font-size: 14px; margin-top: 6px;">
          {{ scrollState.icon }} Scroll {{ scrollState.state }} {{ scrollState.icon }}
        </span>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Component, State, Prop, Vue } from "nuxt-property-decorator"
import { getPlaylistTracks } from '@/api/playlists'

@Component
export default class Playlist extends Vue {
  @State private activePlaylist!: PlaylistT

  tracks: Track[] = []
  totalTracks: number = 0
  scrollState: ScrollState = {
    state: 'Down',
    icon: '↓'
  }

  async mounted() {
    const { tracks, total } = await getPlaylistTracks(this.activePlaylist.id)

    this.tracks = tracks
    this.totalTracks = total
  }

  private handleScrolling(e: Event) {
    this.scrollState = (e.target as HTMLElement).scrollTop > 500
      ? { state: 'Up', icon: '↑' }
      : { state: 'Down', icon: '↓' }
  }
}
</script>