/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)
*/
function UserFn(id,name,surname,email,phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
    
}
let user =[
    new UserFn(1,'petro','pyatochkin','fs@gmail.com',380937577478),
    new UserFn(2,'mikola','andriyovich','gg@gmail.com',380934544858),
    new UserFn(3,'kiker','andriyovich','gg@gmail.com',380938464858),
    new UserFn(4,'albert','andriyovich','gg@gmail.com',380937844858),
    new UserFn(5,'john','andriyovich','gg@gmail.com',380938869858),
    new UserFn(6,'kira','andriyovich','gg@gmail.com',380938866858),
    new UserFn(7,'olya','andriyovich','gg@gmail.com',380938877858),
    new UserFn(8,'nikita','andriyovich','gg@gmail.com',380938844858),
    new UserFn(9,'sasha','andriyovich','gg@gmail.com',380938994858),
    new UserFn(10,'oksana','andriyovich','gg@gmail.com',380900844858),
]
console.log(user)

/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/
let filter = user.filter(userid => userid.id === 2)
console.log(filter)


/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
let sort = user.sort((firstObj,neighbor)=> firstObj.id - neighbor.id)
console.log(sort)

/*- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class ClientClass{

    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = [order]
    }
}
let Client = [
    new ClientClass(1,'otto','spiegel','jjbet@gmail.com',99338,['fish']),
    new ClientClass(2,'oslo','spiegel','jjbet@gmail.com',99338,['fish','carrot']),
    new ClientClass(3,'tokio','spiegel','jjbet@gmail.com',99338,['fish','lemon','orange']),
    new ClientClass(4,'orest','spiegel','jjbet@gmail.com',99338,['fish','ketchup','mayo','bbq']),
    new ClientClass(5,'ivan','spiegel','jjbet@gmail.com',99338,['fish','potato','lemon','cola','salad']),
    new ClientClass(6,'john','spiegel','jjbet@gmail.com',99338,['fish','potato']),
    new ClientClass(7,'margo','spiegel','jjbet@gmail.com',99338,['fish','chips','lemon']),
    new ClientClass(8,'homer','spiegel','jjbet@gmail.com',99338,['fish','oyster']),
    new ClientClass(9,'bart','spiegel','jjbet@gmail.com',99338,['fish','oil']),
    new ClientClass(10,'liza','spiegel','jjbet@gmail.com',99338,['fish']),

    ]
console.log(Client)
/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/
let sortClient = Client.sort((value,value2) => value.order - value2.order)
console.log(sortClient)

/*- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/


/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    -- changeYear (newValue) - змінює рік випуску на значення newValue
    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/


/*-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
За допомоги циклу знайти яка попелюшка повинна бути з принцом.
Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/