const buttons = document.querySelectorAll(".btn");
const boxes = document.querySelectorAll(".box");
const searchBox = document.querySelector("#search");

/*product search*/
searchBox.addEventListener("keyup", (e) => {
  searchText = e.target.value.toLowerCase().trim();
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  buttons[0].classList.add("btn-clicked");
  boxes.forEach((box) => {
    const data = box.dataset.item;
    if (data.includes(searchText)) {
      box.style.display = "block";
    } else {
      box.style.display = "none";
    }
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    setActiveBtn(e);
    const btnFilter = e.target.dataset.filter;

    boxes.forEach((box) => {
      if (btnFilter == "all") {
        box.style.display = "block";
      } else {
        const boxFilter = box.dataset.item;
        if (btnFilter == boxFilter) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      }
    });
  });
});

function setActiveBtn(e) {
  buttons.forEach((button) => {
    button.classList.remove("btn-clicked");
  });
  e.target.classList.add("btn-clicked");
}
