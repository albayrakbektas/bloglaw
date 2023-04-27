<!--<template>-->
<!--  <div-->
<!--    id="carouselExampleAutoplaying"-->
<!--    class="carousel slide carousel-fade position-relative"-->
<!--    data-bs-ride="carousel"-->
<!--    v-if="!isMobile"-->
<!--  >-->
<!--    <div class="carousel-indicators mb-0">-->
<!--      <button-->
<!--        type="button"-->
<!--        data-bs-target="#carouselExampleIndicators"-->
<!--        data-bs-slide-to="0"-->
<!--        class="active"-->
<!--        aria-current="true"-->
<!--        aria-label="Slide 1"-->
<!--      ></button>-->
<!--      <button-->
<!--        type="button"-->
<!--        data-bs-target="#carouselExampleIndicators"-->
<!--        data-bs-slide-to="1"-->
<!--        aria-label="Slide 2"-->
<!--      ></button>-->
<!--      <button-->
<!--        type="button"-->
<!--        data-bs-target="#carouselExampleIndicators"-->
<!--        data-bs-slide-to="2"-->
<!--        aria-label="Slide 3"-->
<!--      ></button>-->
<!--    </div>-->
<!--    <div class="carousel-inner">-->
<!--      <div class="carousel-item active" data-bs-interval="3000">-->
<!--        <img-->
<!--          src="https://picsum.photos/1200/400"-->
<!--          class="d-block w-100"-->
<!--          alt="..."-->
<!--        />-->
<!--      </div>-->
<!--      <div class="carousel-item" data-bs-interval="3000">-->
<!--        <img-->
<!--          src="https://picsum.photos/1200/402"-->
<!--          class="d-block w-100"-->
<!--          alt="..."-->
<!--        />-->
<!--      </div>-->
<!--      <div class="carousel-item" data-bs-interval="3000">-->
<!--        <img-->
<!--          src="https://picsum.photos/1200/401"-->
<!--          class="d-block w-100"-->
<!--          alt="..."-->
<!--        />-->
<!--      </div>-->
<!--    </div>-->
<!--    <button-->
<!--      class="carousel-control-prev"-->
<!--      type="button"-->
<!--      data-bs-target="#carouselExampleAutoplaying"-->
<!--      data-bs-slide="prev"-->
<!--    >-->
<!--      <span class="carousel-control-prev-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Previous</span>-->
<!--    </button>-->
<!--    <button-->
<!--      class="carousel-control-next"-->
<!--      type="button"-->
<!--      data-bs-target="#carouselExampleAutoplaying"-->
<!--      data-bs-slide="next"-->
<!--    >-->
<!--      <span class="carousel-control-next-icon" aria-hidden="true"></span>-->
<!--      <span class="visually-hidden">Next</span>-->
<!--    </button>-->
<!--  </div>-->
<!--</template>-->

<template>
  <div
      id="carouselExampleAutoplaying"
      class="carousel slide carousel-fade position-relative"
      data-bs-ride="carousel"
      v-if="!isMobile"
  >
    <div class="carousel-indicators mb-0">
      <button
          v-for="(slider, index) in sliders"
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
          v-for="(slider, index) in sliders"
          :key="slider.id"
          class="carousel-item"
          :class="{ active: index === 0 }"
          data-bs-interval="3000"
      >
        <img :src="slider.file" class="d-block w-100" :alt="slider.title" />
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ slider.title }}</h5>
          <p>{{ slider.subtitle }}</p>
          <p>{{ slider.description }}</p>
          <p>{{ slider.content }}</p>
        </div>
      </div>
    </div>
    <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "SlickCarousel",
  components: {},
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {
      sliders: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$store.dispatch("landing/setLoading", true);
      axios
        .get(`sliders`)
        .then((response) => {
          this.sliders = response.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.dispatch("landing/setLoading", false);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#carouselExampleAutoplaying {
  //height: 100vh;
}
img {
  height: 80vh;
}
.slick-carousel {
  width: 100%;
  height: 300px;
  .carousel-item {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    border: 1px solid #e0e0e0;
  }
}
.carousel-item {
  transition: transform 2s ease, opacity 1s linear !important;
}
.slide {
  padding: 0;
}
.carousel-control-next,
.carousel-control-prev {
  width: 5%;
}
@media (max-width: 575px) {
  img {
    //height: 20vh;
  }
}
</style>
