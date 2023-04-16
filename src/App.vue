<template>
  <div id="app">
    <HeaderShortcuts />
    <HeaderComponent />
    <router-view />
    <GoogleMap />
    <FooterMain />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.section {
  padding: 2.5rem 0;
}
.form-label {
  margin: 0 !important;
}
</style>
<script setup>
import HeaderComponent from "@/views/user/components/HeaderComponent.vue";
import HeaderShortcuts from "@/views/user/components/HeaderShortcuts.vue";
import FooterMain from "@/views/user/components/FooterMain.vue";
import GoogleMap from "@/views/user/components/GoogleMap.vue";
</script>
<script>
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.commit("setIsMobile", window.innerWidth < 768);
    window.addEventListener("resize", this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.$store.commit("setIsMobile", window.innerWidth < 768);
    },
  },
};
</script>
