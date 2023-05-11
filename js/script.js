"use strict";

 const defaulHeader = document.createElement('header')
 defaulHeader.classList.add('header')
 defaulHeader.innerHTML = `
 <nav ="Page navigation">
      <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Home</a></li>
            <li class="page-item"><a class="page-link" href="#">Profile</a></li>
            <li class="page-item"><a class="page-link" href="#">bag</a></li>
      </ul>
  </nav>
 `
 const defaulMain = document.createElement('main')
 defaulMain.classList.add('main')
 defaulMain.innerHTML = `
  <button>Home</button>
 <button>Profile</button>
 `

 const defaulFooter = document.createElement('footer')
 defaulFooter.classList.add('footer')
 defaulFooter.innerHTML = `
 <p class="text_1">
 Discover Our Latest Products
</p>
<p class="text_2">
 Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a product
</p>
 `

class PageCreator {
  
    constructor(header = defaulHeader, main = defaulMain , footer = defaulFooter) {
      
      this.page = document.createElement('div');
      this.header = header
      this.main = main
      this.footer = footer
    }
    
    getPage() {
      this.page.classList.add('page-template')
      this.page.appendChild(this.header)
      this.page.appendChild(this.main)
      this.page.appendChild(this.footer)

      return this.page

    }
    setHeader(newHeader){
      this.header = newHeader
    }
    setMain(newMain) {
        this.main = newMain
    }
    setFooter(newFooter) {
      this.footer = newFooter
    }
  }

const catalogPage = new PageCreator()
const profilePage = new PageCreator()
const bagPage = new PageCreator()

const catalogMain = document.createElement('main')
catalogMain.innerHTML = `
<ul class="catalog_main ">
 <li><a href="#">Features</a></li>
 <li><a href="#">Products</a></li>
 <li><a href="#">Blog</a></li>
 <li><a href="#">About</a></li>
</ul>
`

const catalogMain2 = document.createElement('main')
catalogMain2.innerHTML = `
<ul class="catalog_main2 ">
 <li><a href="#">Features</a></li>
 <li><a href="#">Products</a></li>
 <li><a href="#">Blog</a></li>
 <li><a href="#">About</a></li>
</ul>
`

const catalogMain3 = document.createElement('main')
catalogMain3.innerHTML = `
<ul class="catalog_main3 ">
 <li><a href="#">Features</a></li>
 <li><a href="#">Products</a></li>
 <li><a href="#">Blog</a></li>
 <li><a href="#">About</a></li>
</ul>
`

document.body.appendChild(bagPage.getPage())




// const catalogMain = document.createElement('main')

// document.body.appendChild(catalogPage.getPage())

// document.body.appendChild(catalogPage.bagPage())
// document.body.appendChild(catalogPage.bagPage())

// const defaulHeader = document.createElement('header')
//  defaulHeader.classList.add('header')
//  defaulHeader.innerHTML = `
//   <button>Home</button>
//  <button>Profile</button>
//  <button>bag</button>
//  `

// let Username


// let user = {     // объект
//   name: "John",  // под ключом "name" хранится значение "John"
//   age: 30        // под ключом "age" хранится значение 30
// };
// const obj1 = {
//   name: '',
//   password: ''
// }
// const obj2 = {
//   name: '',
//   password: '',
//   age: 0
// }

// // let message = "hello";
// // message = 123456;

// // console.log(user)
// // console.log(obj1)

// user.isAdmin = true;
// user.element = {
//   ret: "adsaa",
//   afasda: '',
// }

// delete user.element;
// delete user.isAdmin;
// console.log(user)

// class Car {
//   constructor(params) {
//     this.name = params.name
//     this.model = params.model
//     this.type = params.type
//     this.color = params.color
//     this.transmission = params.transmission
//     this.volume = params.volume
//   }

//   getCarInfo() {
//     console.log(`
//     ${this.color} ${this.name} ${this.model}
//     Год выпуска: 2022
//     Разгон до ста: 0
//     Расход на сто: 0
//     Коробка: ${this.transmission}
//     `)
//   }

// }
// const car = new Car({
//   name: 'BMW',
//   model: 'X7',
//   type: 'Jeep',
//   color: 'black',
//   transmission: 'auto',
//   volume: 2.4,
// })
// car.getCarInfo()

// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик");
