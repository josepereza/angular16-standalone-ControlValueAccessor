import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmailComponent } from '../email/email.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom',
  standalone: true,
  imports: [CommonModule, EmailComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent {
  constructor(private fb:FormBuilder){

  }
  clienteForm = this.fb.nonNullable.group({
    firstName: [''],
    email: ['']  
  });

  enviar(){
    console.log('enviar')
    console.log(this.clienteForm.value)
  }

  
}
