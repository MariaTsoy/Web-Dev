import {NgModule, OnInit} from "@angular/core";
import { Component } from '@angular/core';
import {Router, RouterModule} from "@angular/router";
import {AlbumsComponent} from "../albums/albums.component";
import {AboutComponent} from "../about/about.component";
import {AppRoutingModule} from "../app-routing.module";


@Component({
  standalone: true,
  imports: [RouterModule, AlbumsComponent,
  AboutComponent,],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  constructor(private router: Router) {}

  Albums() {
    void this.router.navigate(['/albums']);
  }

  About() {
    void this.router.navigate(['/about']);
  }

}

