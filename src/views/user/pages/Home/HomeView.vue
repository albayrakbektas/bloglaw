<template>
  <div class="">
    <CoverMain />
    <OfficeCard />
    <div class="bg-dark">
      <BlogCards />
      <ServiceCards />
      <GoogleMap />
    </div>
  </div>
</template>

<script>
import BlogCards from "@/views/user/pages/Home/components/BlogCards.vue";
import OfficeCard from "@/views/user/pages/Home/components/OfficeCard.vue";
import ServiceCards from "@/views/user/pages/Services/ServiceCards.vue";
import GoogleMap from "@/views/user/components/GoogleMap.vue";
import CoverMain from "@/views/user/pages/Home/components/CoverMain.vue";

export default {
  name: "HomeView",
  components: {
    CoverMain,
    GoogleMap,
    ServiceCards,
    OfficeCard,
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
