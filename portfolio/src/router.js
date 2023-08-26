import { createRouter, createWebHistory } from "vue-router";

import Work from ".components/Work.vue";
import SideProjects from ".components/SideProjects.vue";
import ExtraCurriculars from ".components/ExtraCurriculars.vue";
import About from ".components/About.vue";
import Contact from ".components/Contact.vue";

const routes = [
  {
    path: "/work",
    name: "Work Exp",
    component: Work,
  },
  {
    path: "/projects",
    name: "SideProjects",
    component: SideProjects,
  },
  {
    path: "/extra",
    name: "ExtraCurr",
    component: ExtraCurriculars,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;