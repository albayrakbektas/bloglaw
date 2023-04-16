<template>

  <!--  <div class="dropdown font-sans-serif position-static">
      <button id="customer-dropdown-0" aria-expanded="false" aria-haspopup="true" class="btn btn-link text-600 btn-sm dropdown-toggle btn-reveal" data-boundary="window" data-bs-toggle="dropdown"
              type="button">
        <span class="fas fa-ellipsis-h fs&#45;&#45;1"></span>
      </button> -->

  <div class="py-0 ms-2" >
    <div class="d-flex align-items-center justify-content-center">

      <template v-if="!xprops.onlydeleted">

        <!-- Show -->
        <router-link
          v-if="$can(xprops.permission_prefix + 'show')"
          :to="{ name: xprops.route + '.show', params: { id: row.id } }"
          class="btn btn-white p-1 px-2 me-1"
          title="Show"
        >
          <i aria-hidden="true" class="bi bi-eye-fill fs-4"></i>
        </router-link>

        <!-- Edit -->
        <template v-if="can_deletable">
          <router-link
            v-if="$can(xprops.permission_prefix + 'edit')"
            :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
            class="btn btn-white p-1 px-2 me-1"
            title="Edit"
          >
            <i class="bi bi-pencil-fill fs-4"></i>

          </router-link>

          <a
            v-if="$can(xprops.permission_prefix + 'delete') "
            class="btn btn-white p-1 px-2 me-1"
            href="#"
            type="button"
            @click.prevent="destroyData(row.id)"
            title="Delete"
          >
            <i aria-hidden="true" class="bi bi-trash-fill fs-4"></i>
          </a>
        </template>

      </template>

      <template v-else>
        <a
          class="btn btn-white p-1 px-2 me-1"
          href="#"
          type="button"
          @click.prevent="rollbackData(row.id)"
          title="Rollback"
        >
          <i aria-hidden="true" class="fa fa-undo fs-4"></i>
        </a>

      </template>

    </div>
  </div>

  <!--  </div>-->

  <!-- <div class="dt-action-container">
    <router-link
      v-if="$can(xprops.permission_prefix + 'show')"
      :to="{ name: xprops.route + '.show', params: { id: row.id } }"
      class="btn btn-primary"
    >
      <i class="fa fa-eye" aria-hidden="true"></i>
    </router-link>

    <router-link
      class="btn btn-warning"
      v-if="$can(xprops.permission_prefix + 'edit')"
      :to="{ name: xprops.route + '.edit', params: { id: row.id } }"
    >
      <i class="fas fa-edit"></i>
    </router-link>

    <a
      href="#"
      class="btn btn-danger"
      v-if="$can(xprops.permission_prefix + 'delete')"
      @click.prevent="destroyData(row.id)"
      type="button"
    >
      <i class="fa fa-trash" aria-hidden="true"></i>
    </a>
  </div> -->
</template>

<script>
export default {
  props: ['row', 'xprops'],
  data() {
    return {
      // Code...
    }
  },
  created() {
    // Code...
  },
  computed : {
    can_deletable(){
      if (this.row.hasOwnProperty('is_deletable') || this.row.hasOwnProperty('deletable'))
      {
        if(this.row.hasOwnProperty('is_deletable') && this.row.is_deletable)
          return true
        if(this.row.hasOwnProperty('deletable') && this.row.deletable)
          return true
        return false

      }else {
        return true
      }
    },
  },
  methods: {
    destroyData(id) {
      this.$swal({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Delete',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/destroyData', id)
            .then(result => {
              this.$eventHub.$emit('delete-success')
            })
        }
      })
    },

    rollbackData(id) {
      this.$swal({
        title: 'Are you sure to Rollback?',
        text: '',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Rollback',
        confirmButtonColor: '#dd4b39',
        focusCancel: true,
        reverseButtons: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch(this.xprops.module + '/rollbackData', id)
            .then(result => {
              this.$eventHub.$emit('rollback-success')
            })
        }
      })
    }

  }
}
</script>
<style scoped>
.max-width {
  max-width: 175px;
}

.dropdown-item {
  padding: 0 .5rem !important;
}
</style>
