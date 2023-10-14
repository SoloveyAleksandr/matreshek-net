import "swiper/css/bundle";
import { menuController } from "../../modules/Menu/Menu";
import { mainBannerScript } from "../../modules/MainBanner/MainBanner";

mainBannerScript();

const headerCatalogBtn = document.querySelector(".header__catalog");
if (headerCatalogBtn) {
  headerCatalogBtn.addEventListener("click", () => menuController.openMenu());
}
