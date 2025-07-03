import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-brsr',
  templateUrl: './brsr.component.html',
  styleUrls: ['./brsr.component.scss']
})
export class BrsrComponent implements OnInit {

  constructor(private router:Router){ }

  ngOnInit() {
  }
  next(){
    this.router.navigate([`/createreportforbrsr`]);
  }
  back(){
    this.router.navigate([`/framework`]);
  }
}
