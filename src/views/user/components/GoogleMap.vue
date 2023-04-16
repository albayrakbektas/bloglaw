<template>
  <div v-if="!$route.path.includes('admin')">
<!--    <GmapMap-->
<!--        :center="center"-->
<!--        :zoom="zoom"-->
<!--        map-type-id="terrain"-->
<!--        style="width: 100%; height: 300px"-->
<!--    >-->
<!--      <GmapMarker-->
<!--          :key="index"-->
<!--          v-for="(m, index) in markers"-->
<!--          :position="center"-->
<!--          :clickable="true"-->
<!--          :draggable="true"-->
<!--          @click="center=m.position"-->
<!--      />-->
<!--    </GmapMap>-->
  </div>
</template>

<script>
// import { gmapApi } from 'vue2-google-maps'

export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 36.801166068351094, lng: 34.61791779686968 },
      zoom: 15,
      markers: [
        { position: { lat: 36.8008333, lng: 34.6153113 } },
      ]
    }
  },
  created() {
    // if (!this.$route.name.includes('admin')) {
    //   gmapApi.then(() => {
    //     console.log('Google Maps loaded successfully')
    //   })
    // }
  }
}
</script>
