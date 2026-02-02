import { weatherData } from "./weatherData.js";

const container = document.querySelector(".weather__cards");
container.innerHTML = "";

weatherData.forEach(item => {
  const card = document.createElement("div");
  card.className = "weather__card";

  card.innerHTML = `
    <div class="card__content">
      <p class="card__title">${item.title}</p>
      <img src="${item.icon}" class="card__icon" alt="">
      <p class="card__value">${item.value}</p>
      <p class="card__desc">${item.description}</p>
    </div>
  `;

  container.appendChild(card);
});



// лог поиска
const input = document.querySelector('.header__input');
input.addEventListener('input', (e) => {
  console.log(e.target.value);
});
