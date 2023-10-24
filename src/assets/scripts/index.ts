import { menuController } from "../../modules/Menu/Menu";
import { mainBannerScript } from "../../modules/MainBanner/MainBanner";
import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Thumbs,
  FreeMode,
  EffectFade,
} from "swiper/modules";
import { initProductItems } from "../../components/ProductItem/ProductItem";
import { initProductSliders } from "../../modules/ProductSlider/ProductSlider";
import { initMultipleSelects } from "../../components/MultipleSelect/MultipleSelect";
import { initRangeSliders } from "../../components/RangeSlider/RangeSlider";
import { initAdvSlider } from "../../modules/AdvSlider/AdvSlider";
import { initProductHead } from "../../modules/ProductHead/ProductHead";
import { Dropdown } from "./utils";
import { initProductInfo } from "../../modules/ProductInfo/ProductInfo";
import { Fancybox } from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initRewiews } from "../../modules/Reviews/Reviews";
import { initFileInputs } from "../../components/FileInput/FileInput";
import { initAboutSlider } from "../../modules/AboutSlider/AboutSlider";
import { initUpBtn } from "../../components/UpBtn/UpBtn";
import { initContactsSlider } from "../../modules/ContactsSlider/ContactsSlider";
import { initNavBar } from "../../modules/NavBar/NavBar";
import { initCartItems } from "../../components/CartItem/CartItem";
import { initOrderType } from "./pages/order";

gsap.registerPlugin(ScrollTrigger);

Swiper.use([
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
  Thumbs,
  FreeMode,
  EffectFade,
]);
Swiper.defaults.lazyPreloaderClass = "swiper-preloader";

Fancybox.bind("[data-fancybox]", {});

const dropDownBtns = document.querySelectorAll<HTMLElement>("[data-dropdown]");
dropDownBtns.forEach((container) => new Dropdown(container));

mainBannerScript();

initProductSliders();

initProductItems();

initMultipleSelects();

initRangeSliders();

initAdvSlider();

initProductHead();

initProductInfo();

initRewiews();

initFileInputs();

initAboutSlider();

initContactsSlider();

initCartItems();

initOrderType();

const navBarController = initNavBar();

initUpBtn();

const headerCatalogBtn = document.querySelector(".header__catalog");
if (headerCatalogBtn) {
  headerCatalogBtn.addEventListener("click", () => menuController.openMenu());
}

{
  let id = 0;

  window.addEventListener("resize", () => {
    clearTimeout(id);
    id = setTimeout(afterResize, 500);
  });

  function afterResize() {
    ScrollTrigger.update();

    navBarController?.resizeHandler();
  }
}
