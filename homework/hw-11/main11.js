/*- взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.*/
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(carts => {
        for (const cart of carts.carts) {
            console.log(cart)

            let div = document.createElement('div')
            div.classList.add('product')
            document.body.appendChild(div)

            for (const product of cart.products) {
                let h2 = document.createElement('h2')
                h2.innerText = `Title -${product.title}, Price -${product.price}`
                document.body.appendChild(h2)
                let p = document.createElement('p')
                p.innerText = `Quantity  ${product.quantity},Total  ${product.total},Discount Perc  ${product.discountPercentage},Discount Price ${product.discountedPrice}`
                document.body.appendChild(p)
                let img = document.createElement('img')
                img.src = product.thumbnail
                document.body.appendChild(img)
            }
        }
    });

/*- взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.*/

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(value => {
        let {recipes} = value
        for (const recipe of recipes) {
            let h1 = document.createElement('h1')
            h1.innerText = `${recipe.name}`
            document.body.appendChild(h1)

            let ul = document.createElement('ul')
            document.body.appendChild(ul)
            for (const ulElement of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = `${ulElement}`
                ul.appendChild(li)
            }
            let p = document.createElement('p')
            p.innerText = `${recipe.instructions}`
            document.body.appendChild(p)

            let prepTime = document.createElement('p')
            prepTime.innerText = `Prep time ${recipe.prepTimeMinutes}m,Cook time ${recipe.cookTimeMinutes}m`
            document.body.appendChild(prepTime)

            let serv = document.createElement('p')
            serv.innerText = `Servings ${recipe.servings}`
            document.body.appendChild(serv)

            let dif = document.createElement('b')
            dif.innerText = `Dif:${recipe.difficulty},Cuisine:${recipe.cuisine}`
            document.body.appendChild(dif)

            let img = document.createElement('img')
            img.src = recipe.image
            document.body.appendChild(img)
        }
    });
