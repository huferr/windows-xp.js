const displayTime = () => {
  const date = new Intl.DateTimeFormat("en-us", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  }).format(new Date());

  const dateSpan = document.querySelector(".date");

  dateSpan.innerHTML = date;
};

window.addEventListener("load", () => {
  displayTime();
  setInterval(displayTime, 1000);
});
