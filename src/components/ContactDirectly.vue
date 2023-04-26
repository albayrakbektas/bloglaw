<!--<template>-->
<!--  <div class="iletisim" :class="{ 'd-none': !show, 'd-flex': show }">-->
<!--    <transition name="slide-fade">-->
<!--      <div v-if="isClosed" class="iletisim-icon" @click="toggleShow">-->
<!--        <span class="iletisim-icon-text">Iletisim</span>-->
<!--      </div>-->
<!--      <div v-else class="iletisim-icons">-->
<!--        <button class="iletisim-close" @click="toggleShow">-->
<!--          <i class="bi bi-x-lg"></i>-->
<!--        </button>-->
<!--        <a href="mailto:youremail@example.com"-->
<!--          ><i class="bi bi-envelope-fill"></i-->
<!--        ></a>-->
<!--        <a href="tel:123456789"><i class="bi bi-telephone-fill"></i></a>-->
<!--        <a href="https://wa.me/123456789"><i class="bi bi-whatsapp"></i></a>-->
<!--      </div>-->
<!--    </transition>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "ContactView",-->
<!--  data() {-->
<!--    return {-->
<!--      show: true,-->
<!--      isClosed: true,-->
<!--      lastScrollPosition: 0,-->
<!--    };-->
<!--  },-->
<!--  mounted() {-->
<!--    window.addEventListener("scroll", this.handleScroll);-->
<!--  },-->
<!--  beforeDestroy() {-->
<!--    window.removeEventListener("scroll", this.handleScroll);-->
<!--  },-->
<!--  methods: {-->
<!--    toggleShow() {-->
<!--      this.isClosed = !this.isClosed;-->
<!--    },-->
<!--    handleScroll() {-->
<!--      const currentScrollPosition = window.pageYOffset;-->
<!--      if (currentScrollPosition > this.lastScrollPosition) {-->
<!--        this.show = false;-->
<!--      } else {-->
<!--        this.show = true;-->
<!--      }-->
<!--      this.lastScrollPosition = currentScrollPosition;-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.iletisim {-->
<!--  position: fixed;-->
<!--  right: 0;-->
<!--  bottom: 50%;-->
<!--  transform: translateY(50%) rotate(-90deg);-->
<!--  transform-origin: bottom right;-->
<!--  padding: 10px;-->
<!--  background-color: #fff;-->
<!--  border: 2px solid #b1976b;-->
<!--  z-index: 999;-->
<!--}-->

<!--.iletisim-icon,-->
<!--.iletisim-icons {-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.iletisim-icon-text {-->
<!--  height: 22px;-->
<!--}-->

<!--.iletisim-icons a {-->
<!--  transform: rotate(90deg);-->
<!--  margin: 0 0.5rem;-->
<!--}-->

<!--.iletisim-close {-->
<!--  border: none;-->
<!--  background: transparent;-->
<!--  padding: 0;-->
<!--  margin: 0 8px;-->
<!--  cursor: pointer;-->
<!--}-->

<!--.bi-x-lg {-->
<!--  font-size: 1.5rem;-->
<!--}-->

<!--.slide-fade-enter-active,-->
<!--.slide-fade-leave-active {-->
<!--  transition: all 0.3s ease;-->
<!--}-->

<!--.slide-fade-enter,-->
<!--.slide-fade-leave-to {-->
<!--  opacity: 0;-->
<!--  transform: translateX(10px);-->
<!--}-->
<!--</style>-->

<template>
  <div
    v-if="isMobile && !isAdmin && !isLogin"
    class="iletisim"
    :class="{ 'd-none': !show, 'd-flex': show }"
  >
    <transition name="slide-fade">
      <div v-if="isClosed" class="iletisim-icon" @click="toggleShow">
        <span class="iletisim-icon-text">Iletisim</span>
      </div>
      <div v-else class="iletisim-icons">
        <button
          class="iletisim-close"
          @click="toggleShow"
          :class="{ rotate: !isClosed }"
        >
          <i class="bi bi-x-circle"></i>
        </button>
        <a :href="'mailto:' + channels.email"
          ><i class="bi bi-envelope-fill text-warning"></i
        ></a>
        <a :href="'tel:' + channels.phone"><i class="bi bi-telephone-fill"></i></a>
        <a :href="'https://wa.me/' + channels.phone"
          ><i class="bi bi-whatsapp text-success"></i
        ></a>
        <a
            :href="
              'https://www.google.com/maps/search/?api=1&query=' +
              encodeURIComponent(channels.address)
            "
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-white"
            style="text-transform: lowercase"
        >
          <i class="bi bi-geo-alt text-danger"></i>
        </a>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "ContactView",
  data() {
    return {
      show: true,
      isClosed: true,
      lastScrollPosition: 0,
      channels: {},
    };
  },
  computed: {
    ...mapGetters(["isMobile"]),
    isAdmin() {
      return this.$route.path && this.$route.path.includes("admin");
    },
    isLogin() {
      return this.$route.path.includes("login");
    },
  },
  created() {
    this.fetchChannelsData();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    fetchChannelsData() {
      axios
        .get(`/channels`)
        .then((response) => {
          this.channels = response.data[0];
        })
        .catch((error) => {
          console.error(error);
        });
    },
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
  right: 0;
  bottom: 50%;
  transform: translateY(50%) rotate(-90deg);
  transform-origin: bottom right;
  padding: 2px 20px;
  background-color: #fff;
  border: 2px solid #b1976b;
  border-bottom: none;
  z-index: 999;
  border-top-left-radius: 2rem;
  border-top-right-radius: 2rem;
}

.iletisim-icon,
.iletisim-icons {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.iletisim-icon-text {
  height: 22px;
}

.iletisim-icons a {
  transform: rotate(90deg);
  margin: 0 0.5rem;
}

.iletisim-close {
  border: none;
  background: transparent;
  padding: 0;
  margin: 0 8px;
  cursor: pointer;
}

.bi-x-circle {
  background: black;
  color: wheat;
  display: flex;
  border-radius: 50%;
}

.bi-x-lg {
  font-size: 1.5rem;
}

.rotate {
  animation: rotation 1s linear;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(180deg);
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
