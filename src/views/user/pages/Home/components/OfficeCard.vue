<template>
  <div class="pt-100 section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
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
            src="https://picsum.photos/1200/1200"
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
};
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>
