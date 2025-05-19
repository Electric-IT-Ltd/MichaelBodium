<template>
  <div class="flex flex-wrap px-6" ref="container">
    <Tile
      v-for="tile in category.series"
      :size="'screen'"
      :width="'half'"
      :halign="'center'"
      :valign="'middle'"
      :shift="'none'"
      :media="tile"
      :key="tile._key"
    ></Tile>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  name: 'post',
  async asyncData({ $sanity, params, error }) {
    const query = groq`*[_type == "category" && slug.current == "${params.slug}"] | order(_updatedAt desc)`
    const results = await $sanity.fetch(query)
    const category = results[0]
    let title = `Michael Bodiam | ${category.title}`
    let description = ''
    if (category.seo) {
      if (category.seo.title) {
        title = category.seo.title
      }
      if (category.seo.description) {
        description = category.seo.description
      }
    }
    return { category, title, description }
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
  mounted() {
    document.body.classList.add('bg-grey')
    document.body.classList.add('text-white')
  },
}
</script>
