<template>
  <div v-for="task in tasks" :value="task.text" :key="task.id">
    <Task
      :task="task"
      @delete-task="$emit('delete-task', task.id)"
      @toggle-reminder="$emit('toggle-reminder', task.id)"
    ></Task>
  </div>
</template>

<script>
import Task from "./Task.vue";

export default {
  name: "TaskList",
  components: {
    Task,
  },
  props: {
    tasks: Array,
  },
  created() {},
  emits: ["delete-task", "toggle-reminder"],
};
</script>

<style scoped>
</style>