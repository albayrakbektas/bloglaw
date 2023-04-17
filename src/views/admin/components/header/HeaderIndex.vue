<template>
  <div class="row w-100 justify-content-between align-items-center">
    <div class="col">
      <h1 class="page-header-title">{{ title }}</h1>
    </div>
    <div class="col-auto">
      <router-link
          v-if="isCrud"
          :to="{ name: xprops.route + '.create' }"
          class="btn btn-add btn-primary btn-sm"
      >
        <span>Ekle</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderIndex",
  props: {
    title: {
      type: String,
      required: true,
    },
    isCrud: {
      type: Boolean,
      default: false,
    },
    xprops: {
      type: Object,
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0 !important;
}
</style>
