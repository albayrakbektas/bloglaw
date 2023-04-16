<template>
  <div class="container-fluid bg-dark m-0" style="margin-top: -4rem">
    <div class="container row align-items-md-stretch mx-auto">
      <router-link
        to="#"
        class="text-decoration-none col-md-4 mb-3 mb-md-0 mb-lg-0 p-0 hover-enlarge"
        style="
          z-index: 4;
          border-bottom: none;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        "
      >
        <div class="h-100">
          <div
            class="h-100 pt-5 pb-4 pe-4 ps-3 text-white bg-dark position-relative hover-in has-bg"
          >
            <h2 style="z-index: 5">Profesyonel Avukatlık Hizmeti</h2>
            <p style="z-index: 5">
              Davalarınızda yanınızdayız. Müvekkillerimizin süreci takip ediyor,
              çözüm odaklı yaklaşımlar sunuyoruz. Hızlı, etkili ve güvenilir
              hukuki destek için bize ulaşın.
            </p>
          </div>
        </div>
      </router-link>
      <router-link
        to="#"
        class="text-decoration-none col-md-4 mb-3 mb-md-0 mb-lg-0 p-0 hover-enlarge"
        style="
          z-index: 4;
          border-bottom: none;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        "
      >
        <div class="h-100">
          <div
            class="h-100 pt-5 pb-4 pe-4 ps-3 text-white position-relative hover-in"
          >
            <i class="bi bi-globe d-flex display-6 mb-3"></i>
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more. Swap the background-color
              utility and add a `.text-*` color utility to mix up the jumbotron
              look. Then, mix and match with additional component themes and
              more. Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>
      </router-link>
      <router-link
        to="#"
        class="text-decoration-none col-md-4 mb-3 mb-md-0 mb-lg-0 p-0 hover-enlarge"
        style="
          z-index: 4;
          border-bottom: none;
          border-bottom-left-radius: 0 !important;
          border-bottom-right-radius: 0 !important;
        "
      >
        <div class="h-100">
          <div
            class="h-100 pt-5 pb-4 pe-4 ps-3 text-white bg-dark position-relative hover-in"
          >
            <i class="bi bi-globe d-flex display-6 mb-3"></i>
            <h2>Change the background</h2>
            <p>
              Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more. Swap the background-color
              utility and add a `.text-*` color utility to mix up the jumbotron
              look. Then, mix and match with additional component themes and
              more. Swap the background-color utility and add a `.text-*` color
              utility to mix up the jumbotron look. Then, mix and match with
              additional component themes and more.
            </p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServicesCard",
  data() {
    return {
      isHovering: false,
    };
  },
};
</script>

<style lang="scss" scoped>
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.hover-enlarge {
  border: none;
  .hover-in {
    background-color: black;
  }
  &:hover {
    .hover-in {
      background-color: #b1976b !important;
      transition: all 0.3s ease-in-out;
    }
  }
}
.has-bg {
  background-image: url("./scales.png");
  background-size: 5rem;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
