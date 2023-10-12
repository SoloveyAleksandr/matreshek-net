const lazyImgList: NodeListOf<HTMLImageElement> =
  document.querySelectorAll(".lazy");

class LazyImg {
  isContainer: boolean;
  container: HTMLElement;
  img: HTMLElement;
  src: string;
  phantom: HTMLImageElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.phantom = new Image();

    if (this.container.tagName === "IMG") {
      this.img = this.container;
      this.src = this.img.dataset.src || "";
      this.isContainer = false;
    } else {
      const img =
        this.container.querySelector("img") || document.createElement("img");
      this.img = img;
      this.src = img.dataset.src || "";
      this.isContainer = true;
    }

    this.init();
  }

  init() {
    this.phantom.loading = "lazy";
    this.phantom.src = this.src;
    this.phantom.addEventListener("load", this.setLoaded.bind(this));
  }

  setLoaded() {
    if (this.isContainer) {
      this.container.classList.add("_ready");
    } else {
      this.img.classList.add("_ready");
    }
    this.img.setAttribute("src", this.src);
  }
}

export const lazyLoad = () => {
  lazyImgList.forEach((i) => new LazyImg(i));
};
