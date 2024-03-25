/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
/*function UserFn(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
    
}
let user =[
    new UserFn(1,'petro','leeroy','fs@gmail.com',380937577478),
    new UserFn(2,'mikola','leeroy','gg@gmail.com',380934544858),
    new UserFn(3,'kiker','leeroy','gg@gmail.com',380938464858),
    new UserFn(4,'albert','leeroy','gg@gmail.com',380937844858),
    new UserFn(5,'john','jenkins','gg@gmail.com',380938869858),
    new UserFn(6,'kira','jenkins','gg@gmail.com',380938866858),
    new UserFn(7,'olya','leeroy','gg@gmail.com',380938877858),
    new UserFn(8,'nikita','leeroy','gg@gmail.com',380938844858),
    new UserFn(10,'sasha','leeroy','gg@gmail.com',380938994858),
    new UserFn(9,'oksana','leeroy','gg@gmail.com',380900844858),
]
*/

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
/*
let filter = user.filter((userid) => !(userid.id % 2))
console.log(filter)
*/


/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
/*let sort = user.sort((firstObj,neighbor)=> firstObj.id - neighbor.id)
console.log(sort)*/

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

/*class ClientClass{

    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order
    }
}
let Client = [
    new ClientClass(1,'otto','spiegel','jjbet@gmail.com',99338,['fish']),
    new ClientClass(2,'oslo','spiegel','jjbet@gmail.com',99438,['carrot']),
    new ClientClass(3,'tokio','spiegel','jjbet@gmail.com',95338,['fish','lemon','orange']),
    new ClientClass(4,'orest','spiegel','jsjbet@gmail.com',69338,['fish','ketchup','mayo','bbq']),
    new ClientClass(5,'ivan','spiegel','jhjbet@gmail.com',97338,['fish','potato','lemon','cola','salad']),
    new ClientClass(6,'john','spiegel','jjzbet@gmail.com',98338,['fish','potato']),
    new ClientClass(7,'margo','spiegel','jdjbet@gmail.com',99338,['fish','chips','lemon']),
    new ClientClass(8,'homer','spiegel','jkjbet@gmail.com',90338,['fish','oyster']),
    new ClientClass(9,'bart','spiegel','jjabet@gmail.com',99238,['fish','oil']),
    new ClientClass(10,'liza','spiegel','jjbdet@gmail.com',91338,['fish']),

    ]
console.log(Client)
/!*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*!/
let sortClient = Client.sort((client1,client2) => {
    return client1.order.length - client2.order.length
})
console.log(sortClient)*/

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:*/
/*
function Car(model,company,year,maxSpeed,engine) {
    this.model = model;
    this.company = company;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine

    /!*-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`*!/

    this.drive = function () {
        console.log(`їдемо зі швидкістю` + ` `+ `${this.maxSpeed}`+ ` `+ `на годину`)
    }
    /!*-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`*!/

    this.info = function () {
        console.log(`model` +` `+ `${this.model}`,`company` + ` `+ `${this.company}`,`year` +` `+ `${this.year}`,`maxSpeed`+ ` `+ `${this.maxSpeed}`,`engine` +` `+ `${this.engine}`)
    }
    /!*-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed*!/
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed
        console.log(newSpeed)
    }
    /!*-- changeYear (newValue) - змінює рік випуску на значення newValue*!/
    this.changeYear = function (newValue){
        this.year = newValue
        console.log(newValue)
    }
    /!*-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*!/
    this.driver = []
    this.addDriver = function (driver){
        this.driver.push(driver)
        console.log(driver)
    }
}
let car1 = new Car('rv7','lexus',1995,210,'5');
console.log(car1)
car1.drive()
car1.info()
car1.increaseMaxSpeed(300)
car1.changeYear(2000)
car1.addDriver(['Ash','Ketchum'])

/!*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*!/
class Car2Class{

    constructor(model,company,year,maxSpeed,engine) {
        this.model1 = model;
        this.company1 = company;
        this.year1 = year;
        this.maxSpeed1 = maxSpeed;
        this.engine1 = engine
        this.drive = function () {
            console.log(`їдемо зі швидкістю` + ` ` + `${this.maxSpeed1}` + ` ` + `на годину`)
        }
        this.info = function () {
            console.log(`model` +` `+ `${this.model1}`,`company` + ` `+ `${this.company1}`,`year` +` `+ `${this.year1}`,`maxSpeed`+ ` `+ `${this.maxSpeed1}`,`engine` +` `+ `${this.engine1}`)
        }
        this.increaseMaxSpeed1 = function (newSpeed) {
            this.maxSpeed = this.maxSpeed + newSpeed
            console.log(newSpeed)
        }
        this.changeYear1 = function (newValue){
            this.year = newValue
            console.log(newValue)
        }
        this.driver = []
        this.addDriver = function (driver){
            this.driver.push(driver)
            console.log(driver)
        }
    }
}
let car2 = new Car2Class('x5','audi',2005,'310',6)
console.log(car2)
car2.drive()
car2.info()
car2.increaseMaxSpeed1(410)
car2.changeYear1(2010)
car2.addDriver(['Pikachu','Pokemon'])








/!*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.*!/
function Cinderella(name,age,footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize
}
let cinderellas = [
    new Cinderella('Goga',20,35),
    new Cinderella('boris',21,34),
    new Cinderella('paul',22,33),
    new Cinderella('gigachad',23,32),
    new Cinderella('stepan',24,31),
    new Cinderella('giga',25,40),
    new Cinderella('voldemort',26,39),
    new Cinderella('harry',27,38),
    new Cinderella('potter',28,37),
    new Cinderella('ginger',29,36),
]
console.log(cinderellas)

/!*Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.*!/
class Prince{

    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe
    }
}
let prince = new Prince('Sasha',18,36)
console.log(prince)
/!*За допомоги циклу знайти яка попелюшка повинна бути з принцом.*!/

function searchCinderella(array) {
    for (const girl of array) {
        if (girl.footSize === prince.shoe)
            return girl
    }
}

console.log(searchCinderella(cinderellas));
/!*Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*!/

let searchSin = cinderellas.find((cinderella) => cinderella.footSize === prince.shoe)
console.log(searchSin)

*/

