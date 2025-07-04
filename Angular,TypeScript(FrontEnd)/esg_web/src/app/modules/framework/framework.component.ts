import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FrameworkService } from './framework.service';
export interface Food {
  value: string;
  viewValue: string;
  img: string;
}
@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.scss']
})
export class FrameworkComponent implements OnInit {
  frameworkForm:FormGroup
  drofvalue:any;
  foods: Food[] = [
    { value: 'framework', viewValue: 'GRI Standards 2021', img: './assets/img/gri.png' },
    { value: 'framework', viewValue: 'BRSR Standards 2021', img: './assets/img/gri.png' },
  ];
  foods1:any;
  constructor(private router:Router,private fb:FormBuilder,private fs:FrameworkService) { }

  ngOnInit() {
    this.frameworkForm = this.fb.group({
      select:['',Validators.required],
  });
  this.fs.getFrameworkDetails().subscribe((data)=>{
console.log(data);
this.foods1=data;
  })
  }
  drof(event){
    console.log(event);
    
      if(event == "GRI Standards 2021"){
        this.drofvalue=event;
      }
      else if(event == 'BRSR'){
        this.drofvalue=event;
      }
  }
  next(){
    if(this.drofvalue=="GRI Standards 2021"){
      this.router.navigate([`/gri`]);
    }
      else if(this.drofvalue=="BRSR"){
        this.router.navigate([`/brsr`]);
      }
      else{
        this.router.navigate([`/sgx`]);
      }
  }
  displayFn(fruit: any): string {
    return fruit ? `${fruit.name} - ${fruit.color}` : '';
  }
  back(){
    this.router.navigate([`/dashboard`]);
  }
}
