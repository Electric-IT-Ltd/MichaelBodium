<template>
  <div class="flex flex-wrap px-6" ref="container">
    <Tile
      v-for="tile in home.indexGrid"
      :size="tile.imageSize"
      :width="tile.width"
      :halign="tile.justify"
      :valign="tile.alignment"
      :shift="tile.shift"
      :media="tile.series"
      :tile="tile"
      :key="tile._key"
      :background="'white'"
      :autoplay="true"
    ></Tile>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  data() {
    return {
      test: '',
    }
  },
  async asyncData({ $sanity }) {
    const query = groq`*[_type == "home"]`
    const results = await $sanity.fetch(query)
    const home = results[0]
    const title = results[0].seo.title
    const description = results[0].seo.description
    return { home, title, description }
  },
  transition: 'home',
  mounted() {
    document.body.classList.remove('bg-grey')
    document.body.classList.remove('text-white')
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
      ],
    }
  },
}
</script>
<style>
.home-enter-active,
.home-leave-active {
  @apply transition-opacity duration-300;
}
.home-enter-active footer,
.home-leave-active footer {
}
.home-enter,
.home-leave-active {
  @apply opacity-0;
}
</style>