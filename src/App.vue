<template>
  <div id="app" :class="{ 'none-event': isLoading }">
    <HeaderComponent />
    <SpinnerMain />
    <LandingPage />
    <VueToast />
    <ContactView />
    <router-view />
    <FooterMain />
  </div>
</template>

<style lang="scss">
:root {
  background-color: rgba(33, 37, 41, 1);
}
body {
  font-family: "Georgia", serif !important;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  overflow-x: hidden;
  background-color: rgba(33, 37, 41, 1);
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
  background-color: rgba(33, 37, 41, 1);
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
.admin-page #app {
  background-color: #fff;
}
pre {
  overflow: hidden !important;
}
</style>
<script setup>
import HeaderComponent from "@/views/user/components/HeaderComponent.vue";
import FooterMain from "@/views/user/components/FooterMain.vue";
import SpinnerMain from "@/components/SpinnerMain.vue";
import ContactView from "@/components/ContactDirectly.vue";
import LandingPage from "@/components/LandingPage.vue";
</script>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("loadingModule", ["isLoading"]),
    ...mapGetters(["isScroll"]),
  },
  data() {
    return {
      lastScrollPosition: 0,
    };
  },
  beforeCreate() {
    this.$store.dispatch("landing/setLoading", true);
  },
  watch: {
    $route() {
      this.isAdminBackground();
    },
  },
  created() {
    this.setOffice();
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
    ...mapActions("office", ["setOffice"]),
    onResize() {
      this.$store.commit("setIsMobile", window.innerWidth < 768);
    },
    isAdminBackground() {
      if (window.location.href.includes("admin")) {
        document.body.classList.add("admin-page");
      } else {
        document.body.classList.remove("admin-page");
      }
    },
    handleScrollStart() {
      this.$store.commit("setIsScroll", true);
      document.body.classList.add("scroll");
      const currentScrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = currentScrollPosition > this.prevScrollPosition;
      this.prevScrollPosition = currentScrollPosition;

      this.$store.commit("setIsScrollDown", isScrollingDown);
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
