class MenuController {
  container: HTMLElement;
  items: NodeListOf<HTMLElement>;
  isActive: boolean;

  constructor(container: HTMLElement, items: NodeListOf<HTMLElement>) {
    this.container = container;
    this.items = items;
    this.isActive = false;

    if (this.container) {
      this.container.addEventListener("mouseenter", this.openMenu.bind(this));
      this.container.addEventListener("mouseleave", this.closeMenu.bind(this));

      items.forEach((i) => {
        const link = i.querySelector<HTMLElement>(".menu-item__link");

        if (link) {
          link.addEventListener("mouseenter", this.openItem.bind(this, i));
        }
      });
    }
  }

  openMenu() {
    this.isActive = true;
    this.container.classList.add("_active");
  }

  closeMenu() {
    this.isActive = false;
    this.container.classList.remove("_active");
    this.closeItems();
  }

  openItem(target: HTMLElement) {
    this.items.forEach((i) => {
      if (i === target) {
        i.classList.add("_active");
        console.log(target);
      } else {
        i.classList.remove("_active");
      }
    });
  }

  closeItems() {
    this.items.forEach((i) => {
      i.classList.remove("_active");
    });
  }
}

const menu =
  document.querySelector<HTMLElement>(".menu") || document.createElement("div");
const menuItems = document.querySelectorAll<HTMLElement>(".menu-item");

export const menuController = new MenuController(menu, menuItems);
