var toggle = false;

function toggleOpen() {
  if (toggle === true) {
    document.querySelector(".menu").src =
      "./news-homepage-main/assets/images/icon-menu-close.svg";
    document.querySelector(".sidebar").style.display = "block";
  } else {
    document.querySelector(".menu").src =
      "./news-homepage-main/assets/images/icon-menu.svg";
    document.querySelector(".sidebar").style.display = "none";
  }
  toggle = !toggle;
}
