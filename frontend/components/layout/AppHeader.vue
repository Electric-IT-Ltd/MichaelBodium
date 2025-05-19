<template>
  <header
    class="top-0 left-0 z-50 w-full p-6 leading-tight pointer-events-none"
    v-bind:class="{
      'absolute min-h-full bg-yellow': this.$store.state.modal,
      fixed: !this.$store.state.modal,
    }"
    :style="
      $store.state.infoBackground && this.$store.state.modal
        ? `background-color: ${
            $store.state.infoBackground[
              Math.floor(Math.random() * $store.state.infoBackground.length)
            ].hex
          }`
        : ''
    "
  >
    <div
      class="flex flex-wrap items-start justify-between pr-12 -m-1 -mt-2 max-w-ch lg:m-0 lg:-mt-1"
    >
      <h1 class="inline lg:block">
        <nuxt-link to="/" class="-ml-0.5 font-bold tracking-wider uppercase">{{
          $store.state.name
        }}</nuxt-link>
        <span v-if="this.$store.state.modal">
          <block-content
            :blocks="child"
            v-for="child in $store.state.bio"
            :key="child._id"
          />
        </span>
        <span v-else>
          {{ $store.state.introduction }}<br class="hidden lg:block" />
        </span>
      </h1>
      <nav
        class="flex-wrap items-center inline leading-tight lg:flex"
        v-if="!this.$store.state.modal"
      >
        <span class="mr-1 lg:mr-2"> See a curated </span>
        <NuxtLink to="/" class="relative pl-5 mr-1 pointer-events-auto lg:mr-2">
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
          Overview. </NuxtLink
        ><span class="mr-1 lg:mr-2">Or filter by;</span>
        <FilterButton
          :category="category"
          v-for="(category, index) in $store.state.categories"
          :key="index"
          :class="'leading-tight'"
        ></FilterButton>
      </nav>
    </div>
    <button
      @click="openModal"
      class="absolute top-0 right-0 m-4 leading-tight pointer-events-auto md:m-6 modal-btn"
    >
      <span class="hidden md:inline">
        <span v-if="this.$store.state.modal">Close</span>
        <span v-else>Info</span>
      </span>
      <svg
        class="w-6 h-6 m-1 lg:w-7 lg:h-7 lg:m-1 md:hidden"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 0V30" class="stroke-current" stroke-width="1.2" />
        <path d="M0 15H30" class="stroke-current" stroke-width="1.2" />
      </svg>
    </button>
    <Modal :class="'w-full'" v-if="this.$store.state.modal"></Modal>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: ['categories'],
  data() {
    return {
      header: {},
    }
  },
  methods: {
    openModal() {
      window.scrollTo(0, 0)
      this.$store.dispatch('setModal', !this.$store.state.modal)
      if (this.$store.state.modal) {
        document.body.classList.add('modal-open')
      } else {
        document.body.classList.remove('modal-open')
      }
    },
  },
}
</script>
<style lang="css">
header a {
  @apply inline-flex items-center justify-center;
}
header .filter-button:after {
  content: ', ';
  @apply inline-block mr-2;
}
header .filter-button:last-child:after {
  content: '.';
}
header a svg {
  @apply mr-2;
}
header a svg path:last-child {
  @apply opacity-0;
}
header a.nuxt-link-exact-active svg path:last-child {
  @apply opacity-100;
}
.modal-open {
  @apply text-black;
}
.modal-open .modal-btn svg {
  @apply transform rotate-45;
}
header p {
  @apply inline;
}
</style>
