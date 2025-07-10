const giftsContainer = document.getElementById("gifts-container");
const luckyBtn = document.getElementById("luckyBtn");
const message = document.getElementById("message");

const gifts = [
  "₹100 Cash",
  "Chocolates",
  "₹500",
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

luckyBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * gifts.length) + 1;
  console.log(random);
  const randomGift = gifts[random - 1];
  console.log(randomGift);
  message.textContent = `You won ${randomGift}`;
});
