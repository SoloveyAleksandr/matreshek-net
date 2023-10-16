import gsap from "gsap";

const reviewsRate = document.querySelector<HTMLElement>(".reviews-rate");
const reviewsRateContainer = document.querySelector<HTMLElement>(
  ".reviews-rate__container",
);
const reviewsRatePin =
  document.querySelector<HTMLElement>(".reviews-rate__pin");

export const initRewiews = () => {
  if (reviewsRate && reviewsRatePin && reviewsRateContainer) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: reviewsRate,
        start: "top top",
        end: `${
          100 -
          reviewsRateContainer.offsetHeight / (reviewsRate.offsetHeight / 100)
        }% top`,
        scrub: true,
        markers: true,
      },
    });
    tl.to(reviewsRatePin, {
      flex: 1,
      ease: "none",
    });

    window.addEventListener("resize", () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.update();
      }
    });
  }
};
