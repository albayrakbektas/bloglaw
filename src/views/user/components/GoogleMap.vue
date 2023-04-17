<template>
  <div>
<!--    <GmapMap-->
<!--        :center="center"-->
<!--        :zoom="zoom"-->
<!--        map-type-id="terrain"-->
<!--        style="width: 100%; height: 300px"-->
<!--    >-->
<!--      <GmapMarker-->
<!--          :key="index"-->
<!--          v-for="(marker, index) in markers"-->
<!--          :position="center"-->
<!--          :clickable="true"-->
<!--          :draggable="true"-->
<!--          @click="center = marker.position"-->
<!--      />-->
<!--    </GmapMap>-->
  </div>
</template>
<script>
// import { gmapApi } from "vue2-google-maps";

export default {
  name: "GoogleMap",
  // data() {
  //   return {
  //     center: { lat: 36.781541328049265, lng: 34.59453826932008 },
  //     zoom: 15,
  //     markers: [{ position: { lat: 36.8008333, lng: 34.6153113 } }],
  //   };
  // },
  // computed: {
  //   isAdminRoute() {
  //     return this.$route.path.includes("admin");
  //   },
  //   google: gmapApi,
  // },
  // mounted() {
  //   if (!this.isAdminRoute && this.google) {
  //     console.log("Google Maps loaded successfully");
  //   }
  // },
};
</script>
