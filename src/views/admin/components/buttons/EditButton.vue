<template>
  <div>
    <div
      v-if="xprops"
      :is="tag"
      :to="{
        name: xprops.route + '.' + crudType,
        params: { id: data ? data.id : '' },
      }"
      class="btn me-2"
      :class="{
        'btn-warning': crudType === 'edit',
        'btn-primary': crudType !== 'edit',
      }"
    >
      <i v-if="crudType === 'show'" class="bi bi-eye-fill"></i>
      <i v-if="crudType === 'edit'" class="bi bi-pencil-square"></i>
    </div>
    <div
      v-else
      :is="tag"
      class="btn btn-primary me-2"
      type="button"
      :class="{ 'btn-warning': crudType === 'edit' }"
    >
      <i
        v-if="crudType === 'show'"
        @click="$emit('showHandler')"
        class="bi bi-eye-fill"
      ></i>
      <i
        v-if="crudType === 'edit'"
        @click="$emit('editHandler')"
        class="bi bi-pencil-square"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    xprops: {
      type: Object,
    },
    data: {
      type: Object,
    },
    tag: {
      type: String,
      default: "router-link",
    },
    crudType: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>
