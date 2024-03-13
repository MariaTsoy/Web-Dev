import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router, RouterModule} from "@angular/router";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";
import {AlbumPhotosComponent} from "../album-photos/album-photos.component";
import {NgForOf} from "@angular/common";
import {albumsList, deleteAlbumById} from "../albumsList";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterModule, AlbumDetailComponent, NgForOf],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})

@Injectable()
export class AlbumsComponent implements OnInit {
  albums = albumsList;

  //problem with http
  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  deleteAlbum(albumId: number) {
    this.albums = this.albums.filter(item => item.id != albumId);
    deleteAlbumById(albumId);
  }

  AlbumDetail(albumId: number) {
    void this.router.navigate(['/albums', albumId]);
  }


}
