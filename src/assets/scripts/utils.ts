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

export class Dropdown {
  container: HTMLElement;
  dropBtn: HTMLButtonElement | null;
  isDropped: boolean;

  constructor(container: HTMLElement) {
    this.container = container;
    this.dropBtn =
      this.container.querySelector<HTMLButtonElement>(".dropdown-btn");
    this.isDropped = false;

    this.initDropdown();
  }

  initDropdown() {
    if (this.dropBtn) {
      this.dropBtn.addEventListener("click", this.clickHandler.bind(this));
    }

    document.addEventListener("click", (e) => {
      const target = e.target;
      if ((target as Element)?.closest(".dropdown") as HTMLElement) {
      } else {
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
    this.isDropped = true;
    this.container.classList.add("_dropped");
  }

  close() {
    this.isDropped = false;
    this.container.classList.remove("_dropped");
  }
}

export class MultipleSelect extends Dropdown {
  inputList: NodeListOf<HTMLInputElement>;
  text: string;
  btnText: HTMLElement | null;
  cleanBtn: HTMLButtonElement | null;

  constructor(container: HTMLElement) {
    super(container);
    this.inputList =
      this.container.querySelectorAll<HTMLInputElement>(".checkbox__input");
    this.btnText = this.container.querySelector<HTMLElement>(
      ".dropdown-btn__text",
    );
    this.text = this.btnText?.textContent || "";
    this.cleanBtn = this.container.querySelector<HTMLButtonElement>(
      ".multiple-select__clean",
    );

    this.initMultipleSelect();
  }

  initMultipleSelect() {
    if (this.btnText && this.cleanBtn) {
      this.cleanBtn.addEventListener("click", this.cleanSelect.bind(this));

      this.inputList.forEach((input) => {
        input.addEventListener("change", this.selectHandler.bind(this));
      });
    }
  }

  selectHandler() {
    let checked = 0;
    this.inputList.forEach((input) => {
      if (input.checked) {
        checked++;
      }
    });

    if (checked > 0) {
      this.btnText && (this.btnText.textContent = this.text + ": " + checked);
      this.container.classList.add("_checked");
    } else {
      this.btnText && (this.btnText.textContent = this.text);
      this.container.classList.remove("_checked");
    }
  }

  cleanSelect() {
    this.inputList.forEach((input) => {
      input.checked = false;
    });
    this.btnText && (this.btnText.textContent = this.text);
    this.container.classList.remove("_checked");
    this.close();
  }
}
