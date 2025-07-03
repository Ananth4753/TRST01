import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-in-progress',
  templateUrl: './in-progress.component.html',
  styleUrls: ['./in-progress.component.css']
})
export class InProgressComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  backtologinhome(){
    this.router.navigate([`/dashboard`]);
  }
}
