<template>
  <div :class="getSize()" class="flex flex-col">
    <figure class="flex-1 object-contain">
      <HlsVideo
        :video="video.asset._ref"
        v-if="video.asset"
        :autoplay="autoplay"
      />
    </figure>
    <footer
      class="py-4 mt-auto font-serif text-sm text-center uppercase md:py-6"
    >
      {{ title }}
      <span class="italic normal-case" v-if="subtitle">{{ subtitle }}</span>
    </footer>
  </div>
</template>
<script>
export default {
  props: ['title', 'subtitle', 'video', 'autoplay', 'size'],
  methods: {
    getSize(size) {
      if (this.size == 'screen') {
        return 'md:px-8 flex flex-col h-full'
      } else if (this.size == 'small') {
        return 'md:px-24'
      } else {
        return
      }
    },
  },
}
</script>
<style>
video {
  max-height: 80vw;
}
@screen lg {
  video {
    max-height: none;
  }
}
</style>
