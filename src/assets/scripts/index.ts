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
import { initProductItems } from "../../components/ProductItem/ProductItem";
import { initProductSliders } from "../../modules/ProductSlider/ProductSlider";
import { initMultipleSelects } from "../../components/MultipleSelect/MultipleSelect";
import { initRangeSliders } from "../../components/RangeSlider/RangeSlider";

Swiper.use([Navigation, Pagination, EffectCreative, Autoplay]);
Swiper.defaults.lazyPreloaderClass = "swiper-preloader";

mainBannerScript();

initProductSliders();

initProductItems();

initMultipleSelects();

initRangeSliders();

const headerCatalogBtn = document.querySelector(".header__catalog");
if (headerCatalogBtn) {
  headerCatalogBtn.addEventListener("click", () => menuController.openMenu());
}
