export class ProducItemStarsController {
  starsList: NodeListOf<HTMLElement>;

  constructor(starsList: NodeListOf<HTMLElement>) {
    this.starsList = starsList;

    this.init();
  }

  init() {
    this.starsList.forEach((item, index) => {
      item.addEventListener("mouseenter", this.setHover.bind(this, index));
      item.addEventListener("mouseleave", this.resetHover.bind(this));
    });
  }

  setHover(targetIndex: number) {
    this.starsList.forEach((item, index) => {
      if (index <= targetIndex) {
        item.classList.add("_hover");
      }
    });
  }

  resetHover() {
    this.starsList.forEach((item) => {
      item.classList.remove("_hover");
    });
  }
}
