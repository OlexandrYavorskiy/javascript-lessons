/*Масиви та об'єкти:*/
/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/
let arr;
arr = [1,2,3,4,5,6,7,8,9,10]
console.log(arr)
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3])
console.log(arr[4])
console.log(arr[5])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr[9])


/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
let book1 = {
    tittle:'Pirates off the Caribbean',
    pageCount:350,
    genre:'fantasy'
}
console.log(book1)

let book2 ={
    tittle: 'Seven',
    pageCount: 460,
    genre: 'thriller'
}
console.log(book2)

let book3 = {
    tittle:'The Lord of the Rings',
    pageCount:420,
    genre:'fantasy'
}
console.log(book3)

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.*/

let firstBook = {
    tittle:'Spirit',
    pageCount:120,
    genre:'detective',
    authors:[{name:'Ivo Bobul'},{age:36}]
}
console.log(firstBook)

let secondBook = {
    tittle:'Where is my car Dude?',
    pageCount:300,
    genre:'comedy',
    authors: [{name:'Steve'},{age:25}]
}
console.log(secondBook)

let thirdBook = {
    tittle:'Nothing come to mind',
    pageCount:550,
    genre:'documentary',
    authors:[{name:'Stepan Giga'},{age:60}]
}
console.log(thirdBook)


/*- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

let users = [
    {id:1,name:'Ostap',username:'Ostik',password:123},
    {id:2,name:'Orest',username:'restO',password:321},
    {id:3,name:'Sasha',username:'Sasho',password:422},
    {id:4,name:'Katya',username:'Kate',password:554},
    {id:5,name:'Oksana',username:'Ksanex',password:334},
    {id:6,name:'Fima',username:'fito',password:676},
    {id:7,name:'Greg',username:'terminator',password:434},
    {id:8,name:'Paul',username:'pwnz',password:788},
    {id:9,name:'John',username:'killa',password:111},
    {id:10,name:'Steven',username:'fuma',password:322}
];
console.log(users)
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

/*Логічні розгалуження:*/

/*- Є змінна х, якій ви надаєте довільне числове значення.
Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3*/

let a = 1
    if (a !== 0){
        document.write('True')
    } else {
        document.write("False")
    }
a = 0
   if (a === 0){
       document.write('True')
   } else {
       document.write('False')
   }
a = -3
    if (a<0){
        document.write('True')
    } else {
        document.write('False')
    }

    /*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 46
    if (time > 0 && time <= 15) {
        document.write('first half')
    } else if (time >= 16 && time <= 30){
        document.write('second half')
    } else if (time >= 31 && time <= 45){
        document.write('third half')
    } else if (time >= 46 && time <=60){
        document.write('four half')
    }

    /*- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).*/

let day = 20
    if (day > 0 && day <=10) {
        document.write('first decade')
    } else if (day >= 11 && day <=20) {
        document.write('second decade')
    } else if (day >= 21 && day <= 31) {
        document.write('third decade')
    }

   /*- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).*/
let graphic = 3
    switch (graphic){
        case 1:
            console.log('Monday')
            break
        case 2:
            console.log("Tuesday")
            break
        case 3:
            console.log('Wednesday')
            break
        case 4:
            console.log('Thursday')
            break
        case 5:
            console.log('Friday')
            break
        case 6:
            console.log('Saturday')
            break
        case 7:
            console.log('Sunday')
            break
        default:
            console.log('Default')
    }

    /*- Користувач вводить або має два числа.
Потрібно знайти та вивести максимальне число з тих двох .
Також потрібно врахувати коли введені рівні числа.*/

let user = [50,50]
let number1 = user[0]
let number2 = user [1]
if (number1>number2){
    console.log(number1)
} else if (number2>number1){
    console.log(number2)
} else {
    console.log('numbers are equal')
}


/*- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)*/

let asd = 0 || 'def'
    if (asd < 0){
        console.log('false')
    } else if (asd <0 || 'def')
        console.log('default')







/*- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".*/


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4},
    ]
if (coursesAndDurationArray[0].monthDuration > 5 ) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('SUPER')
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log('SUPER')
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log('super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('SUPER')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('SUPER')
}
