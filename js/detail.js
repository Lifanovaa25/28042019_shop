class dProduct {
    //данные
    constructor () {
        this.name = 'кеды';
        this.pic = '9.jpg';
        this.price = '4900';
        this.el = document.querySelector('main');

    }
    // что мы делаем с этими данными
    createCard () {
    //1.создаем блок
        let productCardBlock = document.createElement ('div');
       
        productCardBlock.classList.add('details');
                // 3.Html код
                productCardBlock.innerHTML = `
                <div class="det-pic" style="background-image: url('/images/catalog/${this.pic}')"></div>
                            <div class="det-title">${this.name}</div>
                            
                            <div class="det-price">${this.price}</div>
                            <div class="button">Добавить в корзину</div>
                            <span class="details-size__item ">38</span>
                            <span class="details-size__item ">39</span>
                            <span class="details-size__item ">40</span>
                            <span class="details-size__item ">41</span>
                            <span class="details-size__item ">42</span>
                `;
        this.el.appendChild(productCardBlock);
    }
}
let newdProduct = new dProduct();
newdProduct.createCard();

// // 1.создаем блок
// class DetProd {
//     constructor() {
//         this.el = document.querySelector('.main');
//     }

//     createCard() {

//         let detCardBlock = document.createElement('div');
//         // 2.добавляем стили
//         detCardBlock.classList.add('details');
//         // 3.Html код
//         detCardBlock.innerHTML = `
//         <div class="det-pic" style="background-image: url('/images/catalog/${this.pic}')"></div>
//                     <div class="det-title">${this.name}</div>
//                     
//                     <div class="det-price">${this.price}</div>
//                     <div class="det-description">----</div>
//                     <div class="details-size">
//                     <p class="details-size__text details-size__text_margin">Размер</p>
//                     <span class="details-size__item details-size__item_margin">38</span>
//                     <span class="details-size__item details-size__item_margin">39</span>
//                     <span class="details-size__item details-size__item_margin">40</span>
//                     <span class="details-size__item details-size__item_margin">41</span>
//                     <span class="details-size__item details-size__item_margin">42</span>
//                 </div>
//                 <div class="button button_margin">Добавить в корзину</div>
//         `;
//     // 4. добавляем карточку на страницу
//     this.el.appendChild(detCardBlock);
//     }
// }
// let newDetProd = new DetProd();
// newDetProd.createCard();