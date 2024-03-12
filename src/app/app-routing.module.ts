import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { HomeComponent} from "./home/home.component";
import { RouterModule, Routes } from "@angular/router";
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    AlbumDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
