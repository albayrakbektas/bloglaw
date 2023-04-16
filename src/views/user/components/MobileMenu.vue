<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-light">
    <button class="navbar-toggler" type="button" @click="isOpen = !isOpen">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse bg-dark" :class="{ show: isOpen }">
      <button
        v-if="isOpen"
        type="button"
        class="close text-white"
        aria-label="Close"
        @click="isOpen = false"
      >
        <i class="bi bi-x-lg"></i>
      </button>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 d-block">
        <li><a href="#" class="nav-link px-2 text-white link-secondary">Anasayfa</a></li>
        <li><a href="#" class="nav-link px-2 text-white link-dark">Hakkimizda</a></li>
        <li><a href="#" class="nav-link px-2 text-white link-dark">Uzmanlik alanlarimiz</a></li>
        <li><a href="#" class="nav-link px-2 text-white link-dark">Uzman kadromuz</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.closeMenuOnClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.closeMenuOnClickOutside);
  },
  methods: {
    closeMenuOnClickOutside(event) {
      if (!this.$el.contains(event.target) && this.isOpen) {
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
@media (max-width: 767px) {
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,0,.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }

  .navbar-collapse {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1030;
    display: flex;
    flex-direction: column;
    padding: 5rem 2rem 0;
    /* justify-content: center; */
    width: fit-content;
    max-width: 300px;
    background-color: #fff;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
  }

  .navbar-collapse.show {
    transform: translateX(0%);
  }

  .navbar-nav {
    text-align: center;
    margin: 0 auto;
  }

  .nav-link {
    display: block;
    padding: 1rem;
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    padding: 1rem;
    background: transparent;
    border: none;
    outline: none;
  }
}
</style>
