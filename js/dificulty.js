const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const level = event.target.innerText.toLowerCase();
    localStorage.setItem("level", level);
    window.location.assign("/");
  });
});
