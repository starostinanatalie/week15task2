const cities = ['Moscow', 'Paris', 'Milan', 'London', 'Tokyo', 'Berlin'];
let temperature = [];
let minTemperature = +200;
let maxTemperature = -200;

const list = document.getElementById('list');

const getTemperature = (city) => {
    return prompt("Введите температуру в городе " + city);
}

const createElement = (city, tempCity) => {
    const cityItem = document.createElement('ul');
    cityItem.textContent = 'Температура в городе ' + city + ': ' + tempCity + '\u2103';
    list.append(cityItem);
}

for (let i = 0; i < cities.length; i++) {
    let tempValue = {};
    tempValue[cities[i]] = Number(getTemperature(cities[i]));
    if (tempValue[cities[i]] > maxTemperature) {maxTemperature = tempValue[cities[i]]};
    if (tempValue[cities[i]] < minTemperature) {minTemperature = tempValue[cities[i]]};
    temperature.push(tempValue);
    createElement(cities[i], tempValue[cities[i]]);
}

const maxTemp = document.createElement('h2');
maxTemp.textContent = 'Максимальная температура: ' + maxTemperature + '\u2103';
list.append(maxTemp);
const minTemp = document.createElement('h2');
minTemp.textContent = 'Минимальная температура: ' + minTemperature + '\u2103';
list.append(minTemp);