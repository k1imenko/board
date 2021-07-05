const board = document.querySelector('#board'), //получаем доступ к уникальному идентификатору
    colors = ['#e74c3c', '#8e44ad', '3498db', 'e67e22', '#2ecc71'], //содлаем переменную чтобы был выбор разных цветов
    SQUARES_NUMBER = 500;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div') //чтобы динамически создать какой-то html-элемент исп .createElement 
    square.classList.add('square'); //добавляем класс для созданного ранее квадрата(square)

    square.addEventListener('mouseover', () => setColor(square)); //добавляем слушателя событий для каждого из квадратиков, mouseover - вызывает событие, когда мы наводим мышь на какой-то квадрат

    square.addEventListener('mouseleave', () => removeColor(square)); //после того как убираем мышь с нашей доски цвет удаляется

    board.append(square); //обращаемся к board и добавляем его, физически, в html, при этом задаем в стилях для container flex-wrap: wrap
}

function setColor(element) {
    const color = getRandomColor(); //получаем цвет при помощи getRandomColor и передаем значение color в element.style.backgroundColor
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`; //передаем динамическое значение boxShadow, чтобы цвет был более обьемным и насыщенным и добавляем 2-й раз 0 0 10px ${color} для получения 'светящегося' цвета
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000'; //убираем следы от функции setColor и возвращаем черный цвет
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length); //при помощи Math.random получаем рандомный цвет из массива colors
    return colors[index];
}