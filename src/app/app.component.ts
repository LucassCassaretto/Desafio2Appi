import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MealDetailsComponent } from "./components/meal-details/meal-details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MealDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DesafioAppi2';
}
