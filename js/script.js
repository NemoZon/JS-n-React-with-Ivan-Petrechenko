/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Cкотт Пилигрим против..."
    ]
},
    adv = document.querySelectorAll('.promo__adv img'), //блок с рекламой
    background = document.querySelector('.promo__bg'),//блок с bg
    list = document.getElementsByClassName('promo__interactive-item'), //блок с просмотренными фильмами
    genre = background.querySelector('.promo__genre');//блок с жанром
    
adv.forEach(item=>{
    item.remove();
});
genre.textContent = "драма";
background.style.cssText = "background-image: url('../img/bg.jpg');";
movieDB.movies.sort();  

for (let i=0;i<movieDB.movies.length;i++){
    list[i].textContent = `${i+1}.${movieDB.movies[i]}`;
}


