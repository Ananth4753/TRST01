import { Directive, ElementRef, HostListener } from "@angular/core";
@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  constructor(private _inputEl: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    if (this._inputEl.nativeElement.value === '-') return;
    
    let inputVal = this._inputEl.nativeElement.value;
    
    // Allow only uppercase alphanumeric characters
    let regex = /^[A-Z\d]*$/;
    if (!regex.test(inputVal)) {
      // If input is invalid, remove non-alphanumeric characters and convert to uppercase
      inputVal = inputVal.replace(/[^A-Z\d]/g, '').toUpperCase();
      this._inputEl.nativeElement.value = inputVal;
      return;
    }
  }
}