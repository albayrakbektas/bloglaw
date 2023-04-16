<template>
  <router-link :to="'/blog/' + data.id" class="card mb-3 mb-md-0 mb-lg-0">
    <img :src="data.file" class="card-img-top img-fluid" alt="..." />
    <div class="card-body text-center">
      <h5 class="card-title">{{ data.title }}</h5>
      <p class="card-subtitle">{{ data.subtitle }}</p>
      <p class="card-text">{{ data.content }}</p>
      <div class="d-inline-block align-middle btn beko">
        <router-link :to="'/blog/' + data.id">Makale Devami</router-link>
        <i class="bi bi-arrow-right"></i>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "BlogCard",
  components: {},
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  color: initial;
  &:hover {
    color: initial;
  }
}
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
  height: 15rem;
}
.beko {
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-20: #005a87;
  word-wrap: break-word;
  word-break: break-word;
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #b1976b;
  -webkit-box-sizing: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
  margin: 0;
  padding: 0;
  border-color: #e6e6e6;
  opacity: 0.8;

  &.btn {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
    opacity: 1;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #b1976b;
      transition: all 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: #b1976b;
    }
  }
}
.card {
  &:hover {
    box-shadow: rgb(50 50 93 / 25%) 0px 50px 100px -20px, rgb(0 0 0 / 30%) 0px 30px 60px -30px, rgb(10 37 64 / 35%) 0px -2px 6px 0px inset;
  }
}
</style>
