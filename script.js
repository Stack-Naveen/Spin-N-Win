const giftsContainer = document.getElementById("gifts-container");
const luckyBtn = document.getElementById("luckyBtn");
const message = document.getElementById("message");

const clickSound = new Audio("sounds/click.wav");
const shuffleSound = new Audio("sounds/spin.wav");
const winSound = new Audio("sounds/win.wav");

const gifts = [
  "₹100 Cash",
  "Chocolates",
  "₹500 Cash",
  "Smartphone",
  "Headphones",
  "₹50 Cash",
  "Watch",
  "Teddy Bear",
  "₹200 Cash",
  "Perfume",
  "Sunglasses",
  "₹1000 Cash",
  "Laptop Bag",
  "Keyboard",
  "₹250 Cash",
  "Goldchain",
  "Charger",
  "₹300 Cash",
  "₹750 Cash",
  "Earbuds",
];

gifts.forEach((item) => {
  giftsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="gifts">${item}</div>`
  );
});
let delay;
let isRunning = false;
let intervalId = null;
luckyBtn.addEventListener("click", () => {
  if (isRunning) return;
  isRunning = true;
  luckyBtn.disabled = true;
  clickSound.play();
  message.textContent = `please wait...`;

  clearTimeout(delay);

  const wonGift = document.querySelectorAll(".gifts");

  wonGift.forEach((items) => items.classList.remove("wonGift"));

  let previousMovementIndex = -1;

  intervalId = setInterval(function () {
    shuffleSound.currentTime = 0;

    shuffleSound.play();
    let randomMovementIndex = Math.floor(Math.random() * gifts.length);

    if (randomMovementIndex === previousMovementIndex) {
      randomMovementIndex = (randomMovementIndex + 1) % gifts.length;
    }
    previousMovementIndex = randomMovementIndex;

    let randomMovementGift = gifts[randomMovementIndex];
    console.log(randomMovementGift);
    wonGift.forEach((el) => el.classList.remove("wonGift"));
    wonGift[randomMovementIndex].classList.add("wonGift");
  }, 400);

  delay = setTimeout(function () {
    const random = Math.floor(Math.random() * gifts.length);
    console.log(random);
    const randomGift = gifts[random];

    console.log(randomGift);
    message.textContent = `You won ${randomGift}`;

    document
      .querySelectorAll(".gifts")
      .forEach((el) => el.classList.remove("wonGift"));

    wonGift[random].classList.add("wonGift");

    clearInterval(intervalId);
    winSound.play();
    luckyBtn.disabled = false;
    isRunning = false;
  }, 5000);
});
