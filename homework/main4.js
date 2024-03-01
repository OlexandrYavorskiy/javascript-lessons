/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

function calc(a,b) {
    return a+b
}
let r1 = calc(20,30)
document.write(r1)

/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

function calc2(a,b,r) {
    return (a*b)+r
}
let r2 = calc2 (a =30, b = 50, r =30)
document.write(`<div>${r2}</div>`)

/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

function calc3(h,r) {
    return h + r
}
let r3 = calc3(h =45, r = 55)
document.write(r3)

/*- створити функцію яка приймає масив та виводить кожен його елемент*/
let arrayM = [
    {name:'js1'},
    {name:'js2'},
    {name:'js3'},
    {name:'js4'},
];
for (let arrayElement of arrayM) {
array1(arrayElement)
}
function array1(object) {
    document.write(`<div> name ${object.name}</div>`)
}

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

function paragraph(text = 'paragraph') {
    document.write(`<h1>${text}</h1>`)
}
paragraph()

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/
 function containerUl(text = 'wassup'){
     document.write(`<ul>`)
     for (let i = 0; i < 3; i++) {
       document.write(`<li>${text}</li>`)
     }
     document.write(`</ul>`)
 }
containerUl()
/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*/

function containerUl2(text = 'dude',count = 3){
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
containerUl2()

/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/
let data = [
    {number:20,string:'Oklahoma',status:false}
  ]
for (let datum of data) {
    plan(datum)
}
function plan(dataObj) {
            document.write(`<div>
                            <h1>
                            число - ${dataObj.number}
                            стрінга - ${dataObj.string}
                            булеан - ${dataObj.status}
</h1>
</div>`)



}

/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

function carsAge(dataObj) {
    document.write(`<div>
                            <h1>
                            id - ${dataObj.id}
                            name - ${dataObj.name}
                           age - ${dataObj.age}
</h1>
</div>`)
}

let cars = [
    {id:'1',name:'Mazda',age:'1993'},
    {id:'2',name:'Toyota',age:'2002'},
    {id:'3',name:'Bentley',age:'2004'},
]
for (let car of cars) {
    carsAge(car)
}
/*- створити функцію яка повертає найменьше число з масиву*/

/*- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*/
function arrSum(arr) {
    let summ1 = 0
    for (let i = 0; i < arr.length; i++)
        summ1 += arr[i]
    return summ1
}
let arr1 = arrSum([1,2,10])
console.log(arr1)


/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

let numbers = [1,2,3,4,5,6]
console.log(numbers)
function swap(arr,index1,index2) {
    let val1 = arr[index1]
    let val2 = arr[index2]

    arr.splice(index2,1,val1)
    arr.splice(index1,1,val2)

    return console.log(arr)
}
swap(numbers,0,1)
/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/

