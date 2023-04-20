<template>
  <div v-if="isMobile" style="height: 60vh" class="p-5 text-bg-dark">
    <h1 class="text-center">Karakas Hukuk <br> & <br>Danismanlik</h1>
    <p>Swap the background-color utility and add a `.text-*` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
    <button class="btn rounded-0 btn-outline-light" type="button">
      <router-link to="/iletisim">
        Iletisim
      </router-link>
    </button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BrandView",
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
