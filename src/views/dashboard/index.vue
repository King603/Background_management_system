<template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    adminDashboard: () => import("./admin"),
    editorDashboard: () => import("./editor"),
  },
  data() {
    return {
      currentRole: "adminDashboard",
    };
  },
  computed: {
    ...mapGetters(["roles"]),
  },
  created() {
    if (!this.roles.includes("admin")) {
      this.currentRole = "editorDashboard";
    }
  },
};
</script>
