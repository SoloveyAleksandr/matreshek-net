import Swiper from "swiper";

export class Dropdown {
  container: HTMLElement;
  dropBtn: HTMLButtonElement | null;
  isDropped: boolean;
  swiper: any;
  swiperAllowTouchMove: boolean;

  constructor(container: HTMLElement) {
    this.container = container;
    this.dropBtn = this.container.querySelector<HTMLButtonElement>(
      "[data-dropdown-btn]",
    );
    this.isDropped = false;

    this.swiper = this.container.closest(".swiper");
    this.swiperAllowTouchMove =
      this.swiper && this.swiper.swiper && this.swiper.swiper.allowTouchMove
        ? true
        : false;

    this.initDropdown();
  }

  initDropdown() {
    if (this.dropBtn) {
      this.dropBtn.addEventListener("click", this.clickHandler.bind(this));
    }

    document.addEventListener("click", (e) => {
      const target = e.target;
      const closest = (target as Element)?.closest(".dropdown") as HTMLElement;
      if (closest !== this.container && this.isDropped) {
        this.close();
      }
    });
  }

  clickHandler() {
    if (this.isDropped) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    setTimeout(() => {
      this.isDropped = true;
      this.container.classList.add("_dropped");

      if (this.swiper && this.swiper.swiper && this.swiperAllowTouchMove) {
        this.swiper.swiper.allowTouchMove = false;
      }
    }, 1);
  }

  close() {
    this.isDropped = false;
    this.container.classList.remove("_dropped");

    if (this.swiper && this.swiper.swiper && this.swiperAllowTouchMove) {
      this.swiper.swiper.allowTouchMove = true;
      (this.swiper.swiper as Swiper).updateSlides();
      (this.swiper.swiper as Swiper).updateSize();
    }
  }
}
