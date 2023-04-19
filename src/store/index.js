import Vue from "vue";
import Vuex from "vuex";

//modules
import mobile from "./modules/mobile";
import loading from "./modules/loading";

// cruds
import BlogsIndex from "./Admin/cruds/Blogs/index";
import BlogsSingle from "./Admin/cruds/Blogs/single";
import AdminAboutIndex from "./Admin/cruds/About/index";
import AdminAboutSingle from "./Admin/cruds/About/single";
import AdminServicesIndex from "./Admin/cruds/Services/index";
import AdminServicesSingle from "./Admin/cruds/Services/single";
import AdminEmploymentsIndex from "./Admin/cruds/Employments/index";
import AdminEmploymentsSingle from "./Admin/cruds/Employments/single";

//pages
import Auth from "./Admin/pages/login/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mobile,
    loading,
    BlogsSingle,
    BlogsIndex,
    AdminAboutIndex,
    AdminAboutSingle,
    AdminServicesIndex,
    AdminServicesSingle,
    AdminEmploymentsIndex,
    AdminEmploymentsSingle,
    Auth,
  },
});

export default store;
