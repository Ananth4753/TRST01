import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { StationaryService } from '../../stationary.service';

@Component({
  selector: 'app-carbonscope1elecdetails',
  templateUrl: './carbonscope1elecdetails.component.html',
  styleUrls: ['./carbonscope1elecdetails.component.scss']
})
export class Carbonscope1elecdetailsComponent implements OnInit {
  stationarycomb: FormGroup;
  fugiwara: any;
  arlist: any;
  fueltype: any;
  unitselectedvalue: any;
  unit: any;
  
  isInputDisabled: boolean = false;
  constructor(
     private _formBuilder: FormBuilder,
    private authService: AuthService,
    private is: ImportdisService,
    private stserve: StationaryService,
    public matDialogRef: MatDialogRef<Carbonscope1elecdetailsComponent>
    ) { }

  ngOnInit() {
  }

}
