<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h1>Add New Todo</h1>
          </div>

          <div class="modal-body">
            <div v-if="showAlert" class="alert">
              <h3>Fields "Name" and "Category" required</h3>
            </div>
            <table>
              <tr id="todo-name" class="input-form">
                <td>
                  <h2>Name:</h2>
                </td>
                <td>
                  <input v-model="name" type="text" />
                </td>
              </tr>
              <tr id="todo-description" class="input-form">
                <td>
                  <h2>Description :</h2>
                </td>
                <td>
                  <textarea
                    v-model="description"
                    cols="30"
                    rows="10"
                  ></textarea>
                </td>
              </tr>
              <tr id="todo-category" class="input-form">
                <td>
                  <h2>Category:</h2>
                </td>
                <td>
                  <input v-model="category" type="text" />
                </td>
              </tr>
            </table>
          </div>

          <div class="modal-footer">
            <button @click="$emit('hide-popup')">Cancel</button>
            <button @click="submitTodo">Add</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ModalPopup",
  data() {
    return {
      name: "",
      description: "",
      category: "",
      showAlert: false,
    };
  },
  methods: {
    submitTodo() {
      const { name, description, category } = this;

      if (name === "" || category === "") {
        this.showAlert = true;

        setTimeout(() => {
          this.showAlert = false;
        }, 5000);
      } else {
        this.$store.commit("addTodo", { name, description, category });

        this.$emit("hide-popup");

        this.name = "";
        this.description = "";
        this.category = "";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.alert {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: red;
  color: white;

  border-radius: 5px;
  margin: 0 8.5rem;

  height: 3rem;
}

.modal-body table {
  margin: 0 auto;
  border-spacing: 2rem 0;

  td {
    text-align: left;
  }
}

.input-form {
  input[type="text"] {
    width: 16rem;
    height: 1.225rem;

    border: none;
    border-bottom: 1px solid black;
  }
}

.modal-container {
  max-width: 720px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  padding: 1.5rem;
}

.modal-footer {
  display: flex;
  justify-content: space-around;
  margin: 2rem 3rem 0;
  button {
    padding: 0.25rem 3rem;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>