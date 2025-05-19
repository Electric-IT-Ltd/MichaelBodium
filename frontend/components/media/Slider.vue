<template>
  <div class="flex flex-col w-full h-full">
    <div
      v-swiper:mySwiper="swiperOptions"
      @ready="init"
      @slideChange="onSlideChange"
      ref="container"
      class="flex-1 w-full"
    >
      <div class="w-full h-full swiper-wrapper">
        <Slide
          :class="'w-full h-full bg-center bg-no-repeat bg-contain swiper-slide bg-center ' +
            getSize(slide.imageSize)
          "
          v-for="slide in slides"
          :key="slide._key"
          :image="slide.galleryImage"
        ></Slide>
      </div>
      <button
        class="absolute top-0 right-0 z-40 w-1/2 h-full next"
        @mouseover="nextOver"
        @mouseleave="nextOut"
        @click="next"
      ></button>
      <button
        class="absolute top-0 left-0 z-40 w-1/2 h-full prev"
        @click="prev"
        @mouseover="prevOver"
        @mouseleave="prevOut"
      ></button>
    </div>
    <footer class="py-4 font-serif text-sm text-center uppercase md:py-6">
      {{ title }}
      <span class="italic normal-case" v-if="subtitle">{{ subtitle }}</span>
      <span class="block w-full mt-2"
        ><span>({{ current }}</span> / {{ slides.length }})</span
      >
    </footer>
  </div>
</template>
<script>
export default {
  props: ['slides', 'title', 'subtitle', 'size'],
  data() {
    return {
      swiperOptions: {
        loop: false,
        slidesPerView: 1,
        centeredSlides: true,
        effect: 'fade',
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      current: '1',
    }
  },
  methods: {
    onSlideChange(swiper) {
      this.current = swiper.activeIndex + 1
    },
    init() {
      setTimeout(() => {
        this.fade = 'opacity-100'
      }, 300)
    },
    updateCurrent(swiper) {
      this.$emit('slideChange', swiper.realIndex + 1)
    },
    prevOver() {
      document.body.classList.add('prev-active')
    },
    prevOut() {
      document.body.classList.remove('prev-active')
    },
    nextOver() {
      document.body.classList.add('next-active')
    },
    nextOut() {
      document.body.classList.remove('next-active')
    },
    getSize(size) {
      if (this.size == 'screen') {
        return 'md:px-8'
      } else if (size == 'small') {
        return 'md:px-24'
      } else {
        return
      }
    },
    next() {
      if (this.mySwiper.realIndex == this.mySwiper.slides.length - 1) {
        console.log('test')
        this.mySwiper.slideTo(0, 300, false)
      } else {
        this.mySwiper.slideTo(this.mySwiper.realIndex + 1, 300, false)
      }
    },
    prev() {
      if (this.mySwiper.realIndex == 0) {
        this.mySwiper.slideTo(this.mySwiper.slides.length, 300, false)
      } else {
        this.mySwiper.slideTo(this.mySwiper.realIndex - 1, 300, false)
      }
    },
  },
}
</script>
<style scoped>
.swiper-container {
  width: 100%;
  position: static !important;
}
.swiper-slide {
  opacity: 0 !important;
  transform: translateX(0) !important;
  position: absolute !important;
}
.swiper-slide-active {
  opacity: 1 !important;
}
@keyframes next {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes prev {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.prev,
.next {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.90834 0.992893L21.3135 19.3981L2.41027 38.4052L0.992188 36.9948L18.4889 19.4019L1.49412 2.40711L2.90834 0.992893Z' fill='black'/%3E%3C/svg%3E%0A") !important;
  @apply bg-right bg-no-repeat transform -mt-8 -mr-8 opacity-0;
  background-size: 1rem auto;
}

.next {
  animation: next 1.5s 3 ease-in-out;
}

.prev {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.0917 38.0071L0.686502 19.6019L19.5897 0.594772L21.0078 2.00517L3.5111 19.5981L20.5059 36.5929L19.0917 38.0071Z' fill='black'/%3E%3C/svg%3E%0A") !important;
  @apply bg-left -ml-8 mr-0;
}
.bg-grey .prev {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.0917 38.0071L0.686502 19.6019L19.5897 0.594772L21.0078 2.00517L3.5111 19.5981L20.5059 36.5929L19.0917 38.0071Z' fill='white'/%3E%3C/svg%3E%0A") !important;
}
.bg-grey .next {
  background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.90834 0.992893L21.3135 19.3981L2.41027 38.4052L0.992188 36.9948L18.4889 19.4019L1.49412 2.40711L2.90834 0.992893Z' fill='white'/%3E%3C/svg%3E%0A") !important;
}
@screen md {
  .prev,
  .next,
  .bg-grey .prev,
  .bg-grey .next {
    @apply translate-x-0 translate-y-0 m-0;
    background-image: none !important;
    animation: none;
  }
}
</style>