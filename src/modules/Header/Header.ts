import { menu } from "../Menu/Menu";

const menuBtn = document.querySelector<HTMLElement>(".header__menu-btn");

export const initHeader = () => {
  if (menuBtn) {
    menuBtn.addEventListener("click", () => menu.open());
  }
};
