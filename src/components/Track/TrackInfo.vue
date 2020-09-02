<template>
  <v-row>
    <a
      :href="track.url"
      target="_blank"
      rel="noreferrer noopener"
    >
      <v-img
        v-if="extended"
        :src="track.img"
        class="mt-2"
        height="54"
        width="54" />
      <v-avatar v-else size="48">
        <v-img :src="track.img" />
      </v-avatar>
    </a>
    <v-col cols="8" xs="10" sm="10" md="9" xl="10" class="pl-2">
      <v-row no-gutters>
        <span class="mediumProfileText white--text">{{ track.name }}</span>
      </v-row>
      <v-row no-gutters>
        <div class="baseProfileText grey--text"> {{ formatTrackInfo(track.author, track.album) }}</div>
      </v-row>
    </v-col>
    <v-col cols="2" v-if="track.lastTimePlayed">
      <span style="baseProfileText white--text" v-html="track.lastTimePlayed" />
    </v-col>
    <v-col cols="1">
      <span class="baseProfileText ml-2 white--text" v-html="track.duration" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TrackInfo extends Vue {
  @Prop() private readonly track!: Track;
  @Prop({ default : false }) private readonly extended!: Boolean;

  formatTrackInfo(author: string, album: string) {
    let trackInfoDesc = `${author} - ${album}`

    if (trackInfoDesc.length > 32) {
      // @ts-ignore
      const addPoints: number | undefined = this.$vuetify.breakpoint.xs ? 3 : undefined
      const parseAlbumName: string = album.split(' ').slice(0, addPoints).join(' ')
  
      trackInfoDesc = `${author} - ${parseAlbumName}${addPoints ? '...' : ''}`
    }

    return trackInfoDesc
  }
}
</script>
