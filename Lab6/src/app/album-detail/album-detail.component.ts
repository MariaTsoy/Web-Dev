import {Component, OnInit} from '@angular/core';
import {formatNumber, Location} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {albumsList, updateAlbumNameById} from "../albumsList";
import { deleteAlbumById } from "../albumsList";
import { ActivatedRoute } from "@angular/router";
import {Router} from "@angular/router";
import { getAlbumById } from "../albumsList";


@Component({
  standalone: true,
  imports: [
    FormsModule
  ],
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})

export class AlbumDetailComponent {
  name = "";
  album: any;


  constructor(private location: Location, private route: ActivatedRoute,
              private router: Router) {
    this.route.paramMap.subscribe(params => {
      const albumId = +params.get('id')!;
      this.album = getAlbumById(albumId);
    });
  }


  goBack() {
    this.location.back();
  }

  updateAlbumName(albumId: number, newName: string): void {
    const album = albumsList.find(album => album.id === albumId);
    if (album) {
      album.title = newName;
    }
    updateAlbumNameById(albumId, newName);
  }

  redirectToPhotos() {
    void this.router.navigate(['/photos']);
  }

}


