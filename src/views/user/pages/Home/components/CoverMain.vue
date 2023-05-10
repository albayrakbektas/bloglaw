<template>
  <div
    class="cover-container d-flex w-100 h-100 mx-auto flex-column"
    style="height: 100vh !important"
  >
    <img
      src="/albayrakbektas_Elegant_background_featuring_balanced_law_scales_963963e5-f0fa-4f95-9c84-43e9a991da66.png"
      alt=""
      style="height: 100vh; width: 100%"
      class="position-absolute"
    />
    <div
      id="carouselExampleAutoplaying"
      class="carousel slide carousel-slide position-relative"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators mb-0">
        <button
          v-for="(slider, index) in data"
          :key="slider.id"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          :data-bs-slide-to="index"
          :class="{ active: index === 0 }"
          :aria-current="index === 0"
          :aria-label="'Slide ' + (index + 1)"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          v-for="(slider, index) in data"
          :key="slider.id"
          class="carousel-item"
          style="height: 100vh"
          :class="{ active: index === 0 }"
          data-bs-interval="3000"
        >
          <div class="carousel-caption d-md-block">
            <h1>{{ slider.title }}</h1>
            <h2>{{ slider.subtitle }}</h2>
            <h3>{{ slider.description }}</h3>
            <p v-html="slider.content">{{ slider.content }}</p>
            <div class="mt-5">
              <router-link
                class="py-3 px-5 h5 mt-5 bg-dark rounded-5 border"
                style="
                  border-color: #b1976b !important;
                  color: #b1976b !important;
                "
                :to="'/is-alanlarimiz/' + slider.id"
                >Detayı Gör</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CoverMain",
  data() {
    return {};
  },
  computed: {
    ...mapGetters("AdminEmploymentsIndex", ["data", "loading"]),
    isMobile() {
      return window.innerWidth < 576; // Change breakpoint as needed
    },
  },
  watch: {
    query: {
      handler() {
        this.fetchIndexData();
      },
      deep: true,
      immediate: true,
    },
  },
  methods: {
    ...mapActions("AdminEmploymentsIndex", ["fetchIndexData"]),
  },
};
</script>

<style scoped>
.carousel-caption {
  top: 25%;
  padding: 1rem;
  border-radius: 5px;
}

.carousel-caption h1,
.carousel -caption h2,
.carousel-caption h3,
.carousel-caption p {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  line-height: 1.5;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
}

.carousel-caption h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.carousel-caption h2 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.carousel-caption h3 {
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.carousel-caption p {
  font-size: 1.25rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.py-3.px-5.h5.rounded-5.border {
  font-weight: 600;
  transition: background-color 0.2s ease-in-out;
  text-decoration: none;
  border: 2px;
}

.py-3.px-5.h5.rounded-5.border:hover {
  background-color: #000 !important;
  text-decoration: none;
}
@media (max-width: 575px) {
  .carousel-caption {
    left: 0;
    right: 0;
  }
  .slide {
    padding: 0;
  }
}
</style>
