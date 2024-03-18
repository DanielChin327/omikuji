// TODO - Fetch an activity with the Bored API - Let's psuedocode!
const url = 'https://www.boredapi.com/api/activity/'

const button = document.querySelector(".btn-danger")
button.addEventListener("click", (event) => {
  const activities = ["Good Luck", "Normal Luck", "Bad Luck"];
  const randomNum = Math.floor(Math.random() * 3);

  event.currentTarget.innerText = activities[randomNum];
  event.currentTarget.setAttribute("disabled", "")
})
