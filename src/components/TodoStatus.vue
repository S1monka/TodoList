<template>
  <div class="todo-status">
    <input type="checkbox" :checked="checked" @change="changeStatus($event, id)" />
  </div>
</template>

<script>
export default {
  name: "TodoStatus",
  props: ["id", "checked"],
  methods: {
    changeStatus({ target }, id) {
      this.$store.commit("changeStatus", { checked: target.checked, id });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";

.todo-status {
  @include flex-center;
  flex-flow: row wrap;
  justify-content: flex-end;

  input[type="checkbox"] {
    width: 38px;
    height: 38px;
  }
}
</style>