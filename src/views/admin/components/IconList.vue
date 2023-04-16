<template>
  <div class="row">
    <div class="col-12">
      <div class="col-12 col-md-3 mb-3 ms-auto pe-md-3 pe-1">
        <input v-model="searchText" type="text" class="form-control" id="formGroupExampleInput" placeholder="Search icons">
      </div>
    </div>
    <div
      v-for="icon in filteredIcons"
      class="col-1 d-flex justify-content-center align-items-center p-1 bg-opacity-25"
      :key="icon"
    >
      <i
        :class="'bi bi-' + icon"
        style="
          font-size: 2rem;
          border: 1px solid black;
          padding: 1rem;
          display: flex;
          border-radius: 15%;
          background-color: rgba(128, 128, 128, 0.1);
          cursor: pointer;
        "
      ></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "IconList",
  data() {
    return {
      icons: [],
      searchText: "",
    };
  },
  computed: {
    filteredIcons() {
      return this.icons.filter((icon) => {
        return (
          icon.toLowerCase().includes(this.searchText.toLowerCase()) &&
          !icon.toLowerCase().includes("bootstrap")
        );
      });
    },
  },
  mounted() {
    // eslint-disable-next-line
    const files = require.context("sss", false, /\.svg$/);
    this.icons = files.keys().map((key) => key.replace(/\.\/(.*)\.svg/, "$1"));
  },
};
</script>

<style scoped></style>
