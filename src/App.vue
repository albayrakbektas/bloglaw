<template>
  <div id="app" :class="{ 'none-event': isLoading }">
    <SpinnerMain />
    <HeaderShortcuts />
    <HeaderComponent />
    <VueToast />
    <router-view />
    <FooterMain />
  </div>
</template>

<style lang="scss">
body {
  font-family: "Georgia", serif !important;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Georgia, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.section {
  padding: 2.5rem 0;
}
.form-label {
  margin: 0 !important;
}
.none-event {
  pointer-events: none;
}
body.spinner-active {
  overflow: hidden;
}
</style>
<script setup>
import HeaderComponent from "@/views/user/components/HeaderComponent.vue";
import HeaderShortcuts from "@/views/user/components/HeaderShortcuts.vue";
import FooterMain from "@/views/user/components/FooterMain.vue";
import SpinnerMain from "@/components/SpinnerMain.vue";
</script>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loadingModule", ["isLoading"]),
  },
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
