<template>
  <div class="chart-container">
    <chart height="100%" width="100%" />
  </div>
</template>

<script>
import Chart from "@/components/Charts/Keyboard";

export default {
  name: "KeyboardChart",
  components: {
    Chart: () => import("@/components/Charts/Keyboard"),
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

