/*Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом*/

let form1 = document.forms['form1']
let inputName = form1.name
let inputSurName = form1.surname
let inputAge = form1.age


form1.onsubmit = function (e) {
    e.preventDefault()
    let div = document.createElement('div')
      document.body.appendChild(div)
    let h1 = document.createElement('h1')
    h1.innerText = `name - ${inputName.value},surname - ${inputSurName.value},age - ${inputAge.value}`
    div.appendChild(h1)
}



/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище, в масив sessions зберігається інформація про дату та час відвідування сторінки.
 Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
 Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію*/
function saveVisit() {

    let arrayOfSessions = JSON.parse(localStorage.getItem('sessions')) || [];

    let date = new Date()
    arrayOfSessions.push({
        day : date.getDate(),
        hour :date.getHours(),
        minutes : date.getMinutes(),
        seconds : date.getSeconds()
    })

    localStorage.setItem('sessions',JSON.stringify(arrayOfSessions))
}
saveVisit()

/*зробити масив на 100 об'єктів та дві кнопки prev next
при завантажені сторінки з'являються перші 10 об'єктів.
При натисканні next виводяться настпні 10 об'єктів
При натисканні prev виводяться попередні 10 об'єктів*/

let objCont = document.getElementById('obj-con')
let prevButton = document.getElementById('prev-button')
let nextButton = document.getElementById('next-button')
document.body.append(objCont,prevButton,nextButton)

let objects = [...Array(100)].map((_,i) =>({
    id: i + 1,
    text: `obj ${i + 1}`
}))
let curIndex = 0
showObjects(objects,curIndex)

function showObjects(objects, startIndex) {
    objCont.innerHTML = '';

    for (let i = startIndex; i < startIndex + 10; i++) {
        const object = objects[i];
        let objElem = document.createElement('div')
        objElem.classList.add('object')
        objElem.innerHTML = `<h3>${object.id}</h3> <p>${object.text}</p>`
        objCont.appendChild(objElem)
    }
}
prevButton.addEventListener('click', ()=>{
    if (curIndex > 0){
        curIndex -= 10
        showObjects(objects,curIndex)
    }
})
nextButton.addEventListener('click',() => {
    if (curIndex < objects.length - 10){
        curIndex += 10
        showObjects(objects,curIndex)
    }
})



/*- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".*/
let textElem = document.getElementById('text')
let hideBut = document.getElementById('hide')

hideBut.addEventListener('click', () => {
    textElem.style.display = 'none'
})

/*- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача*/

let form2 = document.forms['form2']
let inptAge = form2.minAge

form2.onsubmit = function (ev) {
    ev.preventDefault()
    if (inptAge.value < 18){
        let div = document.createElement('div')
        div.innerText = `Newbie `
        document.body.appendChild(div)
    }
}

/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
 При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
 (Додатковачастина для завдання)*/

/*  (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
 при перезавантаженні сторінки до значаення додається по 10грн, але !!!
 зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
 При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається*/