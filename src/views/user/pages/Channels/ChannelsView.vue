<template>
  <div class="pt-5 position-relative bg-dark">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h2 class="title text-white">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Bizimle Iletisime Gecin</h4>
    </div>
    <div class="position-relative">
      <img
        src="https://www.kulturportali.gov.tr/repoKulturPortali/large/07022013/0f8d8d77-82b9-449f-89ec-eb7365eaf7dd.jpg?format=jpg&quality=50"
        alt=""
        class="position-absolute start-0 top-0 h-100 w-100 opacity-75"
      />
      <div class="container py-5">
        <div>
          <div class="row align-items-stretch">
            <div class="col-md-6 d-none d-md-block">
              <GoogleMap />
            </div>
            <div class="col-md-6">
              <div class="card card-body">
                <form class="bg-transparent" @submit.prevent="submitForm">
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
                      <label for="inputSurname" class="form-label"
                        >Surname</label
                      >
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
                      <label for="inputContent" class="form-label"
                        >Content</label
                      >
                      <textarea
                        class="form-control"
                        id="inputContent"
                        rows="4"
                        required
                        v-model="content"
                      ></textarea>
                    </div>
                    <div class="col-md-12 col-12 mb-3">
                      <button type="submit" class="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-6 d-block d-md-none">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
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
    this.$store.dispatch("landing/setLoading", true);
    // Fetch the data for the selected entry card using Axios
    axios
      .get(`channels`)
      .then((response) => {
        this.entry = response.data[0];
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        this.$store.dispatch("landing/setLoading", false);
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
        const response = await axios.post("send-email", formData);

        if (response.data.success) {
          alert("if1");
          console.log(response.data);
        } else {
          alert("if2");
          console.log(response.data);
          // Show error message or do something else
        }
      } catch (error) {
        alert("if3");
        console.log(error);
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
.card-body {
  background: transparent;
  border: none;
  color: white;
}
input {
  background: transparent;
  color: white;
}
.form-control {
  background-color: transparent !important;
  border: none;
  border-bottom: 2px solid #fff;
  border-radius: 0;
  color: #fff;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
  &:focus {
    outline: none;
    background: transparent !important;
    box-shadow: none;
    color: #fff;
    border-bottom: 2px solid rgba(139, 90, 43, 0.9);
  }
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: background-color 5000s ease-in-out 0s;
  -webkit-text-fill-color: #fff !important;
}
textarea {
  background-color: rgba(0, 0, 0, 1) !important;
}
.btn-primary {
  color: #fff;
  border-color: transparent;
  background-color: rgba(139, 90, 43, 0.6);
  padding: 0.5rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
}

.btn-primary:hover {
  background-color: rgba(139, 90, 43, 0.9);
  border-color: rgba(139, 90, 43, 0.9);
  color: #fff;
  cursor: pointer;
}
</style>
