import { createRouter } from "./lib/createRouter.js";
import HomePage from "./pages/HomePage.js";
import LoginPage from "./pages/LoginPage.js";
import ProfilePage from "./pages/ProfilePage.js";
import { render } from "./render.js";
import { router } from "./router.js";
import { globalStore } from "./stores/globalStore.js";

router.set(
  createRouter({
    "/": HomePage,
    "/login": LoginPage,
    "/profile": ProfilePage,
  })
);
function main() {
  router.get().subscribe(render);
  globalStore.subscribe(render);
  render();
}

main();
