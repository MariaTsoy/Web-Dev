import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule} from "./app-routing.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.navigate(['/home']);
  }
}
