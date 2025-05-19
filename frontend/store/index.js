import { groq } from '@nuxtjs/sanity'

export const state = () => ({
  name: '',
  introduction: [],
  categories: '',
  bio: [],
  columns: [],
  infoBackground: '',
  modal: false,
  series: [],
})

export const mutations = {
  SET_NAME(state, name) {
    state.name = name
  },
  SET_INTRODUCTION(state, introduction) {
    state.introduction = introduction
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  },
  SET_BIO(state, bio) {
    state.bio = bio
  },
  SET_COLUMNS(state, columns) {
    state.columns = columns
  },
  SET_INFO_BACKGROUND(state, color) {
    state.infoBackground = color
  },
  SET_MODAL(state, modal) {
    state.modal = modal
  },
  SET_SERIES(state, series) {
    state.series = series
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const query = groq`*[_type == "home"]`
    const results = await this.$sanity.fetch(query)
    const home = results[0]
    commit('SET_NAME', home.name)
    commit('SET_INTRODUCTION', home.title)
    commit('SET_BIO', home.introduction)
    commit('SET_COLUMNS', home.columns)
    const catQuery = groq`*[_type == "home"] {

      "categories": categories[] {
    
      "cate":*[_type == "category" && _id == ^._ref ]
      }
    }`
    const fetchCategories = await this.$sanity.fetch(catQuery)
    const categories = fetchCategories[0].categories
    const mapCategories = categories.map((item) => item.cate[0])
    const infoBackground = home.infoBackground

    const seriesQuery = groq`*[_type == "series"]{title,"slug":slug.current}`

    const fetchSeries = await this.$sanity.fetch(seriesQuery)

    // console.log(fetchSeries)
    commit('SET_SERIES', fetchSeries)
    commit('SET_CATEGORIES', mapCategories)
    commit('SET_INFO_BACKGROUND', infoBackground)
  },
  setModal({ commit }, modal) {
    commit('SET_MODAL', modal)
  },
}
