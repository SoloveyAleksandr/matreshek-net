import Swiper from "swiper";

export const initHeadSlider = () => {
  const swiperContainer = document.querySelector<HTMLElement>(
    ".head-slider__swiper",
  );

  if (swiperContainer) {
    const prevBtn = swiperContainer.querySelector<HTMLElement>(
      ".head-slider__btn_prev",
    );
    const nextBtn = swiperContainer.querySelector<HTMLElement>(
      ".head-slider__btn_next",
    );

    new Swiper(swiperContainer, {
      slidesPerView: "auto",
      freeMode: true,
      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },
    });
  }
};
