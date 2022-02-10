<template>
  <component :is="layout" />
</template>

<script>
import AuthLayout from "@/components/layouts/AuthLayout.vue";
import DashLayout from "@/components/layouts/DashLayout.vue";

export default {
  components: {
    AuthLayout,
    DashLayout,
  },
  data() {
    return {
      layout: null,
    };
  },
  watch: {
    $route(to) {
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = "DashLayout"; // this is default layout if route meta is not set
      }
    },
  },
};
</script>
