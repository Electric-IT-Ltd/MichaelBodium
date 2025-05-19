import Vue from 'vue'

import VueVideoPlayer from 'vue-video-player'
import '@videojs/http-streaming'

// require videojs style
import 'vue-video-player/src/custom-theme.css'

Vue.use(
  VueVideoPlayer /* {
  options: global default options,
  events: global videojs events
} */
)
