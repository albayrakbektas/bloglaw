<template>
  <div class="section container">
    <div class="sec-title text-center pb-1 mb-3 mt-5">
      <h4 class="sub-title top-line primary">{{ titleField.title }}</h4>
      <h2 class="title text-white">{{ titleField.subtitle }}</h2>
    </div>
    <div class="container-fluid">
      <p class="text-white lh-lg">
        Mersin ilinde yer alan hukuk büromuz müvekkillerine hukukun birçok
        alanında hizmet vermektedir. Mersin Boşanma Avukatı olarak, anlaşmalı
        boşanma davası, Mersin Aile Avukatı, çekişmeli boşanma davası, nafaka
        davası, velayet davası, mal paylaşımı davası, soybağı davası gibi
        konularda Mersin Avukat hizmeti vermektedir. Mersin İşçi Avukatı olarak,
        işçi alacak davaları, iş mahkemesi davası, işe iade davası, işçi
        tazminat davası gibi konularda en iyi Mersin Avukatları hizmeti
        vermekteyiz. Mersin Ticaret Avukatı olarak, ticari alacakların tahsili,
        ticari davalar, şirket danışmanlığı, şirket sözleşmelerinin
        hazırlanması, gümrük davası gibi konularda en iyi Mersin Avukat hizmeti
        vermekteyiz. Mersin Ceza Avukatı olarak, Mersin Ağır Ceza Avukatı
        konusunda en iyi Mersin Hukuk Bürosu hizmeti vermekteyiz. Mersin
        Gayrimenkul Avukatı olarak, Mersin Tapu Avukatı, Mersin Arsa Avukatı,
        Tapu davası, tapu iptali ve tescil, ortaklığın giderilmesi davası
        konusunda en iyi Mersin Avukat hizmeti vermekteyiz. Mersin İcra Avukatı
        olarak, icra takibi başlatılması, ödenmeyen alacağın tahsili, ödenmeyen
        senedin tahsili, ödenmeyen fatura tahsili gibi konularda hizmet
        vermektedir. Mersin Kira Avukatı olarak kiracının evden çıkarılması,
        tahliye davası, kiranın ödenmemesi nedeniyle tahliye, ihtiyaç nedeniyle
        tahliye, tahliye taahhüdü hazırlanması, kira sözleşmesi hazırlanması
        konusunda en iyi şekilde Mersin Tahliye Avukatı hizmeti vermekteyiz.
        Mersin Miras Avukatı, Mersin Vatandaşlık Avukatı, Mersin Sigorta
        Avukatı, Mersin Tazminat Avukatı olarak en iyi şekilde hizmet
        vermekteyiz. Mersin Avukat Ücreti, Mersin Avukat Ücretleri için hukuk
        büromuz ile iletişime geçebilirsiniz.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "KeyWords",
  data() {
    return {
      titleField: {
        title: "GÖNDERİLER",
        subtitle: "Bektasin KALEMİNDEN",
      },
    };
  },
};
</script>

<style scoped>
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
