<template>
  <header>
    <h1>{{ title }}</h1>
    <Button
    v-show="homePage"
      :text="showAddTask ? 'Hide Task' : 'Show Task'"
      :color="showAddTask ? 'red' : 'green'"
      @btn-click="$emit('toggle-add-task-btn')"
    ></Button>
  </header>
</template>


<script>
import Button from "./Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  emits: ["toggle-add-task-btn"],
  computed: {
    homePage() {
      if (this.$route.path == "/dashboard/") return true;
      return false;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}
</style>