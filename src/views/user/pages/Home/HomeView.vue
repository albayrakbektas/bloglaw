<template>
  <div class="">
    <SlickCarousel />
    <BrandView />
    <EmploymentCards />
    <div class="container">
      <OfficeCard />
      <BlogCards />
      <KeyWords />
      <ServiceCards />
      <GoogleMap />
    </div>
  </div>
</template>

<script>
import BlogCards from "@/views/user/pages/Home/components/BlogCards.vue";
import SlickCarousel from "@/components/Swiper/SlickCarousel.vue";
import OfficeCard from "@/views/user/pages/Home/components/OfficeCard.vue";
import KeyWords from "@/views/user/pages/Home/components/KeyWords.vue";
import EmploymentCards from "@/views/user/pages/Employments/components/EmploymentCards.vue";
import ServiceCards from "@/views/user/pages/Services/ServiceCards.vue";
import GoogleMap from "@/views/user/components/GoogleMap.vue";
import BrandView from "@/views/user/pages/Home/components/BrandView.vue";

export default {
  name: "HomeView",
  components: {
    BrandView,
    GoogleMap,
    ServiceCards,
    EmploymentCards,
    KeyWords,
    OfficeCard,
    SlickCarousel,
    BlogCards,
  },
  data() {
    return {};
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 600px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100%;
  padding: 0 80px;
}
.title {
  margin-bottom: 1rem;
  font-size: 2rem;
  font-weight: bold;
}
.subtitle {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.text {
  max-width: 430px;
  line-height: 1.32;
  font-size: 1.2rem;
}
</style>
