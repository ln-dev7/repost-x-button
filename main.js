import "./style.scss";
import gsap from "gsap";

const itemStart = document.querySelector(".item-start");
const container = document.querySelector(".container");
const items = document.querySelectorAll(".item");
const itemStartSpans = document.querySelectorAll(".item-start-container span");

let open = false;

itemStart.addEventListener("click", () => {
  if (!open) {
    open = true;
    gsap.to(container, {
      width: "240px",
      height: "150px",
      padding: "10px",
      borderWidth: "2px",
      duration: 0.5,
      ease: "power2.inOut",
    });
    gsap.to(itemStartSpans, {
      y: "-24px",
      duration: 0.5,
      ease: "power2.inOut",
    });
  } else {
    open = false;
    gsap.to(container, {
      width: "130px",
      height: "50px",
      padding: "0px",
      borderWidth: "0px",
      duration: 0.3,
      ease: "power2.ease",
    });
    gsap.to(itemStartSpans, {
      y: "0px",
      duration: 0.5,
      ease: "power2.inOut",
    });
  }

  items.forEach((item, index) => {
    gsap.fromTo(
      item,
      { opacity: 0, x: 20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        delay: 0.1 + 0.2 * index,
        ease: "power2.inOut",
      }
    );
    item.addEventListener("click", () => {
      gsap.to(itemStartSpans, {
        y: "0",
        duration: 0.5,
        ease: "power2.inOut",
      });
      open = false;
      gsap.to(container, {
        width: "130px",
        height: "50px",
        padding: "0px",
        borderWidth: "0px",
        duration: 0.3,
        ease: "power2.ease",
      });
    });
  });
});
