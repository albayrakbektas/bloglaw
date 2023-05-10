<template>
  <div class="card">
    <img :src="data.file" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-subtitle">{{ data.subtitle }}</p>
      <p v-html="data.content" class="card-text">{{ data.content }}</p>
      <div class="d-flex justify-content-end align-items-center"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCardAdmin",
  components: {},
  props: {
    blogId: {
      type: String,
    },
    data: {
      type: Object,
      required: true,
    },
    xprops: {
      type: Object,
      required: true,
    },
    hasShow: {
      type: Boolean,
      default: true,
    },
    hasEdit: {
      type: Boolean,
      default: true,
    },
    hasDelete: {
      type: Boolean,
      default: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.card-title,
.card-subtitle {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  line-clamp: 1;
}

.card-text {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  line-clamp: 4;
}
img {
  max-height: 30vh;
  object-fit: contain;
}
</style>
