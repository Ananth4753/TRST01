import { Component, Input, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { CreatereportforbrsrService } from '../BRSRfiles/createreportforbrsr/createreportforbrsr.service';

@Component({
  selector: 'app-ribbon',
  templateUrl: './ribbon.component.html',
  styleUrls: ['./ribbon.component.scss']
})
export class RibbonComponent implements OnInit {
  @Input() reportid:any;
  @Input() reportname:any;
  @Input() reportstartdate:any;
  @Input() reportenddate:any;
  constructor() { }

  ngOnInit() {

  }

}
