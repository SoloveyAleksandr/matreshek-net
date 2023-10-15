import Swiper from "swiper";
import { ProducItemStarsController } from "../../assets/scripts/utils";

const items = document.querySelectorAll(".product-item");

export const initProductItems = () => {
  items.forEach((item) => {
    const starBtns = item.querySelectorAll<HTMLElement>(
      ".product-item-rating__star",
    );
    const swiperContainer = item.querySelector<HTMLElement>(
      ".product-item__images",
    );
    const pagination = item.querySelector<HTMLElement>(".swiper-pagination");

    if (swiperContainer && pagination) {
      new Swiper(swiperContainer, {
        pagination: {
          el: pagination,
          type: "bullets",
          clickable: true,
          bulletActiveClass: "_active",
          bulletClass: "swiper-pagination__bullet",
        },
        spaceBetween: 30,
      });
    }

    new ProducItemStarsController(starBtns);
  });
};
