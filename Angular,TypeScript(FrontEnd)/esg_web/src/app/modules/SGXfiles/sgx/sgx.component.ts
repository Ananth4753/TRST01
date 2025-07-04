import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sgx',
  templateUrl: './sgx.component.html',
  styleUrls: ['./sgx.component.scss']
})
export class SgxComponent implements OnInit {

  constructor(private router:Router){ }

  ngOnInit() {
  }
  next(){
    this.router.navigate([`/createreportforsgx`]);
  }
  back(){
    this.router.navigate([`/framework`]);
  }
}
