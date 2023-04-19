<template>
  <div class="container-fluid" style="margin-top: -4rem">
    <div class="container row align-items-md-stretch mx-auto">
      <EmploymentCard v-for="(card, index) of data" :key="card.title + index" :card="card" />
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import EmploymentCard from "@/views/user/pages/Employments/components/EmploymentCard.vue";

export default {
  name: "EmploymentCards",
  components: {EmploymentCard},
  computed: {
    ...mapGetters("AdminEmploymentsIndex", ["data", "loading"]),
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
    ...mapActions("AdminEmploymentsIndex", ["fetchIndexData"]),
  },
};
</script>

<style scoped></style>
