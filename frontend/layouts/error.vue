<template>
  <div class="p-6 pt-48 tracking-wide md:pt-32">
    <AppHeader></AppHeader>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Back to overview</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error', // you can set a custom layout for the error page
}
</script>
