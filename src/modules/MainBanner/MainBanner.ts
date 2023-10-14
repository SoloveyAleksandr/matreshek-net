import Swiper from "swiper";
import {
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from "swiper/modules";

export const mainBannerScript = () => {
  const mainSwiperContainer = document.querySelector<HTMLElement>(
    ".main-banner__swiper",
  );
  const pagination = document.querySelector<HTMLElement>(
    ".main-banner__swiper .swiper-pagination",
  );
  const prodSwiperContainer =
    document.querySelector<HTMLElement>(".main-banner-prod");

  if (mainSwiperContainer && pagination && prodSwiperContainer) {
    const mainSwiper = new Swiper(mainSwiperContainer, {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      effect: "creative",
      creativeEffect: {
        prev: {
          translate: ["-20%", 0, 0],
        },
        next: {
          translate: ["100%", 0, 1],
        },
      },
      speed: 1000,
      pagination: {
        el: pagination,
        type: "bullets",
        clickable: true,
        bulletActiveClass: "_active",
        bulletClass: "swiper-pagination__bullet",
      },
      modules: [Navigation, Pagination, EffectCreative, Autoplay],
      on: {
        slideChange: (swiper) => {
          prodSwiper.slideTo(swiper.activeIndex);
        },
      },
    });

    const prodSwiper = new Swiper(prodSwiperContainer, {
      allowTouchMove: false,
    });
  }
};
