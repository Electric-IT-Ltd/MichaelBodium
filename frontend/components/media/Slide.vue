<template>
  <div>
    <img
      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==

"
      :data-src="$urlFor(image).width(300).auto('format')"
      :data-srcset="`${$urlFor(image)
        .width(300)
        .auto('format')
        .url()} 300w, ${$urlFor(image)
        .width(400)
        .auto('format')
        .url()} 400w, ${$urlFor(image)
        .width(500)
        .auto('format')
        .url()} 500w, ${$urlFor(image)
        .width(600)
        .auto('format')
        .url()} 600w, ${$urlFor(image)
        .width(700)
        .auto('format')
        .url()} 700w, ${$urlFor(image)
        .width(800)
        .auto('format')
        .url()} 800w, ${$urlFor(image)
        .width(900)
        .auto('format')
        .url()} 900w, ${$urlFor(image)
        .width(1000)
        .auto('format')
        .url()} 1000w, ${$urlFor(image)
        .width(1100)
        .auto('format')
        .url()} 1100w, ${$urlFor(image)
        .width(1200)
        .auto('format')
        .url()} 1200w, ${$urlFor(image)
        .width(1400)
        .auto('format')
        .url()} 1400w, ${$urlFor(image)
        .width(1600)
        .auto('format')
        .url()} 1600w, ${$urlFor(image)
        .width(1800)
        .auto('format')
        .url()} 1800w, ${$urlFor(image)
        .width(2000)
        .auto('format')
        .url()} 2000w`"
      class="object-contain w-full h-full swiper-lazy"
    />
  </div>
</template>
<script>
export default {
  props: ['size', 'image'],
}
</script>