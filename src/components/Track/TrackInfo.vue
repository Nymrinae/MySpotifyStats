<template>
  <v-row class="pt-1 mb-2">
    <a
      :href="track.url"
      target="_blank"
      rel="noreferrer noopener"
    >
      <v-img
        v-if="extended"
        :src="track.img"
        class="mb-2"
        height="54"
        width="54"
        />
      <v-avatar v-else size="48">
        <v-img :src="track.img" />
      </v-avatar>
    </a>
    <v-col
      :cols="currentRouteName === 'history' ? 7 : 8"
      xs="10"
      :sm="extended && track.lastTimePlayed ? 8 : 10"
      md="9"
      :xl="extended && track.lastTimePlayed ? 8 : 10"
      class="pl-2 mt-n3"
    >
      <v-row no-gutters>
        <span class="mediumProfileText truncateText white--text">{{ track.name }}</span>
      </v-row>
      <v-row no-gutters>
        <div class="baseProfileText truncateText grey--text" >
          {{ `${track.author} - ${track.album}` }}
        </div>
      </v-row>
    </v-col>
    <v-col cols="1" xl="2" v-if="track.lastTimePlayed">
      <span class="baseProfileText white--text d-none d-xl-flex" v-html="track.lastTimePlayed" />
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
  @Prop({ default : false, type: Boolean }) private readonly extended!: Boolean;

  get currentRouteName(): string {
    return this.$route.name!
  }
}
</script>
