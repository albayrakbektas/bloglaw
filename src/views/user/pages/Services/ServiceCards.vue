<template>
  <div class="row align-items-md-stretch section">
    <div class="sec-title text-center pb-1 mb-3">
      <h4 class="sub-title top-line primary">Uzmanlik Alanlarimiz</h4>
      <h2 class="title">Bektasin KALEMİNDEN</h2>
    </div>
   <LawServices v-for="(card, index) of data" :key="card.title + index" :card="card" />
  </div>
</template>

<script>
import LawServices from "@/views/user/components/LawServices.vue";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "ServiceCards",
  components: {LawServices},
  computed: {
    ...mapGetters("AdminServicesIndex", ["data", "loading"]),
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
    ...mapActions("AdminServicesIndex", ["fetchIndexData"]),
  },
}
</script>

<style scoped>
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