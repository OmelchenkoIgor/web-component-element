import {WelcomeComponent} from '@widgets/welcome';
import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [WelcomeComponent]
})
export class HomeComponent {

}
