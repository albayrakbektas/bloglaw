<template>
  <div class="page-header">
    <div class="row align-items-center mb-3">
      <div class="col">
        <h1 class="page-header-title m-0">{{ title }}</h1>
      </div>
      <div class="col-auto">
        <BackButton />
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "@/views/admin/components/BackButton.vue";

export default {
  name: "HeaderCreate",
  components: {BackButton},
  props: {
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>