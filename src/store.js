import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 'abc123', name: 'Adam Jahr' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    todos: [
      { id: 1, text: 'TODO 1', done: true },
      { id: 2, text: 'TODO 2', done: false },
      { id: 3, text: 'TODO 3', done: true },
      { id: 4, text: 'TODO 4', done: true },
      { id: 5, text: 'TODO 5', done: false },
      { id: 6, text: 'TODO 6', done: false },
      { id: 7, text: 'TODO 7', done: true }
    ],
    events: []
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      EventService.postEvent(event)
      commit('ADD_EVENT', event)
    }
  },
  getters: {
    categoryLength: state => {
      return state.categories.length
    },
    allTodos: state => {
      return state.todos
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    activeTodosCount: state => {
      return state.todos.filter(todo => !todo.done)
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
