import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-esgbooklibrary',
  templateUrl: './esgbooklibrary.component.html',
  styleUrls: ['./esgbooklibrary.component.scss']
})
export class EsgbooklibraryComponent implements OnInit {
  panelOpenState = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate([`/dashboard`]);
  }

}
