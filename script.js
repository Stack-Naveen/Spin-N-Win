const giftsContainer = document.getElementById("gifts-container");
const luckyBtn = document.getElementById("luckyBtn");
const message = document.getElementById("message");

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
luckyBtn.addEventListener("click", () => {
  message.textContent = `please wait...`;

  clearTimeout(delay);

  const wonGift = document.querySelectorAll(".gifts");

  wonGift.forEach((items) => items.classList.remove("wonGift"));

  let previousMovementIndex = -1;

  const intervalId = setInterval(function () {
    let randomMovementIndex = Math.floor(Math.random() * gifts.length);

    if (randomMovementIndex === previousMovementIndex) {
      randomMovementIndex = (randomMovementIndex + 1) % gifts.length;
    }
    previousMovementIndex = randomMovementIndex;

    let randomMovementGift = gifts[randomMovementIndex];
    console.log(randomMovementGift);
    wonGift[randomMovementIndex].classList.add("wonGift");

    document
      .querySelectorAll(".gifts")
      .forEach((el) => el.classList.remove("wonGift"));

    document
      .querySelectorAll(".gifts")
      [randomMovementIndex].classList.add("wonGift");
  }, 500);

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
  }, 5000);
});
