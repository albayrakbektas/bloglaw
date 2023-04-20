<template>
  <footer class="bg-dark text-light">
    <div class="container py-4">
      <div class="row">
        <div class="col-md-3 text-center">
          <img
            src="https://picsum.photos/120/100"
            alt="Office Brand Logo"
            class="img-fluid"
          />
          <h4>lorem ipsum</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Dignissimos dolore eos ipsam! Deleniti dicta doloremque ea explicabo
            fugiat iure magnam minus mollitia nam nulla obcaecati recusandae,
            repellat soluta sunt, voluptates?
          </p>
        </div>
        <div class="col-md-3">
          <h4>Links</h4>
          <ul class="list-unstyled">
            <li class="btn beko mb-2">
              <router-link to="/" class="nav-link">Anasayfa</router-link>
            </li>
            <li class="btn beko mb-2">
              <router-link to="/hizmetlerimiz">Hizmetlerimiz</router-link>
            </li>
            <li class="btn beko mb-2">
              <router-link to="/hakkimizda" class="nav-link"
                >Hakkımızda</router-link
              >
            </li>
            <li class="btn beko mb-2">
              <router-link to="/hukuki-makaleler" class="nav-link"
                >Hukuki Makaleler</router-link
              >
            </li>
            <li class="btn beko mb-2">
              <router-link to="/iletisim" class="nav-link"
                >Iletisim</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Contact</h4>
          <ul class="list-unstyled">
            <li class="btn beko mb-2">
              <i class="bi bi-telephone"></i>
              <a :href="'tel:' + channels.phone">{{ channels.phone }}</a>
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-envelope"></i>
              <a
                style="text-transform: lowercase"
                :href="'mailto:' + channels.email"
                >{{ channels.email }}</a
              >
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-geo-alt"></i>
              <a
                style="text-transform: lowercase"
                :href="
                  'https://www.google.com/maps/search/?api=1&query=' +
                  encodeURIComponent(channels.address)
                "
                target="_blank"
                >{{ channels.address }}</a
              >
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-whatsapp"></i>
              <a :href="'https://wa.me/' + channels.whatsapp">{{
                channels.phone
              }}</a>
            </li>
            <!--            <li class="btn beko mb-2">-->
            <!--              <i class="bi bi-instagram"></i>-->
            <!--              <a href="https://www.instagram.com/company/">@company</a>-->
            <!--            </li>-->
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Makaleler</h4>
          <ul class="list-unstyled" style="display: inline-grid">
            <li
              class="btn beko mb-2"
              v-for="(item, index) in firstThreeElements"
              :key="item + index"
            >
              <router-link :to="'/hukuki-makaleler/' + item.id">{{
                item.title
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bg-secondary py-3">
      <div class="container">
        <p class="m-0 text-center text-white">
          &copy; {{ currentYear }} Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";

export default {
  name: "FooterMain",
  data() {
    return {
      currentYear: new Date().getFullYear(),
      blogs: [],
      channels: {},
    };
  },
  computed: {
    firstThreeElements() {
      return this.blogs.slice(0, 3);
    },
  },
  created() {
    this.fetchBlogData();
    this.fetchChannelsData();
  },
  methods: {
    fetchBlogData() {
      axios
        .get(`/blog`)
        .then((response) => {
          this.blogs = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    fetchChannelsData() {
      axios
        .get(`/channels`)
        .then((response) => {
          this.channels = response.data[0];
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped lang="scss">
// custom styles for footer
.footer {
  font-size: 16px;
  line-height: 1.5;
  background-color: #333;
  color: #fff;
  padding: 60px 0;
  h4 {
    color: #fff;
  }
  p {
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin-bottom: 10px;
      router-link {
        color: #fff;
        text-decoration: none;
        &:hover {
          color: #fff;
          text-decoration: underline;
        }
      }
      i {
        margin-right: 10px;
      }
      .bi {
        font-size: 1.5rem;
        margin-right: 5px;
      }
    }
  }
  .bg-secondary {
    background-color: #555;
    p {
      font-size: 14px;
      margin: 0;
      padding: 10px 0;
    }
  }
}
a {
  text-decoration: none !important;
  color: #fff !important;
}
i {
  margin-right: 0.4rem;
}
li {
  margin-bottom: 0.3rem;
  font-size: 1.1rem;
}
.beko {
  --wp-admin-theme-color: #007cba;
  --wp-admin-theme-color-darker-10: #006ba1;
  --wp-admin-theme-color-darker-20: #005a87;
  word-wrap: break-word;
  word-break: break-word;
  font-family: "Poppins", sans-serif;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  //color: #b1976b;
  color: #fff;
  -webkit-box-sizing: inherit;
  border: 0;
  outline: 0;
  background: 0 0;
  margin: 0;
  padding: 0;
  border-color: #e6e6e6;
  opacity: 0.8;
  &.btn {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    transition: all 0.3s ease;
    text-decoration: none;
    opacity: 1;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: #b1976b;
      transition: all 0.3s ease;
    }

    &:hover:after {
      width: 100%;
    }

    a {
      text-decoration: none;
      color: #b1976b;
    }
  }
}
ul {
  display: inline-grid;
}
li {
  text-align: start !important;
  width: fit-content;
}
</style>