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
              <router-link to="/hizmetlerimiz"
                >Hizmetlerimiz</router-link
              >
            </li>
            <li class="btn beko mb-2">
              <router-link to="/hakkimizda" class="nav-link"
                >Hakkımızda</router-link
              >
            </li>
            <li class="btn beko mb-2">
              <router-link to="/uzmanlik-alanlarimiz" class="nav-link"
                >Uzmanlık alanlarımız</router-link
              >
            </li>
            <li class="btn beko mb-2">
              <router-link to="/uzman-kadromuz" class="nav-link"
                >Uzman kadromuz</router-link
              >
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Contact</h4>
          <ul class="list-unstyled">
            <li class="btn beko mb-2">
              <i class="bi bi-telephone"></i>
              <a href="tel:123-456-7890">123-456-7890</a>
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-envelope"></i>
              <a href="mailto:info@company.com">info@company.com</a>
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-geo-alt"></i>
              <span>123 Main Street, Anytown USA</span>
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-whatsapp"></i>
              <a href="https://wa.me/1234567890">123-456-7890</a>
            </li>
            <li class="btn beko mb-2">
              <i class="bi bi-instagram"></i>
              <a href="https://www.instagram.com/company/">@company</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4>Makaleler</h4>
          <ul class="list-unstyled" style="display: inline-grid">
            <li class="btn beko mb-2">
              <router-link to="#">Makale Devami</router-link>
            </li>
            <li class="btn beko mb-2">
              <router-link to="#">Makale Devami</router-link>
            </li>
            <li class="btn beko mb-2">
              <router-link to="#">Makale Devami</router-link>
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
export default {
  name: "FooterMain",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
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
