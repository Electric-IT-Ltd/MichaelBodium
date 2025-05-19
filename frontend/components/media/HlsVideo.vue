<template>
  <div class="relative flex items-center justify-center">
    <video
      ref="video"
      loop
      playsinline
      :muted="muted ? true : false"
      v-waypoint="{
        active: true,
        callback: play,
        options: intersectionOptions,
      }"
      @click="toggle()"
      :poster="poster"
    ></video>
    <span class="absolute z-50 pointer-events-none" v-if="!playing && !autoplay"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-8 h-auto"
        viewBox="0 0 81 91"
        fill="none"
      >
        <path d="M0 45.5V91L81 45.5L0 0V45.5Z" fill="white" /></svg
    ></span>
  </div>
</template>
<script>
import Hls from 'hls.js'
import { groq } from '@nuxtjs/sanity'
export default {
  props: ['video', 'autoplay'],
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: [0, 0],
      },
      playing: false,
      poster: '',
      muted: this.autoplay,
    }
  },
  async mounted() {
    if (this.video) {
      const videoRef = this.video
      const query = groq`*[_id == "${videoRef}"]`
      const result = await this.$sanity.fetch(query)
      let video = this.$refs['video']
      if (result[0]) {
        const playback =
          'https://stream.mux.com/' +
          result[0].data.playback_ids[0].id +
          '.m3u8'
        if (Hls.isSupported()) {
          let hls = new Hls()
          hls.loadSource(playback)
          hls.attachMedia(video)
          hls.on(Hls.Events.MANIFEST_PARSED, function () {})
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
          video.src = playback
        }
        this.poster =
          'https://image.mux.com/' +
          result[0].playbackId +
          '/thumbnail.jpg?time=' +
          result[0].thumbTime
      }
    }
  },
  methods: {
    play({ going }) {
      if (this.autoplay) {
        if (going === this.$waypointMap.GOING_IN) {
          this.$refs['video'].play()
          this.playing = true
        }
        if (going === this.$waypointMap.GOING_OUT) {
          this.$refs['video'].pause()
          this.playing = false
        }
      }
    },
    toggle() {
      if (this.$refs['video'].paused) {
        this.$refs['video'].play()
        this.playing = true
      } else {
        this.$refs['video'].pause()
        this.playing = false
      }
    },
  },
}
</script>