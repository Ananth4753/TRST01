import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ribboncomponentforsgx',
  templateUrl: './ribboncomponentforsgx.component.html',
  styleUrls: ['./ribboncomponentforsgx.component.scss']
})
export class RibboncomponentforsgxComponent implements OnInit {
  @Input() reportid:any;
  @Input() reportname:any;
  @Input() reportstartdate:any;
  @Input() reportenddate:any;
  constructor() { }

  ngOnInit() {

  }

}
