const boxes = document.querySelectorAll(".number-box");

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    const id = index + 1;
    window.location.assign(`/char3/viewer.html?id=${id}`);
  });
});
