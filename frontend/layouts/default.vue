<template>
  <div class="p-6 pt-48 tracking-wide md:pt-32">
    <AppHeader></AppHeader>
    <main v-show="!$store.state.modal">
      <Nuxt />
    </main>
    <cursor-fx />
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalOpen: false,
      cursor: 'opacity-0',
    }
  },
}
</script>
<style lang="scss">
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  font-size: 80%;
}

body {
  @apply bg-white font-sans antialiased leading-none text-lg duration-300;
  transition-property: background-color;
  &.modal-open {
    @apply text-black;
  }
}

.lazyLoad {
  @apply opacity-0 transition duration-300;
}

.lazyLoad.isLoaded {
  @apply opacity-100;
}

* {
  outline: none !important;
}

@screen lg {
  html {
    font-size: 1.4vw;
  }
}

@screen xl {
  html {
    font-size: 1.25vw;
  }
}

.cursor-fx * {
  @apply z-50;
}

.is-cursor-fx-active,
.is-cursor-fx-active * {
  cursor: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23282828'/%3E%3C/svg%3E%0A"),
    auto !important;
}

header {
  * {
    transition: none !important;
    transition-delay: 0s !important;
  }
}

.is-cursor-fx-active {
  body.bg-grey:not(body.next-active):not(body.prev-active):not(body.modal-open) {
    cursor: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23FFFFFF'/%3E%3C/svg%3E%0A"),
      auto !important;
    * {
      cursor: url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='5' fill='%23FFFFFF'/%3E%3C/svg%3E%0A"),
        auto !important;
    }
  }
}

body .cursor-fx__inner__inside {
  width: 2rem !important;
  height: 2rem !important;
  border-radius: 0 !important;
  border: 0 !important;
  transition-property: color, width, height, background-color, border-radius,
    border-color, background-image, opacity !important;
  background: transparent !important;
  display: flex !important;
  @apply items-center justify-center;
  will-change: transform !important;
  mix-blend-mode: difference !important;
}

body .cursor-fx__inner__outside {
  @apply hidden;
}

@screen md {
  body .cursor-fx__inner__inside:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M2.90834 0.992893L21.3135 19.3981L2.41027 38.4052L0.992188 36.9948L18.4889 19.4019L1.49412 2.40711L2.90834 0.992893Z' fill='%23ffffff'/%3E%3C/svg%3E%0A") !important;
    position: absolute;
    @apply bg-contain bg-no-repeat bg-center transition-opacity duration-300;
    opacity: 0 !important;
    z-index: 90;
  }

  body.prev-active .cursor-fx__inner__inside:before,
  body.next-active .cursor-fx__inner__inside:before {
    opacity: 1 !important;
  }

  body.prev-active .cursor-fx__inner__inside:before {
    background-image: url("data:image/svg+xml,%3Csvg width='22' height='39' viewBox='0 0 22 39' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M19.0917 38.0071L0.686502 19.6019L19.5897 0.594772L21.0078 2.00517L3.5111 19.5981L20.5059 36.5929L19.0917 38.0071Z' fill='white'/%3E%3C/svg%3E%0A") !important;
  }

  body.prev-active,
  body.next-active,
  body.prev-active *,
  body.next-active * {
    cursor: none !important;
  }
}
</style>
