<template>
  <div class="flex flex-wrap px-6" ref="container">
    <article
      v-for="image in series.galleryImages"
      :key="image._key"
      class="relative self-center justify-center w-full my-4 transition duration-300 transform  md:-translate-yNaN md:mtNaN md:w-1/2 in-view"
    >
      <div class="flex justify-center h-fscreen">
        <div class="relative flex items-center w-full h-full square">
          <div class="absolute flex items-center justify-center w-full h-full">
            <div class="flex flex-col w-full h-full md:px-8">
              <figure
                class="relative flex flex-col items-center justify-center flex-1 w-full overflow-hidden "
              >
                <img
                  ref="image"
                  :src="
                    $urlFor(image.galleryImage).width(1000).auto('format').url()
                  "
                  class="absolute object-contain w-full h-full"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { groq } from '@nuxtjs/sanity'

export default {
  async asyncData({ $sanity, params, error }) {
    const query = groq`*[_type == "series" && slug.current == "${params.slug}"] | order(_updatedAt desc)`
    const results = await $sanity.fetch(query)
    const series = results[0]
    let title = `Michael Bodiam | ${series.title}`
    let description = ''
    if (series.seo) {
      if (series.seo.title) {
        title = series.seo.title
      }
      if (series.seo.description) {
        description = series.seo.description
      }
    }
    return { series, title, description }
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
