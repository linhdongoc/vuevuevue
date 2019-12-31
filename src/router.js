import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate'
import EventList from './views/EventList'
import EventShow from './views/EventShow'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Books from './components/Books'
import Items from './components/Items'
import TodoLists from './components/TodoLists'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/books',
      name: 'Books',
      component: Books
    },
    {
      path: '/items',
      name: 'Items',
      component: Items
    },
    {
      path: '/todoLists',
      name: 'TodoLists',
      component: TodoLists
    },
    {
      path: '/',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/events',
      name: 'event-list',
      component: EventList
    },
    {
      path: '/events/:id',
      name: 'event-show',
      component: EventShow,
      props: true
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    }
  ]
})
