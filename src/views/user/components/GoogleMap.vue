<template>
  <div
    class="w-100 h-100 position-relative map-container"
    :class="{ 'in-home': $route.path === '/' }"
  >
    <GmapMap
      :center="center"
      :zoom="zoom"
      map-type-id="terrain"
      style="width: 100%; height: 100%; opacity: 0.8"
      ref="gmap"
      @load="onMapLoaded"
    >
      <GmapMarker
        :key="index"
        v-for="(marker, index) in markers"
        :position="center"
        :clickable="true"
        :draggable="true"
        @click="center = marker.position"
      />
    </GmapMap>
  </div>
</template>

<script>
import { gmapApi } from "vue2-google-maps";

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 36.781541328049265, lng: 34.59453826932008 },
      zoom: 15,
      markers: [{ position: { lat: 36.8008333, lng: 34.6153113 } }],
      mapLoaded: false,
    };
  },
  computed: {
    isAdminRoute() {
      return this.$route.path.includes("admin");
    },
    google: gmapApi,
  },
  methods: {
    onMapLoaded() {
      this.mapLoaded = true;
    },
    handleTouchMove(event) {
      if (this.mapLoaded) {
        // Your touchmove event handling logic here
        console.log(event);
      }
    },
    handleTouchStart(event) {
      if (this.mapLoaded) {
        console.log(event);
        // Your touchstart event handling logic here
      }
    },
  },
  mounted() {
    if (!this.isAdminRoute && this.google) {
      console.log("Google Maps loaded successfully");
      this.$refs.gmap.$mapObject.addEventListener(
        "touchmove",
        this.handleTouchMove,
        { passive: true }
      );
      this.$refs.gmap.$mapObject.addEventListener(
        "touchstart",
        this.handleTouchStart,
        { passive: true }
      );
    }
  },
  beforeDestroy() {
    if (!this.isAdminRoute && this.google) {
      this.$refs.gmap.$mapObject.removeEventListener(
        "touchmove",
        this.handleTouchMove
      );
      this.$refs.gmap.$mapObject.removeEventListener(
        "touchstart",
        this.handleTouchStart
      );
    }
  },
};
</script>
<style scoped lang="scss">
@media (max-width: 575px) {
  .map-container {
    height: 25rem !important;
    padding-bottom: 2.5rem !important;
  }
}
.in-home {
  height: 25rem !important;
  padding-bottom: 2.5rem !important;
}
</style>
