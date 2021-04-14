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
document.addEventListener('DOMContentLoaded',()=>{
    let movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Cкотт Пилигрим против..."
        ]
    },
        background = document.querySelector('.promo__bg'),
        list = document.querySelector('.promo__interactive-list'), //список с просмотренными фильмами
        item = list.querySelectorAll('.promo__interactive-item'), //элемент с просмотренным фильмом
        genre = background.querySelector('.promo__genre'),//блок с жанром
        form = document.querySelector('form.add'), //массив с формой
        Input = form.querySelector('.adding__input'),//блок с вводом
        CheckBox = form.querySelector('input[type="checkbox"]'), //галочка
        Confirm = form.querySelector('button');//кнопка подтверждения
    
    document.querySelectorAll('.promo__adv img').forEach(elem=>{
        elem.remove();
    });
    
    genre.textContent = "драма";
    background.style.cssText = "background-image: url('../img/bg.jpg');";
    movieDB.movies.sort();
    
    item.forEach((a,b)=>{
        a.innerHTML = "";
        a.insertAdjacentHTML("afterbegin", '<div class="delete"></div>');
        a.insertAdjacentText("afterbegin", `${b+1}.${movieDB.movies[b]}`);
        movieDB.movies[b] = `${b+1}.${movieDB.movies[b]}`;
    });
    
    //создание элементов в просмотренные фильмы
    createItem(movieDB.movies);
    function createItem(dataBase){
        Confirm.addEventListener('click',(e) => {
            e.preventDefault();
            if (Input.value.length>0){
                if (Input.value.length>21){
                    Input.value = Input.value.substring(0, 21) + '...';
                }
                dataBase.forEach((elem,index)=>{
                    dataBase[index]=elem.substr(2);
                });
                dataBase.push(Input.value);
                dataBase.sort();
                list.insertAdjacentHTML("afterbegin",'<li class="promo__interactive-item"></li>');
                list.querySelectorAll('.promo__interactive-item').forEach((a,b)=>{
                    a.innerHTML = "";
                    a.insertAdjacentHTML("afterbegin", '<div class="delete"></div>');
                    a.insertAdjacentText("afterbegin", `${b+1}.${dataBase[b]}`);
                    dataBase[b] = `${b+1}.${dataBase[b]}`;
                });
                deleteItem(movieDB.movies);
                Input.value = "";
                if (CheckBox.checked===true){
                    CheckBox.checked = false;
                }
            }
        });
    }
    
    //удаление элементов из просмотренных фильмов
    deleteItem(movieDB.movies);
    function deleteItem(dataBase){
        list.querySelectorAll('.promo__interactive-item').forEach((elem)=>{ 
            elem.lastElementChild.addEventListener("click",()=>{
                let i;
                i = +elem.innerText.slice(0,1)-1;
                elem.remove();
                dataBase.splice(i,1);
                dataBase.forEach((elem,index)=>{
                    dataBase[index]=elem.substr(2);
                });
                dataBase.sort();
                list.querySelectorAll('.promo__interactive-item').forEach((a,b)=>{
                    a.innerHTML = "";
                    a.insertAdjacentHTML("afterbegin", '<div class="delete"></div>');
                    a.insertAdjacentText("afterbegin", `${b+1}.${dataBase[b]}`);
                    dataBase[b] = `${b+1}.${dataBase[b]}`;
                });
                deleteItem(movieDB.movies);
            });
        });
    }
    
    // проверяем на любимый фильм
    checkIfLove();
    function checkIfLove(){
        CheckBox.addEventListener("click",()=>{
            if (CheckBox.checked===true){
                console.log("Добавляем любимый фильм");
            }
        });
    }
});



