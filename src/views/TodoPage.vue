<template>
  <div id="todo-page">
    <div id="todo-block">
      <div id="todo-name">
        <h2>Name: {{ todo.name }}</h2>
      </div>
      <div v-if="todo.description" id="todo-description">
        <table>
          <tr>
            <td><h3>Description:</h3></td>
            <td width="50%">
              <p>{{ todo.description }}</p>
            </td>
          </tr>
        </table>
      </div>
      <div id="todo-category">
        <h3>Category: {{ todo.category }}</h3>
      </div>
      <div id="todo-actions">
        <todo-status :checked="todo.checked" :id="todo.id" />
        <span @click="removeItem(todo.id)" id="todo-delete">x</span>
      </div>
    </div>
  </div>
</template>

<script>
import TodoStatus from "@/components/TodoStatus.vue";
export default {
  name: "TodoPage",
  data() {
    return {
      todo: {},
    };
  },
  components: {
    TodoStatus,
  },
  // computed: {
  //   todo() {
  //     return ;
  //   },
  // },
  methods: {
    removeItem(id) {
      const { category } = this.$route.params;
      this.$router.push({ name: "Categories" });
      this.$store.commit("removeTodo", { id, category });
    },
  },
  mounted() {
    this.todo = this.$store.getters.todoItem(this.$route.params.id);
  },
};
</script>

<style lang="scss" scoped>
#todo-page {
  margin-top: 1.5rem;
}
#todo-block {
  border: 1px solid lightgrey;
  border-radius: 5px;

  margin: 0 auto;

  max-width: 720px;
}

#todo-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  padding: 0 0.2rem;
}

#todo-delete {
  padding: 0.25rem 0.75rem;

  color: white;
  background-color: red;

  border: 1px solid red;
  border-radius: 2.5px;

  font-size: 1.5rem;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: red;
  }
}

table {
  margin: 0 auto;
  border-spacing: 1rem 0;
}
</style>