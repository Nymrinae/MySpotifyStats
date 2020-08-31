<template>
  <client-only>
    <v-app id="app" no-gutters>
      <v-row no-gutters>
        <v-col cols="1">
          <NavHandler />
        </v-col>
        <v-col>
          <router-view />
        </v-col>
      </v-row>
    </v-app>
  </client-only>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class App extends Vue {}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #191414;
}
</style>