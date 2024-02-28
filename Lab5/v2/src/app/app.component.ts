import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from "@angular/common";
import {ProductListComponent} from "./product-list/product-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  @ViewChild(ProductListComponent)
  productListComponent: ProductListComponent | undefined;
  title: string;
  choseCategory: boolean;
  category: any;
  categories: string[];

  constructor() {
    this.title = 'Our shop';
    this.choseCategory = false;
    this.category = "";
    this.categories = ["Tech", "Phones", "Accessories", "Books"];

  }

  setCategory(ind: number) {
    this.category = this.categories[ind];
  }

  getCategory(ind: number) {
    if (this.productListComponent) {
      return this.productListComponent.getCategory(ind);
    }
    else {
      return;
    }
  }

  changeCategory(ind: number) {
    if (this.category == this.categories[ind] || this.category != this.categories[ind] && !this.choseCategory) {
      this.choseCategory = !this.choseCategory;
    }
  }

}
