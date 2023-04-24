<template>
  <div class="container my-5">
    <div class="sec-title text-center pb-1 mb-3">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Bizimle Iletisime Gecin</h4>
    </div>
    <div>
      <div class="row align-items-stretch mb-2">
        <div class="col-md-6">
          <GoogleMap />
        </div>
        <div class="col-md-6">
          <div class="card card-body">
            <form @submit.prevent="submitForm">
              <div class="row">
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputName" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputName"
                    v-model="fname"
                    required
                  />
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputSurname" class="form-label">Surname</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputSurname"
                    v-model="lname"
                    required
                  />
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail"
                    v-model="email"
                    required
                  />
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputPhone" class="form-label">Phone</label>
                  <input
                    type="tel"
                    class="form-control"
                    id="inputPhone"
                    v-model="phone"
                    required
                  />
                </div>
                <div class="col-md-12 col-12 mb-3">
                  <label for="inputTitle" class="form-label">Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputTitle"
                    v-model="title"
                    required
                  />
                </div>
                <div class="col-md-12 col-12 mb-3">
                  <label for="inputContent" class="form-label">Content</label>
                  <textarea
                    class="form-control"
                    id="inputContent"
                    rows="4"
                    required
                    v-model="content"
                  ></textarea>
                </div>
                <div class="col-md-12 col-12 mb-3">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!--      <div class="row  py-3 px-md-5 py-md-5">-->
      <!--        <div class="col-12 col-md-4">-->
      <!--          <img :src="entry.file" class="img-fluid w-100 h-100" alt="..." />-->
      <!--        </div>-->
      <!--        <div class="col-12 col-md-8 pt-5 pt-md-0 pe-md-5">-->
      <!--          <h5 class="h1 text-center text-md-start">{{ entry.title }}</h5>-->
      <!--          <p class="h4 text-center text-md-start">{{ entry.subtitle }}</p>-->
      <!--          <p class="pe-md-5" style="font-size: 1.1rem; line-height: 2rem">-->
      <!--            {{ entry.content }}-->
      <!--          </p>-->
      <!--        </div>-->
      <!--      </div>-->
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
import GoogleMap from "@/views/user/components/GoogleMap.vue";

export default {
  name: "ChannelsView",
  components: { GoogleMap },
  computed: {
    ...mapGetters(["isMobile"]),
  },
  data() {
    return {
      entry: {},
      isLoading: true,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      title: "",
      content: "",
    };
  },
  created() {
    // Fetch the data for the selected entry card using Axios
    axios
      .get(`channels`)
      .then((response) => {
        this.entry = response.data[0];
        this.isLoading = false;
      })
      .catch((error) => {
        console.error(error);
        this.isLoading = false;
      });
  },
  methods: {
    async submitForm() {
      const formData = {
        name: this.fname,
        surname: this.lname,
        email: this.email,
        phone: this.phone,
        title: this.title,
        content: this.content,
      };

      try {
        const response = await axios.post(
          "send-email",
          formData
        );

        if (response.data.success) {
         alert("if1")
          console.log(response.data)
        } else {
          alert("if2")
          console.log(response.data)
          // Show error message or do something else
        }
      } catch (error) {
        alert("if3")
        console.log(error)
        // Show error message or do something else
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.sec-title .top-line {
  position: relative;
  display: inline-block;
  line-height: 18px;
}
.sec-title .sub-title.primary {
  color: #8d6e63;
}
.sec-title .top-line:before,
.sec-title .top-line:after {
  position: absolute;
  content: "";
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
