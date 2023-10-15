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
    const imgPaginationContainer = item.querySelector<HTMLElement>(
      ".product-item__pagination",
    );

    if (swiperContainer) {
      if (item.classList.contains("large") && imgPaginationContainer) {
        const paginationSwiper = new Swiper(imgPaginationContainer, {
          direction: "vertical",
          slidesPerView: "auto",
          spaceBetween: 8,
          watchSlidesProgress: true,
        });

        new Swiper(swiperContainer, {
          spaceBetween: 30,
          thumbs: {
            swiper: paginationSwiper,
          },
        });
      } else {
        new Swiper(swiperContainer, {
          pagination: {
            el: pagination,
            type: "bullets",
            bulletActiveClass: "_active",
            bulletClass: "swiper-pagination__bullet",
          },
          spaceBetween: 30,
        });
      }
    }

    new ProducItemStarsController(starBtns);
  });
};