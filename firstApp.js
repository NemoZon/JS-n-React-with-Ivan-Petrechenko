'use strict';
/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять. (К любой строке можно обратиться как 
str.length - и получить её длину)
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");

for(let i=0; i<1; i++){
    if(numberOfFilms=="" || numberOfFilms==null || numberOfFilms>50){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?',"");
        i--;
    }else{
        break; 
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i<1; i++){
    let a = prompt('Один из последних просмотренных фильмов?',""),
        b = prompt('На сколько оцените его?',"");
        
    if (a=="" || a==null|| a.length>50){
        i--;
    }else if(b=="" || b==null|| b.length>50){
        i--;
    }else{
        personalMovieDB.movies[a]=b;
    }
}

for ( let i = 0; i<1; i++){
    let c = prompt('Один из последних просмотренных фильмов?',""),
        d = prompt('На сколько оцените его?',"");
    if(c=="" || c==null|| c.length>50){
        i--;
    }else if(d=="" || d==null || d.length>50){
        i--;
    }else{
        personalMovieDB.movies[c]=d;
    }
}

if(personalMovieDB.count<10){
    console.log("Просмотрено довольно мало фильмов");
}else if(10<personalMovieDB.count && personalMovieDB.count<30){
    console.log("Вы классический зритель");
}else if (personalMovieDB.count>30){
    console.log("Вы киноман");
}else{
    console.log("Произошла ошибка");
}

console.log(personalMovieDB["movies"]);

