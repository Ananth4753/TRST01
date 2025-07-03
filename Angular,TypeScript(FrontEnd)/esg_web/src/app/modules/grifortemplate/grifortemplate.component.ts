import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grifortemplate',
  templateUrl: './grifortemplate.component.html',
  styleUrls: ['./grifortemplate.component.scss']
})
export class GrifortemplateComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate([`/createtemplate`]);
  }
  back(){
    this.router.navigate([`/frameworkfortemplate`]);
  }
}