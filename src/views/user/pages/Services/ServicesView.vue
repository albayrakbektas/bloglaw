<template>
  <div class="container py-5">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h2 class="title text-white">Hizmetlerimiz</h2>
      <h4 class="sub-title top-line primary">Uzmanlik Alanlarimiz</h4>
    </div>
    <div class="row row-cols-1 row-cols-md-4 g-4">
      <div v-for="service in services" :key="service.id" class="col mb-3">
        <LawServices :card="service" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import LawServices from "@/views/user/components/LawServices.vue";

export default {
  name: "ServicesView",
  components: {
    LawServices,
  },
  data() {
    return {
      services: [],
      isLoading: true,
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("landing/setLoading", true);
    // Fetch the data for all service cards using Axios
    axios
      .get("service")
      .then((response) => {
        this.services = response.data;
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.$store.dispatch("landing/setLoading", false);
      });
  },
};
</script>

<style lang="scss" scoped>
.sec-title .top-line {
  position: relative;
  display: inline-block;
  line-height: 18px;
}
.sec-title .sub-title.primary {
  color: #8d6e63;
}
.sec-title .top-line:before,
.sec-title .top-line:after {
  position: absolute;
  content: "";
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
  width: 60px;
  height: 2px;
  background: #8d6e63;
}
.sec-title .top-line:before {
  left: auto;
  right: -80px;
}
</style>
