/*- Знайти та вивести довижину настипних стрінгових значень
    'hello world', 'lorem ipsum', 'javascript is cool'*/
let string = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(string[0].length, string[1].length, string[2].length)


/*- Перевести до великого регістру наступні стрінгові значення
      'hello world', 'lorem ipsum', 'javascript is cool'*/
let string1 = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(string1[0].toUpperCase(), string1[1].toUpperCase(), string1[2].toUpperCase())

/*- Перевести до нижнього регістру настипні стрінгові значення
      'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'*/
let string2 = ['hello world', 'lorem ipsum', 'javascript is cool']
console.log(string2[0].toLowerCase(), string2[1].toLowerCase(), string2[2].toLowerCase())

/*- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.*/
let string3 = ' dirty string   '
console.log(string3.replaceAll(' ', ''))


/*- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
    let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']*/

let string4 = 'Ревуть воли як ясла повні'

function stringToarray(string4) {
    return string4.split(' ')
}

console.log(stringToarray(string4))

/*- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.*/

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]
/*console.log(numbers.join(' '))*/
let map = numbers.map((num) => num + '')
console.log(map)


/*- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]*/

let nums = [11, 21, 3]

let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a)
    }
    return arr
}
console.log(sortNums(nums, 'ascending'))
console.log(sortNums(nums, 'descending'))


/*- є масив*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
/*-- відсортувати його за спаданням за monthDuration
-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/


let sort = coursesAndDurationArray.sort((firstObj, neighbor) => {
    return neighbor.monthDuration - firstObj.monthDuration
})
console.log(sort)

let filter = coursesAndDurationArray.filter((course) => course.monthDuration > 5)
console.log(filter)

let courses = coursesAndDurationArray.map((course, index) => ({
    id: index,
    title: course.title,
    monthDuration: course.monthDuration
}))
console.log(courses)


/*описати колоду карт (від 6 до туза без джокерів)
 - знайти піковий туз
 - всі шістки
 - всі червоні карти
 - всі буби
 - всі трефи від 9 та більше

{
    cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
    value: '', // '6'-'10', 'ace','jack','queen','king','joker'
    color:'', // 'red','black'
}*/
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},

    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},

    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},

    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
]
console.log(cards)

let resAce = cards.filter((card) => card.cardSuit === 'spade' && card.value === 'ace')
console.log(resAce)

let allSix = cards.filter((card) => card.value === '6')
console.log(allSix)

let allReds = cards.filter((card) => card.color === 'red')
console.log(allReds)

let allClubs = cards.filter((card) => card.cardSuit === 'clubs' && card.value >= '9')
console.log(allClubs)

/*Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}*/
let reduce = cards.reduce((acum, card) => {
        if (card.cardSuit === 'spade') {
            acum[0].push(card)
        }
        if (card.cardSuit === 'diamond') {
            acum[1].push(card)
        }
        if (card.cardSuit === 'heart') {
            acum[2].push(card)
        }
        if (card.cardSuit === 'clubs') {
            acum[3].push(card)
        }
        return acum
    },
    [[], [], [], []]
)
console.log(reduce);


/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
--написати пошук всіх об'єктів, в який в modules є sass
--написати пошук всіх об'єктів, в який в modules є docker*/

/*
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let searchSass = (arr) => {
    return arr.filter((item) => item.modules.find(key => key === 'sass'))
}
console.log(searchSass(coursesArray))

let searchDocker = (arr) =>{
    return arr.filter((item) => item.modules.find(key => key === 'docker') )
}
console.log(searchDocker(coursesArray))*/
