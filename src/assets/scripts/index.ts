import { menuController } from "../../modules/Menu/Menu";
import { lazyLoad } from "./utils";

lazyLoad();

const headerCatalogBtn = document.querySelector(".header__catalog");
if (headerCatalogBtn) {
  headerCatalogBtn.addEventListener("click", () => menuController.openMenu());
}
