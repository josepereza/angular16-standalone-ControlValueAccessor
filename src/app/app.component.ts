import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomComponent } from './components/custom/custom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CustomComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'valueacceossor';
}
