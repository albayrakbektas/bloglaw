<template>
  <div
    class="pt-100 position-relative bg-custom-img"
    :style="{ backgroundImage: backgroundImage }"
  >
    <!--    <img-->
    <!--      src="/albayrakbektas_Elegant_background_featuring_balanced_law_scales_963963e5-f0fa-4f95-9c84-43e9a991da66.png"-->
    <!--      class="position-absolute w-100 h-100"-->
    <!--      style="z-index: 1; opacity: 0.8"-->
    <!--      alt="asd"-->
    <!--    />-->
    <div class="section container position-relative" style="z-index: 2">
      <div class="row">
        <div class="container col-lg-6">
          <div class="">
            <h4>Mersin Avukat</h4>
            <h2>Bektas Albayrak</h2>
          </div>
          <p class="des">{{ description }}</p>
          <h5 class="sub-tilte">
            "Haklarımız, sorumluluklarımızın bilincinde olduğumuzda gerçek
            anlamını kazanır."
          </h5>
        </div>
        <div class="col-lg-6">
          <img
            src="/law_stock_image_courtroom_gavel_8k_20ad535a-9899-4cd4-97e2-f59f28cd08aa.png"
            title="Mersin Avukat"
            alt="Mersin Avukat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficeCard",
  data() {
    return {
      description:
        "Hukuki sorunlarla karşılaşan kişiler, profesyonel bir avukatın yardımına ihtiyaç duyarlar. Bizim hukuk büromuz, Mersin ilinde faaliyet gösteren başarılı avukatlardan oluşmaktadır. Mersin Avukatları olarak, müvekkillerimize hukuki problemlerini çözme konusunda yardımcı olmanın yanı sıra, önleyici hizmet olarak hukuki danışmanlık da sunuyoruz.\n" +
        "\n" +
        "Mersin Avukat kadromuz, Mersin Barosu'na kayıtlı ve alanında uzman avukatlardan oluşmaktadır. Müvekkillerimize verdiğimiz hizmetler, en iyi şekilde avukatlık ve hukuki danışmanlık hizmeti olarak sunulmaktadır. Mersin Avukat Ofisi olarak, müvekkillerimize en kaliteli hizmeti sunmak için çaba göstermekteyiz.\n" +
        "\n" +
        "Mersin Avukat Tavsiyesi arayanlar genellikle Mersin Avukat Yorumlarına dikkat ederler. Bizim hukuk büromuz, müvekkillerimizin hukuki ihtiyaçlarını karşılamak ve hukuki destekçileri olmak için sürekli olarak kendimizi geliştiriyoruz. Müvekkillerimiz, hukuki danışmanlık ve avukatlık hizmetlerimizle memnuniyetlerini belirtmekte ve bize referans olmaktadırlar.\n" +
        "\n" +
        "Mersin'de Avukatlar, avukatlık ihtiyacı olan kişilerin alanında uzman avukatlara ulaşmasına yardımcı olmak için çalışmaktadırlar. Bizim hukuk büromuz da, müvekkillerimize en iyi şekilde hizmet vermeyi hedeflemekte ve Mersin Avukatları arasında önde gelen bir konumda yer almaktadır. Hukuki sorunlarınızı çözmek veya önlemek için bizimle iletişime geçebilirsiniz.",
    };
  },
  computed: {
    backgroundImage() {
      return "url('/albayrakbektas_Elegant_background_featuring_balanced_law_scales_963963e5-f0fa-4f95-9c84-43e9a991da66.png')";
    },
  },
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.bg-custom-img {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-custom-img::before {
  content: ""; /* required for ::before pseudo-element */
  display: block; /* make the ::before pseudo-element a block element */
  position: absolute; /* position the ::before pseudo-element relative to its parent element */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    255,
    255,
    255,
    0.5
  ); /* set the background color to white with 50% opacity */
}
</style>
