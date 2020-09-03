<template>
  <div>
    <span
      v-for="({ name, desc }, t) in timeRanges"
      :key="t"
      v-html="desc"
      class="timeRangeText mx-2"
      :class="{'timeRangeTextFocused': isFocused(name) }"
      @click="setTimeRange(name)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';

@Component
export default class TimeRangeSwitcher extends Vue {
  @Prop() private readonly type!: TopType
  @State private topArtistsState!: TimeRange
  @State private topTracksState!: TimeRange
  @Mutation setTopArtistsState: any
  @Mutation setTopTracksState: any

  private readonly timeRanges = [
    { name: 'short', desc: 'Last 4 Weeks'},
    { name: 'medium', desc: 'Last 6 Months'},
    { name: 'long', desc: 'All Time'}
  ]

  private setTimeRange(timeRangeType: TimeRange): void {
    this.type === 'artist'
      ? this.setTopArtistsState(timeRangeType)
      : this.setTopTracksState(timeRangeType)
  }

  private isFocused(name: string) {
    return this.type === 'artist'
      ? this.topArtistsState === name
      : this.topTracksState === name
  }
}
</script>

<style scoped>
.timeRangeText {
  color: gray;
  font-size: 16px;
}

.timeRangeText:hover {
  color: gray;
  font-size: 16px;
}

.timeRangeTextFocused, .timeRangeText:hover {
  color: white;
  cursor: pointer;
}
</style>