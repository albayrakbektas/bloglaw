<template>
  <button
    class="btn btn-sm btn-back d-flex align-items-center justify-content-center border-1 border-dark"
    style="width: 40px; height: 40px; border-radius: 50% !important"
    type="button"
    title="Back"
    @click="$router.go(-1)"
  >
    <i class="bi bi-chevron-left"></i>
  </button>
</template>
<style scoped>
.btn-back {
  color: #0a1422;
}

.btn-back:hover {
  border: 1px solid rgb(113, 134, 157);
}
</style>
