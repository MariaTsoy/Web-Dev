import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";

interface Products {
  image: any;
  name: string;
  description: string;
  rating: number;
  share: string;
  more: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string;
  products: Products[];

  constructor() {
    this.title = 'Our shop';
    this.products = [
      {
        image: "/assets/Mouse mat.jpg",
        name: 'Коврик для мыши Red Square Mouse Mat XXL Azure',
        description: '',
        rating: 5,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/red-square-mouse-mat-xxl-azure-rsq-40018--110340101/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/red-square-mouse-mat-xxl-azure-rsq-40018--110340101/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/meta quest.jpg",
        name: 'Очки виртуальной реальности Meta Quest 2 128 Gb',
        description: 'По сравнению с исходной моделью количество пикселей увеличилось примерно на 50% Oculus Quest 2 будет оснащена однокристальной системой Qualcomm Snapdragon XR-2.',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/meta-quest-2-128-gb-102138237/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/meta-quest-2-128-gb-102138237/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/gamepad.jpg",
        name: 'Игровой контроллер Sony PS5 DualSense белый',
        description: 'Геймпад PlayStation DualSense 5 обеспечивает полный контроль над игровым процессом и погружение в мир виртуальной реальности.',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/sony-ps5-dualsense-belyi-100752003/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/sony-ps5-dualsense-belyi-100752003/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/keyboard.jpg",
        name: 'Клавиатура HyperX Alloy Origins 60 HKBO1S-RB-RU/G черный',
        description: 'Клавиатура проводная HyperX Alloy Origins 60 может похвастаться значительно уменьшенными размерами, что освобождает дополнительное пространство на рабочем столе для комфортного передвижения мыши.',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/hyperx-alloy-origins-60-hkbo1s-rb-ru-g-chernyi-103904519/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/hyperx-alloy-origins-60-hkbo1s-rb-ru-g-chernyi-103904519/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/mouse.jpg",
        name: 'Мышь для компьютера Logitech G304 черный',
        description: 'Беспроводная игровая мышь Logitech G304 LIGHTSPEED, разработанная для обеспечения высокой производительности с использованием новейших технологических инноваций.',
        rating: 4.4,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/logitech-g304-chernyi-100370923/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/logitech-g304-chernyi-100370923/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/podstav.jpg",
        name: 'Подставка для ноутбука Unique Grey stand серый',
        description: '',
        rating: 4.7,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/unique-grey-stand-seryi-104635852/?c=750000000&ref=shared_link",
        more: "https://kaspi.kz/shop/p/unique-grey-stand-seryi-104635852/?c=750000000&ref=shared_link",
      },
      {
        image: "/assets/monitor.jpg",
        name: 'Монитор игровой Sanc M2736PB черный',
        description: '',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=750000000&sr=5&ref=shared_link",
        more: "https://kaspi.kz/shop/p/sanc-m2736pb-chernyi-101738150/?c=750000000&sr=5&ref=shared_link",
      },
      {
        image: "/assets/laptop.jpg",
        name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
        description: 'Маленький чип. Грандиозный прорыв. Первый чип, разработанный специально для Mac.',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&sr=4&ref=shared_link",
        more: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000&sr=4&ref=shared_link",
      },
      {
        image: "/assets/micro.jpg",
        name: 'Микрофон для записи HyperX Quadcast',
        description: 'МHyperX QuadCast — полнофункциональный автономный микрофон, который идеально подходит для начинающих стримеров или подкастеров, которым необходим конденсаторный микрофон с высоким качеством звука.',
        rating: 4.9,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/hyperx-quadcast-22400163/?c=750000000&sr=12&ref=shared_link",
        more: "https://kaspi.kz/shop/p/hyperx-quadcast-22400163/?c=750000000&sr=12&ref=shared_link",
      },
      {
        image: "/assets/headphones.jpg",
        name: 'Наушники Razer Blackshark V2 X белый',
        description: 'Представляем Razer BlackShark V2 X - тройная угроза за счет восхитительного звучания, превосходной чистоты микрофона и звукоизоляции высокого качества, подтвержденными про-игроками.',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/razer-blackshark-v2-x-belyi-104669405/?c=750000000&sr=7&qid=0aa3a449ccbc700f4039d9665d6347ac&ref=shared_link",
        more: "https://kaspi.kz/shop/p/razer-blackshark-v2-x-belyi-104669405/?c=750000000&sr=7&qid=0aa3a449ccbc700f4039d9665d6347ac&ref=shared_link",
      },
      {
        image: "/assets/playstation.jpg",
        name: 'Игровая приставка Sony PlayStation 5 белый',
        description: 'С Sony PlayStation 5 вы ощутите истинную силу игры.',
        rating: 4.8,
        share: "https://telegram.me/share/url?url=https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000&sr=2&ref=shared_link",
        more: "https://kaspi.kz/shop/p/sony-playstation-5-belyi-100746577/?c=750000000&sr=2&ref=shared_link",
      },
    ]
}
}
