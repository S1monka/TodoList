import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    categories: [],
    todos: [],
  },
  mutations: {
    isCategoryEmpty(state, category) {
      if (
        state.todos.filter((todo) => todo.category === category).length <= 0
      ) {
        this.commit("removeCategory", category);
      }
    },
    removeCategory(state, category) {
      const categoryIndex = state.categories.findIndex(
        (item) => item === category
      );

      state.categories.splice(categoryIndex, 1);
    },

    addCategory(state, category) {
      if (!state.categories.includes(category)) {
        state.categories.push(category);
      }
    },

    changeStatus(state, { checked, id }) {
      state.todos.find((todo) => todo.id === id).checked = checked;
    },

    removeTodo(state, { id, category }) {
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);

      state.todos.splice(todoIndex, 1);

      this.commit("isCategoryEmpty", category);
    },

    addTodo(state, { name, description, category }) {
      const id = Date.now();

      const nameToLower = name.toLowerCase();
      const categoryToLower = category.toLowerCase();

      state.todos.push({
        name: nameToLower,
        description: description,
        category: categoryToLower,
        checked: false,
        id,
      });

      this.commit("addCategory", categoryToLower);
    },
  },
  getters: {
    categoryTodos: (state) => (category) =>
      state.todos.filter((todo) => todo.category === category),
    todoItem: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },
});
