import { ForbiddenError } from "./error/ForbiddenError";
import { UnauthorizedError } from "./error/UnauthorizedError";
import { NotFoundPage } from "./pages/NotFoundPage";
import { router } from "./router";
import { addEvent, registerGlobalEvents } from "./utils/eventUtil";

addEvent("click", "[data-link]", (e) => {
  e.preventDefault();
  router.get().push(e.target.href.replace(window.location.origin, ""));
});
export function render() {
  const $root = document.querySelector("#root");
  try {
    const Page = router.get().getTarget() ?? NotFoundPage;
    $root.innerHTML = Page();
  } catch (error) {
    if (error instanceof ForbiddenError) {
      router.get().push("/");
      return;
    }
    if (error instanceof UnauthorizedError) {
      router.get().push("/login");
      return;
    }
    console.error(error);
  }
  registerGlobalEvents();
}
