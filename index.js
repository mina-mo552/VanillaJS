const title = document.querySelector("#title");

const CLICKED_CALLS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CALLS);
}

function init() {
  title.addEventListener("click", handleClick);
}
init();
