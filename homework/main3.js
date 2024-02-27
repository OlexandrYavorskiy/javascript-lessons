
/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині*/
let divs = [
    {name : 1},
    {name : 2},
    {name : 3},
    {name : 4},
    {name : 5},
    {name : 6},
    {name : 7},
    {name : 8},
    {name : 9},
    {name : 10}
]
for (let i = 0; i < divs.length; i++) {
    document.write(`<div> ${divs[i].name}</div>`)

}


/*- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині*/
let divs2 = [
    {name : 'boris'},
    {name : 'tanya'},
    {name : 'ostap'},
    {name : 'petro'},
    {name : 'katya'},
    {name : 'sveta'},
    {name : 'marina'},
    {name : 'alf'},
    {name : 'brett'},
    {name : 'pit'}
]
for (let i = 0; i < divs2.length; i++){
    document.write(`<div> ${divs2[i].name} ${[i]}</div>`)
}

/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.*/



/*- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.*/

/*- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

ШАБЛОН:

 <ul>
    <li>ITEM OF ARRAY</li>
    <!--
        і тд інші об'єкти масиву
         ...
         ...
         ...
    -->
</ul>

замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
*/




/*Використовуючи данні з масиву, за допомоги document.write та циклу
побудувати структуру по шаблону
Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон*/

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(` <div class="product-card">
                           <h3>${product.title} - Price ${product.price}</h3>
                            <img src="${product.image}" alt="product-image">
                                </div>`)
}
/*ШАБЛОН
 <div class="product-card">
        <h3 class="product-title">TITLE. Price - PRICE</h3>
        <img src="IMAGE" alt="" class="product-image">
</div>
Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту*/




/*є масив*/
/* за допомоги циклу вивести:
 - користувачів зі статусом true
 - користувачів зі статусом false
 - користувачів які старші за 30 років*/


