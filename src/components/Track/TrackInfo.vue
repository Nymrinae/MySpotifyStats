<template>
  <v-row>
    <v-col cols="1">
      <a
        :href="track.url"
        target="_blank"
        rel="noreferrer noopener"
      >
        <v-img v-if="extended" :src="track.img" height="48" width="48" />
        <v-avatar v-else size="48">
          <v-img :src="track.img" />
        </v-avatar>
      </a>
    </v-col>
    <v-col cols="9" sm="10" class="pl-6">
      <v-row no-gutters>
        <span class="songAlbumName">{{ track.name }}</span>
      </v-row>
      <v-row no-gutters>
        <span class="songAlbumText">{{ track.author }} - {{ track.album }}</span>
      </v-row>
    </v-col>
    <v-col cols="2" v-if="track.lastTimePlayed">
      <span style="font-size: 14px; color: white" v-html="track.lastTimePlayed" />
    </v-col>
    <v-col cols="2" sm="1">
      <span  class="pr-6" style="font-size: 14px; color: white" v-html="track.duration" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TrackInfo extends Vue {
  @Prop() private readonly track!: Track;
  @Prop({ default : false }) private readonly extended!: Boolean;
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
