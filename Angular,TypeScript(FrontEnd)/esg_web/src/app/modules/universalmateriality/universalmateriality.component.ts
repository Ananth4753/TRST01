import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-universalmateriality',
  templateUrl: './universalmateriality.component.html',
  styleUrls: ['./universalmateriality.component.scss']
})
export class UniversalmaterialityComponent implements OnInit {
  panelOpenState = false;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate([`/dashboard`]);
  }

}

