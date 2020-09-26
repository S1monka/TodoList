<template>
  <div id="category-todos" v-if="todos.length > 0">
    <div class="todos-list" v-for="todo in todos" :key="todo.id">
      <todos-item :todo="todo" />
    </div>
  </div>
  <div v-else id="no-todos">
    <h1>There are no Todos</h1>
  </div>
</template>

<script>
import TodosItem from "@/components/TodosItem.vue";
export default {
  name: "CategoryTodos",
  components: {
    TodosItem,
  },
  computed: {
    todos() {
      return this.$store.getters.categoryTodos(this.$route.params.category);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";

#category-todos {
  @include grid-system;
}
</style>