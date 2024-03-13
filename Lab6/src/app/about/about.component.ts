import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {AlbumDetailComponent} from "../album-detail/album-detail.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
