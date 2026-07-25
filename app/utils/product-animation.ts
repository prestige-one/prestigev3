import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function productAnimation() {
  const shop_thumb = gsap.matchMedia();
  const wrap = document.querySelector('.tp-shop-product-area');

  shop_thumb.add("(min-width: 1200px)", () => {
    if (wrap) {
      ScrollTrigger.create({
        trigger: ".tp-shop-product-area",
        start: "top 15px",
        end: "bottom 103%",
        pin: ".tp-shop-product-banner",
        pinSpacing: true,
      });
    }
  });
}