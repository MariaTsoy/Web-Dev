import { Component, Input, Output, EventEmitter } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {AppComponent} from "../app.component";

interface Products {
  category: string;
  image: string;
  name: string;
  rating: number;
  share: string;
  more: string;
  likes: number;
  liked: boolean;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  template: `
    <div class="elements">
      <div  *ngFor="let product of getProductsOf(this.category); let i=index">
        <div class="product">
          <img class="product_img" src={{product.image}}>
          <div class="product_info">
            <h2>{{ product.name }}</h2>
            <p>Rating: {{product.rating}}</p>
            <div class="like" *ngIf="!product.liked">
              <img id="likeoff" (click)="putlike(product)" src="/assets/like.png">
              <p>{{product.likes}}</p>
            </div>
            <div class="like" *ngIf="product.liked">
              <img id="likeon" (click)="putlike(product)" src="/assets/like.png">
              <p>{{product.likes}}</p>
            </div>


          </div>
          <div class="links">
            <a href={{product.share}}>Share in Telegram</a>
            <a href={{product.more}}>View on Kaspi</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Products[];
  categories: string[];
  @Input() category = "";

  public getCategory(ind: number): string {
    return this.categories[ind];
  }

  public putlike(product: Products) {
    if (product.liked) {
      product.likes--;
    }
    else {
      product.likes++;
    }
    product.liked = !product.liked;
  }

  public getProductsOf(category: string) {
    let newProducts: Products[] = [];
    for (let product of this.products) {
      if (product.category == category) {
        newProducts.push(product);
      }
    }
    return newProducts;
  }

  constructor() {
    this.categories = ["Tech", "Phones", "Accessories", "Books"];

    this.products = [
      {
        likes: 1043,
        liked: false,
        category: this.categories[0],
        image: "/assets/Mouse mat.jpg",
        name: 'Коврик для мыши Red Square Mouse Mat XXL Azure',
        rating: 5,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/red-square-mouse-mat-xxl-azure-rsq-40018--110340101/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/red-square-mouse-mat-xxl-azure-rsq-40018--110340101/?c=750000000&ref=shared_link",
      },
      {
        likes: 1643,
        liked: false,
        category: this.categories[0],
        image: "/assets/meta quest.jpg",
        name: 'Очки виртуальной реальности Meta Quest 2 128 Gb',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/meta-quest-2-128-gb-102138237/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/meta-quest-2-128-gb-102138237/?c=750000000&ref=shared_link",
      },
      {
        likes: 1234,
        liked: false,
        category: this.categories[0],
        image: "/assets/gamepad.jpg",
        name: 'Игровой контроллер Sony PS5 DualSense белый',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/sony-ps5-dualsense-belyi-100752003/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/sony-ps5-dualsense-belyi-100752003/?c=750000000&ref=shared_link",
      },
      {
        likes: 163,
        liked: false,
        category: this.categories[0],
        image: "/assets/keyboard.jpg",
        name: 'Клавиатура HyperX Alloy Origins 60 HKBO1S-RB-RU/G черный',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/hyperx-alloy-origins-60-hkbo1s-rb-ru-g-chernyi-103904519/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/hyperx-alloy-origins-60-hkbo1s-rb-ru-g-chernyi-103904519/?c=750000000&ref=shared_link",
      },
      {
        likes: 134,
        liked: false,
        category: this.categories[0],
        image: "/assets/mouse.jpg",
        name: 'Мышь для компьютера Logitech G304 черный',
        rating: 4.4,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/logitech-g304-chernyi-100370923/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/logitech-g304-chernyi-100370923/?c=750000000&ref=shared_link",
      },

      {
        likes: 13,
        liked: false,
        category: this.categories[1],
        image: "/assets/iphone15.jpg",
        name: 'Смартфон Apple iPhone 15 128Gb черный',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-sinii-113138331/?c=750000000&m=15025090&sr=2&ref=shared_link",
        more: "https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-sinii-113138331/?c=750000000&m=15025090&sr=2&ref=shared_link",
      },
      {
        likes: 10,
        liked: false,
        category: this.categories[1],
        image: "/assets/iphone14.jpg",
        name: 'Смартфон Apple iPhone 14 128Gb черный',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&sr=7&ref=shared_link",
        more: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&sr=7&ref=shared_link",
      },
      {
        likes: 5467,
        liked: false,
        category: this.categories[1],
        image: "/assets/infinix.jpg",
        name: 'Смартфон Infinix Zero 30 5G 12 ГБ/256 ГБ фиолетовый',
        rating: 4.5,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/infinix-zero-30-5g-12-gb-256-gb-fioletovyi-115147320/?c=750000000&m=4401013&sr=7&ref=shared_link",
        more: "https://kaspi.kz/shop/p/infinix-zero-30-5g-12-gb-256-gb-fioletovyi-115147320/?c=750000000&m=4401013&sr=7&ref=shared_link",
      },
      {
        likes: 3456,
        liked: false,
        category: this.categories[1],
        image: "/assets/a24.jpg",
        name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000&sr=17&ref=shared_link",
        more: "https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000&sr=17&ref=shared_link",
      },
      {
        likes: 34,
        liked: false,
        category: this.categories[1],
        image: "/assets/redmi.jpg",
        name: 'Смартфон Xiaomi Redmi Note 12 6 ГБ/128 ГБ серый',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-seryi-109734268/?c=750000000&sr=23&ref=shared_link",
        more: "https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-seryi-109734268/?c=750000000&sr=23&ref=shared_link",
      },

      {
        likes: 67,
        liked: false,
        category: this.categories[2],
        image: "/assets/backpack.jpg",
        name: 'Рюкзак MOYYI 328 искусственная кожа черный',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/rjukzak-moyyi-328-iskusstvennaja-kozha-chernyi-103482904/?c=750000000&m=Baymax&sr=2&ref=shared_link",
        more: "https://kaspi.kz/shop/p/rjukzak-moyyi-328-iskusstvennaja-kozha-chernyi-103482904/?c=750000000&m=Baymax&sr=2&ref=shared_link",
      },
      {
        likes: 658,
        liked: false,
        category: this.categories[2],
        image: "/assets/watch.jpg",
        name: 'Часы Кварцевые SKMEI 1251 пластик, нержавеющая сталь',
        rating: 4.6,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/kvartsevye-skmei-1251-plastik-nerzhavejuschaja-stal--103561408/?c=750000000&sr=9&ref=shared_link",
        more: "https://kaspi.kz/shop/p/kvartsevye-skmei-1251-plastik-nerzhavejuschaja-stal--103561408/?c=750000000&sr=9&ref=shared_link",
      },
      {
        likes: 3245,
        liked: false,
        category: this.categories[2],
        image: "/assets/bag.jpg",
        name: 'Барсетка nahb6061 полиэстер черный',
        rating: 4.7,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/barsetka-nahb6061-poliester-chernyi-108728538/?c=750000000&sr=13&ref=shared_link",
        more: "https://kaspi.kz/shop/p/barsetka-nahb6061-poliester-chernyi-108728538/?c=750000000&sr=13&ref=shared_link",
      },
      {
        likes: 15,
        liked: false,
        category: this.categories[2],
        image: "/assets/scarf.jpg",
        name: 'Палантин Cashmere 00454 кашемир 180 см x 70 см',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/palantin-cashmere-00454-kashemir-180-sm-x-70-sm-106789821/?c=750000000&sr=27&ref=shared_link",
        more: "https://kaspi.kz/shop/p/palantin-cashmere-00454-kashemir-180-sm-x-70-sm-106789821/?c=750000000&sr=27&ref=shared_link",
      },
      {
        likes: 145,
        liked: false,
        category: this.categories[2],
        image: "/assets/cap.jpg",
        name: 'Кепка MGstore01 размер универсальный, черный',
        rating: 4.7,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/kepka-mgstore01-razmer-universal-nyi-chernyi-108997198/?c=750000000&sr=40&ref=shared_link",
        more: "https://kaspi.kz/shop/p/kepka-mgstore01-razmer-universal-nyi-chernyi-108997198/?c=750000000&sr=40&ref=shared_link",
      },

      {
        likes: 576,
        liked: false,
        category: this.categories[3],
        image: "/assets/bothdie.jpg",
        name: 'Книга Сильвера А.: В конце они оба умрут',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000&sr=7&ref=shared_link",
        more: "https://kaspi.kz/shop/p/sil-vera-a-v-kontse-oni-oba-umrut-101280241/?c=750000000&sr=7&ref=shared_link",
      },
      {
        likes: 239,
        liked: false,
        category: this.categories[3],
        image: "/assets/tennegr.jpg",
        name: 'Книга Кристи Агата: Десять негритят',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000&sr=6&ref=shared_link",
        more: "https://kaspi.kz/shop/p/kristi-a-desjat-negritjat-100329448/?c=750000000&sr=6&ref=shared_link",
      },
      {
        likes: 790,
        liked: false,
        category: this.categories[3],
        image: "/assets/remark.jpg",
        name: 'Книга Ремарк Э. М.: Триумфальная арка',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000&sr=18&ref=shared_link",
        more: "https://kaspi.kz/shop/p/remark-e-m-triumfal-naja-arka-26025852/?c=750000000&sr=18&ref=shared_link",
      },
      {
        likes: 134,
        liked: false,
        category: this.categories[3],
        image: "/assets/olkot.jpg",
        name: 'Книга Олкотт Л. М.: Маленькие женщины',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/olkott-l-m-malen-kie-zhenschiny-110124812/?c=750000000&sr=29&ref=shared_link",
        more: "https://kaspi.kz/shop/p/olkott-l-m-malen-kie-zhenschiny-110124812/?c=750000000&sr=29&ref=shared_link",
      },
      {
        likes: 49,
        liked: false,
        category: this.categories[3],
        image: "/assets/451.jpg",
        name: 'Книга Брэдбери Р.: 451 по Фаренгейту',
        rating: 5,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/bredberi-r-451-po-farengeitu-100930541/?c=750000000&sr=8&qid=093cb58d00e3ce1a43c40bd5e643c986&ref=shared_link",
        more: "https://kaspi.kz/shop/p/bredberi-r-451-po-farengeitu-100930541/?c=750000000&sr=8&qid=093cb58d00e3ce1a43c40bd5e643c986&ref=shared_link",
      },
    ]
  }

  protected readonly AppComponent = AppComponent;
}
