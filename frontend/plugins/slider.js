import Vue from 'vue'
import { Swiper, Navigation, Lazy, EffectFade } from 'swiper'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'

Swiper.use([EffectFade, Navigation, Lazy])
Vue.use(VueAwesomeSwiper)
