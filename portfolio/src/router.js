import { VueRouter, createWebHistory } from "vue-router";
import Intro from "./components/Intro.vue"
import Work from "./components/Work.vue";
// import SideProjects from ".components/SideProjects.vue";
// import ExtraCurriculars from ".components/ExtraCurriculars.vue";
// import About from ".components/About.vue";
// import Contact from ".components/Contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Intro,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  // {
  //   path: "/projects",
  //   name: "SideProjects",
  //   component: SideProjects,
  // },
  // {
  //   path: "/extra",
  //   name: "ExtraCurr",
  //   component: ExtraCurriculars,
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: About,
  // },
  // {
  //   path: "/contact",
  //   name: "Contact",
  //   component: Contact,
  // },
];

const router = VueRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { x: 0, y: 0 };
    }
  }

});

export default router;