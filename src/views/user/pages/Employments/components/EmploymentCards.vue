<template>
  <div class="container-fluid" :class="{ 'no-margin': isMobile }" style=" margin-top: -2.5rem">
    <div class="container row align-items-md-stretch mx-auto">
      <EmploymentCard
        v-for="(card, index) of data"
        :key="card.title + index"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EmploymentCard from "@/views/user/pages/Employments/components/EmploymentCard.vue";

export default {
  name: "EmploymentCards",
  components: { EmploymentCard },
  computed: {
    ...mapGetters("AdminEmploymentsIndex", ["data", "loading"]),
    isMobile() {
      return window.innerWidth < 576; // Change breakpoint as needed
    },
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

<style scoped>
.no-margin {
  margin-top: 0;
}

@media (max-width: 575px) {
  .no-margin {
    margin-top: 2.5rem !important;
  }
}
</style>
