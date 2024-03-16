/*
/!*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!*!/
/!*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*!/
let calc1 = (a,b) => a + b
console.log(calc1(20,30));

/!*-- створити функцію яка обчислює та повертає площу кола з радіусом r*!/

let calc2 = (a,b,r) => (a*b)+r
console.log(calc2(14,30,50))

/!*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*!/
let calc3 = (h,r) => h * r
console.log(calc3(25,55))

/!*-- створити функцію яка приймає масив та виводить кожен його елемент*!/

let obj = {
    name:'Vova',age:32,
    nameAgeFn: () => {
        console.log(obj.name,obj.age)
    }
}
obj.nameAgeFn()

/!*-- створити функцію яка створює параграф з текстом. Текст задати через аргумент*!/
let h2 = (hello) => document.write(`<h2>${hello}</h2>`)
h2('Hello')


/!*-- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*!/

let containerUl = (text) =>{
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
    }

containerUl('hello moto')

/!*-- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)*!/

let containerUl2 = (text,count) =>{
    document.write(`<ul>`)
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

containerUl2('hello moto',3)

/!*-- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*!/

let obj1 = {
    name: 'Petro', age: 35, status: false,
    arrFn: () => {
            document.write(`<div><h1> name - ${obj1.name}, age - ${obj1.age}, status - ${obj1.status}</h1></div>`)
        }
}
obj1.arrFn()

/!*-- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*!/

let obj2 = [
    {id:'1',name:'sibas',age:2},
    {id:'2',name:'salmon',age:1},
    {id:'3',name:'tuna',age:3},
]
let obj2Fn =()=>{
    for (let item of obj2) {
        document.write(`<div><h1>id - ${item.id},name - ${item.name}, age - ${item.age}</h1>`)
    }
}
obj2Fn()



/!*-- створити функцію яка повертає найменьше число з масиву*!/





let minMaxFn = (arr2) =>{
    let min = arr2[0]
    for (let val of arr2) {
        if (min > val){
            min = val
        }
        }
    return min
    }




console.log(minMaxFn([5,2,3,4]))


/!*-- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13*!/

let arrSum = (arr) =>{
    let sum = 0
    for (let i = 0; i < arr.length; i++)
        sum += arr[i]
        return sum

}
let sumArr = arrSum([1,2,10])
console.log(sumArr)

/!*-- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
-Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*!/

let numbers = [11,22,33,44,55,66]

let swap =(arr3,index1,index2) =>{
    let val1 = arr3[index1]
    let val2 = arr3[index2]

    arr3.splice(index2,1,val1)
    arr3.splice(index1,1,val2)
    return console.log(arr3)
}
swap(numbers,0,1)



/!*-- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*!/
let exchange =(sumUAH,currencyValues,exchangeCurrency)=> {
    for (const item of currencyValues){
        if (exchangeCurrency === item.currency){
            return sumUAH / item.value
        }
    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))*/
