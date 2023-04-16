<template>
  <div class="pt-100 section">
    <div class="container">
      <div class="row">
        <div v-if="!isMobile" class="col-md-4 col-lg-3">
          <img class="rounded" src="https://picsum.photos/1200/1200" title="Mersin Avukat" alt="Mersin Avukat">
        </div>
        <div class="col-12 col-md-8 col-lg-9 px-5">
          <div class="">
            <h4>Mersin Avukat</h4>
            <h2>Bektas Albayrak</h2>
          </div>
          <p class="des">{{ description }}</p>
          <h5 class="sub-tilte">"Haklarımız Ancak ve Ancak Görevlerimizi Yerine Getirdikçe Artmaktadır."</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "AboutView",
  computed: {
    ...mapGetters(["isMobile"])
  },
  data() {
    return {
      description: "Mersin avukat olarak faaliyet gösteren hukuk büromuz başarılı çalışmalarına Mersin ilinde devam etmektedir. Mersin Avukatları Mersin ilinde Mersin Barosu’na kayıtlı olarak mesleki faaliyetlerini sürdüren avukatları ifade etmektedir. Hukuk büromuzun Mersin Avukat kadrosu müvekkillerimizin hukuki problemlerini çözmenin yanı sıra müvekkillerimize önleyici hizmet olarak hukuki danışmanlık hizmeti vermektedir. Mersin Avukatlık Büromuzun avukatları Mersin Avukatları olarak müvekkillerimizin hukuki alandaki destekçileri olmayı hedeflemektedirler. Mersin Avukat Bürosu olarak müvekkillerimize en iyi şekilde avukatlık ve hukuki danışmanlık hizmeti vermekteyiz. Mersin Avukat Ofisi olarak müvekkillerimize verdiğimiz Mersin Avukatlık Hizmeti alanında uzman avukat tarafından verilir. Mersin Hukuk Bürosu hizmetini müvekkillerimize iki avukat olarak vermekteyiz. Mersin Avukat Tavsiyesi arayan kişiler genellikle daha önceden hukuki problemi olmuş kişilerden tavsiye alırlar. Günümüzde Mersin Avukat Tavsiye olarak internet üzerinden de sıklıkla arama yapılmaktadır. Mersin Avukat Tavsiyesi arayanlar genellikle Mersin Avukat Yorumları dikkat etmektedirler. Mersin’de Avukatlar, Mersin Avukatları araması yapan avukat ihtiyacı bulunan kişiler alanında uzman avukatlara ulaşmayı hedeflerler. Mersin Avukat Yorumları avukat ararken sıklıkla dikkat edilen unsurl"
    }
  }
}
</script>

<style scoped>
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>