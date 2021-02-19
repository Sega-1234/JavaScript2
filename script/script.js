var age = +prompt('Введите свой возраст');

if(age <= 18) {
    alert('Вы еще молоды. Вам нужно учится')
}else if(age <= 50) {
    alert('Вам нужно работать')
}else if(age <= 59) {
    alert('Вам скоро на пенсию')
}else if(age <= 150) {
    alert('Вы пенсионер')
}else{
    alert('Кащей, разлогинься')
};


var time = +prompt('Введите свое время')



switch(time) {
    case 0:
        alert('Полночь');
        break;
    case 1:
        alert('Час ночи');
        break;
    case 2:
        alert('Два часа ночи');
        break;
    case 3:
        alert('Три часа ночи');
        break;
    case 4:
        alert('Четыре часа утра');
        break;
    case 5:
        alert('Пять утра');
        break;
    case 6:
        alert('Шесть утра');
        break;
    case 7:
        alert('Семь утра');
        break;
    case 8:
        alert('Восемь утра');
        break;
    case 9:
        alert('Девять часов утра');
        break;
    case 10:
        alert('Десять часов утра');
        break;
    case 11:
        alert('Одиннадцать часов утра');
        break;
    case 12:
        alert('Полдень');
        break;
    case 13:
        alert('Час дня');
        break;
    case 14:
        alert('Два часа дня');
        break;
    case 15:
        alert('Три часа дня');
        break;
    case 16:
        alert('Четыре часа дня');
        break;
    case 17:
        alert('Пять часов вечера');
        break;
    case 18:
        alert('Шесть вечера');
        break;
    case 19:
        alert('Семь часов вечера');
        break;
    case 20:
        alert('Восемь вечера');
        break;
    case 21:
        alert('Девять вечера');
        break;
    case 22:
        alert('Десять вечера');
        break;
    case 23:
        alert('Одиннадцать ночи');
        break;
    default:
        alert('Аче всмысле? В сутках всего 24 часа...')
};



var a = +prompt('Введите первое число');

var b = +prompt('Введите второе число')

var c = +prompt('Введите третее число')

if(a < b && a > c) {
    alert('Среднее число ' + a)
}else if(a > b && a < c) {
    alert('Среднее число ' + a )
}else if(b < a && b > c) {
    alert('Среднее число ' + b )
}else if(b > a && b < c) {
    alert('Среднее число ' + b )
}else if(c < a && c > b) {
    alert('Среднее число ' + с )
}else if(c > a && c < b) {
    alert('Среднее число ' + c )
}