import { Directive, ElementRef, HostListener } from "@angular/core";
import { NgControl } from "@angular/forms";

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  private emailRegex: RegExp = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  constructor(private elementRef: ElementRef<HTMLInputElement>, private ngControl: NgControl) {}

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    if (!this.emailRegex.test(value)) {
      this.ngControl.control.setErrors({ 'invalidEmail': true });
    } else {
      this.ngControl.control.setErrors(null);
    }
  }
}
