<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h1>Books</h1>
    <h3>Add a new book</h3>
    <form @submit.prevent="addBook">
      <div class="field">
        <label>Title</label>
        <input
          type="text"
          autofocus
          autocomplete="off"
          placeholder="Add a book title"
          v-model="newBook.title"
        />
      </div>
      <input type="submit" value="Save" />
    </form>
    <hr />
    <h3>List all books</h3>
    <ul class="list-group">
      <li v-for="book in books" :key="book.id" :book="book" class="list-item">
        <div>
          <p>{{ book.title }}</p>
          <p>{{ handleDatetime(book.created_at) }}</p>
          <p>{{ handleDatetime(book.updated_at) }}</p>
          <button @click.prevent="editBook(book)">Edit</button>
          <button @click.prevent="removeBook(book)">Delete</button>
        </div>

        <div v-if="book == editedBook">
          <form @submit.prevent="updateBook(book)">
            <div class="field">
              <label>Title</label>
              <input class="input" type="text" v-model="book.title" />
              <input type="submit" value="Update" />
              <button @click.prevent="cancel()">Cancel</button>
            </div>
          </form>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: [],
      newBook: [],
      error: '',
      editedBook: ''
    }
  },
  created() {
    if (!localStorage.signedIn) {
      this.$router.replace('/')
    } else {
      this.$http.secured
        .get('/api/v1/books')
        .then(response => {
          this.books = response.data
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
    addBook() {
      const value = this.newBook
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/books/', { book: { title: this.newBook.title } })
        .then(response => {
          this.books.push(response.data)
          this.newBook = ''
        })
        .catch(error => this.setError(error, 'Cannot create book'))
    },
    removeBook(book) {
      this.$http.secured
        .delete(`/api/v1/books/${book.id}`)
        // eslint-disable-next-line
        .then(response => {
          this.books.splice(this.books.indexOf(book), 1)
        })
        .catch(error => this.setError(error, 'Cannot delete book'))
    },
    editBook(book) {
      this.editedBook = book
    },
    updateBook(book) {
      this.editedBook = ''
      this.$http.secured
        .patch(`/api/v1/books/${book.id}`, { book: { title: book.title } })
        .catch(error => this.setError(error, 'Cannot update book'))
    },
    cancel() {
      this.editedBook = ''
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
