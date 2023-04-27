<template>
  <div v-if="isLoading" class="loading-page">
    <img class="brand-logo" src="https://picsum.photos/100" alt="Brand Logo" />
    <div class="loading-text">Loading...</div>
    <div class="loading-bar-wrapper">
      <div class="loading-bar"></div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('landing', ['isLoading', 'progress'])
  }
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  z-index: 9999;
}

.brand-logo {
  width: 100px;
  height: auto;
  margin-bottom: 20px;
}

.loading-text {
  color: white;
  margin-bottom: 10px;
}

.loading-bar-wrapper {
  width: 80%;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: 1px solid gold;
  border-radius: 5px;
  overflow: hidden;
}

.loading-bar {
  height: 100%;
  width: 50%;
  background-color: gold;
  border-radius: 5px;
  animation: loading-animation 2s infinite;
}

@keyframes loading-animation {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
