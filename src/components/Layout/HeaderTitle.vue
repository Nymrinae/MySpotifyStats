<template>
  <v-row class="centerVertically mb-4">
    <v-col cols="8">
      <h3 class="sectionText"> {{ title }}</h3>
    </v-col>
    <v-col cols="4" class="pr-0">
      <TimeRangeSwitcher v-if="extended && type" :type="type" />
      <Button
        v-if="!extended && type"
        content="See more"
        :href="type === 'artist' ? '/topartists' : '/toptracks'"
        size="small"
        :offset="true"
        style="float: right;"
        
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "nuxt-property-decorator";

@Component
export default class HeaderTitle extends Vue {
  @Prop({ required: true }) private readonly title!: string;
  @Prop({ default : '' }) private readonly type!: string;
  @Prop({ type: Boolean, default: false }) private readonly extended!: boolean;
}
</script>

<style scoped>
.sectionText {
  color: white;
  font-size: 24px;
  text-align: left;
}
</style>