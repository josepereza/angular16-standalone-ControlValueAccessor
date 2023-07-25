import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../email/email.component';
import { ReactiveFormsModule, FormBuilder, FormsModule, Validators } from '@angular/forms';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule, EmailComponent,ReactiveFormsModule,FormsModule, StarRatingComponent],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  constructor(private fb:FormBuilder){

  }
  clienteForm = this.fb.nonNullable.group({
    firstName: [''],
    email: ['']  ,
    rating: [4 , Validators.min(3)]
  });
  
  enviar(){
    console.log('enviar')
    console.log(this.clienteForm.value)
    console.log('valid--> ', this.clienteForm.valid);
  }

  
}
