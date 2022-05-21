<template>
  <AddTask v-if="showAddTask" @add-task="addTask"></AddTask>
  <TaskList
    :tasks="tasks"
    @delete-task="deleteTask"
    @toggle-reminder="toggleTask"
  ></TaskList>
</template>

<script>
import AddTask from "../components/AddTask.vue";
import TaskList from "../components/Tasks.vue";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {
    TaskList,
    AddTask,
  },
  data() {
    return {
      tasks: [],
    };
  },
  async created() {
    this.tasks = await this.fetchTasks();
  },
  methods: {
    async deleteTask(id) {
      console.log("delete=> ", id);
      if (confirm("Are you sure ??")) {
        const res = await fetch(`api/tasks/${id}`, {
          method: "DELETE",
        });
        if (res.status == 200) {
          this.tasks = this.tasks.filter((task) => task.id !== id);
        } else {
          alert("Error deleting task");
        }
      }
    },
    async toggleTask(id) {
      console.log("toggle=>", id);
      let taskToToggle = await this.fetchTask(id);
      let updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

      const res = await fetch(`api/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateTask),
      });
      let data = await res.json();

      if (data.status == 200) {
        this.tasks.some((task) => {
          if (task.id == id) {
            task.reminder = !task.reminder;
          }
        });
      } else {
        alert("Error while updating");
      }
    },
    async addTask(task) {
      const res = await fetch("api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      const data = await res.json();
      this.tasks = [data, ...this.tasks];
    },
    async fetchTasks() {
      const res = await fetch("api/tasks");
      const data = await res.json();
      return data;
    },
    async fetchTask(id) {
      const res = await fetch(`api/${id}`);
      const data = await res.json();
      return data;
    },
  },
};
</script>

