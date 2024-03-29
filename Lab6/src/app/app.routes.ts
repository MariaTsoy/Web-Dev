import { Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AboutComponent} from "./about/about.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";

export const routes: Routes = [{path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title: 'Home'},
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'about', component: AboutComponent},
  { path: 'photos', component: AlbumPhotosComponent}];

