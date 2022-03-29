import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import PageThreadShow from "../components/PageThreadShow.vue";
import NotFound from "../components/NotFound.vue";
import sourceData from "../../data.json";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/thread/:id",
    name: "ThreadShow",
    component: PageThreadShow,
    props: true,
    beforeEnter(to, from, next) {
      // check if thread exists
      const threadExists = sourceData.threads.find(
        (thread) => thread.id === to.params.id
      );
      // if exists continue
      if (threadExists) {
        return next();
      } else {
        next({
          name: "NotFound",
          params: { pathMatch: to.path.substring(1).split("/") },
          // preserve existing query and hash
          query: to.query,
          hash: to.hash,
        });
      }
      // if doesnt exist redirect to not found
    },
  },
  {
    path: "/:pathMatch(.*)*",
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
