<template>
  <div
    v-if="message"
    :class="['toast', `toast-${type}`]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
  >
    <div class="toast-body">
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.toast.message;
    },
    type() {
      return this.$store.state.toast.type;
    },
  },
};
</script>

<style>
.toast {
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  z-index: 9999;
}
.toast-success {
  background-color: #28a745;
  color: white;
}
.toast-error {
  background-color: #dc3545;
  color: white;
}
</style>
