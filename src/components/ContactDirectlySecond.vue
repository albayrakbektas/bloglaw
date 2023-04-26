<template>
  <div class="iletisim" :class="{ 'd-none': !show, 'd-flex': show }">
    <div v-if="isClosed" class="iletisim-icon" @click="toggleShow">
      <span>I</span>
      <span>L</span>
      <span>E</span>
      <span>T</span>
      <span>I</span>
      <span>S</span>
      <span>I</span>
      <span>M</span>
    </div>
    <transition v-else name="slide-fade">
      <div class="iletisim-icons">
        <a href="mailto:youremail@example.com"><i class="bi bi-envelope-fill"></i></a>
        <a href="tel:123456789"><i class="bi bi-telephone-fill"></i></a>
        <a href="https://wa.me/123456789"><i class="bi bi-whatsapp"></i></a>
        <div class="iletisim-close" @click="toggleShow"><i class="bi bi-x"></i></div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ContactDirectlySecond",
  data() {
    return {
      show: true,
      isClosed: true,
      lastScrollPosition: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    toggleShow() {
      this.isClosed = !this.isClosed;
    },
    handleScroll() {
      const currentScrollPosition = window.pageYOffset;
      if (currentScrollPosition > this.lastScrollPosition) {
        this.show = false;
      } else {
        this.show = true;
      }
      this.lastScrollPosition = currentScrollPosition;
    },
  },
};
</script>

<style scoped>
.iletisim {
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 5px;
  background-color: #fff;
  border: 2px solid #b1976b;
  z-index: 999;
  font-size: 22px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: bold;
  writing-mode: vertical-lr;
  text-orientation: upright;
}

.iletisim span {
  display: block;
  margin-bottom: 5px;
}

.iletisim-icon {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.iletisim-icon-text {
  height: 22px;
}

.iletisim-icons {
  display: flex;
  align-items: center;
}

.iletisim-icons a {
  margin-bottom: 1rem;
}

.iletisim-close {
  cursor: pointer;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>