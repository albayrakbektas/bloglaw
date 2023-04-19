<template>
  <div class="container my-5">
    <div class="sec-title text-center pb-1 mb-3">
      <h2 class="title">Mersin Hukuk</h2>
      <h4 class="sub-title top-line primary">Bizimle Iletisime Gecin</h4>
    </div>
    <div>
      <div class="row align-items-stretch mb-2">
        <div class="col-md-6">
<!--          <div class="card">-->
<!--            <div class="card-body h-100">-->
<!--              <ul-->
<!--                  class="nav w-100 col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"-->
<!--              >-->
<!--                <li class="beko btn">-->
<!--                  <a href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" class="nav-link text-dark">-->
<!--                    <i class="bi bi-geo-alt text-dark"></i>-->
<!--                    Mersin adliye binasi no:123/5-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="beko btn">-->
<!--                  <a href="tel:+905050070844" class="nav-link text-dark">-->
<!--                    <i class="bi bi-telephone text-dark"></i>-->
<!--                    05050050505-->
<!--                  </a>-->
<!--                </li>-->
<!--                <li class="beko btn">-->
<!--                  <a href="mailto:albayrakbektas@gmail.com" class="nav-link text-dark">-->
<!--                    <i class="bi bi-envelope text-dark"></i>-->
<!--                    albayrakbektas@gmail.com-->
<!--                  </a>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
          <GoogleMap />

        </div>
        <div class="col-md-6">
          <div class="card card-body">
            <form>
              <div class="row">
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputName" class="form-label">Name</label>
                  <input type="text" class="form-control" id="inputName" required>
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputSurname" class="form-label">Surname</label>
                  <input type="text" class="form-control" id="inputSurname" required>
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputEmail" class="form-label">Email</label>
                  <input type="email" class="form-control" id="inputEmail" required>
                </div>
                <div class="col-md-6 col-12 mb-3">
                  <label for="inputPhone" class="form-label">Phone</label>
                  <input type="tel" class="form-control" id="inputPhone" required>
                </div>
                <div class="col-md-12 col-12 mb-3">
                  <label for="inputTitle" class="form-label">Title</label>
                  <input type="text" class="form-control" id="inputTitle" required>
                </div>
                <div class="col-md-12 col-12 mb-3">
                  <label for="inputContent" class="form-label">Content</label>
                  <textarea class="form-control" id="inputContent" rows="4" required></textarea>
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
import {mapGetters} from "vuex";
import axios from "axios";
import GoogleMap from "@/views/user/components/GoogleMap.vue";

export default {
  name: "ChannelsView",
  components: {GoogleMap},
  computed: {
    ...mapGetters(["isMobile"])
  },
  data() {
    return {
      entry: {},
      isLoading: true,
    };
  },
  created() {
    // Fetch the data for the selected entry card using Axios
    axios
        .get(`http://localhost:3000/channels`)
        .then((response) => {
          this.entry = response.data[0];
          this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          this.isLoading = false;
        });
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