<template>
  <nuxt-link
    :to="'/category/' + category.slug.current"
    v-if="category"
    class="relative pl-5 pointer-events-auto filter-button"
  >
    <svg
      class="w-3.5 h-3.5 absolute left-0"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1H14.1V14.2H1V1ZM0 15.2H15.2V0H0V15.2Z"
        class="fill-current"
      />
      <path
        d="M3.7 2.9L7.6 6.9L11.5 3L12.2 3.7L8.3 7.6L12.2 11.5L11.5 12.2L7.6 8.3L3.7 12.2L3 11.5L6.9 7.6L3 3.7L3.7 2.9Z"
        class="fill-current"
      />
    </svg>
    {{ category.title }}</nuxt-link
  >
</template>
<script>
export default {
  props: ['category'],
}
</script>
