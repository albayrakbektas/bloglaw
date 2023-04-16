<template>
  <div class="">
    <SlickCarousel />
    <ServicesCard />
    <div class="container">
      <OfficeCard />
      <BlogCards />
      <KeyWords />
      <LawCard />
    </div>
  </div>
</template>

<script>
import LawCard from "@/views/user/components/LawCard.vue";
import BlogCards from "@/views/user/pages/Home/components/BlogCards.vue";
import SlickCarousel from "@/components/Swiper/SlickCarousel.vue";
import ServicesCard from "@/views/user/pages/Services/components/ServicesCard.vue";
import OfficeCard from "@/views/user/pages/Home/components/OfficeCard.vue";
import KeyWords from "@/views/user/pages/Home/components/KeyWords.vue";

export default {
  name: "HomeView",
  components: { KeyWords, OfficeCard, ServicesCard, SlickCarousel, BlogCards, LawCard },
  data() {
    return {
      swiperOptions: {
        speed: 600,
        parallax: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      slides: [
        {
          title: "Slide 1",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.",
          bgImage: "https://picsum.photos/1200/800",
        },
        {
          title: "Slide 2",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.",
          bgImage: "https://picsum.photos/1200/800",
        },
        {
          title: "Slide 3",
          subtitle: "Subtitle",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.",
          bgImage: "https://picsum.photos/1200/800",
        },
      ],
    };
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
