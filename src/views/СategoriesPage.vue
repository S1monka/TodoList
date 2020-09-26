<template>
  <div id="categories">
    <div v-for="category in categories" :key="category">
      <categories-item :category="category" />
    </div>
    <categories-item @addTodo="$emit('add-todo')" />
  </div>
</template>

<script>
import CategoriesItem from "@/components/CategoriesItem";
export default {
  name: "Categories",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    CategoriesItem,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/_mixins.scss";
#categories {
  @include grid-system;
}
</style>
