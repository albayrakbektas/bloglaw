<template>
  <div class="card">
    <div
      class="card-header card-header-primary d-flex justify-content-between align-items-center px-3"
    >
      <h4 class="card-title m-0">Blog</h4>
      <BackButton />
    </div>
    <div class="card-body col-12">
      <div class="row">
        <div class="col-12 col-md-3">
          <img :src="entry.file" class="card-img-top" alt="blog-image" />
        </div>
        <div class="col-12 col-md-9">
          <h1 class="card-title">{{ entry.title }}</h1>
          <h3 v-if="entry.subtitle" class="card-subtitle">
            {{ entry.subtitle }}
          </h3>
          <h5 v-if="entry.description" class="">{{ entry.description }}</h5>
          <p class="card-text">{{ entry.content.replace(/<\/?p>/g, "") }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import BackButton from "@/views/admin/components/BackButton.vue";

export default {
  components: { BackButton },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("BlogsSingle", [
      "entry",
      "lists",
      "loading",
      "validationErrors",
    ]),
  },
  mounted() {
    this.fetchEditData(this.$route.params.id);
  },
  methods: {
    ...mapActions("BlogsSingle", ["updateData", "fetchEditData"]),
  },
};
</script>

<style scoped></style>
