<template>
  <Header />
  <div id="dashboard" class="min-h-screen bg-slate-400">
    <router-view />
  </div>
  <Footer />
</template>

<script>
import Nav from "../Nav.vue";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
  mounted() {
    // this is dashboard layout
  },
  components: { Nav, Header, Footer },
};
</script>
