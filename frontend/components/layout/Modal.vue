<template>
  <div
    class="container flex flex-col flex-wrap min-w-full my-10 font-serif text-xs leading-none leading-snug tracking-normal text-center text-black pointer-events-auto md:mb-auto md:text-left md:flex-row"
  >
    <div
      class="w-full my-4 md:w-1/4 md:my-0"
      v-for="column in $store.state.columns"
      :key="column._key"
    >
      <h3 class="mb-4 uppercase">{{ column.title }}</h3>
      <ul>
        <li v-for="item in column.items" :key="item._key">
          <a :href="item.link" v-if="item.link">{{ item.title }}</a>
          <span v-else>{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>