import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: '[inputWithComma]',
})

export class NumcomDirective {
 
  constructor(private _inputEl: ElementRef) {}

  @HostListener('input', ['$event'])
  onInput(event: any) {
    if (this._inputEl.nativeElement.value === '-') return;
    
    let inputVal = this._inputEl.nativeElement.value;
    
    // Allow only digits, dots, and commas before the decimal point
    let regex = /^[\d,.]{0,20}(\.[\d]*)?$/;

    if (!regex.test(inputVal)) {
      // If input is invalid, remove non-numeric characters and return
      inputVal = inputVal.replace(/[^\d.,]/g, '');
      this._inputEl.nativeElement.value = inputVal;
      return;
    }
    
    let commasRemoved = inputVal.replace(/,/g, '');
    
    let decimalIndex = commasRemoved.indexOf('.');
    let decimalPlaces = decimalIndex === -1 ? 0 : commasRemoved.length - decimalIndex - 1;
    
    let toInt = parseInt(commasRemoved);
    let toLocale = toInt.toLocaleString('en-US');
    
    if (decimalIndex !== -1) {
      let decimalPart = inputVal.substring(decimalIndex + 1);
      // Remove non-numeric characters after decimal point
      decimalPart = decimalPart.replace(/[^\d]/g, '');
      toLocale += '.' + decimalPart;
    }
    
    if (toLocale === 'NaN') {
      this._inputEl.nativeElement.value = '';
    } else {
      this._inputEl.nativeElement.value = toLocale;
    }
    this._inputEl.nativeElement.style.textAlign = 'right';
  }
  
  
}