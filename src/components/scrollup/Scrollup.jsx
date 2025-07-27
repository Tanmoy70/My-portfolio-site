import "./scrollup.css";

export default function Scrollup() {
  window.addEventListener("scroll", function () {
    const scrollup = document.querySelector(".scrollup");
    // When the scroll is higher than 560 viewpoint height, add the show_scroll class to tag with the scrollup class.
    if (this.scrollY >= 560) scrollup.classList.add("show_scroll");
    else scrollup.classList.remove("show_scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup_icon"></i>
    </a>
  );
}
