<template>
  <div id="app" :class="{ 'none-event': isLoading }">
    <SpinnerMain />
    <LandingPage />
    <HeaderShortcuts />
    <HeaderComponent />
    <VueToast />
    <ContactView />
    <router-view />
    <FooterMain />
  </div>
</template>

<style lang="scss">
:root {
  background: black;
}
body {
  font-family: "Georgia", serif !important;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}
body::-webkit-scrollbar {
  width: 10px; /* width of the scrollbar */
}

/* Add styling to the scrollbar thumb */
body::-webkit-scrollbar-thumb {
  background-color: rgba(139, 90, 43, 0.6); /* color of the scrollbar thumb */
  border-radius: 5px; /* round the corners of the scrollbar thumb */
}
body.scroll::-webkit-scrollbar-thumb {
  background-color: rgba(139, 90, 43, 0.9);
}

/* Add styling to the scrollbar track */
body::-webkit-scrollbar-track {
  background-color: #000000; /* color of the scrollbar track */
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
import ContactView from "@/components/ContactDirectly.vue";
import LandingPage from "@/components/LandingPage.vue";
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
  beforeCreate() {
    this.$store.dispatch("landing/setLoading", true);
  },
  created() {
    setTimeout(() => {
      this.$store.dispatch("landing/setLoading", false);
    }, 1000);
    window.addEventListener("scroll", this.handleScrollStart);

    // Remove the 'scroll' class on scroll end
    this.scrollTimeout = null;
    window.addEventListener("scroll", this.handleScrollEnd);
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
    handleScrollStart() {
      document.body.classList.add("scroll");
    },

    handleScrollEnd() {
      clearTimeout(this.scrollTimeout);
      this.scrollTimeout = setTimeout(() => {
        document.body.classList.remove("scroll");
      }, 100);
    },
  },
};
</script>
