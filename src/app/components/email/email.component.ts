import { Component, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-email',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css'],
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailComponent),
      multi:true
    }
  ]
})
export class EmailComponent implements ControlValueAccessor{
  email:string='';
  private onChangefn:Function= (value: string) => {};
 
  changeText(event:any):void{
    console.log(event.target.value)
    this.onChangefn(event.target.value);
  }
 

  writeValue(value: any): void {
    this.email=value;
  }
  registerOnChange(fn: any): void {
    this.onChangefn=fn
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean){}
  

}
