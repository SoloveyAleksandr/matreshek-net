import { CartItem } from "../../assets/scripts/utils";

const cartItems = document.querySelectorAll<HTMLElement>(".cart-item");

export const initCartItems = () => {
  cartItems.forEach((container) => {
    const minusBtn = container.querySelector<HTMLElement>("[data-minus]");
    const plusBtn = container.querySelector<HTMLElement>("[data-plus]");
    const countContainer = container.querySelector<HTMLElement>(
      ".cart-item-counter__count",
    );
    const priceContainer = container.querySelector<HTMLElement>(
      ".cart-item-price__current",
    );

    if (minusBtn && plusBtn && countContainer && priceContainer) {
      new CartItem(
        container,
        minusBtn,
        plusBtn,
        countContainer,
        priceContainer,
      );
    }
  });
};
