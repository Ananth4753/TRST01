import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface Food {
  value: string;
  viewValue: string;
  img: string;
}

@Component({
  selector: 'app-frameworkfortemplate',
  templateUrl: './frameworkfortemplate.component.html',
  styleUrls: ['./frameworkfortemplate.component.scss']
})
export class FrameworkfortemplateComponent implements OnInit {
  frameworkForm:FormGroup
  foods: Food[] = [
    { value: 'framework', viewValue: 'GRI Standards 2021', img: './assets/img/gri.png' },
  ];
  constructor(private router:Router,private fb:FormBuilder) { }

  ngOnInit() {
    this.frameworkForm = this.fb.group({
      select:['',Validators.required],
  });
  }
  next(){
    this.router.navigate([`/grifortemplate`]);
  }
  back(){
    this.router.navigate([`/dashboard`]);
  }

}
