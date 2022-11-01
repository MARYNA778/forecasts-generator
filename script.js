const button = document.querySelector('button'); // нашли кнопку «предсказать судьбу» 
const currentForecast = document.querySelector('.current-forecast'); // нашли контейнер для прогнозов
const template = document.querySelector('#forecasts-item'); // место для старого предсказания
const list = document.querySelector(".forecasts"); // элемент списка
const prediction = [ // масив хранящий варианты предсказаний
    'У тебя сегодня будет замечательный день',
    'Тебе ждёт не забываемое путешествие',
    'В скором времени, ты получишь интересный подарок',
    'Ты точно "победишь" JS',
    'В скором времени ты станешь крутым разработчиком',
];

button.addEventListener('click', function getRandom() { // обработчик события на "клик", 
    currentForecast.querySelector("h1").textContent = prediction[Math.floor(Math.random() * prediction.length)]; // то что присходит при нажатиии на клик
    const predictionText = `Вероятность ${getRandomIntInclusive(0, 100)}%`;
    currentForecast.querySelector("p").textContent = predictionText; // то что присходит при нажатиии на клик

    const template = document.querySelector("#forecast-item");
    const card = template.content.cloneNode(true);
    card.querySelector("h3").textContent = prediction[Math.floor(Math.random() * prediction.length)];
    card.querySelector("p").textContent = predictionText;
    list.append(card);
})

// добавляем старое предсказание


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}