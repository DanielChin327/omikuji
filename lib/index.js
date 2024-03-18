// TODO - Fetch an activity with the Bored API - Let's psuedocode!

button = document.querySelector(".btn-danger")
button.addEventListener("click", (event) => {
  const activities = ["Good Luck", "Normal Luck", "Bad Luck"];
  const randomNum = Math.floor(Math.random() * 3);

  event.currentTarget.innerText = activities[randomNum];
  event.currentTarget.setAttribute("disabled", "")
  console.log("pressed yellow button")
})

const drawers = document.querySelectorAll(".drawer")

drawers.forEach((drawer) => {
  console.log("drawer")
  drawer.addEventListener('click', (event) => {
    console.log("pressed")
    if (drawer.dataset.scratched === "false") {
      drawer.dataset.scratched = "true";
      drawer.innerText = drawer.dataset.fortune;
    }
  })
})
