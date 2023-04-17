<template>
  <button @click="goToTop" class="btn btn-primary btn-floating" v-show="showButton">
    <i class="bi bi-arrow-up"></i>
  </button>
</template>

<script>
export default {
  name: "GoToTopButton",
  data() {
    return {
      showButton: false,
    };
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      this.showButton = window.scrollY > 200;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
}
</script>

<style scoped>
.btn-floating {
  position: fixed;
  bottom: 120px;
  right: 120px;
  z-index: 99;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
}
.btn-floating:hover {
  transform: scale(1.1);
}
</style>