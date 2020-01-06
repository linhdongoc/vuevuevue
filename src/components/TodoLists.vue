<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>Todo Lists</h1>
    <h3>Add a new Todo List</h3>
    <form @submit.prevent="addTodoList">
      <div class="field">
        <label>Title</label>
        <input
          type="text"
          autofocus
          autocomplete="off"
          placeholder="Add a Todo List title"
          v-model="newTodoList.title"
        />
      </div>
      <div class="field">
        <label>Items</label>
        <select id="items" class="select" v-model="newTodoList.item_ids">
          <option disabled>Select an Item</option>
          <option :value="item.id" v-for="item in items" :key="item.id">{{
            item.name
          }}</option>
        </select>
        <p>
          Don't see an Item?
          <router-link to="/items">Create one</router-link>
        </p>
      </div>
      <input type="submit" value="Save" />
    </form>
    <hr />
    <h3>List all TodoLists</h3>
    <ul class="list-group">
      <li
        v-for="todoList in todoLists"
        :key="todoList.id"
        :todoList="todoList"
        class="list-item"
      >
        <div>
          <p>{{ todoList.title }}</p>
          <p>{{ handleDatetime(todoList.created_at) }}</p>
          <p>{{ handleDatetime(todoList.updated_at) }}</p>
          <p>{{ getItems(todoList.item_ids) }}</p>
          <button @click.prevent="editTodoList(todoList)">Edit</button>
          <button @click.prevent="removeTodoList(todoList)">Delete</button>
        </div>

        <div v-if="todoList == editedTodoList">
          <form @submit.prevent="updateTodoList(todoList)">
            <div class="field">
              <label>Title</label>
              <input type="text" v-model="todoList.title" />
            </div>
            <div class="field">
              <label>Items</label>
              <select
                id="item_update"
                class="select"
                v-model="todoList.item_ids"
              >
                <option disabled>Select an Item</option>
                <option :value="item.id" v-for="item in items" :key="item.id">
                  {{ item.name }}
                </option>
              </select>
            </div>
            <input type="submit" value="Update" />
            <button @click.prevent="cancel()">Cancel</button>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoLists',
  data() {
    return {
      todoLists: [],
      items: [],
      newTodoList: [],
      error: '',
      editedTodoList: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get('/api/v1/todo_lists')
        .then(response => {
          this.todoLists = response.data
        })
        .catch(error => this.setError(error, 'Something went wrong'))

      this.$http.secured
        .get('/api/v1/items')
        .then(response => {
          this.items = response.data
        })
        .catch(error => this.setError(error, 'Something went wrong'))
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    },
    handleDatetime(value) {
      let d = new Date(value)
      return (
        d.getDate() +
        '.' +
        d.getMonth() +
        '.' +
        d.getFullYear() +
        ' - ' +
        d.getHours() +
        ':' +
        d.getMinutes() +
        ':' +
        d.getSeconds()
      )
    },
    getItems(ids) {
      if (!ids) {
        return
      }
      const items = []
      //todoList.items.forEach(function (currentItem) {
      //  items.push(this.items.filter(item => item.id === currentItem.id))
      //})
      ids.forEach(function(id) {
        items.push(this.items.filter(item => item.id === id))
      })
      return items.join(', ')
    },
    addTodoList() {
      const value = this.newTodoList
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/todo_lists/', {
          todo_list: {
            title: this.newTodoList.title,
            item_ids: [this.newTodoList.item_ids]
          }
        })
        .then(response => {
          this.todoLists.push(response.data)
          this.newTodoList = ''
        })
        .catch(error => this.setError(error, 'Cannot create Todo List'))
    },
    removeTodoList(todoList) {
      this.$http.secured
        .delete(`/api/v1/todo_lists/${todoList.id}`)
        // eslint-disable-next-line
          .then(response => {
          this.todoLists.splice(this.todoLists.indexOf(todoList), 1)
        })
        .catch(error => this.setError(error, 'Cannot delete Todo List'))
    },
    editTodoList(todoList) {
      this.editedTodoList = todoList
    },
    updateTodoList(todoList) {
      this.editedTodoList = ''
      this.$http.secured
        .patch(`/api/v1/todo_lists/${todoList.id}`, {
          todo_list: { title: todoList.title, item_ids: [todoList.item_ids] }
        })
        .catch(error => this.setError(error, 'Cannot update Todo List'))
    },
    cancel() {
      this.editedTodoList = ''
    }
  }
}
</script>
