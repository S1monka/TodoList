<template>
  <div class="todos-item">
    <div
      class="todo-name"
      @click="$router.push({ name: 'TodoPage', params: { id: todo.id } })"
    >
      <h2>{{ todo.name }}</h2>
    </div>
    <todo-status :checked="todo.checked" :id="todo.id" />
  </div>
</template>

<script>
import TodoStatus from "./TodoStatus";
export default {
  props: {
    todo: Object,
  },
  components: {
    TodoStatus,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";

.todos-item {
  @include list-item;
  flex-flow: column nowrap;
  align-items: stretch;

  &:hover {
    .todo-name {
      background-color: lightgray;
      color: white;
    }
  }
}

.todo-name {
  @include flex-center;

  height: 100%;

  cursor: pointer;
}
</style>