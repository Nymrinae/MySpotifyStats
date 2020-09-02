<template>
  <v-row v-if="displayType === 'inline'">
    <v-col cols="12">
      <v-avatar size="48">
        <v-img :src="artist.img" />
      </v-avatar>
      <span class="mediumProfileText white--text"> {{ artist.name }} </span>
    </v-col>
  </v-row>
  <v-avatar
    v-else
    size="192"
    class="artistAvatar mx-8 my-10"
  >
    <v-img class="artistImg" :src="artist.img" />
    <span class="artistName"> {{ artist.name }} </span>
  </v-avatar>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ArtistInfo extends Vue {
  @Prop({ default: 'inline' }) private readonly displayType!: DisplayType
  @Prop() private readonly artist!: Artist
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