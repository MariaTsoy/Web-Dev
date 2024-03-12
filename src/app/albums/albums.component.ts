import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums: any[] = [];

  constructor(private http: HttpClient, private router: Router) {

  }

  ngOnInit() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums').subscribe(
      albums => { this.albums = albums; })
  }

  deleteAlbum(albumId: number) {
    this.http.delete(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
      .subscribe(() => {
        this.albums = this.albums.filter(album => album.id !== albumId);
      });
  }

  AlbumDetail(albumId: number) {
    this.router.navigate(['/albums', albumId]);
  }

}
