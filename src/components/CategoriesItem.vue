<template>
  <div @click="goToList" class="categories-item">
    <h2>{{ category || "Add Todo" }}</h2>
  </div>
</template>

<script>
export default {
  props: { category: String },
  name: "CategoriesItem",
  methods: {
    goToList() {
      if (this.category) {
        this.$router.push({
          name: "Category",
          params: { category: this.category },
        });
      } else {
        this.$emit("addTodo");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/_mixins.scss";

.categories-item {
  @include list-item;
  h2 {
    text-transform: capitalize;
  }

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: lightgrey;
    color: white;
  }
}
</style>