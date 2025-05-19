<template>
  <div :class="getSize()" class="flex flex-col w-full h-full">
    <figure
      class="relative flex flex-col items-center justify-center flex-1 w-full overflow-hidden"
    >
      <img
        ref="image"
        :src="image"
        class="absolute object-contain w-full h-full"
      />
    </figure>
    <footer
      class="py-4 mt-auto font-serif text-sm text-center uppercase md:py-6"
    >
      {{ title }}
      <span class="italic normal-case" v-if="subtitle">{{ subtitle }}</span>
      <span class="block w-full mt-2"><span>(1</span> / 1)</span>
    </footer>
  </div>
</template>
<script>
export default {
  props: ['image', 'title', 'subtitle', 'size'],
  methods: {
    getSize(size) {
      if (this.size == 'screen') {
        return 'md:px-8 flex flex-col h-full'
      } else if (size == 'small') {
        return 'md:px-24'
      } else {
        return
      }
    },
  },
}
</script>