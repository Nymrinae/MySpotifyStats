<template>
  <v-row class="mb-2">
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
    <v-col cols="9" xl="10" class="pl-6">
      <v-row no-gutters>
        <span class="songAlbumName">{{ track.name }}</span>
      </v-row>
      <v-row no-gutters style="word-wrap: break-word">
        <div class="songAlbumText"> {{ formatTrackInfo(track.author, track.album) }}</div>
      </v-row>
    </v-col>
    <v-col cols="2" v-if="track.lastTimePlayed">
      <span style="font-size: 14px; color: white" v-html="track.lastTimePlayed" />
    </v-col>
    <v-col cols="1">
      <span class="pr-6" style="font-size: 14px; color: white" v-html="track.duration" />
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
    const displayPoints = (): number | undefined => {
    // @ts-ignore
      if (this.$vuetify.breakpoint.md)
        return 2
      // @ts-ignore
      if (this.$vuetify.breakpoint.lg)
        return 3
    }

    if (trackInfoDesc.length > 32 && displayPoints) {
      const nbPoints: number | undefined = displayPoints()
      const parseAlbumName: string = album.split(' ').slice(0, nbPoints).join(' ')
  
      trackInfoDesc = `${author} - ${parseAlbumName}${nbPoints ? '...' : ''}`
    }

    return trackInfoDesc
  }
}
</script>

<style scoped>
.songAlbumName {
  color: white;
  font-size: 14px;
  padding-left: 12px;
}

.songAlbumText {
  color: #696969;
  font-size: 14px;
  padding-left: 12px;
}
</style>
