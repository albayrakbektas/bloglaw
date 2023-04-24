<template>
  <div class="spinner-container" v-if="isLoading">
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only text-primary fw-bold">Loading...</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SpinnerMain",
  computed: {
    ...mapGetters("loadingModule", ["isLoading"]),
  },
  data() {
    return {
      isBlocked: false
    }
  },
  mounted() {
    // document.body.classList.add('spinner-active');
  },
  beforeUnmount() {
    // document.body.classList.remove('spinner-active');
  }
};
</script>

<style scoped>
.spinner-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(54, 50, 50, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
