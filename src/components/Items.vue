<template>
  <div>
    <div v-if="error">{{ error }}</div>
    <h3>Add a new item</h3>
    <form action="" @submit.prevent="addItem">
      <div>
        <input
          class="input"
          autofocus
          autocomplete="off"
          placeholder="Type a item title"
          v-model="newItem.name"
        />
      </div>
      <input type="submit" value="Add Item" />
    </form>

    <hr />

    <ul>
      <li v-for="item in items" :key="item.id" :item="item">
        <div>
          <p>
            <title>Item</title>
            {{ item.name }}
          </p>
          <button @click.prevent="editItem(item)">Edit</button>
          <button @click.prevent="removeItem(item)">Delete</button>
        </div>

        <div v-if="item == editedItem">
          <form action="" @submit.prevent="updateItem(item)">
            <div>
              <input class="input" v-model="item.name" />
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
  name: 'Items',
  data() {
    return {
      items: [],
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
    }
  },
  methods: {
    setError(error, text) {
      this.error =
        (error.response && error.response.data && error.response.data.error) ||
        text
    },
    addItem() {
      const value = this.newItem
      if (!value) {
        return
      }
      this.$http.secured
        .post('/api/v1/items/', { item: { name: this.newItem.name } })

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
        .patch(`/api/v1/items/${item.id}`, { item: { name: item.name } })
        .catch(error => this.setError(error, 'Cannot update item'))
    }
  }
}
</script>
