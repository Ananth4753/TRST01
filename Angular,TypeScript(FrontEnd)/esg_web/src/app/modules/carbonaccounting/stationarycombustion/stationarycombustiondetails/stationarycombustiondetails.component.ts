import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { Stationarycombustiondetail } from './combustion.type';
import { StationaryService } from '../../stationary.service';

@Component({
    selector: 'app-stationarycombustiondetails',
    templateUrl: './stationarycombustiondetails.component.html',
    styleUrls: ['./stationarycombustiondetails.component.scss'],
})
export class StationarycombustiondetailsComponent implements OnInit {
    stationarycomb: FormGroup;
    fugiwara: any;
    arlist: any;
    fueltype: any;
    unitselectedvalue: any;
    unit: any;
    
    isInputDisabled: boolean = false;
    //isdisabled:boolean=false;
    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        private is: ImportdisService,
        private stserve: StationaryService,
        public matDialogRef: MatDialogRef<StationarycombustiondetailsComponent>
    ) {}

    ngOnInit() {
        console.log(this.authService.user.id);

        this.is.GetScope1Fugutives().subscribe((data) => {
            console.log(data);
            this.fugiwara = data;
        });
        this.is.getARListDetails().subscribe((data) => {
            this.arlist = data;
            console.log(this.arlist);
            
        });
        this.is.getFuelTypeBaseDetails().subscribe((data) => {
            this.fueltype = data;
            console.log(this.fueltype);
        });

        this.stationarycomb = this._formBuilder.group({
            Id: [],
            FuelType: [],
            Noofunits: [],
            Units: [],
            GWPFactor: [],
            MetricCO2e: [],
            IsActive: [],
            CreatedDate: [new Date()],
            CreatedByUserId: [],
            UpdatedDate: [new Date()],
            UpdatedByUserId: [],
            OrgId: [],
        });
    }

    fueltypeId: any;
    ProductChange(value) {
        this.unitselectedvalue = value;
        this.fueltypeId = value;
        this.is
            .GetFuelConvertionTypeById(this.unitselectedvalue)
            .subscribe((data) => {
                this.unit = data;
                console.log(this.unit);
            });
    }

    globalunitValue = 0;
    unitchange(value) {
        this.isInputDisabled = false;
        console.log(value);
        var result = this.unit.filter((u) => u.ConvertFrom == value);
        console.log(result);
        var noofunits = this.stationarycomb.get('Noofunits').value.toString();
        console.log(noofunits);

        var noofunits1 = noofunits.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        noofunits1 = parseFloat(noofunits1);
        console.log(noofunits1);

        console.log(noofunits1);
        console.log(result[0].MultiplyBy);
        this.globalunitValue = result[0].MultiplyBy * noofunits1;
        console.log(this.globalunitValue);
        if (this.stationarycomb.get('GWPFactor').value != '') {
            console.log(this.fueltypeId);
            console.log(this.arfinalvalue);
            this.is
                .GetCalculateARValues(
                    this.fueltypeId,
                    this.stationarycomb.get('GWPFactor').value
                )
                .subscribe((data) => {
                    console.log(data);
                    console.log(data[0]['TotalValue']);
                    // this.arfinalvalue=data[0]['MultiplyBy'];
                });
        }
        this.addFieldValue();
    }
    arfinalvalue: any;
    gwpchange(value) {
        var gwpval = value;
        console.log(gwpval);

        this.is
            .GetCalculateARValues(this.fueltypeId, gwpval)
            .subscribe((data) => {
                console.log(data);
                console.log(data[0]['TotalValue']);
                this.arfinalvalue = data[0]['TotalValue'];
            });
    }

    addFieldValue() {
        let dataArr = this.fueltype.filter(
            (x) => x.Id == this.stationarycomb.get('FuelType').value
        );
        let dataArr2 = this.arlist.filter(
            (f) => f.Id == this.stationarycomb.get('GWPFactor').value
        );
        console.log(dataArr2);

        var finalvalue = Math.round(this.globalunitValue * this.arfinalvalue);
        console.log(finalvalue);
        //var finalvalue=(this.globalunitValue*this.arfinalvalue)
        console.log(
            (document.getElementById('fullesc') as HTMLInputElement).value
        );
        //var sumtotal = sumtotal + finalvalue;
        this.stationarycomb.get('MetricCO2e').setValue(finalvalue);
        console.log(finalvalue);

        // this.stationarycomb.get('FuelType').reset();
        // this.stationarycomb.get('Noofunits').reset();
        // this.stationarycomb.get('Units').reset();
        //this.isdisabled=true;
    }

    onClose(): void {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    /**
     * Save the message as a draft
     */
    onCancel(): void {
        // Close the dialog
        this.matDialogRef.close(false);
    }

    // onSave(): void {
    //     // this.addFieldValue();
    //     const Combustion: any = this.stationarycomb.value;
    //     if (this.stationarycomb.get('Id').value === null) {
    //         // this.stationarycomb.get('CreatedDate').setValue(new Date());
    //         // this.stationarycomb.get('CreatedByUserId').setValue(this.authService.user.id);
    //         //
    //         const selectedboxes: any = {
    //             Id: null,
    //             FuelType: this.stationarycomb.get('FuelType').value,
    //             Noofunits: this.stationarycomb.get('Noofunits').value,
    //             Units: this.stationarycomb.get('Units').value,
    //             GWPFactor: this.stationarycomb.get('GWPFactor').value,
    //             MetricCO2e: this.stationarycomb.get('MetricCO2e').value,
    //             IsActive: true,
    //             CreatedDate: new Date(),
    //             CreatedByUserId: this.authService.user.id,
    //             UpdatedDate: new Date(),
    //             UpdatedByUserId: this.authService.user.id,
    //             OrgId: this.authService.user.orgId,
    //         };
    //         this.stserve
    //             .createstationarycombustiondetails(selectedboxes)
    //             .subscribe((result) => {
    //                 this.matDialogRef.close(true);
    //             });
    //     }
    // }

    onSave(): void {
     // const Combustion: any = this.stationarycomb.value;
      if (this.stationarycomb.get('Id').value === null) {
          const fueltypeId = this.stationarycomb.get('FuelType').value;
          const GWPFactorId = this.stationarycomb.get('GWPFactor').value;
          const selectedFuelType = this.fueltype.find(p => p.Id === fueltypeId);
          const selectedGWPFactor = this.arlist.find(p => p.Id === GWPFactorId);
  console.log(selectedGWPFactor);
  console.log(selectedGWPFactor.TypeName);

          if (selectedFuelType && selectedGWPFactor) {
              const selectedboxes: any = {
                  Id: null,
                  FuelType: selectedFuelType.Name, // Use the Name property
                  Noofunits: this.stationarycomb.get('Noofunits').value,
                  Units: this.stationarycomb.get('Units').value,
                  GWPFactor: selectedGWPFactor.TypeName,
                  MetricCO2e: this.stationarycomb.get('MetricCO2e').value,
                  IsActive: true,
                  CreatedDate: new Date(),
                  CreatedByUserId: this.authService.user.id,
                  UpdatedDate: new Date(),
                  UpdatedByUserId: this.authService.user.id,
                  OrgId: this.authService.user.orgId,
              };
  
              this.stserve
                  .createstationarycombustiondetails(selectedboxes)
                  .subscribe((result) => {
                      this.matDialogRef.close(true);
                  });
          }
      }
  }
  
}
