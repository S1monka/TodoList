<template>
  <div id="app">
    <header @click="$router.push('/')">
      <h1><em>Todo List</em></h1>
      <hr />
    </header>
    <router-view @add-todo="showModal = true" />
    <modal-popup v-if="showModal" @hide-popup="showModal = false" />
  </div>
</template>

<script>
import ModalPopup from "@/components/ModalPopup";
export default {
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    ModalPopup,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0 1.5rem;
}

header h1 {
  font-size: 5rem;
  cursor: pointer;
}
</style>
