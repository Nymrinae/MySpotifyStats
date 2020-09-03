<template>
  <v-container style="padding: 72px;">
    <v-row>
      <v-col cols="4">
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
          <span v-html="`By ${activePlaylist.owner.name}`" class="playlistDescription" />
        </v-row>
        <v-row no-gutters justify="center" class="mb-2">
          <span v-html="`${activePlaylist.desc}`" class="playlistDescription px-12" />
        </v-row>
        <v-row no-gutters justify="center">
          <span v-html="`${totalTracks} Tracks`" style="font-size: 14px; color: white;" />
        </v-row>
      </v-col>
      <v-col cols="8" class="playlistTrackInfos mt-6" @scroll.passive="handleScrolling">
        <TrackInfo
          v-for="(track, t) in tracks"
          :key="t"
          :track="track"
          style="text-align: left"
          :extended="true"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="tracks.length > 11"
      class="mt-8 spotify-light-green--text"
      style="margin-left: 60%;"
    >
      {{ scrollState.icon }}
      <span class="mx-4" style="font-size: 12px; margin-top: 6px;"> Scroll {{ scrollState.state }} </span>
      {{ scrollState.icon }}
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
  scrollState: { state: 'Up' | 'Down', icon: '↑' | '↓'} = {
    state: 'Down',
    icon: '↓'
  } 

  async mounted() {
    const { tracks, total } = await getPlaylistTracks(this.activePlaylist.id)

    this.tracks = tracks
    this.totalTracks = total
  }
  
  private handleScrolling(e: any) {
    this.scrollState = e.target.scrollTop > 500
      ? { state: 'Up', icon: '↑' }
      : { state: 'Down', icon: '↓' }
  }
}
</script>