<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>Items</h1>
    <h3>Add a new item</h3>
    <form @submit.prevent="addItem">
      <div class="field">
        <label>Name</label>
        <input
          type="text"
          autofocus
          autocomplete="off"
          placeholder="Add a item name"
          v-model="newItem.name"
        />
      </div>
      <div class="field">
        <label>Todo List</label>
        <select id="todoList" class="select" v-model="newItem.todoList">
          <option disabled>Select a Todo List</option>
          <option
            :value="todoList.id"
            v-for="todoList in todoLists"
            :key="todoList.id"
            >{{ todoList.title }}</option
          >
        </select>
        <p>
          Don't see a Todo List?
          <router-link to="/todoLists">Create one</router-link>
        </p>
      </div>
      <input type="submit" value="Save" />
    </form>
    <hr />
    <h3>List all Items</h3>
    <ul class="list-group">
      <li v-for="item in items" :key="item.id" :item="item" class="list-item">
        <div>
          <p>{{ item.name }}</p>
          <p>{{ item.done ? item.done : 'n.a' }}</p>
          <p>{{ handleDatetime(item.created_at) }}</p>
          <p>{{ handleDatetime(item.updated_at) }}</p>
          <p>{{ getTodoList(item) }}</p>
          <button @click.prevent="editItem(item)">Edit</button>
          <button @click.prevent="removeItem(item)">Delete</button>
        </div>

        <div v-if="item == editedItem">
          <form @submit.prevent="updateItem(item)">
            <div class="field">
              <label>Name</label>
              <input class="input" type="text" v-model="item.name" />
            </div>
            <div class="field">
              <label>Todo List</label>
              <select
                id="todoList_update"
                class="select"
                v-model="item.todoList"
              >
                <option disabled>Select a Todo List</option>
                <option
                  :value="todoList.id"
                  v-for="todoList in todoLists"
                  :key="todoList.id"
                  >{{ todoList.title }}</option
                >
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
  name: 'Items',
  data() {
    return {
      items: [],
      todoLists: [],
      newItem: [],
      error: '',
      editedItem: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get('/api/v1/items')
        .then(response => {
          this.items = response.data
        })
        .catch(error => this.setError(error, 'Something went wrong'))

      this.$http.secured
        .get('/api/v1/todo_lists')
        .then(response => {
          this.todoLists = response.data
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
    getTodoList(item) {
      const itemTodoListValues = this.todoLists.filter(
        todoList => todoList.id === item.todo_list_id
      )
      let todoList
      itemTodoListValues.forEach(function(e) {
        todoList = e.title
      })
      return todoList
    },
    addItem() {
      const value = this.newItem
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/items/', {
          item: { name: this.newItem.name, todo_list_id: this.newItem.todoList }
        })

        .then(response => {
          this.items.push(response.data)
          this.newItem = ''
        })
        .catch(error => this.setError(error, 'Cannot create item'))
    },
    removeItem(item) {
      this.$http.secured
        .delete(`/api/v1/items/${item.id}`)
        // eslint-disable-next-line
          .then(response => {
          this.items.splice(this.items.indexOf(item), 1)
        })
        .catch(error => this.setError(error, 'Cannot delete item'))
    },
    editItem(item) {
      this.editedItem = item
    },
    updateItem(item) {
      this.editedItem = ''
      this.$http.secured
        .patch(`/api/v1/items/${item.id}`, {
          item: { name: item.name, todo_list_id: item.todoList }
        })
        .catch(error => this.setError(error, 'Cannot update item'))
    },
    cancel() {
      this.editedItem = ''
    }
  }
}
</script>
