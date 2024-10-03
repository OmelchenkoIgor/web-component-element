import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
  imports: []
})
export class WelcomeComponent {
  public readonly title: string = 'User';
}
