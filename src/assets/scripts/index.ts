import "swiper/css/bundle";
import { menuController } from "../../modules/Menu/Menu";
import { mainBannerScript } from "../../modules/MainBanner/MainBanner";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from "swiper/modules";

Swiper.use([Navigation, Pagination, EffectCreative, Autoplay]);
Swiper.defaults.lazyPreloaderClass = "swiper-preloader";
Swiper.defaults.pagination = {
  bulletActiveClass: "_active",
  bulletClass: "swiper-pagination__bullet",
};

mainBannerScript();

const headerCatalogBtn = document.querySelector(".header__catalog");
if (headerCatalogBtn) {
  headerCatalogBtn.addEventListener("click", () => menuController.openMenu());
}
