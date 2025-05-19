<template>
  <div class="w-full h-full">
    <SingleImage
      :image="$urlFor(assets[0].galleryImage).width(1000).auto('format').url()"
      v-if="!type || (type == 'image' && assets.length < 2)"
      :title="title"
      :subtitle="subtitle"
      :size="size"
    ></SingleImage>
    <Slider
      v-else-if="type == 'image' && assets.length > 1"
      :slides="assets"
      :title="title"
      :subtitle="subtitle"
      :size="size"
    ></Slider>
    <Video
      v-else
      :title="title"
      :subtitle="subtitle"
      :video="assets"
      :autoplay="autoplay"
      :size="size"
    ></Video>
  </div>
</template>
<script>
import { groq } from '@nuxtjs/sanity'

export default {
  props: ['id', 'autoplay', 'size'],
  data() {
    return {
      type: '',
      assets: '',
      title: '',
      subtitle: '',
    }
  },
  async fetch() {
    const query = groq`*[_type in ["video", "series"] && _id == "${this.id}"]`
    const result = await this.$sanity.fetch(query)
    const media = result[0]
    if (media) {
      this.type = media._type
      if (media._type == 'video') {
        this.type = 'video'
        this.assets = media.video
      } else {
        this.type = 'image'
        this.assets = media.galleryImages
      }
      this.title = media.title
      if (media.subtitle) {
        this.subtitle = media.subtitle
      }
    } else {
      this.type = ''
    }
  },
}
</script>
