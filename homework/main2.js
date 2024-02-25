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

