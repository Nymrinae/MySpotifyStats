<template>
  <v-container no-gutters>
    <v-avatar size="128">
      <v-img :src="userInfo.profilePicture" />
    </v-avatar>
    <v-row align="center" justify="center">
      <span class="username text-h3 white--text font-weight-bold mt-8">
        {{ userInfo.name }}
      </span>
    </v-row>
    <v-row class="mt-8 no-gutters">
      <v-col
        md="4"
        offset-md="4"
      >
        <v-row no-gutters>
          <v-col
            v-for="{ name, nb } in getBasicStats()"
            :key="name"
            xs="4"
          >
            <span class="spotify-light-green--text statsNumber" v-html="nb" />
            <br>
            <span class="statsText" v-html="name" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-6" align="center" justify="center">
      <Button content="Logout" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { getFollowingArtistsNb, getUser, getUserPlaylistsNb } from '@/api/user'
import { getUserPlaylists,  }from '@/api/playlists'

@Component
export default class UserHandler extends Vue {
  private userInfo: User = {
    name: '',
    profilePicture: '',
    followers: 0,
    following: 0,
    nbPlaylists: 0
  }

  async mounted() {
    const user = await getUser()
  
    this.userInfo = {
      name: user.display_name,
      profilePicture: user.images[0].url,
      followers: user.followers.total,
      following: await getFollowingArtistsNb(),
      nbPlaylists: await getUserPlaylistsNb(user.id)
    }
  }

  getBasicStats() {
    const { followers, following, nbPlaylists } = this.userInfo

    return [
      { name: 'Followers', nb: followers },
      { name: 'Following', nb: following },
      { name: 'Playlists', nb: nbPlaylists }
    ]
  }
}
</script>

<style scoped>
@import '@/assets/css/main.css';
</style>