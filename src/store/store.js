import Vue from 'vue'
import Vuex from 'vuex'
import * as user from '@/store/modules/user.js'
import * as event from '@/store/modules/event.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    event
  },
  state: {
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
    ]
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
    }
  }
})
