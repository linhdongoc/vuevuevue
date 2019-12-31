<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h3>Add a new Todo List</h3>
    <form action="" @submit.prevent="addTodoList">
      <div>
        <input
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a Todo List title"
          v-model="newTodoList.title"
        />
      </div>
      <input type="submit" value="Add Todo List" />
    </form>

    <hr />

    <ul>
      <li v-for="todoList in todoLists" :key="todoList.id" :todoList="todoList">
        <div>
          <p>
            <title>Todo List</title>
            {{ todoList.title }}
          </p>
          <button @click.prevent="editTodoList(todoList)">Edit</button>
          <button @click.prevent="removeTodoList(todoList)">Delete</button>
        </div>

        <div v-if="todoList == editedTodoList">
          <form action="" @submit.prevent="updateTodoList(todoList)">
            <div>
              <input class="input" v-model="todoList.title" />
              <input type="submit" value="Update" />
            </div>
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
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    },
    addTodoList() {
      const value = this.newTodoList
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/todo_lists/', {
          todoList: { title: this.newTodoList.title }
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
          todoList: { title: todoList.title }
        })
        .catch(error => this.setError(error, 'Cannot update Todo List'))
    }
  }
}
</script>
