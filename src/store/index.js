import Vue from "vue";
import Vuex from "vuex";

//modules
import mobile from "./modules/mobile";
import loadingModule from "./modules/loading";
import toast from "./modules/toast";
import landing from "./modules/landing";
// cruds
import BlogsIndex from "./Admin/cruds/Blogs/index";
import BlogsSingle from "./Admin/cruds/Blogs/single";
import AdminAboutIndex from "./Admin/cruds/About/index";
import AdminAboutSingle from "./Admin/cruds/About/single";
import AdminServicesIndex from "./Admin/cruds/Services/index";
import AdminServicesSingle from "./Admin/cruds/Services/single";
import AdminEmploymentsIndex from "./Admin/cruds/Employments/index";
import AdminEmploymentsSingle from "./Admin/cruds/Employments/single";
import AdminProfileIndex from "./Admin/cruds/Profile/index";
import AdminProfileSingle from "./Admin/cruds/Profile/single";

//pages
import Auth from "./Admin/pages/login/auth";
import Settings from "./Admin/pages/Settings/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    mobile,
    loadingModule,
    landing,
    toast,
    BlogsSingle,
    BlogsIndex,
    AdminAboutIndex,
    AdminAboutSingle,
    AdminServicesIndex,
    AdminServicesSingle,
    AdminEmploymentsIndex,
    AdminEmploymentsSingle,
    AdminProfileIndex,
    AdminProfileSingle,
    Settings,
    Auth,
  },
});

export default store;
