<template>
  <v-avatar
    size="192"
    class="artistAvatar mx-8 my-10"
    tile
    @click="goToPlaylist"
  >
    <v-img class="artistImg" :src="playlist.img" />
    <span class="artistName"> {{ playlist.name }} </span>
  </v-avatar>
</template>

<script lang='ts'>
import { Component, Prop, Mutation, Vue } from "nuxt-property-decorator"

@Component
export default class PlaylistCard extends Vue {
  @Prop() private readonly playlist!: PlaylistT
  @Mutation setActivePlaylist: any

  goToPlaylist() {
    this.setActivePlaylist(this.playlist)
    this.$router.push({ path: `/playlists/${this.playlist.id}` })
  }
}
</script>

<style scoped>
.artistText {
  color: white;
  font-size: 16px;
  padding-left: 12px;
}

.artistName {
  position: absolute;
  color: white;
  font-size: 18px;
  text-align: center;
  opacity: 0;
  cursor: default;
  padding: 16px;
}


.artistAvatar:hover .artistImg {
  filter: brightness(30%);
}

.artistAvatar:hover .artistName {
  opacity: 1;
}

.artistAvatar .artistImg {
  padding: 0;
  width: 100%;
  display: block;
  opacity: 1;
}

.artistAvatar .artistImg,
.artistName {
  transition: opacity .5s ease-out;
  cursor: pointer;
}
</style>