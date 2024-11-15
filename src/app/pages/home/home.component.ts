import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'pg-home',
  templateUrl: './home.component.html',
  imports: [ReactiveFormsModule],
  standalone: true,
  styles: [],
})
export class HomeComponent {
  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
  });
}
