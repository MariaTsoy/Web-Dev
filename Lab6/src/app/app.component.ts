import { Component, OnInit } from '@angular/core';
import {RouterOutlet, Router, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from "./app-routing.module";

@Component({
  standalone: true,
  imports: [RouterModule, HomeComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    void this.router.navigate(['/home']);
  }
}
