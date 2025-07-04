import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { ImportdisService } from '../importdis.service';

@Component({
    selector: 'app-scope2renew',
    templateUrl: './scope2renew.component.html',
    styleUrls: ['./scope2renew.component.scss'],
})
export class Scope2renewComponent implements OnInit {
    lookupdtl: any;
    country: any;
    newAttribute: any;
    sumtotal: any;
    filteredList: any;
    finalesum: any;
    categ4: boolean = false;
    categ9: boolean = false;
    selectedName: any;
    userentered: any;
    yesorno: any;
    isInputDisabled: boolean = true;
    filteredList5: any;
    findoutyesorno: any;
    constructor(
        public dialog: MatDialog,
        private fb: FormBuilder,
        private is: ImportdisService,
        private cdRef: ChangeDetectorRef,
        @Inject(MAT_DIALOG_DATA) private _data: { data },
        private router: Router,
        public matDialogRef: MatDialogRef<Scope2renewComponent>
    ) {
        this.lookupdtl = [];
    }
    ngOnInit() {
        this.is.getScope2Marketbased().subscribe((Data) => {
            this.country = Data;
            this.filteredList5 = this.country.slice();
        });
        this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
            this.yesorno = Data;
        });
        this.addFieldValue();
        if (this.lookupdtl.length > 1) {
            this.deleteQ102a1(this.lookupdtl.length - 1);
        }
    }
    userinput(i: number, event){
      console.log(event.target.value);
      const kamp = this.lookupdtl[i].first;
        const quant = this.lookupdtl[i].second;
        var saver;
        saver = quant.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        saver = parseFloat(saver);
        var saver2;
        saver2 = kamp.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        saver2 = parseFloat(saver2);
      this.lookupdtl[i].sixth =
      ((saver + saver2) * event.target.value) / 1000;
      console.log(this.lookupdtl[i].sixth);
      this.calculateTotalEmission();
          }
    countryselection(index: number, value) {
        console.log(value.value);
        if (value.value === 33) {
            this.isInputDisabled = false;
            this.lookupdtl[index].fifth=null
            this.lookupdtl[index].sixth=null
            this.calculateTotalEmission();
        } else {
            this.isInputDisabled = true;
                  const selectedGood = this.country.find((g) => g.Id === value.value);
        if (selectedGood != undefined) {
            this.lookupdtl[index].fifth = selectedGood.Emissionfactor;
        }
        const kamp = this.lookupdtl[index].first;
        const quant = this.lookupdtl[index].second;
        var saver;
        saver = quant.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        saver = parseFloat(saver);
        var saver2;
        saver2 = kamp.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        saver2 = parseFloat(saver2);
        this.lookupdtl[index].sixth =
           ( ((saver + saver2) * this.lookupdtl[index].fifth) / 1000).toFixed(2);
            console.log(this.lookupdtl[index].sixth);
        this.calculateTotalEmission();
        }
  
    }
    onInputChange(value: string) {
        this.filteredList5 = this.country.filter(
            (item) =>
                item.Country.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
    }
    onOptionSelectedType2x() {}
    calculateTotalEmission() {
        let totalEmission = 0;
        for (let i = 0; i < this.lookupdtl.length; i++) {
            totalEmission += parseFloat(this.lookupdtl[i].sixth);
        }
        this.sumtotal = totalEmission.toFixed(2);
        this.finalesum = this.sumtotal;
    }
    quantity(index: number, event: any) {
        const quant = event.target.value;
        var saver;
        saver = quant.replace(/\,/g, ''); // 1125, but a string, so convert it to number
        saver = parseFloat(saver);
        this.lookupdtl[index].emissions =
            (saver * this.lookupdtl[index].standardef) / 1000;
        this.calculateTotalEmission();
    }

    addFieldValue() {
        this.newAttribute = {
            first: '',
            second: '',
            fourth: '',
            fifth: '',
            sixth: '',
            Total: this.lookupdtl.reduce((acc, val) => acc + val.Emi, 0),
        };
        this.lookupdtl.push(this.newAttribute);
    }
    deleteQ102a1(i) {
        this.lookupdtl.splice(i, 1);
    }
    onSave() {
        this.is.scope2marketbased = Math.round(this.finalesum);
        this.matDialogRef.close(false);
    }
    onClose(): void {
        this.matDialogRef.close(false);
    }
    onCancel(): void {
        this.matDialogRef.close(false);
    }
}
