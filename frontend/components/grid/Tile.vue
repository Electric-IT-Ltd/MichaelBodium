<template>
  <article
    ref="tile"
    class="relative my-4 transition duration-300 opacity-0"
    :class="[shiftClass, widthClass, justifyClass, alignClass]"
    v-waypoint="{
      active: true,
      callback: onWaypoint,
      options: intersectionOptions,
    }"
  >
    <div :class="[sizeClass, justifyClass]" class="flex">
      <div
        :class="[innerWidthClass]"
        class="relative flex items-center w-full h-full square"
      >
        <Media
          :id="media._ref"
          v-if="media"
          :autoplay="autoplay"
          :size="size"
          class="absolute flex items-center justify-center w-full h-full"
        ></Media>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: [
    'size',
    'width',
    'halign',
    'valign',
    'shift',
    'media',
    'background',
    'autoplay',
  ],
  data() {
    return {
      intersectionOptions: {
        root: null,
        rootMargin: '-30% 0px 0px 0px',
        threshold: [1, 0],
      },
    }
  },
  methods: {
    onWaypoint({ going, direction }) {
      if (going === this.$waypointMap.GOING_IN) {
        this.$el.classList.add('in-view')
      }
      if (going === this.$waypointMap.GOING_OUT) {
        this.$el.classList.remove('in-view')
      }
    },
  },
  computed: {
    sizeClass() {
      let size = 'md:px-6'
      if (this.size == 'large') {
        size = 'md:-mx-0 '
      } else if (this.size == 'small') {
        size = 'md:px-16 '
      } else if (this.size == 'screen') {
        size = 'h-fscreen'
      }
      return size
    },
    widthClass() {
      let width = 'w-full md:w-1/2'
      if (this.width == 'full') {
        width = 'w-full'
      }
      return width
    },
    innerWidthClass() {
      let width = 'w-full'
      if (this.width == 'full') {
        width = 'w-full md:w-1/2'
      }
      return width
    },
    justifyClass() {
      let justify = 'justify-center'
      if (this.halign == 'left') {
        justify = 'justify-left'
      } else if (this.halign == 'right') {
        justify = 'justify-right'
      }
      return justify
    },
    alignClass() {
      let align = 'self-center'
      if (this.valign == 'top') {
        align = 'self-start'
      } else if (this.valign == 'bottom') {
        align = 'self-end'
      }
      return align
    },
    shiftClass() {
      let shift = ''
      if (this.shift == '5') {
        shift = ''
      } else if (this.shift != undefined) {
        shift = (this.shift - 5) * 16
        if (shift > 0) {
          shift = 'transform md:translate-y-' + shift + ' md:mb-' + shift
        } else {
          shift = 'transform md:-translate-y' + shift + ' md:mt' + shift
        }
      }
      return shift
    },
  },
  mounted() {
    setTimeout(() => {
      this.$refs['tile'].classList.remove('opacity-0')
    }, 400)
    if (this.background == 'white') {
      this.$refs['tile'].classList.add('hover:bg-white')
    } else {
      this.$refs['tile'].classList.remove('hover:bg-white')
    }
  },
}
</script>
<style>
article footer {
  @apply opacity-0 transition-opacity duration-700;
}
.in-view footer {
  @apply opacity-100 delay-300;
}

.square:after {
  content: '';
  @apply block w-full;
  padding-bottom: 100%;
}

@screen lg {
  .h-fscreen {
    height: calc(100vh - 11.5rem);
    min-height: 26rem;
  }
}
</style>