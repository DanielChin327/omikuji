button = document.querySelector(".btn-warning")
button.addEventListener("click", (event) => {
  const randomNum = Math.floor(Math.random() * 100);

  event.currentTarget.innerText = randomNum;
  event.currentTarget.setAttribute("disabled", "")

})

const drawers = document.querySelectorAll(".drawer")
drawers.forEach((drawer, index) =>{
  drawer.innerText = index + 1;
})

drawers.forEach((drawer) => {
  drawer.addEventListener('click', (event) => {
    console.log("pressed")
    if (drawer.dataset.scratched === "false") {
      drawer.dataset.scratched = "true";
      drawer.innerText = drawer.dataset.fortune;
    }
  })
})
