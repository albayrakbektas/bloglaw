<template>
  <div class="sec-title text-center pb-1 mb-3">
    <h4 class="sub-title top-line primary">{{ data.title }}</h4>
    <h2 class="title">{{data.subtitle}}</h2>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    data: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.sec-title .top-line {
  position: relative;
  display: inline-block;
  line-height: 18px;
}
.sec-title .sub-title.primary {
  color: #8d6e63;
}
.sec-title .top-line:before, .sec-title .top-line:after {
  position: absolute;
  content: '';
  top: 50%;
  left: -80px;
  transform: translateY(-50%);
  width: 60px;
  height: 2px;
  background: #8d6e63;
}
.sec-title .top-line:before {
  left: auto;
  right: -80px;
}
</style>