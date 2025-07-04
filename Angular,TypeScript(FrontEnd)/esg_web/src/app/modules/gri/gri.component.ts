import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-gri',
  templateUrl: './gri.component.html',
  styleUrls: ['./gri.component.scss']
})
export class GriComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  next(){
    this.router.navigate([`/createreport`]);
  }
  back(){
    this.router.navigate([`/framework`]);
  }
}
