import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Inject,
} from '@angular/core';
import { ImportdisService } from './importdis.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { CreatereportService } from '../createreport/createreport.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppService } from 'app/app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {
    TreeviewItem,
    TreeviewConfig,
    TreeviewComponent,
} from '../../../../projects/ngx-treeview/src/public-api';
import { MatOptionSelectionChange } from '@angular/material/core';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
    Form,
} from '@angular/forms';
import { Observable } from 'rxjs';
export const MY_FORMATS = {
    parse: {
        dateInput: 'DD/MMM/yyyy, HH:mm:ss.SSS',
    },
    display: {
        dateInput: 'DD/MMM/yyyy, HH:mm:ss.SSS',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};
import { map, startWith } from 'rxjs/operators';
import * as Grammarly from "@grammarly/editor-sdk";
import Swal from 'sweetalert2';
import { result } from 'lodash';
import { PopupComponent } from './popup/popup.component';
import { GlobalvariableService } from '../services/globalvariable.service';
import Questions from '../../../assets/questions.json';
import { CalcComponent } from './calc/calc.component';
import { UploadimgComponent } from './uploadimg/uploadimg.component';
import { MatSelect } from '@angular/material/select';
import { ReportgenerationService } from 'app/services/reportgeneration.service';
import { GhemissionsComponent } from './ghemissions/ghemissions.component';
import { ElectriccalcComponent } from './electriccalc/electriccalc.component';
import { Scope3calculatorsComponent } from './scope3calculators/scope3calculators.component';
import { Scope3avgComponent } from './scope3avg/scope3avg.component';
import { Scope3hotelComponent } from './scope3hotel/scope3hotel.component';
import { Scope3category4Component } from './scope3category4/scope3category4.component';
import { Scope3category5Component } from './scope3category5/scope3category5.component';
import { Scope3category3Component } from './scope3category3/scope3category3.component';
import { Scope3category7Component } from './scope3category7/scope3category7.component';
import { Scope3category813Component } from './scope3category813/scope3category813.component';
import { Scope3category10Component } from './scope3category10/scope3category10.component';
import { Scope3category11Component } from './scope3category11/scope3category11.component';
import { Scope3category14Component } from './scope3category14/scope3category14.component';
import { Scope3category15Component } from './scope3category15/scope3category15.component';
import { Scope2renewComponent } from './scope2renew/scope2renew.component';

declare let swal: any;
declare let $: any;
@Component({
    selector: 'app-importdis',
    templateUrl: './importdis.component.html',
    styleUrls: ['./importdis.component.scss'],
})
export class ImportdisComponent implements OnInit {
    @ViewChild('scroll') scroll: ElementRef;
    @ViewChild('element') element: ElementRef;
    @ViewChild('containerrow') containerrow: ElementRef;
    @ViewChild('search') searchTextBox: ElementRef;
    items: TreeviewItem[];
    values: number[];
    arrayofcounts: any;
    arrayofcounts1: any;
    arrayofcounts2: any;

    config = TreeviewConfig.create({
        hasAllCheckBox: false,
        hasFilter: false,
        hasCollapseExpand: false,
        decoupleChildFromParent: false,
        maxHeight: 400,
    });

    public minDate: Date;
    public currentValue: string;
    InputValue: any;
    InputValues: any;
    Stage: any;
    yesorno: any;
    keys: any;
    loading = true;
    templatedata: any;
    cassssh: any;
    newAttribute3043a: any = {};
    lookupdtleco: any;
    templateitemdata: any;
    codeval: any;
    isdisabled: boolean = false;
    isdisabledviewii: boolean = false;
    isdisabledView1: boolean = false;
    isdisabledView2: boolean = false;
    isdisabledView3: boolean = false;
    isdisabledView4: boolean = false;
    isdisabledview45: boolean = false;
    explainyesclicked1: any;
    popvar: any;
    Tallu: any;
    first: number;
    second: number;
    third: number;
    rogue: any;
    filteredList5: any;
    filteredList6: any;
    filteredList7: any;
    filteredList7new: any;
    filteredList8: any;
    filteredList9: any;
    filteredList10: any;
    countrylist: any;
    plok: any;
    newAttributeeco: any;
    templatemenubyId: any;
    pagdri:any;
    selectedName: any;
    dropdownname: any;
    yesthen: boolean = false;
    duck: boolean = false;
    userenteredemissionfromdrop: boolean = false;
    userenteredemissionfromdrop1: boolean = false;
    userenteredemissionfromdrop2: boolean = false;
    userenteredemissionfromdrop3: boolean = false;
    userenteredemissionfromdrop4: boolean = false;
    userenteredemissionfromdrop5: boolean = false;
    userenteredemissionfromdrop6: boolean = false;
    userenteredemissionfromdropsoldshi:boolean=false;
    userenteredemissionfromdropsoldshi2:boolean=false;
    userenteredemissionfromdrop7: boolean = false;
    userenteredemissionfromdrop8: boolean = false;
    userenteredemissionfromdrop9: boolean = false;
    userenteredemissionfromdrop10: boolean = false;
    userenteredemissionfromdrop11: boolean = false;
    userenteredemissionfromdrop12: boolean = false;
    view2: any;
    mtptdmt: boolean = false;
    mtptdmtone: boolean = false;
    mtptdmttwo: boolean = false;
    org: boolean = false;
    entity: boolean = false;
    reportingperiod: boolean = false;
    external: boolean = false;
    activities: boolean = false;
    governance: boolean = false;
    employees: boolean = false;
    workers: boolean = false;
    nomination: boolean = false;
    chair: boolean = false;
    rolegovernance: boolean = false;
    delegation: boolean = false;
    conf: boolean = false;
    materialityindus: any;
    sust: boolean = false;
    lookupdtl304a: any;
    newAttribute27bi: any = {};
    newAttribute27bii: any = {};
    Communication: boolean = false;
    grig1: boolean = false;
    grig2: boolean = false;
    grig3: boolean = false;
    grig4: boolean = false;
    grig5: boolean = false;
    grig6: boolean = false;
    Collective: boolean = false;
    Evaluation: boolean = false;
    lookupdtl27bi: any;
    lookupdtl27bii: any;
    Remuneration: boolean = false;
    Proc12: boolean = false;
    Annual: boolean = false;
    Statement: boolean = false;
    Policy: boolean = false;
    Embedding: boolean = false;
    Process1: boolean = false;
    mech: boolean = false;
    moneyhiest: boolean = false;
    compir: boolean = false;
    mema: boolean = false;
    aseg: boolean = false;
    refexa: boolean = false;
    cba: boolean = false;
    ecotwo: boolean = false;
    ecothree: boolean = false;
    ecofour: boolean = false;
    markpref: boolean = false;
    markpreff: boolean = false;
    iei: boolean = false;
    ieii: boolean = false;
    pp: boolean = false;
    Ac: boolean = false;
    Acc: boolean = false;
    Accc: boolean = false;
    Acb: boolean = false;
    Att: boolean = false;
    Attt: boolean = false;
    Atttt: boolean = false;
    Attttt: boolean = false;
    Mtt16: boolean = false;
    Mttt16: boolean = false;
    Rppm: boolean = false;
    Ecwo: boolean = false;
    Ecoo: boolean = false;
    Eit: boolean = false;
    Rec: boolean = false;
    Rerp: boolean = false;
    Iwsr: boolean = false;
    www: boolean = false;
    wdd: boolean = false;
    wcc: boolean = false;
    osol: boolean = false;
    sia: boolean = false;
    hpr: boolean = false;
    Iucn: boolean = false;
    Mwdr: boolean = false;
    enviroform: FormGroup;
    gdform: FormGroup;
    economicform: FormGroup;
    dropdownboolean: boolean = false;
    templatemenu: any;
    templatesubmenuitemdata: any;
    checkboxes: any[];
    displaydata: boolean = false;
    name: string;
    SizeofSite: any;
    msg;
    explainyesclicked12: any;
    listofarrayvalues: any;
    reportid: any;
    reportname: any;
    numcon: any;
    reportstartdate: any;
    reportenddate: any;
    hovereach: any;
    hovereach1: any;
    showimg;
    imageUrl;
    imgSize;
    orgId:any
    screen;
    country: any;
    finalima: any;
    Yes: any;
    apple: boolean = false;
    //400
    Bpftetan: boolean = false;
    Parentalleave: boolean = false;
    mnproc: boolean = false;
    ohasms: boolean = false;
    hiraaii: boolean = false;
    ohs: boolean = false;
    wpcacoohas: boolean = false;
    wtoohas: boolean = false;
    powh: boolean = false;
    pamoohasid: boolean = false;
    wcbaohasms: boolean = false;
    wrinjuries: boolean = false;
    wrih: boolean = false;
    workhours: any;
    newAttribute102: any = {};
    newAttribute: any = {};
    newAttribute1: any = {};
    newAttribute2: any = {};
    newAttribute3: any = {};
    newAttribute4: any = {};
    newAttribute5: any = {};
    newAttribute6: any = {};
    newAttribute7: any = {};
    newAttribute8: any = {};
    newAttribute9: any = {};
    newAttribute10: any = {};
    newAttribute11: any = {};
    newAttribute12: any = {};
    newAttribute13: any = {};
    newAttribute14: any = {};
    newAttribute15: any = {};
    newAttribute16: any = {};
    newAttribute17: any = {};
    newAttribute18: any = {};
    newAttribute19: any = {};
    newAttribute20: any = {};
    newAttribute21: any = {};
    newAttribute22: any = {};
    newAttribute23: any = {};
    newAttribute24: any = {};
    newAttribute25: any = {};
    newAttribute26: any = {};
    newAttribute27: any = {};
    newAttribute28: any = {};
    newAttribute29: any = {};
    newAttribute30: any = {};
    newAttribute31: any = {};
    newAttribute32: any = {};
    newAttribute33: any = {};
    newAttribute34: any = {};
    newAttribute35: any = {};
    newAttribute36: any = {};
    newAttribute37: any = {};
    newAttribute38: any = {};
    newAttribute39: any = {};
    newAttribute40: any = {};
    newAttribute41: any = {};
    newAttribute42: any = {};
    newAttribute43: any = {};
    newAttribute44: any = {};
    newAttribute44a: any = {};
    newAttribute2in7: any = {};
    newAttribute2in7bi: any = {};
    newAttribute2in7bii: any = {};
    newAttribute2in7biii: any = {};
    newAttribute2in7biv: any = {};
    newAttribute2in7bv: any = {};
    lookup2in7bv: any;
    lookup2in7biv: any;
    lookup2in7biii: any;
    lookup2in7bii: any;
    lookup2in7bi: any;
    spdd: boolean = true;
    evidenceexist:boolean=false;
    newAttribute45: any = {};
    newAttribute46: any = {};
    newAttribute100: any = {};
    newAttribute101: any = {};
    newAttribute3034c2: any = {};
    newAttribute41ii: any;
    newAttribute3045: any = {};
    newAttribute306iii: any = {};
    newAttribute306ii: any = {};
    newAttribute3034b1: any = {};
    newAttribute3034b2: any = {};
    newAttribute2x: any = {};
    newAttribute3034c1: any = {};
    lookupdtl41: any;
    lookupdtl41ii: any;
    lookupdtl42: any;
    lookupdtl43: any;
    lookupdtl44: any;
    lookupdtl3045: any;
    lookupdtl306iii: any;
    lookupdtl306ii: any;
    ducks: boolean = false;
    benifit4012: boolean = false;
    committes: Object;
    WeightOrVolume: Object;
    Viewdata: Object;
    Fueldata: Object;
    Operations: Object;
    lookupdtl207b: any;
    Dghgemi: boolean = false;
    lookupdtl: any;
    lookupdtl1: any;
    lookupdtl2: any;
    lookupdtl3: any;
    lookupdtl4: any;
    lookupdtl5: any;
    lookupdtl6: any;
    lookupdtl7: any;
    lookupdtl8: any;
    lookupdtl9: any;
    lookupdtl10: any;
    lookupdtl11: any;
    lookupdtl12: any;
    lookupdtl13: any;
    lookupdtl50: any;
    lookupdtl51: any;
    lookupdtl52: any;
    lookupdtl52puta: any;
    lookupdtl53: any;
    lookupdtl54: any;
    lookupdtl55: any;
    lookupdtl44a: any;
    wraith: boolean = false;
    nstwsusc: boolean = false;
    nstwsuscrev: boolean = false;
    typeofoperations: any;
    revanent: boolean = false;
    ash: boolean = false;
    newAttribute413: any = {};
    bloodhound: boolean = false;
    gibraltar: boolean = false;
    lookup413: any;
    lifeline: boolean = false;

    caustic: boolean = false;
    newcastle: boolean = false;

    newAttributeturnover1: any = {};
    newAttributeturnover2: any = {};
    inputofcountries: any;
    olocalcomm: boolean = false;
    Owlceiaadp: boolean = false;
    lookupdtl102: any;
    lookup: any;
    lookup1: any;
    lookup2: any;
    lookup3: any;
    lookup4: any;
    lookup5: any;
    lookup6: any;
    lookup7: any;
    lookup8: any;
    lookup9: any;
    lookup10: any;
    lookup11: any;
    lookup12: any;
    lookup13: any;
    lookup14: any;
    lookup15: any;
    lookup16: any;
    lookup17: any;
    lookup18: any;
    lookup19: any;
    lookup20: any;
    lookup21: any;
    lookup22: any;
    lookup23: any;
    lookup24: any;
    lookup25: any;
    lookup26: any;
    lookup30: any;
    optionValue: any;
    cash: any;
    industries: any;
    cashbool: boolean = false;
    objs = [];
    dynamicobj: any;
    ghdropo: any;
    CountryName: string = '';
    finalobj: any = {};
    socialform: FormGroup;
    useriddamoiy: any;
    Teo: boolean = false;
    TeT: boolean = false;
    emp1: boolean = false;
    emp2: boolean = false;
    emp3: boolean = false;
    emp4: boolean = false;
    emp5: boolean = false;
    emp6: boolean = false;
    emp7: boolean = false;
    emp8: boolean = false;
    emp9: boolean = false;
    emp10: boolean = false;
    Nehaet: boolean = false;
    emp11: boolean = false;
    emp12: boolean = false;
    emp13: boolean = false;
    emp14: boolean = false;
    Dgh: boolean = false;
    kgf: boolean = false;
    sahoo: boolean = false;
    bahu: boolean = false;
    bali: boolean = false;
    lookupdtlturnover1: any;
    lookupdtlturnover2: any;
    TSIO: boolean = false;
    TSIT: boolean = false;
    TSITH: boolean = false;
    TSIF: boolean = false;
    TSFIV: boolean = false;
    evaluationtruef: boolean = false;
    gases1: any;
    typeofe: any;
    Withorg: any;
    Economic: any;
    frequencylist: any;
    lookupdtll00: any = [];
    lookupdtll01: any = [];
    lookupdtll02: any = [];
    reltypeother2: any;
    TSO: boolean = false;
    gases: any;
    frequency: any;
    units: any;
    view: any;
    orgname1 = '';
    selectedUser: any;
    Employee: any;
    positionlist: any;
    Diversity: any;
    lookupdtl2x: any;
    companytypelist: any;
    isExpand: boolean = true;
    bootstrapcollapse: boolean = true;
    explainyesclicked: boolean = false;
    materialform: FormGroup;
    Relationshiptype: any;
    filterdOptions = [];
    lookup2in7: any;
    Fueltype: any;
    count: number;
    count1: number;
    reltypeother7: any;
    genderdetails: any;
    newattributemtptdmttwo1: any = {};
    newattributemtptdmttwo2: any = {};
    newattributemtptdmttwo3: any = {};
    newattributemtptdmttwo4: any = {};
    newattributemtptdmttwo5: any = {};
    newattributemtptdmttwo6: any = {};
    newattributemtptdmttwo7: any = {};
    newattributemtptdmttwo8: any = {};
    newattributemtptdmttwo9: any = {};
    newattributemtptdmttwo10: any = {};
    newattributemtptdmttwo11: any = {};
    newAttribute4132: any = {};
    newAttribute207b: any = {};
    productsDropdownSettings: any = {};
    lookupmtptdmttwo1: any;
    lookupmtptdmttwo2: any;
    lookupmtptdmttwo3: any;
    lookupmtptdmttwo4: any;
    lookupmtptdmttwo5: any;
    lookupmtptdmttwo6: any;
    lookupmtptdmttwo7: any;
    lookupmtptdmttwo8: any;
    companylist: any = [];
    lookupmtptdmttwo9: any;
    lookupmtptdmttwo10: any;
    lookupmtptdmttwo11: any;
    lookup4132: any;
    koli: any;
    oioi: any;
    naidu: any;
    total2: any;
    transform(country: string[], searchFilter: string): string[] {
        if (!country || !searchFilter) {
            return country;
        }
        return country.filter((option) =>
            option.toLowerCase().includes(searchFilter.toLowerCase())
        );
    }
    constructor(
        private is: ImportdisService,
        private iis: ImagereportService,
        public dialog: MatDialog,
        private service: AppService,
        private gs: GlobalvariableService,
        private fb: FormBuilder,
        private st: ReportgenerationService,
        private ds: DashboardService,
        private crs: CreatereportService,
        private cs: UpdatereportService,
        private AuthService: AuthService,
        private ss: SelectdisService,
        private aa: ActivatedRoute,
        private router: Router
    ) {
        this.lookup4132 = [];
        this.lookupmtptdmttwo1 = [];
        this.lookupmtptdmttwo2 = [];
        this.lookupmtptdmttwo3 = [];
        this.lookupmtptdmttwo4 = [];
        this.lookupmtptdmttwo5 = [];
        this.lookupmtptdmttwo6 = [];
        this.lookupmtptdmttwo7 = [];
        this.lookupmtptdmttwo8 = [];
        this.lookupmtptdmttwo9 = [];
        this.lookupmtptdmttwo10 = [];
        this.lookupmtptdmttwo11 = [];
        this.lookupdtl207b = [];
        this.lookup2in7bi = [];
        this.lookup2in7bii = [];
        this.lookup2in7biii = [];
        this.lookup2in7biv = [];
        this.lookup2in7bv = [];
        this.lookupdtl = [];
        this.lookupdtl1 = [];
        this.lookupdtl2 = [];
        this.lookupdtl304a = [];
        this.lookupdtl3 = [];
        this.lookupdtl4 = [];
        this.lookupdtl5 = [];
        this.lookupdtl6 = [];
        this.lookupdtl102 = [];
        this.lookup2in7 = [];
        this.lookupdtl7 = [];
        this.lookupdtl8 = [];
        this.lookupdtl9 = [];
        this.lookupdtl10 = [];
        this.lookupdtl11 = [];
        this.lookupdtl12 = [];
        this.lookupdtleco = [];
        this.lookupdtl13 = [];
        this.lookupdtl50 = [];
        this.lookupdtl27bi = [];
        this.lookupdtl27bii = [];
        this.lookupdtl51 = [];
        this.lookupdtl52 = [];
        this.lookupdtl52puta = [];
        this.lookupdtl53 = [];
        this.lookupdtl54 = [];
        this.lookupdtl55 = [];
        this.lookupdtl2x = [];
        this.lookupdtl44a = [];
        this.lookup = [];
        this.lookup1 = [];
        this.lookup2 = [];
        this.lookup3 = [];
        this.lookup4 = [];
        this.lookup5 = [];
        this.lookup6 = [];
        this.lookup7 = [];
        this.lookup8 = [];
        this.lookup9 = [];
        this.lookup10 = [];
        this.lookup11 = [];
        this.lookup12 = [];
        this.lookup13 = [];
        this.lookup14 = [];
        this.lookup15 = [];
        this.lookup16 = [];
        this.lookup17 = [];
        this.lookup18 = [];
        this.lookup19 = [];
        this.lookup20 = [];
        this.lookup21 = [];
        this.lookup22 = [];
        this.lookup23 = [];
        this.lookup24 = [];
        this.lookup413 = [];
        this.lookup25 = [];
        this.lookup26 = [];
        this.lookup30 = [];
        this.lookupdtl41 = [];
        this.lookupdtl42 = [];
        this.lookupdtl43 = [];
        this.lookupdtl44 = [];
        this.lookupdtl3045 = [];
        this.lookupdtl306iii = [];
        this.lookupdtl306ii = [];
        this.lookupdtll02 = [];
        this.count = 0;
        this.count1 = 0;
        this.lookupdtl41ii = [];
        this.lookupdtlturnover1 = [];
        this.lookupdtlturnover2 = [];

        const date = new Date();
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const currentDay = date.getDate();
        this.minDate = new Date(currentYear, currentMonth, currentDay, 23, 55);
    }
    storecountry: any = [];
    dropdownSettings = {};
    selectFormControl = new FormControl();
    searchTextboxControl = new FormControl();
    selectedValues = [];
    data: string[] = this.storecountry;
    filteredOptions: Observable<any[]>;
    filteredOptionsownership: Observable<any[]>;
    ownershipandlegalform = new FormControl();

   ngOnInit() {
        this.filteredOptionsownership =
            this.ownershipandlegalform.valueChanges.pipe(
                startWith(''),
                map((value) => this.filter(value || ''))
            );
        this.filteredOptions = this.searchTextboxControl.valueChanges.pipe(
            startWith<string>(''),
            map((CountryName) => this._filter(CountryName))
        );
        // async function initializeGrammarly() {
        //     try {
        //       await Grammarly.init("client_Es7CWDPreL6MsVEx1EvCir");
        //       console.log('Grammarly initialized successfully.');
        //       // You can proceed with using Grammarly services here
        //     } catch (error) {
        //       console.error('Error initializing Grammarly:', error);
        //     }
        //   }initializeGrammarly();

       // await Grammarly.init('client_Es7CWDPreL6MsVEx1EvCir');
        // this.scroll.nativeElement.scrollTop=0;
        // document.getElementById("orange").scrollIntoView();
        this.useriddamoiy = this.AuthService.user.id;
        this.productsDropdownSettings = {
            singleSelection: false,
            text: 'Select Countries',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: 'myclass custom-class',
            labelKey: 'name',
            badgeShowLimit: 2,
        };
        this.is.getLookupDetailsByHdrId(22).subscribe((Data) => {
            this.frequencylist = Data;
        });
        this.is.getLookupDetailsByHdrId(23).subscribe((Data) => {
            this.companytypelist = Data;
            for (var j = 0; j <= this.companytypelist.length; j++) {
                this.companylist.push(this.companytypelist[j]['Name']);
            }
        });
        this.is.getLookupDetailsByHdrId(21).subscribe((Data) => {
            this.Relationshiptype = Data;
            this.filteredList5 = this.Relationshiptype.slice();
        });

        this.is.getLookupDetailsByHdrId(19).subscribe((Data) => {
            this.typeofe = Data;
        });
        this.is.getLookupDetailsByHdrId(20).subscribe((Data) => {
            this.Withorg = Data;
        });
        this.is.getLookupDetailsByHdrId(28).subscribe((Data) => {
            this.SizeofSite = Data;
        });

        this.is.getLookupDetailsByHdrId(2).subscribe((Data) => {
            this.yesorno = Data;
        });
        this.is.getLookupDetailsByHdrId(3).subscribe((Data) => {
            this.industries = Data;
            this.filteredList6 = this.industries.slice();
        });
        this.is.getLookupDetailsByHdrId(14).subscribe((Data) => {
            this.Fueltype = Data;
            this.filteredList10 = this.Fueltype.slice();
        });
        this.is.getLookupDetailsByHdrId(27).subscribe((Data) => {
            this.materialityindus = Data;
            this.filteredList8 = this.materialityindus.slice();
        });
        this.is.getCountryDetails().subscribe((data) => {
            this.country = data;

            for (var i = 0; i <= this.country.length; i++) {
                this.storecountry.push(this.country[i]['CountryName']);
            }
        });
        this.is.getCountryDetails().subscribe((data) => {
            this.countrylist = data;
            this.filteredList7 = this.countrylist.slice();
        });
        this.is.getLookupDetailsByHdrId(52).subscribe((Data) => {
            this.pagdri = Data;
            this.filteredList7new=this.pagdri.slice();
        });
        this.is.getLookupDetailsByHdrId(6).subscribe((Data) => {
            this.cassssh = Data;
            this.filteredList11=this.cassssh.slice();
        });
        this.is.getLookupDetailsByHdrId(1).subscribe((Data) => {
            this.genderdetails = Data;
        });
        this.is.getLookupDetailsByHdrId(13).subscribe((Data) => {
            this.ghdropo = Data;
        });
        this.is.getLookupDetailsByHdrId(12).subscribe((Data) => {
            this.frequency = Data;
        });

        this.is.getLookupDetailsByHdrId(7).subscribe((Data) => {
            this.units = Data;
        });
        this.is.getLookupDetailsByHdrId(5).subscribe((Data) => {
            this.Economic = Data;
        });
        this.is.getLookupDetailsByHdrId(8).subscribe((Data) => {
            this.view = Data;
        });
        this.is.getLookupDetailsByHdrId(4).subscribe((Data) => {
            this.committes = Data;
        });

        this.is.getLookupDetailsByHdrId(15).subscribe((Data) => {
            this.Employee = Data;
        });
        this.is.getLookupDetailsByHdrId(29).subscribe((Data) => {
            this.positionlist = Data;
            this.filteredList9 = this.positionlist.slice();
        });
        this.is.getLookupDetailsByHdrId(16).subscribe((Data) => {
            this.Diversity = Data;
        });

        this.is.getLookupDetailsByHdrId(17).subscribe((Data) => {
            this.typeofoperations = Data;
        });
        this.is.getLookupDetailsByHdrId(11).subscribe((Data) => {
            this.Operations = Data;
        });

        this.is.getCountryDetails().subscribe((data) => {
            this.country = data;
        });
        this.is.getLookupDetailsByHdrId(10).subscribe((Data) => {
            this.gases = Data;
        });

        this.is.getLookupDetailsByHdrId(9).subscribe((Data) => {
            this.gases1 = Data;
        });

        this.gdform = this.fb.group({
            //1
            nameoforg: [''],
            ownershipandlegalform: [''],
            location: [],
            countries: [],
            relevantreport: [],
            selectFormControl: [],
            entitytype: [''],
            reportfrequency: [''],
            startdate: [''],
            enddate: [''],
            contactperson: [''],
            email: [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(
                        '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
                    ),
                ],
            ],
            phone: [
                '',
                [
                    Validators.required,
                    Validators.maxLength(15),
                    Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
                ],
            ],
            reason: [''],
            reason1: [''],
            refexa1: [''],
            policytype: [''],
            assuredtypee: [
                '',
                [
                    Validators.required,
                    Validators.email,
                    Validators.pattern(
                        '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'
                    ),
                ],
            ],
            providertype: [''],
            sectiontype: [''],
            sectors: [''],
            desc: [''],
            prim: [''],
            prim1: [''],
            prim1Product: [''],
            prim1Services: [''],
            supplier: [''],
            relationship: [''],
            supprim: [''],
            geography: [''],
            startdateintab: [''],
            enddateintab: [''],
            supaid: [''],
            Customertab: [''],
            relatab2: [''],
            //supp2tab:[''],
            // geotab2:[''],
            statab2: [''],
            endtab2: [''],
            expetab2: [''],
            ps: [''],
            bps: [''],
            explanation: [''],
            reportinf: [''],
            reportper: [''],
            reportper1: [''],
            workerss: [''],
            methods: [''],
            previous: [''],
            duck: [''],
            duck1: [''],
            duck2: [''],
            criteria: [''],
            criteria1: [''],
            criteria2: [''],
            comm: [''],
            comm1: [''],
            comm2: [''],
            comm3: [''],
            comm4: [''],
            comm5: [''],
            comm6: [''],
            comm7: [''],
            yesorno: [''],
            commentbox: [''],
            comment2: [''],
            pol1: [''],
            pol2: [''],
            pol3: [''],
            pol4: [''],
            pol5: [''],
            dele: [''],
            dele1: [''],
            sust: [''],
            sust1: [''],
            sust2: [''],
            conf: [''],
            conf1: [''],
            conf2: [''],
            //16
            Communication1: [''],
            Communication2: [''],
            Communication3: [''],
            Communication4: [''],
            //17
            Collective: [''],
            //18
            Evaluation: [''],
            Evaluation1: [''],
            Evaluation2: [''],
            yesorno11: [''],
            //19
            Remuneration1: [''],
            Remuneration2: [''],
            Remuneration3: [''],
            Remuneration4: [''],
            Remuneration5: [''],
            Remuneration6: [''],
            //20
            Proc1: [''],
            Proc2: [''],
            Proc3: [''],
            Proc4: [''],
            Proc5: [''],
            //21
            Annual1: [''],
            Annual2: [''],
            Annual3: [''],
            //22
            Statement1: [''],
            Statement2: [''],
            Statement3: [''],
            Statement4: [''],
            Statement5: [''],
            Statement6: [''],
            Statementvii: [''],
            //23
            Policy1: [''],
            Policy2: [''],
            Policy3: [''],
            Policy4: [''],
            Policy5: [''],
            Policy6: [''],
            Policy7: [''],
            Policy8: [''],
            Policy9: [''],
            Policy10: [''],
            Policy11: [''],
            empy36: [''],
            empy37: [''],
            empy38: [''],
            empy39: [''],
            empy40: [''],
            //24
            Embedding1: [''],
            Embedding2: [''],
            Embedding3: [''],
            Embedding4: [''],
            //25
            Processinto1: [''],
            Processinto2: [''],
            Processinto3: [''],
            Processinto4: [''],
            Processinto5: [''],

            //26
            mech1: [''],
            mech2: [''],
            mech3: [''],
            mech4: [''],
            mech5: [''],
            mech6: [''],
            mech7: [''],
            mech8: [''],
            mech9: [''],
            mech10: [''],
            mech11: [''],
            mech12: [''],
            mech13: [''],
            mech14: [''],
            mech15: [''],
            mech16: [''],
            //27
            compir1: [''],
            compir2: [''],
            compir3: [''],
            compir4: [''],
            compir5: [''],
            compir6: [''],
            compir7: [''],
            compir8: [''],
            compir9: [''],
            compir10: [''],
            compir11: [''],
            compir12: [''],
            //28
            mema1: [''],
            mema2: [''],
            //29
            asseg1: [''],
            asseg2: [''],
            asseg3: [''],
            asseg4: [''],
            //30
            cba1: [''],
            cba2: [''],
            cba3: [''],
            cba4: [''],
            //formcontrol
            Text1: [''],
            Text3: [''],
            Text4: [''],
            Text5: [''],
            Text6: [''],
            Text7: [''],
            Text8: [''],
            Text9: [''],
            Text10: [''],
            Text11: [''],
            Text12: [''],
            Text13: [''],
            Text14: [''],
            Text15: [''],
            Text16: [''],
            Text17: [''],
            Text18: [''],
            Text19: [''],
            Text20: [''],
            Text21: [''],
            Text22: [''],
            Text23: [''],
            Text24: [''],
            Text25: [''],
            Text26: [''],
            Text27: [''],
            Text28: [''],
            Text29: [''],
            Text30: [''],
        });
        this.economicform = this.fb.group({
            //201-1
            location1: [],
            location2: [],
            currency: [],
            currency1: [],
            currency2: [],
            currency3: [],
            currency4: [],
            currency5: [],
            currency6: [],
            //201-1
            mh1: [''],
            mh1cash: [''],
            mh2: [''],
            mh3: [''],
            mh4: [''],
            mh5: [''],
            mh6: [''],
            mh7: [''],
            //201-2
            eco1: [''],
            eco2: [''],
            eco3: [''],
            eco4: [''],
            eco5: [''],
            eco6: [''],
            eco7: [''],
            //201-3
            ecothree1: [''],
            ecothree2: [''],
            ecothree3: [''],
            ecothree4: [''],
            ecothree5: [''],
            ecothree6: [''],
            ecothree10: [''],
            ecothree7: [''],
            ecothree8: [''],
            ecothree9: [''],
            //201-4
            ecofour1: [''],
            ecofour2: [''],
            ecofour3: [''],
            ecofour4: [''],
            ecofour5: [''],
            ecofour6: [''],
            ecofour7: [''],
            ecofour8: [''],
            ecofour9: [''],
            ecofour17: [],
            //202-1
            markpref1: [''],
            markpref2: [''],
            markpref3: [''],
            markpref4: [''],
            markpref5: [''],
            //202-2
            markpreff1: [''],
            markpreff2: [''],
            markpreff3: [''],
            markpreff4: [''],
            markpreff5: [''],
            //203-1
            iei1: [''],
            iei2: [''],
            iei3: [''],
            iei4: [''],
            //203-2
            ieii1: [''],
            ieii2: [''],
            ieii3: [''],
            //204-1
            pp1: [''],
            pp2: [''],
            pp3: [''],
            pp4: [''],
            //205-1
            Ac1: [''],
            Ac1percentage: [''],
            Ac2: [''],
            Ac3: [''],
            //205-2
            Acc1: [''],
            Acc2: [''],
            Acc3: [''],
            Acc4: [''],
            Acc5: [''],
            Acc6: [''],
            Acc7: [''],
            //205-3
            Accc1: [''],
            Acccpointed: [''],
            Accc2: [''],
            Accc3: [''],
            Accc4: [''],
            Accc5: [''],
            //206-1
            Acb1: [''],
            Acb2: [''],
            Acb3: [''],

            ecofour17ii: [''],
            ecofour17iii: [''],

            //207-1
            tax: [''],
            tax1: [''],
            tax1b: [''],
            tax2: [''],
            tax3: [''],

            Attt1: [''],
            Attt2: [''],
            Attt3: [''],
            Attt4: [''],
            Attt5: [''],
            Attt6: [''],
            Attt7: [''],

            Atttt1: [''],
            Atttt2: [''],
            Atttt3: [''],
            Atttt4: [''],

            Attttt1: [''],
            Attttt2: [''],
            Attttt3: [''],
            Attttt4: [''],
            Attttt5: [''],
            Attttt6: [''],
            Attttt7: [''],
            Attttt8: [''],
            Attttt9: [''],
            Attttt10: [''],
            Attttt11: [''],
            Attttt12: [''],
            Attttt13: [''],
        });

        this.enviroform = this.fb.group({
            Att1: [''],
            Att2: [''],
            Att3: [''],
            Att4: [''],
            Att5: [''],

            Attt1: [''],
            Attt2: [''],
            Attt3: [''],
            Attt4: [''],
            Attt5: [''],
            Attt6: [''],

            Atttt1: [''],
            Atttt2: [''],
            Atttt3: [''],

            Attttt1: [''],
            Attttt2: [''],
            Attttt3: [''],

            Mtt161: [''],
            Mtt162: [''],
            Mtt163: [''],

            Mttt161: [''],
            Mttt162: [''],

            Rppm1: [''],
            Rppm2: [''],
            Rppm3: [''],

            Ecwo1: [''],
            Ecwo2: [''],
            Ecwo3i: [''],
            Ecwo3iunitdrop: [''],
            Ecwo3iunitdrop1: [''],
            Ecwo3iunitdrop2: [''],
            Ecwo3iunitdrop3: [''],
            Ecwo3iunitdrop4: [''],
            Ecwo3iunitdrop5: [''],
            Ecwo3iunitdrop6: [''],
            Ecwo3iunitdrop7: [''],
            Ecwo3ii: [''],
            Ecwo3iii: [''],
            Ecwo3iv: [''],
            Ecwo4i: [''],
            Ecwo4ii: [''],
            Ecwo4iii: [''],
            Ecwo4iv: [''],
            Ecwo3: [''],
            Ecwo4: [''],
            Ecwo5: [''],
            Ecwo5units: [''],
            Ecwo6: [''],
            Ecwo7: [''],
            Ecwo8: [''],

            Ecoo1: [''],
            Ecoo1units: [''],
            Ecoo2: [''],
            Ecoo3: [''],
            Ecoo4: [''],

            Eit1: [''],
            Eit2: [''],
            relevantreportiv: [''],
            multiselect3023i: [''],
            Eit3: [''],
            Eit4: [''],
            Eit5: [''],

            Rec1: [''],
            Rec1units: [''],
            Rec2: [''],
            multiselect3024: [''],
            Rec3: [''],
            Rec4: [''],
            Rec5: [''],

            Rerp1: [''],
            Rerp1units: [''],
            Rerp2: [''],
            Rerp3: [''],
            Rerp4: [''],

            Iwsr1: [''],
            Iwsr2: [''],
            Iwsr3: [''],
            Iwsr4: [''],
            Iwsr5: [''],

            Materials: [''],
            TotalWeight: [''],
            Units: [''],
            View: [''],
            // newly added

            //www1:[''],
            www3031i: [''],
            www3031ii: [''],
            www3031iii: [''],
            www3031iv: [''],
            www3031v: [''],
            www3031vi: [''],
            // www2:[''],
            www3032i: [''],
            www3032ii: [''],
            www3032iii: [''],
            www3032iv: [''],
            www3032v: [''],
            www3032vi: [''],
            //  www3:[''],
            www30331i: [''],
            www30331ii: [''],
            www30331iii: [''],
            www30331iv: [''],
            www30331v: [''],
            www30331vi: [''],
            www30331vii: [''],
            www30331viii: [''],
            www30331ix: [''],
            www30331x: [''],
            // www4:[''],
            www30332i: [''],
            www30332ii: [''],
            www30332iii: [''],
            www30332iv: [''],
            www30332v: [''],
            www30332vi: [''],
            www30332vii: [''],
            www30332viii: [''],
            www30332ix: [''],
            www30332x: [''],

            www5: [''],
            www6: [''],

            wdd1i: [''],
            wdd1ii: [''],
            wdd1iii: [''],
            wdd1iv: [''],
            wdd1v: [''],
            wdd1vi: [''],
            wdd1kek: [''],
            wdd2kek: [''],
            wdd3kek: [''],
            wdd4kek: [''],
            wdd2: [''],
            wdd3: [''],
            wdd4: [''],
            wdd5: [''],
            wdd6: [''],
            wdd7: [''],
            wdd8: [''],
            wdd9: [''],
            wdd10: [''],

            wcc1: [''],
            wcc2: [''],
            wcc3: [''],
            wcc4: [''],
            wcc5: [''],

            osol1: [''],
            osol1location: [''],
            osol2: [''],
            osol3: [''],
            osol4: [''],
            //osol5:[''],
            osol6: [''],
            osol7: [''],
            osol8: [''],

            sia1: [''],
            sia2: [''],
            sia3: [''],
            sia4: [''],
            sia5: [''],
            sia6: [''],
            sia7: [''],
            sia8: [''],
            sia9: [''],
            sia10: [''],
            sia11: [''],

            hpr1: [''],
            hpr1size: [''],
            hpr1units: [''],
            hpr1location: [''],
            hpr2: [''],
            hpr3: [''],
            hpr4: [''],
            hpr5: [''],

            Iucn1: [''],
            Iucn2: [''],
            Iucn3: [''],
            Iucn4: [''],
            Iucn5: [''],
            Iucn6: [''],

            Iwws1: [''],
            Iwws2: [''],
            Iwws3: [''],
            Iwws4: [''],

            Mwdr1: [''],
            Mwdr2: [''],
            Mwdr3: [''],
            Mwdr4: [''],
            Mwdr5: [''],

            wc1: [''],
            wc2: [''],
            wc3: [''],
            wc4: [''],

            Dghgemi1: [''],
            Dghgemi2: [''],
            Dghgemi3: [''],
            Dghgemi4: [''],
            Dghgemi5: [''],
            Dghgemi6: [''],
            Dghgemi7: [''],
            Dghgemi8: [''],
            Dghgemi9: [''],
            Dghgemi10: [''],
            Dghgemi11: [''],

            Dgh1: [''],
            Dgh2: [''],
            Dgh3: [''],
            Dgh4: [''],
            Dgh5: [''],
            Dgh6: [''],
            Dgh7: [''],
            Dgh8: [''],
            Dgh9: [''],
            Dgh10: [''],
            Dgh11: [''],

            kgf1: [''],
            kgf2: [''],
            kgf3: [''],
            kgf4: [''],
            kgf5: [''],
            kgf6: [''],
            kgf7: [''],
            kgf8: [''],
            kgfsuna: [''],
            kgf9: [''],
            kgf10: [''],
            kgf11: [''],
            kgf12: [''],
            kgf13: [''],
            kgf14: [''],
            kgf15: [''],
            kgf16: [''],
            kgf17: [''],
            kgf18: [''],
            kgf19: [''],
            kgf20: [''],
            kgf21: [''],
            kgf22: [''],
            kgf23: [''],
            kgf24: [''],
            kgf25: [''],
            kgf26: [''],
            sahoo1: [''],
            sahoo2: [''],
            sahoon: [''],
            sahoo3: [''],
            sahoo4: [''],
            sahoo5: [''],

            bahu1: [''],
            bahu2: [''],
            bahu3: [''],
            bahu4: [''],
            bahu5: [''],
            bahu6: [''],
            bahu7: [''],

            bali1: [''],
            bali2: [''],
            bali3: [''],
            bali4: [''],
            bali5: [''],
            bali6: [''],
            bali7: [''],

            apple1: [''],
            apple2: [],
            apple3: [''],
            apple4: [''],
            apple5: [''],
            apple6: [''],
            apple7: [''],
            apple8: [''],
            apple9: [''],
            apple10: [''],
            apple11: [''],
            apple12: [''],
            apple13: [''],
            apple14: [''],
            apple15: [''],
            apple16: [''],
            apple17: [''],
            apple18: [''],
            apple19: [''],
            apple20: [''],
            apple21: [''],
            apple22: [''],
            apple23: [''],
            apple24: [''],
            // 306
            TSIO1: [''],
            TSIO2: [''],
            TSIO3: [''],

            TSIT1: [''],
            TSIT2: [''],
            TSIT3: [''],
            TSIT4: [''],

            TSITH1: [''],
            TSITH2: [''],
            TSITH3: [''],
            TSITH4: [''],
            TSITH5: [''],
            TSITH6: [''],
            TSITH7: [''],
            TSITH8: [''],
            TSITH9: [''],

            TSIF1: [''],
            TSIF2: [],
            TSIF3: [''],
            TSIF4: [''],
            TSIF5: [''],
            TSIF6: [''],
            TSIF7: [''],
            TSIF8: [''],
            TSIF9: [''],
            TSIF10: [''],
            TSIF11: [''],
            TSIF12: [''],
            TSIF13: [''],
            TSIF14: [''],
            TSIF15: [''],
            TSIF16: [''],
            TSIF17: [''],
            TSIF18: [''],
            TSIF19: [''],
            TSIF20: [''],
            TSIF21: [''],
            TSIF22: [''],
            TSIF23: [''],
            TSIF24: [''],
            TSIF25: [''],
            TSIF26: [''],
            TSIF27: [''],
            TSIF28: [''],
            TSIF29: [''],
            TSIF30: [''],
            TSIF31: [''],
            TSIF32: [''],
            TSIF33: [''],
            TSIF34: [''],
            TSIF35: [''],
            TSIF36: [''],
            TSIF37: [''],
            TSIF38: [''],
            TSIF39: [''],
            TSIF40: [''],
            TSIF41: [''],
            TSIF42: [''],
            TSIF43: [''],
            TSIF44: [''],
            TSIF45: [''],
            TSIF46: [''],
            TSIF47: [''],
            TSIF48: [''],
            TSIF49: [''],

            TSFIV1: [''],
            TSFIV2: [],
            TSFIV3: [''],
            TSFIV4: [''],
            TSFIV5: [''],
            TSFIV6: [''],
            TSFIV7: [''],
            TSFIV8: [''],
            TSFIV9: [''],
            TSFIV10: [''],
            TSFIV11: [''],
            TSFIV12: [''],
            TSFIV13: [''],
            TSFIV14: [''],
            TSFIV15: [''],
            TSFIV16: [''],
            TSFIV17: [''],
            TSFIV18: [''],
            TSFIV19: [''],
            TSFIV20: [''],
            TSFIV21: [''],
            TSFIV22: [''],
            TSFIV23: [''],
            TSFIV24: [''],
            TSFIV25: [''],
            TSFIV26: [''],
            TSFIV27: [''],
            TSFIV28: [''],
            TSFIV29: [''],
            TSFIV30: [''],
            TSFIV31: [''],
            TSFIV32: [''],
            TSFIV33: [''],
            TSFIV34: [''],
            TSFIV35: [''],
            TSFIV36: [''],
            TSFIV37: [''],
            TSFIV38: [''],
            TSFIV39: [''],
            TSFIV40: [''],
            TSFIV41: [''],
            TSFIV42: [''],
            TSFIV43: [''],
            TSFIV44: [''],
            TSFIV45: [''],
            TSFIV46: [''],
            TSFIV47: [''],
            TSFIV48: [''],
            TSFIV49: [''],
            TSFIV50: [''],
            TSFIV51: [''],
            TSFIV52: [''],
            TSFIV53: [''],
            TSFIV54: [''],
            TSFIV55: [''],
            TSFIV56: [''],
            TSFIV57: [''],
            TSFIV58: [''],
            TSFIV59: [''],
            TSFIV60: [''],
            //307-1
            TSO1: [''],
            TSO2: [''],
            TSO3: [''],
            TSO4: [''],
            TSO5: [''],
            TSO6: [''],

            //78

            Teo1: [''],
            Teo2: [''],
            //79

            TeT1: [''],
            TeT2: [''],
            TeT3: [''],
            TeT4: [''],
            TeT5: [''],
            TeT6: [''],
            TeT7: [''],
            TeT8: [''],
        });
        this.socialform = this.fb.group({
            //403-8
            wcbaohasms1: [''],
            wcbaohasms2: [''],
            wcbaohasms3: [''],
            wcbaohasms4: [''],
            wcbaohasms5: [''],
            wcbaohasms6: [''],
            wcbaohasms7: [''],
            wcbaohasms8: [''],
            wcbaohasms9: [''],
            //403-9
            wrinjuries1: [''],
            wrinjuries2: [''],
            wrinjuries3: [''],
            wrinjuries4: [''],
            wrinjuries5: [''],
            wrinjuries6: [''],
            wrinjuries7: [''],
            wrinjuries8: [''],
            wrinjuries9: [''],
            wrinjuries10: [''],
            wrinjuries11: [''],
            wrinjuries12: [''],
            wrinjuries13: [''],
            wrinjuries14: [''],
            wrinjuries15: [''],
            wrinjuries16: [''],
            wrinjuries17: [''],
            wrinjuries18: [''],
            wrinjuries19: [''],
            wrinjuries20: [''],
            wrinjuries21: [''],
            wrinjuries22: [''],
            wrinjuries23: [''],
            wrinjuries24: [''],
            //403-10
            wrih1: [''],
            wrih2: [''],
            wrih3: [''],
            wrih4: [''],
            wrih5: [''],
            wrih6: [''],
            wrih7: [''],
            wrih8: [''],
            wrih9: [''],
            wrih10: [''],
            wrih11: [''],
            wrih12: [''],

            // olocalcomm1:[''],
            // olocalcomm2:[''],
            // olocalcomm3:[''],
            // olocalcomm4:[''],
            // olocalcomm5:[''],
            // olocalcomm6:[''],
            // olocalcomm7:[''],
            olocalcommcomment: [''],
            nstwsusc1: [''],
            nstwsusccomment: [''],
            nstwsuscrev1: [''],
            nstwsuscrev2: [''],
            nstwsuscrev3: [''],
            nstwsuscrev4: [''],
            nstwsuscrev5: [''],
            nstwsuscrev6: [''],
            nstwsuscrev7: [''],
            revanent1: [''],
            revanent2: [''],
            revanent3: [''],
            revanent4: [''],
            revanent5: [''],
            revanent6: [''],
            wraith1: [''],
            wraith2: [''],
            bloodhound1: [''],
            bloodhound2: [''],
            bloodhound3: [''],
            bloodhound4: [''],
            bloodhound5: [''],
            gibraltar1: [''],
            gibraltar2: [''],
            gibraltar3: [''],
            gibraltar4: [''],
            gibraltar5: [''],
            gibraltar6: [''],
            gibraltar7: [''],
            lifeline1: [''],
            lifeline2: [''],
            lifeline3: [''],
            lifeline4: [''],
            lifeline5: [''],
            caustic1: [''],
            caustic2: [''],
            caustic3: [''],
            caustic4: [''],
            caustic5: [''],
            newcastle1: [''],
            newcastle2: [''],
            newcastle3: [''],
            newcastle4: [''],
            newcastle5: [''],
            ash1: [''],
            ash2: [''],
            ash3: [''],
            ash4: [''],
            ash5: [''],
            ash6: [''],
            ash7: [''],
            Nehaet1: [''],
            Nehaet2: [''],
            Nehaet3: [''],
            Nehaet4: [''],
            Nehaet5: [''],
            Nehaet6: [''],
            Nehaet7: [''],
            Nehaet8: [''],
            Nehaet9: [''],
            Nehaet10: [''],
            Nehaet11: [''],
            Nehaet12: [''],
            Nehaet13: [''],
            Nehaet14: [''],
            Nehaet15: [''],
            Nehaet16: [''],
            Nehaet17: [''],
            Nehaet18: [''],
            Nehaet19: [''],
            Nehaet20: [''],
            Nehaet21: [''],
            Nehaet22: [''],
            Nehaet23: [''],
            Nehaet24: [''],
            //401-2
            Benefits1: [''],
            Benefits2: [''],
            Benefits3: [''],
            Benefits4: [''],
            Benefits5: [''],
            grief1: [''],
            grief2: [''],
            grief3: [''],
            grief4: [''],
            grief5: [''],
            grief6: [''],
            Benefits6: [''],
            Benefits7: [''],
            Benefits8: [''],
            Benefits9: [''],
            Benefits10: [''],
            Benefits11: [''],
            Benefits12: [''],
            Benefits13: [''],
            Benefits14: [''],
            Benefits4012: [''],
            //401-3
            Parent1: [''],
            Parent2: [''],
            Parent3: [''],
            Parent4: [''],
            Parent5: [''],
            Parent6: [''],
            Parent7: [''],
            Parent8: [''],
            Parent9: [''],
            Parent10: [''],
            Parent11: [''],
            Parent12: [''],
            Parent13: [''],
            //402-1
            mnproca1: [''],
            mnproca2: [''],
            mnproca3: [''],
            //403-1
            ohasmss1: [''],
            ohasmss2: [''],
            ohasmss3: [''],
            ohasmss4: [''],
            //403-2
            hiraaii1: [''],
            hiraaii2: [''],
            hiraaii3: [''],
            hiraaii4: [''],
            hiraaii5: [''],
            hiraaii6: [''],
            //403-3
            ohs1: [''],
            ohs2: [''],
            //403-4
            wpcacoohas1: [''],
            wpcacoohas2: [''],
            wpcacoohas3: [''],
            //403-5
            wtoohas1: [''],
            wtoohas2: [''],
            //403-6
            powh1: [''],
            powh2: [''],
            powh3: [''],
            //403-7
            pamoohasid1: [''],
            pamoohasid2: [''],
            //404-1
            empy1: [''],
            empy2: [''],
            empy3: [''],
            empy4: [''],
            empy5: [''],
            empy6: [''],
            empy7: [''],
            empy8: [''],
            empy9: [''],
            empy10: [''],
            empy11: [''],
            emputa7: [''],
            emputa8: [''],
            emputa9: [''],
            emputa10: [''],
            emputa11: [''],
            empy12: [''],
            empy13: [''],
            empy14: [''],
            empy15: [''],
            empy16: [''],
            empy17: [''],
            empy18: [''],
            empy19: [''],
            empy20: [''],
            empy21: [''],
            empy22: [''],
            empy23: [''],
            empy24: [''],
            empy25: [''],
            empy26: [''],
            empy27: [''],
            empy28: [''],
            empy29: [''],
            empy30: [''],
            empy31: [''],
            empy32: [''],
            empy33: [''],
            empy34: [''],
            empy35: [''],
            empy36: [''],
            empy37: [''],
            empy38: [''],
            empy39: [''],
            empy40: [''],
        });
        this.materialform = this.fb.group({
            mtptdmt1: [''],
            mtptdmt2: [''],
            mtptdmt3: [''],
            mtptdmtone1: [],
            mtptdmtone2: [],
            mtptdmttwo1: [],
            mtptdmttwo2: [],
            mtptdmttwo3: [],
            mtptdmttwo4: [],
            mtptdmttwo5: [],
            mtptdmttwo6: [],
            mtptdmttwo7: [],
            mtptdmttwo8: [],
            mtptdmttwo9: [],
            mtptdmttwo10: [],
            mtptdmttwo11: [],
            mtptdmttwo12: [],
            mtptdmttwo13: [],
            mtptdmttwo14: [],
            mtptdmttwo15: [],
            mtptdmttwo16: [],
            mtptdmttwo17: [],
            mtptdmttwo18: [],
            mtptdmttwo19: [],
            mtptdmttwo20: [],
            mtptdmttwo21: [],
            mtptdmttwo22: [],
        });
        this.reportid = this.aa.snapshot.paramMap.get('reportId');
        this.orgId=this.AuthService.user.orgId
        this.is
            .getReportTemplateMenuSubIdByReportId(this.reportid)
            .subscribe((data: any) => {
                for (let i = 0; i < data.length; i++) {
                    let yoy = data[i]['TemplateMenuId'];
                    if (Questions[yoy] != undefined) {
                        if (JSON.stringify(this.finalobj) == '{}') {
                            this.finalobj = Questions[yoy][0];
                        } else {
                            Object.assign(this.finalobj, Questions[yoy][0]);
                        }
                    }
                    if (data.length - 1 == i) {
                        // console.log(this.finalobj)
                    }
                }
            });
        this.iis.getFinalReportId(this.reportid).subscribe((Data) => {
            this.finalima = Data[0]['ReportHdrId'];
        });
        this.items = this.is.getSelectedTemplateMenuCategoryTreeView(
            this.reportid
        );
        this.cs.getReportDetailsByReportId(this.reportid).subscribe((res) => {
            console.log(res);
            console.log(JSON.parse(res[0]['InitialDraftReport']));
            this.dynamicobj = JSON.parse(res[0]['InitialDraftReport']);
            if (this.dynamicobj != null) {
                this.is
                    .getReportTemplateMenuSubIdByReportId(this.reportid)
                    .subscribe((data: any) => {
                        console.log(data);
                        for (let i = 0; i < data.length; i++) {
                            let yoy = data[i]['TemplateMenuId'];

                            if (Questions[yoy] != undefined) {
                                if (JSON.stringify(this.finalobj) == '{}') {
                                    this.finalobj = Questions[yoy][0];
                                } else {
                                    Object.assign(
                                        this.finalobj,
                                        Questions[yoy][0]
                                    );
                                }

                                if (yoy == 1) {
                                    {
                                        this.gdform
                                            .get('nameoforg')
                                            .setValue(
                                                this.dynamicobj[
                                                    'Name of the Organization'
                                                ]
                                            );
                                        this.finalobj[
                                            'Name of the Organization'
                                        ] =
                                            this.dynamicobj[
                                                'Name of the Organization'
                                            ];

                                        this.gdform
                                            .get('ownershipandlegalform')
                                            .setValue(
                                                this.dynamicobj[
                                                    'Nature of ownership and Legal Form'
                                                ]
                                            );
                                        this.finalobj[
                                            'Nature of ownership and Legal Form'
                                        ] =
                                            this.dynamicobj[
                                                'Nature of ownership and Legal Form'
                                            ];

                                        this.gdform
                                            .get('location')
                                            .setValue(
                                                this.dynamicobj[
                                                    'Location of the Organization Headquarters'
                                                ]
                                            );
                                        this.finalobj[
                                            'Location of the Organization Headquarters'
                                        ] =
                                            this.dynamicobj[
                                                'Location of the Organization Headquarters'
                                            ];

                                        this.gdform
                                            .get('countries')
                                            .setValue(
                                                this.dynamicobj[
                                                    'Number of countries where the organization operates'
                                                ]
                                            );
                                        this.finalobj[
                                            'Number of countries where the organization operates'
                                        ] =
                                            this.dynamicobj[
                                                'Number of countries where the organization operates'
                                            ];

                                        this.gdform
                                            .get('selectFormControl')
                                            .setValue(
                                                this.dynamicobj[
                                                    'Names of countries where it has significant operations and/or that are relevant to the topics covered in the report'
                                                ]
                                            );
                                        this.finalobj[
                                            'Names of countries where it has significant operations and/or that are relevant to the topics covered in the report'
                                        ] =
                                            this.dynamicobj[
                                                'Names of countries where it has significant operations and/or that are relevant to the topics covered in the report'
                                            ];
                                        this.CountryName =
                                            this.dynamicobj[
                                                'Location of the Organization Head quarters'
                                            ];

                                        this.gdform
                                            .get('Text1')
                                            .setValue(
                                                this.dynamicobj['102-1comment']
                                            );
                                        this.finalobj['102-1comment'] =
                                            this.dynamicobj['102-1comment'];
                                    }
                                }

                                if (yoy == 2) {
                                    this.gdform
                                        .get('entitytype')
                                        .setValue(
                                            this.dynamicobj['102-2Entities']
                                        );
                                    this.finalobj['102-2Entities'] =
                                        this.dynamicobj['102-2Entities'];
                                    if (
                                        this.dynamicobj['102-2AddTable'] ==
                                            null ||
                                        this.dynamicobj['102-2AddTable'] ==
                                            '' ||
                                        this.dynamicobj['102-2AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['102-2AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-2AddTable'] = '';
                                    } else {
                                        this.finalobj['102-2AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['102-2AddTable']
                                            );
                                        this.lookupdtl = JSON.parse(
                                            this.dynamicobj['102-2AddTable']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-2AddTable2x'] ==
                                            null ||
                                        this.dynamicobj['102-2AddTable2x'] ==
                                            '' ||
                                        this.dynamicobj['102-2AddTable2x'] ==
                                            '[]' ||
                                        this.dynamicobj['102-2AddTable2x'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-2AddTable2x'] = '';
                                    } else {
                                        this.finalobj['102-2AddTable2x'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '102-2AddTable2x'
                                                ]
                                            );
                                        this.lookupdtl2x = JSON.parse(
                                            this.dynamicobj['102-2AddTable2x']
                                        );
                                    }
                                }

                                if (yoy == 3) {
                                    this.gdform
                                        .get('reportfrequency')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-3Reporting Frequency'
                                            ]
                                        );
                                    this.finalobj['102-3Reporting Frequency'] =
                                        this.dynamicobj[
                                            '102-3Reporting Frequency'
                                        ];
                                    this.gdform
                                        .get('reason')
                                        .setValue(
                                            this.dynamicobj['102-3Reason for']
                                        );
                                    this.finalobj['102-3Reason for'] =
                                        this.dynamicobj['102-3Reason for'];
                                    this.gdform
                                        .get('reason1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-3Publication date of the report'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-3Publication date of the report'
                                    ] =
                                        this.dynamicobj[
                                            '102-3Publication date of the report'
                                        ];
                                    this.gdform
                                        .get('contactperson')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-3Contact Person'
                                            ]
                                        );
                                    this.finalobj['102-3Contact Person'] =
                                        this.dynamicobj['102-3Contact Person'];
                                    this.gdform
                                        .get('email')
                                        .setValue(
                                            this.dynamicobj['102-3Email']
                                        );
                                    this.finalobj['102-3Email'] =
                                        this.dynamicobj['102-3Email'];
                                    this.gdform
                                        .get('phone')
                                        .setValue(
                                            this.dynamicobj['102-3Phone']
                                        );
                                    this.finalobj['102-3Phone'] =
                                        this.dynamicobj['102-3Phone'];
                                    this.gdform
                                        .get('Text3')
                                        .setValue(
                                            this.dynamicobj['102-3comment']
                                        );
                                    this.finalobj['102-3comment'] =
                                        this.dynamicobj['102-3comment'];
                                }

                                if (yoy == 4) {
                                    this.gdform
                                        .get('refexa1')
                                        .setValue(
                                            this.dynamicobj['102-4The effect']
                                        );
                                    this.finalobj['102-4The effect'] =
                                        this.dynamicobj['102-4The effect'];
                                    this.gdform
                                        .get('Text4')
                                        .setValue(
                                            this.dynamicobj['102-4comment']
                                        );
                                    this.finalobj['102-4comment'] =
                                        this.dynamicobj['102-4comment'];
                                }

                                if (yoy == 5) {
                                    this.gdform
                                        .get('policytype')
                                        .setValue(
                                            this.dynamicobj['102-5Description']
                                        );
                                    this.finalobj['102-5Description'] =
                                        this.dynamicobj['102-5Description'];
                                    this.gdform
                                        .get('assuredtypee')
                                        .setValue(
                                            this.dynamicobj['102-5Provide']
                                        );
                                    this.finalobj['102-5Provide'] =
                                        this.dynamicobj['102-5Provide'];
                                    this.gdform
                                        .get('providertype')
                                        .setValue(
                                            this.dynamicobj['102-5Describe']
                                        );
                                    this.finalobj['102-5Describe'] =
                                        this.dynamicobj['102-5Describe'];
                                    this.gdform
                                        .get('sectiontype')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-5Describe the relationship'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-5Describe the relationship'
                                    ] =
                                        this.dynamicobj[
                                            '102-5Describe the relationship'
                                        ];

                                    this.gdform
                                        .get('Text5')
                                        .setValue(
                                            this.dynamicobj['102-5comment']
                                        );
                                    this.finalobj['102-5comment'] =
                                        this.dynamicobj['102-5comment'];
                                }

                                if (yoy == 6) {
                                    this.gdform
                                        .get('sectors')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-6Sectors Served'
                                            ]
                                        );
                                    this.finalobj['102-6Sectors Served'] =
                                        this.dynamicobj['102-6Sectors Served'];
                                    this.gdform
                                        .get('desc')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-6A description Organizations'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-6A description Organizations'
                                    ] =
                                        this.dynamicobj[
                                            '102-6A description Organizations'
                                        ];

                                    this.gdform
                                        .get('prim1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-6Primary Brands'
                                            ]
                                        );
                                    this.finalobj['102-6Primary Brands'] =
                                        this.dynamicobj['102-6Primary Brands'];

                                    this.gdform
                                        .get('prim1Product')
                                        .setValue(
                                            this.dynamicobj['102-6Product']
                                        );
                                    this.finalobj['102-6Product'] =
                                        this.dynamicobj['102-6Product'];

                                    this.gdform
                                        .get('prim1Services')
                                        .setValue(
                                            this.dynamicobj['102-6Services']
                                        );
                                    this.finalobj['102-6Services'] =
                                        this.dynamicobj['102-6Services'];

                                    this.gdform
                                        .get('prim')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-6Aincluding services'
                                            ]
                                        );
                                    this.finalobj['102-6Aincluding services'] =
                                        this.dynamicobj[
                                            '102-6Aincluding services'
                                        ];

                                    if (
                                        this.dynamicobj['102-6AddTable'] ==
                                            null ||
                                        this.dynamicobj['102-6AddTable'] ==
                                            '' ||
                                        this.dynamicobj['102-6AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['102-6AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-6AddTable'] = '';
                                    } else {
                                        this.finalobj['102-6AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['102-6AddTable']
                                            );
                                        this.lookupdtl2 = JSON.parse(
                                            this.dynamicobj['102-6AddTable']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-6T1AddTable'] ==
                                            null ||
                                        this.dynamicobj['102-6T1AddTable'] ==
                                            '' ||
                                        this.dynamicobj['102-6T1AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['102-6T1AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-6T1AddTable'] = '';
                                    } else {
                                        this.finalobj['102-6T1AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '102-6T1AddTable'
                                                ]
                                            );
                                        this.lookupdtl1 = JSON.parse(
                                            this.dynamicobj['102-6T1AddTable']
                                        );
                                    }
                                    this.gdform
                                        .get('ps')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-6Aservices carried'
                                            ]
                                        );
                                    this.finalobj['102-6Aservices carried'] =
                                        this.dynamicobj[
                                            '102-6Aservices carried'
                                        ];
                                }

                                if (yoy == 7) {
                                    this.gdform
                                        .get('duck')
                                        .setValue(this.dynamicobj['seven27']);
                                    this.finalobj['seven27'] =
                                        this.dynamicobj['seven27'];

                                    this.gdform
                                        .get('duck1')
                                        .setValue(this.dynamicobj['seven28']);
                                    this.finalobj['seven28'] =
                                        this.dynamicobj['seven28'];

                                    this.gdform
                                        .get('duck2')
                                        .setValue(this.dynamicobj['seven29']);
                                    this.finalobj['seven29'] =
                                        this.dynamicobj['seven29'];

                                    if (
                                        this.dynamicobj['102-7A-Table'] ==
                                            null ||
                                        this.dynamicobj['102-7A-Table'] == '' ||
                                        this.dynamicobj['102-7A-Table'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7A-Table'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7A-Table'] = '';
                                    } else {
                                        this.finalobj['102-7A-Table'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7A-Table']
                                            );
                                        this.lookup2in7 = JSON.parse(
                                            this.dynamicobj['102-7A-Table']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-7B-Table1'] ==
                                            null ||
                                        this.dynamicobj['102-7B-Table1'] ==
                                            '' ||
                                        this.dynamicobj['102-7B-Table1'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7B-Table1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7B-Table1'] = '';
                                    } else {
                                        this.finalobj['102-7B-Table1'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7B-Table1']
                                            );
                                        this.lookup2in7bi = JSON.parse(
                                            this.dynamicobj['102-7B-Table1']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-7B-Table2'] ==
                                            null ||
                                        this.dynamicobj['102-7B-Table2'] ==
                                            '' ||
                                        this.dynamicobj['102-7B-Table2'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7B-Table2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7B-Table2'] = '';
                                    } else {
                                        this.finalobj['102-7B-Table2'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7B-Table2']
                                            );
                                        this.lookup2in7bii = JSON.parse(
                                            this.dynamicobj['102-7B-Table2']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-7B-Table3'] ==
                                            null ||
                                        this.dynamicobj['102-7B-Table3'] ==
                                            '' ||
                                        this.dynamicobj['102-7B-Table3'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7B-Table3'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7B-Table3'] = '';
                                    } else {
                                        this.finalobj['102-7B-Table3'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7B-Table3']
                                            );
                                        this.lookup2in7biii = JSON.parse(
                                            this.dynamicobj['102-7B-Table3']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['102-7B-Table4'] ==
                                            null ||
                                        this.dynamicobj['102-7B-Table4'] ==
                                            '' ||
                                        this.dynamicobj['102-7B-Table4'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7B-Table4'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7B-Table4'] = '';
                                    } else {
                                        this.finalobj['102-7B-Table4'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7B-Table4']
                                            );
                                        this.lookup2in7biv = JSON.parse(
                                            this.dynamicobj['102-7B-Table4']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['102-7B-Table5'] ==
                                            null ||
                                        this.dynamicobj['102-7B-Table5'] ==
                                            '' ||
                                        this.dynamicobj['102-7B-Table5'] ==
                                            '[]' ||
                                        this.dynamicobj['102-7B-Table5'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-7B-Table5'] = '';
                                    } else {
                                        this.finalobj['102-7B-Table5'] =
                                            JSON.parse(
                                                this.dynamicobj['102-7B-Table5']
                                            );
                                        this.lookup2in7bv = JSON.parse(
                                            this.dynamicobj['102-7B-Table5']
                                        );
                                    }
                                }

                                if (yoy == 8) {
                                    this.gdform
                                        .get('reportinf')
                                        .setValue(
                                            this.dynamicobj['102-8Total number']
                                        );
                                    this.finalobj['102-8Total number'] =
                                        this.dynamicobj['102-8Total number'];
                                    this.gdform
                                        .get('reportper')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-8An explanation'
                                            ]
                                        );
                                    this.finalobj['102-8An explanation'] =
                                        this.dynamicobj['102-8An explanation'];
                                    this.gdform
                                        .get('reportper1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-8No. of workers'
                                            ]
                                        );
                                    this.finalobj['102-8No. of workers'] =
                                        this.dynamicobj['102-8No. of workers'];
                                    this.gdform
                                        .get('Text8')
                                        .setValue(
                                            this.dynamicobj['102-8comment']
                                        );
                                    this.finalobj['102-8comment'] =
                                        this.dynamicobj['102-8comment'];
                                }
                                if (yoy == 9) {
                                    this.gdform
                                        .get('workerss')
                                        .setValue(
                                            this.dynamicobj['102-9Governance']
                                        );
                                    this.finalobj['102-9Governance'] =
                                        this.dynamicobj['102-9Governance'];
                                    this.gdform
                                        .get('methods')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-9list of committees'
                                            ]
                                        );
                                    this.finalobj['102-9list of committees'] =
                                        this.dynamicobj[
                                            '102-9list of committees'
                                        ];
                                    this.gdform
                                        .get('previous')
                                        .setValue(
                                            this.dynamicobj['102-9Describe']
                                        );
                                    this.finalobj['102-9Describe'] =
                                        this.dynamicobj['102-9Describe'];
                                    this.gdform
                                        .get('comm')
                                        .setValue(
                                            this.dynamicobj['102-9executive']
                                        );
                                    this.finalobj['102-9executive'] =
                                        this.dynamicobj['102-9executive'];
                                    this.gdform
                                        .get('comm1')
                                        .setValue(
                                            this.dynamicobj['102-9Independence']
                                        );
                                    this.finalobj['102-9Independence'] =
                                        this.dynamicobj['102-9Independence'];
                                    this.gdform
                                        .get('comm2')
                                        .setValue(
                                            this.dynamicobj['102-9Tenure']
                                        );
                                    this.finalobj['102-9Tenure'] =
                                        this.dynamicobj['102-9Tenure'];
                                    this.gdform
                                        .get('comm3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-9Number of each'
                                            ]
                                        );
                                    this.finalobj['102-9Number of each'] =
                                        this.dynamicobj['102-9Number of each'];
                                    this.gdform
                                        .get('comm4')
                                        .setValue(
                                            this.dynamicobj['102-9Gender']
                                        );
                                    this.finalobj['102-9Gender'] =
                                        this.dynamicobj['102-9Gender'];
                                    this.gdform
                                        .get('comm5')
                                        .setValue(
                                            this.dynamicobj['102-9Membership']
                                        );
                                    this.finalobj['102-9Membership'] =
                                        this.dynamicobj['102-9Membership'];
                                    this.gdform
                                        .get('comm6')
                                        .setValue(
                                            this.dynamicobj['102-9competencies']
                                        );
                                    this.finalobj['102-9competencies'] =
                                        this.dynamicobj['102-9competencies'];
                                    this.gdform
                                        .get('comm7')
                                        .setValue(
                                            this.dynamicobj['102-9Stakeholder']
                                        );
                                    this.finalobj['102-9Stakeholder'] =
                                        this.dynamicobj['102-9Stakeholder'];
                                    this.gdform
                                        .get('Text9')
                                        .setValue(
                                            this.dynamicobj['102-9comment']
                                        );
                                    this.finalobj['102-9comment'] =
                                        this.dynamicobj['102-9comment'];
                                }
                                if (yoy == 10) {
                                    this.gdform
                                        .get('criteria1')
                                        .setValue(
                                            this.dynamicobj['102-10Nomination']
                                        );
                                    this.finalobj['102-10Nomination'] =
                                        this.dynamicobj['102-10Nomination'];
                                    this.gdform
                                        .get('criteria2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-10Nomination selection'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-10Nomination selection'
                                    ] =
                                        this.dynamicobj[
                                            '102-10Nomination selection'
                                        ];
                                    this.gdform
                                        .get('criteria')
                                        .setValue(
                                            this.dynamicobj['102-10Criteria']
                                        );
                                    this.finalobj['102-10Criteria'] =
                                        this.dynamicobj['102-10Criteria'];
                                    this.gdform
                                        .get('Text10')
                                        .setValue(
                                            this.dynamicobj['102-10comment']
                                        );
                                    this.finalobj['102-10comment'] =
                                        this.dynamicobj['102-10comment'];
                                }
                                if (yoy == 11) {
                                    this.gdform
                                        .get('yesorno')
                                        .setValue(
                                            this.dynamicobj['102-11Whether']
                                        );
                                    this.finalobj['102-11Whether'] =
                                        this.dynamicobj['102-11Whether'];
                                    this.gdform
                                        .get('commentbox')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-11If arrangement'
                                            ]
                                        );
                                    this.finalobj['102-11If arrangement'] =
                                        this.dynamicobj['102-11If arrangement'];
                                    this.gdform
                                        .get('comment2')
                                        .setValue(
                                            this.dynamicobj['102-11Explain']
                                        );
                                    this.finalobj['102-11Explain'] =
                                        this.dynamicobj['102-11Explain'];
                                    this.gdform
                                        .get('Text11')
                                        .setValue(
                                            this.dynamicobj['102-11comment']
                                        );
                                    this.finalobj['102-11comment'] =
                                        this.dynamicobj['102-11comment'];
                                }
                                if (yoy == 12) {
                                    this.gdform
                                        .get('pol1')
                                        .setValue(
                                            this.dynamicobj['102-12Highest']
                                        );
                                    this.finalobj['102-12Highest'] =
                                        this.dynamicobj['102-12Highest'];
                                    this.gdform
                                        .get('pol2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-12Describe people'
                                            ]
                                        );
                                    this.finalobj['102-12Describe people'] =
                                        this.dynamicobj[
                                            '102-12Describe people'
                                        ];
                                    this.gdform
                                        .get('pol3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-12Describe impacts'
                                            ]
                                        );
                                    this.finalobj['102-12Describe impacts'] =
                                        this.dynamicobj[
                                            '102-12Describe impacts'
                                        ];
                                    this.gdform
                                        .get('pol4')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-12Describe iiimpacts'
                                            ]
                                        );
                                    this.finalobj['102-12Describe iiimpacts'] =
                                        this.dynamicobj[
                                            '102-12Describe iiimpacts'
                                        ];
                                    this.gdform
                                        .get('pol5')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-12Describe review'
                                            ]
                                        );
                                    this.finalobj['102-12Describe review'] =
                                        this.dynamicobj[
                                            '102-12Describe review'
                                        ];
                                    this.gdform
                                        .get('Text12')
                                        .setValue(
                                            this.dynamicobj['102-12comment']
                                        );
                                    this.finalobj['102-12comment'] =
                                        this.dynamicobj['102-12comment'];
                                }
                                if (yoy == 13) {
                                    this.gdform
                                        .get('dele')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-13Describe people'
                                            ]
                                        );
                                    this.finalobj['102-13Describe people'] =
                                        this.dynamicobj[
                                            '102-13Describe people'
                                        ];
                                    this.gdform
                                        .get('dele1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-13Describe environment people'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-13Describe environment people'
                                    ] =
                                        this.dynamicobj[
                                            '102-13Describe environment people'
                                        ];
                                    this.gdform
                                        .get('Text13')
                                        .setValue(
                                            this.dynamicobj['102-13comment']
                                        );
                                    this.finalobj['102-13comment'] =
                                        this.dynamicobj['102-13comment'];
                                }
                                if (yoy == 14) {
                                    this.gdform
                                        .get('sust')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-14a If yes topics'
                                            ]
                                        );
                                    this.finalobj['102-14a If yes topics'] =
                                        this.dynamicobj[
                                            '102-14a If yes topics'
                                        ];
                                    this.gdform
                                        .get('sust1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-14If yes topics'
                                            ]
                                        );
                                    this.finalobj['102-14If yes topics'] =
                                        this.dynamicobj['102-14If yes topics'];
                                    this.gdform
                                        .get('sust2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-14Describe topics'
                                            ]
                                        );
                                    this.finalobj['102-14Describe topics'] =
                                        this.dynamicobj[
                                            '102-14Describe topics'
                                        ];
                                    this.gdform
                                        .get('Text14')
                                        .setValue(
                                            this.dynamicobj['102-14comment']
                                        );
                                    this.finalobj['102-14comment'] =
                                        this.dynamicobj['102-14comment'];
                                }
                                if (yoy == 15) {
                                    this.gdform
                                        .get('conf')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-15Processes mitigated'
                                            ]
                                        );
                                    this.finalobj['102-15Processes mitigated'] =
                                        this.dynamicobj[
                                            '102-15Processes mitigated'
                                        ];
                                    this.gdform
                                        .get('conf1')
                                        .setValue(
                                            this.dynamicobj['102-15comment']
                                        );
                                    this.finalobj['102-15comment'] =
                                        this.dynamicobj['102-15comment'];
                                    this.gdform
                                        .get('conf2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-15If yes topics'
                                            ]
                                        );
                                    this.finalobj['102-15If yes topics'] =
                                        this.dynamicobj['102-15If yes topics'];
                                }
                                if (yoy == 16) {
                                    this.gdform
                                        .get('Communication1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-16Process body'
                                            ]
                                        );
                                    this.finalobj['102-16Process body'] =
                                        this.dynamicobj['102-16Process body'];
                                    this.gdform
                                        .get('Communication2')
                                        .setValue(
                                            this.dynamicobj['102-16Total body']
                                        );
                                    this.finalobj['102-16Total body'] =
                                        this.dynamicobj['102-16Total body'];
                                    this.gdform
                                        .get('Communication3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-16Mechanism concerns'
                                            ]
                                        );
                                    this.finalobj['102-16Mechanism concerns'] =
                                        this.dynamicobj[
                                            '102-16Mechanism concerns'
                                        ];
                                    this.gdform
                                        .get('Communication4')
                                        .setValue(
                                            this.dynamicobj['102-16Mechanism']
                                        );
                                    this.finalobj['102-16Mechanism'] =
                                        this.dynamicobj['102-16Mechanism'];
                                    this.gdform
                                        .get('Text16')
                                        .setValue(
                                            this.dynamicobj['102-16comment']
                                        );
                                    this.finalobj['102-16comment'] =
                                        this.dynamicobj['102-16comment'];
                                }
                                if (yoy == 17) {
                                    this.gdform
                                        .get('Collective')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-17Measures topics'
                                            ]
                                        );
                                    this.finalobj['102-17Measures topics'] =
                                        this.dynamicobj[
                                            '102-17Measures topics'
                                        ];
                                    this.gdform
                                        .get('Text17')
                                        .setValue(
                                            this.dynamicobj['102-17comment']
                                        );
                                    this.finalobj['102-17comment'] =
                                        this.dynamicobj['102-17comment'];
                                }
                                if (yoy == 18) {
                                    this.gdform
                                        .get('Evaluation')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-18Processes topics'
                                            ]
                                        );
                                    this.finalobj['102-18Processes topics'] =
                                        this.dynamicobj[
                                            '102-18Processes topics'
                                        ];
                                    this.gdform
                                        .get('Evaluation1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-18Whether frequency'
                                            ]
                                        );
                                    this.finalobj['102-18Whether frequency'] =
                                        this.dynamicobj[
                                            '102-18Whether frequency'
                                        ];
                                    this.gdform
                                        .get('Evaluation2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-18Actions practice'
                                            ]
                                        );
                                    this.finalobj['102-18Actions practice'] =
                                        this.dynamicobj[
                                            '102-18Actions practice'
                                        ];
                                    this.gdform
                                        .get('Text18')
                                        .setValue(
                                            this.dynamicobj['102-18comment']
                                        );
                                    this.finalobj['102-18comment'] =
                                        this.dynamicobj['102-18comment'];
                                    this.gdform
                                        .get('yesorno11')
                                        .setValue(
                                            this.dynamicobj['102-18Whether']
                                        );
                                    this.finalobj['102-18Whether'] =
                                        this.dynamicobj['102-18Whether'];

                                    this.gdform
                                        .get('Evaluation1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-18Whether frequency'
                                            ]
                                        );
                                    this.finalobj['102-18Whether frequency'] =
                                        this.dynamicobj[
                                            '102-18Whether frequency'
                                        ];
                                }
                                if (yoy == 19) {
                                    this.gdform
                                        .get('Remuneration1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-19Remuneration remuneration'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-19Remuneration remuneration'
                                    ] =
                                        this.dynamicobj[
                                            '102-19Remuneration remuneration'
                                        ];
                                    this.gdform
                                        .get('Remuneration2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-19Fixed shares'
                                            ]
                                        );
                                    this.finalobj['102-19Fixed shares'] =
                                        this.dynamicobj['102-19Fixed shares'];
                                    this.gdform
                                        .get('Remuneration3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-19Sign-on payments'
                                            ]
                                        );
                                    this.finalobj['102-19Sign-on payments'] =
                                        this.dynamicobj[
                                            '102-19Sign-on payments'
                                        ];
                                    this.gdform
                                        .get('Remuneration4')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-19Termination payments'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-19Termination payments'
                                    ] =
                                        this.dynamicobj[
                                            '102-19Termination payments'
                                        ];
                                    this.gdform
                                        .get('Remuneration5')
                                        .setValue(
                                            this.dynamicobj['102-19Clawbacks']
                                        );
                                    this.finalobj['102-19Clawbacks'] =
                                        this.dynamicobj['102-19Clawbacks'];
                                    this.gdform
                                        .get('Remuneration6')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-19Retirement employees'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-19Retirement employees'
                                    ] =
                                        this.dynamicobj[
                                            '102-19Retirement employees'
                                        ];
                                    this.gdform
                                        .get('Text19')
                                        .setValue(
                                            this.dynamicobj['102-19comment']
                                        );
                                    this.finalobj['102-19comment'] =
                                        this.dynamicobj['102-19comment'];
                                }
                                if (yoy == 20) {
                                    this.gdform
                                        .get('Proc1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-20Process remuneration'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-20Process remuneration'
                                    ] =
                                        this.dynamicobj[
                                            '102-20Process remuneration'
                                        ];
                                    this.gdform
                                        .get('Proc2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-20Whetherdetermining remuneration'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-20Whetherdetermining remuneration'
                                    ] =
                                        this.dynamicobj[
                                            '102-20Whetherdetermining remuneration'
                                        ];
                                    this.gdform
                                        .get('Proc3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-20How regarding remuneration'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-20How regarding remuneration'
                                    ] =
                                        this.dynamicobj[
                                            '102-20How regarding remuneration'
                                        ];
                                    this.gdform
                                        .get('Proc4')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-20Whether management'
                                            ]
                                        );
                                    this.finalobj['102-20Whether management'] =
                                        this.dynamicobj[
                                            '102-20Whether management'
                                        ];
                                    this.gdform
                                        .get('Proc5')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-20If applicable proposals'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-20If applicable proposals'
                                    ] =
                                        this.dynamicobj[
                                            '102-20If applicable proposals'
                                        ];
                                    this.gdform
                                        .get('Text20')
                                        .setValue(
                                            this.dynamicobj['102-20comment']
                                        );
                                    this.finalobj['102-20comment'] =
                                        this.dynamicobj['102-20comment'];
                                }
                                if (yoy == 21) {
                                    this.gdform
                                        .get('Annual1')
                                        .setValue(
                                            this.dynamicobj['102-21The country']
                                        );
                                    this.finalobj['102-21The country'] =
                                        this.dynamicobj['102-21The country'];
                                    this.gdform
                                        .get('Annual2')
                                        .setValue(
                                            this.dynamicobj['102-21Thecountry']
                                        );
                                    this.finalobj['102-21Thecountry'] =
                                        this.dynamicobj['102-21Thecountry'];
                                    this.gdform
                                        .get('Annual3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-21Describe compiled'
                                            ]
                                        );
                                    this.finalobj['102-21Describe compiled'] =
                                        this.dynamicobj[
                                            '102-21Describe compiled'
                                        ];
                                    this.gdform
                                        .get('Text21')
                                        .setValue(
                                            this.dynamicobj['102-21comment']
                                        );
                                    this.finalobj['102-21comment'] =
                                        this.dynamicobj['102-21comment'];
                                }
                                if (yoy == 22) {
                                    this.gdform
                                        .get('Statement1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe development'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-22Describe development'
                                    ] =
                                        this.dynamicobj[
                                            '102-22Describe development'
                                        ];
                                    this.gdform
                                        .get('Statement2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe rights'
                                            ]
                                        );
                                    this.finalobj['102-22Describe rights'] =
                                        this.dynamicobj[
                                            '102-22Describe rights'
                                        ];
                                    this.gdform
                                        .get('Statement3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe and people'
                                            ]
                                        );
                                    this.finalobj['102-22Describe and people'] =
                                        this.dynamicobj[
                                            '102-22Describe and people'
                                        ];
                                    this.gdform
                                        .get('Statement4')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe the instruments'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-22Describe the instruments'
                                    ] =
                                        this.dynamicobj[
                                            '102-22Describe the instruments'
                                        ];
                                    this.gdform
                                        .get('Statement5')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe  political'
                                            ]
                                        );
                                    this.finalobj['102-22Describe  political'] =
                                        this.dynamicobj[
                                            '102-22Describe  political'
                                        ];
                                    this.gdform
                                        .get('Statement6')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22Describe period'
                                            ]
                                        );
                                    this.finalobj['102-22Describe period'] =
                                        this.dynamicobj[
                                            '102-22Describe period'
                                        ];
                                    this.gdform
                                        .get('Statementvii')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-22main challenges'
                                            ]
                                        );
                                    this.finalobj['102-22main challenges'] =
                                        this.dynamicobj[
                                            '102-22main challenges'
                                        ];
                                    this.gdform
                                        .get('Text22')
                                        .setValue(
                                            this.dynamicobj['102-22comment']
                                        );
                                    this.finalobj['102-22comment'] =
                                        this.dynamicobj['102-22comment'];
                                }
                                if (yoy == 23) {
                                    this.gdform
                                        .get('Policy1')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q1'
                                            ]
                                        );
                                    this.finalobj['102-23q1'] =
                                        this.dynamicobj[
                                            '102-23q1'
                                        ];
                                    this.gdform
                                        .get('Policy2')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q2'
                                            ]
                                        );
                                    this.finalobj[
                                        '102-23q2'
                                    ] =
                                        this.dynamicobj[
                                            '102-23q2'
                                        ];
                                    this.gdform
                                        .get('Policy3')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q3'
                                            ]
                                        );
                                    this.finalobj['102-23q3'] =
                                        this.dynamicobj[
                                            '102-23q3'
                                        ];
                                    this.gdform
                                        .get('Policy4')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q4'
                                            ]
                                        );
                                    this.finalobj['102-23q4'] =
                                        this.dynamicobj[
                                            '102-23q4'
                                        ];
                                    this.gdform
                                        .get('Policy5')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q11'
                                            ]
                                        );
                                    this.finalobj['102-23q11'] =
                                        this.dynamicobj[
                                            '102-23q11'
                                        ];
                                    this.gdform
                                        .get('Policy6')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q12'
                                            ]
                                        );
                                    this.finalobj['102-23q12'] =
                                        this.dynamicobj[
                                            '102-23q12'
                                        ];
                                    this.gdform
                                        .get('Policy7')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q13'
                                            ]
                                        );
                                    this.finalobj['102-23q13'] =
                                        this.dynamicobj[
                                            '102-23q13'
                                        ];
                                    this.gdform
                                        .get('Policy8')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q14'
                                            ]
                                        );
                                    this.finalobj['102-23q14'] =
                                        this.dynamicobj[
                                            '102-23q14'
                                        ];
                                    this.gdform
                                        .get('Policy9')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q15'
                                            ]
                                        );
                                    this.finalobj['102-23q15'] =
                                        this.dynamicobj[
                                            '102-23q15'
                                        ];
                                    this.gdform
                                        .get('Policy10')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q16'
                                            ]
                                        );
                                    this.finalobj['102-23q16'] =
                                        this.dynamicobj[
                                            '102-23q16'
                                        ];
                                    this.gdform
                                        .get('Policy11')
                                        .setValue(
                                            this.dynamicobj[
                                                '102-23q17'
                                            ]
                                        );
                                    this.finalobj['102-23q17'] =
                                        this.dynamicobj['102-23q17'];
                                    this.gdform
                                        .get('Text23')
                                        .setValue(
                                            this.dynamicobj['102-23comment']
                                        );
                                    this.finalobj['102-23comment'] =
                                        this.dynamicobj['102-23comment'];
                                    if (
                                        this.dynamicobj['102-23q5'] ==
                                            undefined ||
                                        this.dynamicobj['102-23q5'] == null ||
                                        this.dynamicobj['102-23q5'] == '' ||
                                        this.dynamicobj['102-23q5'] == '[]'
                                    ) {
                                        this.finalobj['102-23q5'] = '';
                                    } else {
                                        console.log(this.dynamicobj['102-23q5']);
                                        this.finalobj['102-23q5'] = JSON.parse(
                                            this.dynamicobj['102-23q5']
                                        );
                                        this.lookupdtl54 = JSON.parse(
                                            this.dynamicobj['102-23q5']
                                        );
                                        console.log(this.lookupdtl54);
                                    }

                                    this.gdform
                                        .get('empy36')
                                        .setValue(this.dynamicobj['102-23q6']);
                                    this.finalobj['102-23q6'] =
                                        this.dynamicobj['102-23q6'];
                                    this.gdform
                                        .get('empy37')
                                        .setValue(this.dynamicobj['102-23q7']);
                                    this.finalobj['102-23q7'] =
                                        this.dynamicobj['102-23q7'];

                                    this.gdform
                                        .get('empy38')
                                        .setValue(this.dynamicobj['102-23q58']);
                                    this.finalobj['102-23q58'] =
                                        this.dynamicobj['102-23q58'];
                                    this.gdform
                                        .get('empy39')
                                        .setValue(this.dynamicobj['102-23q9']);
                                    this.finalobj['102-23q9'] =
                                        this.dynamicobj['102-23q9'];
                                    this.gdform
                                        .get('empy40')
                                        .setValue(this.dynamicobj['102-23q10']);
                                    this.finalobj['102-23q10'] =
                                        this.dynamicobj['102-23q10'];
                                }
                                if (yoy == 24) {
                                    this.gdform
                                        .get('Embedding1')
                                        .setValue(this.dynamicobj['102-24Q1']);
                                    this.finalobj['102-24Q1'] =
                                        this.dynamicobj['102-24Q1'];
                                    this.gdform
                                        .get('Embedding2')
                                        .setValue(this.dynamicobj['102-24Q2']);
                                    this.finalobj['102-24Q2'] =
                                        this.dynamicobj['102-24Q2'];
                                    this.gdform
                                        .get('Embedding3')
                                        .setValue(this.dynamicobj['102-24Q3']);
                                    this.finalobj['102-24Q3'] =
                                        this.dynamicobj['102-24Q3'];
                                    this.gdform
                                        .get('Embedding4')
                                        .setValue(this.dynamicobj['102-24Q4']);
                                    this.finalobj['102-24Q4'] =
                                        this.dynamicobj['102-24Q4'];
                                    this.gdform
                                        .get('Text24')
                                        .setValue(
                                            this.dynamicobj['102-24comment']
                                        );
                                    this.finalobj['102-24comment'] =
                                        this.dynamicobj['102-24comment'];
                                }
                                if (yoy == 25) {
                                    this.gdform
                                        .get('Processinto1')
                                        .setValue(this.dynamicobj['102-25Q1']);
                                    this.finalobj['102-25Q1'] =
                                        this.dynamicobj['102-25Q1'];
                                    this.gdform
                                        .get('Processinto2')
                                        .setValue(this.dynamicobj['102-25Q2']);
                                    this.finalobj['102-25Q2'] =
                                        this.dynamicobj['102-25Q2'];
                                    this.gdform
                                        .get('Processinto3')
                                        .setValue(this.dynamicobj['102-25Q3']);
                                    this.finalobj['102-25Q3'] =
                                        this.dynamicobj['102-25Q3'];
                                    this.gdform
                                        .get('Processinto4')
                                        .setValue(this.dynamicobj['102-25Q4']);
                                    this.finalobj['102-25Q4'] =
                                        this.dynamicobj['102-25Q4'];
                                    this.gdform
                                        .get('Processinto5')
                                        .setValue(this.dynamicobj['102-25Q5']);
                                    this.finalobj['102-25Q5'] =
                                        this.dynamicobj['102-25Q5'];
                                    this.gdform
                                        .get('Text25')
                                        .setValue(
                                            this.dynamicobj['102-25comment']
                                        );
                                    this.finalobj['102-25comment'] =
                                        this.dynamicobj['102-25comment'];
                                }
                                if (yoy == 26) {
                                    this.gdform
                                        .get('mech1')
                                        .setValue(this.dynamicobj['102-26Q1']);
                                    this.finalobj['102-26Q1'] =
                                        this.dynamicobj['102-26Q1'];
                                    this.gdform
                                        .get('mech2')
                                        .setValue(this.dynamicobj['102-26Q2']);
                                    this.finalobj['102-26Q2'] =
                                        this.dynamicobj['102-26Q2'];
                                    this.gdform
                                        .get('mech3')
                                        .setValue(this.dynamicobj['102-26Q3']);
                                    this.finalobj['102-26Q3'] =
                                        this.dynamicobj['102-26Q3'];
                                    this.gdform
                                        .get('mech4')
                                        .setValue(this.dynamicobj['102-26Q4']);
                                    this.finalobj['102-26Q4'] =
                                        this.dynamicobj['102-26Q4'];
                                    this.gdform
                                        .get('mech5')
                                        .setValue(this.dynamicobj['102-26Q5']);
                                    this.finalobj['102-26Q5'] =
                                        this.dynamicobj['102-26Q5'];
                                    this.gdform
                                        .get('mech6')
                                        .setValue(this.dynamicobj['102-26Q6']);
                                    this.finalobj['102-26Q6'] =
                                        this.dynamicobj['102-26Q6'];
                                    this.gdform
                                        .get('mech7')
                                        .setValue(this.dynamicobj['102-26Q7']);
                                    this.finalobj['102-26Q7'] =
                                        this.dynamicobj['102-26Q7'];
                                    this.gdform
                                        .get('mech8')
                                        .setValue(this.dynamicobj['102-26Q8']);
                                    this.finalobj['102-26Q8'] =
                                        this.dynamicobj['102-26Q8'];
                                    this.gdform
                                        .get('mech9')
                                        .setValue(this.dynamicobj['102-26Q9']);
                                    this.finalobj['102-26Q9'] =
                                        this.dynamicobj['102-26Q9'];
                                    this.gdform
                                        .get('mech10')
                                        .setValue(this.dynamicobj['102-26Q10']);
                                    this.finalobj['102-26Q10'] =
                                        this.dynamicobj['102-26Q10'];
                                    this.gdform
                                        .get('mech11')
                                        .setValue(this.dynamicobj['102-26Q11']);
                                    this.finalobj['102-26Q11'] =
                                        this.dynamicobj['102-26Q11'];
                                    this.gdform
                                        .get('mech12')
                                        .setValue(this.dynamicobj['102-26Q12']);
                                    this.finalobj['102-26Q12'] =
                                        this.dynamicobj['102-26Q12'];
                                    this.gdform
                                        .get('mech13')
                                        .setValue(this.dynamicobj['102-26Q13']);
                                    this.finalobj['102-26Q13'] =
                                        this.dynamicobj['102-26Q13'];
                                    this.gdform
                                        .get('mech14')
                                        .setValue(this.dynamicobj['102-26Q14']);
                                    this.finalobj['102-26Q14'] =
                                        this.dynamicobj['102-26Q14'];
                                    this.gdform
                                        .get('mech15')
                                        .setValue(this.dynamicobj['102-26Q15']);
                                    this.finalobj['102-26Q15'] =
                                        this.dynamicobj['102-26Q15'];
                                    this.gdform
                                        .get('Text26')
                                        .setValue(
                                            this.dynamicobj['102-26comment']
                                        );
                                    this.finalobj['102-26comment'] =
                                        this.dynamicobj['102-26comment'];
                                }
                                if (yoy == 27) {
                                    if (
                                        this.dynamicobj['102-27b11AddTable'] ==
                                            null ||
                                        this.dynamicobj['102-27b11AddTable'] ==
                                            '' ||
                                        this.dynamicobj['102-27b11AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['102-27b11AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-27b11AddTable'] = '';
                                    } else {
                                        this.finalobj['102-27b11AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '102-27b11AddTable'
                                                ]
                                            );
                                        this.lookupdtl27bi = JSON.parse(
                                            this.dynamicobj['102-27b11AddTable']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['102-27b22AddTable'] ==
                                            null ||
                                        this.dynamicobj['102-27b22AddTable'] ==
                                            '' ||
                                        this.dynamicobj['102-27b22AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['102-27b22AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['102-27b22AddTable'] = '';
                                    } else {
                                        this.finalobj['102-27b22AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '102-27b22AddTable'
                                                ]
                                            );
                                        this.lookupdtl27bii = JSON.parse(
                                            this.dynamicobj['102-27b22AddTable']
                                        );
                                    }

                                    this.gdform
                                        .get('compir1')
                                        .setValue(this.dynamicobj['102-27Q1']);
                                    this.finalobj['102-27Q1'] =
                                        this.dynamicobj['102-27Q1'];
                                    this.gdform
                                        .get('compir2')
                                        .setValue(this.dynamicobj['102-27Q2']);
                                    this.finalobj['102-27Q2'] =
                                        this.dynamicobj['102-27Q2'];
                                    this.gdform
                                        .get('compir3')
                                        .setValue(this.dynamicobj['102-27Q3']);
                                    this.finalobj['102-27Q3'] =
                                        this.dynamicobj['102-27Q3'];
                                    this.gdform
                                        .get('compir4')
                                        .setValue(this.dynamicobj['102-27Q4']);
                                    this.finalobj['102-27Q4'] =
                                        this.dynamicobj['102-27Q4'];
                                    this.gdform
                                        .get('compir5')
                                        .setValue(this.dynamicobj['102-27Q5']);
                                    this.finalobj['102-27Q5'] =
                                        this.dynamicobj['102-27Q5'];
                                    this.gdform
                                        .get('compir6')
                                        .setValue(this.dynamicobj['102-27Q6']);
                                    this.finalobj['102-27Q6'] =
                                        this.dynamicobj['102-27Q6'];
                                    this.gdform
                                        .get('compir7')
                                        .setValue(this.dynamicobj['102-27Q7']);
                                    this.finalobj['102-27Q7'] =
                                        this.dynamicobj['102-27Q7'];
                                    //  this.gdform.get('compir8').setValue(this.dynamicobj['102-27Q8'])
                                    //  this.finalobj["102-27Q8"] = this.dynamicobj['102-27Q8'];
                                    //  this.gdform.get('compir9').setValue(this.dynamicobj['102-27Q9'])
                                    //  this.finalobj["102-27Q9"] = this.dynamicobj['102-27Q9'];
                                    this.gdform
                                        .get('compir10')
                                        .setValue(this.dynamicobj['102-27Q10']);
                                    this.finalobj['102-27Q10'] =
                                        this.dynamicobj['102-27Q10'];
                                    this.gdform
                                        .get('compir11')
                                        .setValue(this.dynamicobj['102-27Q11']);
                                    this.finalobj['102-27Q11'] =
                                        this.dynamicobj['102-27Q11'];
                                    this.gdform
                                        .get('Text27')
                                        .setValue(
                                            this.dynamicobj['102-27comment']
                                        );
                                    this.finalobj['102-27comment'] =
                                        this.dynamicobj['102-27comment'];
                                }
                                if (yoy == 28) {
                                    this.gdform
                                        .get('mema1')
                                        .setValue(this.dynamicobj['102-28Q1']);
                                    this.finalobj['102-28Q1'] =
                                        this.dynamicobj['102-28Q1'];
                                    this.gdform
                                        .get('Text28')
                                        .setValue(
                                            this.dynamicobj['102-28comment']
                                        );
                                    this.finalobj['102-28comment'] =
                                        this.dynamicobj['102-28comment'];
                                }
                                if (yoy == 29) {
                                    this.gdform
                                        .get('asseg1')
                                        .setValue(this.dynamicobj['102-29Q1']);
                                    this.finalobj['102-29Q1'] =
                                        this.dynamicobj['102-29Q1'];
                                    this.gdform
                                        .get('asseg2')
                                        .setValue(this.dynamicobj['102-29Q2']);
                                    this.finalobj['102-29Q2'] =
                                        this.dynamicobj['102-29Q2'];
                                    this.gdform
                                        .get('asseg3')
                                        .setValue(this.dynamicobj['102-29Q3']);
                                    this.finalobj['102-29Q3'] =
                                        this.dynamicobj['102-29Q3'];
                                    this.gdform
                                        .get('Text29')
                                        .setValue(
                                            this.dynamicobj['102-29comment']
                                        );
                                    this.finalobj['102-29comment'] =
                                        this.dynamicobj['102-29comment'];
                                }
                                if (yoy == 30) {
                                    this.gdform
                                        .get('cba1')
                                        .setValue(this.dynamicobj['102-30Q1']);
                                    this.finalobj['102-30Q1'] =
                                        this.dynamicobj['102-30Q1'];
                                    this.gdform
                                        .get('cba2')
                                        .setValue(this.dynamicobj['102-30Q2']);
                                    this.finalobj['102-30Q2'] =
                                        this.dynamicobj['102-30Q2'];
                                    this.gdform
                                        .get('cba3')
                                        .setValue(this.dynamicobj['102-30Q3']);
                                    this.finalobj['102-30Q3'] =
                                        this.dynamicobj['102-30Q3'];
                                    this.gdform
                                        .get('Text30')
                                        .setValue(
                                            this.dynamicobj['102-30comment']
                                        );
                                    this.finalobj['102-30comment'] =
                                        this.dynamicobj['102-30comment'];
                                }

                                //economic starts here

                                if (yoy == 31) {
                                    this.economicform
                                        .get('mh1')
                                        .setValue(
                                            this.dynamicobj['201-1question1']
                                        );
                                    this.finalobj['201-1question1'] =
                                        this.dynamicobj['201-1question1'];
                                    this.economicform
                                        .get('mh1cash')
                                        .setValue(
                                            this.dynamicobj['201-1questioncash']
                                        );
                                    this.finalobj['201-1questioncash'] =
                                        this.dynamicobj['201-1questioncash'];
                                    console.log(
                                        this.finalobj['201-1question1']
                                    );

                                    if (
                                        this.dynamicobj['201-1question2'] ==
                                            null ||
                                        this.dynamicobj['201-1question2'] ==
                                            '' ||
                                        this.dynamicobj['201-1question2'] ==
                                            '[]' ||
                                        this.dynamicobj['201-1question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-1question2'] = '';
                                    } else {
                                        this.finalobj['201-1question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-1question2'
                                                ]
                                            );
                                        this.lookup = JSON.parse(
                                            this.dynamicobj['201-1question2']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-1question3'] ==
                                            null ||
                                        this.dynamicobj['201-1question3'] ==
                                            '' ||
                                        this.dynamicobj['201-1question3'] ==
                                            '[]' ||
                                        this.dynamicobj['201-1question3'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-1question3'] = '';
                                    } else {
                                        this.finalobj['201-1question3'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-1question3'
                                                ]
                                            );
                                        this.lookup1 = JSON.parse(
                                            this.dynamicobj['201-1question3']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-1question4'] ==
                                            null ||
                                        this.dynamicobj['201-1question4'] ==
                                            '' ||
                                        this.dynamicobj['201-1question4'] ==
                                            '[]' ||
                                        this.dynamicobj['201-1question4'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-1question4'] = '';
                                    } else {
                                        this.finalobj['201-1question4'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-1question4'
                                                ]
                                            );
                                        this.lookup2 = JSON.parse(
                                            this.dynamicobj['201-1question4']
                                        );
                                    }
                                    this.economicform
                                        .get('mh5')
                                        .setValue(
                                            this.dynamicobj['201-1question5']
                                        );
                                    this.finalobj['201-1question5'] =
                                        this.dynamicobj['201-1question5'];

                                    this.economicform
                                        .get('mh6')
                                        .setValue(
                                            this.dynamicobj['201-1question6']
                                        );
                                    this.finalobj['201-1question6'] =
                                        this.dynamicobj['201-1question6'];

                                    this.economicform
                                        .get('mh7')
                                        .setValue(
                                            this.dynamicobj['201-1comment']
                                        );
                                    this.finalobj['201-1comment'] =
                                        this.dynamicobj['201-1comment'];
                                }

                                if (yoy == 32) {
                                    this.economicform
                                        .get('eco1')
                                        .setValue(
                                            this.dynamicobj['201-2question1']
                                        );
                                    this.finalobj['201-2question1'] =
                                        this.dynamicobj['201-2question1'];

                                    this.economicform
                                        .get('eco2')
                                        .setValue(
                                            this.dynamicobj['201-2question2']
                                        );
                                    this.finalobj['201-2question2'] =
                                        this.dynamicobj['201-2question2'];

                                    this.economicform
                                        .get('eco3')
                                        .setValue(
                                            this.dynamicobj['201-2question3']
                                        );
                                    this.finalobj['201-2question3'] =
                                        this.dynamicobj['201-2question3'];

                                    this.economicform
                                        .get('eco4')
                                        .setValue(
                                            this.dynamicobj['201-2question4']
                                        );
                                    this.finalobj['201-2question4'] =
                                        this.dynamicobj['201-2question4'];

                                    this.economicform
                                        .get('eco5')
                                        .setValue(
                                            this.dynamicobj['201-2question5']
                                        );
                                    this.finalobj['201-2question5'] =
                                        this.dynamicobj['201-2question5'];

                                    this.economicform
                                        .get('eco6')
                                        .setValue(
                                            this.dynamicobj['201-2question6']
                                        );
                                    this.finalobj['201-2question6'] =
                                        this.dynamicobj['201-2question6'];

                                    this.economicform
                                        .get('eco7')
                                        .setValue(
                                            this.dynamicobj['201-2comment']
                                        );
                                    this.finalobj['201-2comment'] =
                                        this.dynamicobj['201-2comment'];
                                    if (
                                        this.dynamicobj['201-2question-v'] ==
                                            null ||
                                        this.dynamicobj['201-2question-v'] ==
                                            '' ||
                                        this.dynamicobj['201-2question-v'] ==
                                            '[]' ||
                                        this.dynamicobj['201-2question-v'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-2question-v'] = '';
                                    } else {
                                        this.finalobj['201-2question-v'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-2question-v'
                                                ]
                                            );
                                        this.lookupdtleco = JSON.parse(
                                            this.dynamicobj['201-2question-v']
                                        );
                                    }
                                }
                                if (yoy == 33) {
                                    if (
                                        this.dynamicobj['201-3question1'] ==
                                            null ||
                                        this.dynamicobj['201-3question1'] ==
                                            '' ||
                                        this.dynamicobj['201-3question1'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question1'] = '';
                                    } else {
                                        this.finalobj['201-3question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question1'
                                                ]
                                            );
                                        this.lookup3 = JSON.parse(
                                            this.dynamicobj['201-3question1']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-3question2'] ==
                                            null ||
                                        this.dynamicobj['201-3question2'] ==
                                            '' ||
                                        this.dynamicobj['201-3question2'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question2'] = '';
                                    } else {
                                        this.finalobj['201-3question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question2'
                                                ]
                                            );
                                        this.lookup4 = JSON.parse(
                                            this.dynamicobj['201-3question2']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-3question3'] ==
                                            null ||
                                        this.dynamicobj['201-3question3'] ==
                                            '' ||
                                        this.dynamicobj['201-3question3'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question3'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question3'] = '';
                                    } else {
                                        this.finalobj['201-3question3'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question3'
                                                ]
                                            );
                                        this.lookup5 = JSON.parse(
                                            this.dynamicobj['201-3question3']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-3question4'] ==
                                            null ||
                                        this.dynamicobj['201-3question4'] ==
                                            '' ||
                                        this.dynamicobj['201-3question4'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question4'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question4'] = '';
                                    } else {
                                        this.finalobj['201-3question4'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question4'
                                                ]
                                            );
                                        this.lookup6 = JSON.parse(
                                            this.dynamicobj['201-3question4']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-3question5'] ==
                                            null ||
                                        this.dynamicobj['201-3question5'] ==
                                            '' ||
                                        this.dynamicobj['201-3question5'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question5'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question5'] = '';
                                    } else {
                                        this.finalobj['201-3question5'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question5'
                                                ]
                                            );
                                        this.lookup7 = JSON.parse(
                                            this.dynamicobj['201-3question5']
                                        );
                                    }
                                    this.economicform
                                        .get('ecothree6')
                                        .setValue(
                                            this.dynamicobj['201-3question6']
                                        );
                                    this.finalobj['201-3question6'] =
                                        this.dynamicobj['201-3question6'];

                                    this.economicform
                                        .get('ecothree10')
                                        .setValue(
                                            this.dynamicobj['201-3question10']
                                        );
                                    this.finalobj['201-3question10'] =
                                        this.dynamicobj['201-3question10'];

                                    if (
                                        this.dynamicobj['201-3question7'] ==
                                            null ||
                                        this.dynamicobj['201-3question7'] ==
                                            '' ||
                                        this.dynamicobj['201-3question7'] ==
                                            '[]' ||
                                        this.dynamicobj['201-3question7'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-3question7'] = '';
                                    } else {
                                        this.finalobj['201-3question7'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-3question7'
                                                ]
                                            );
                                        this.lookup8 = JSON.parse(
                                            this.dynamicobj['201-3question7']
                                        );
                                    }

                                    this.economicform
                                        .get('ecothree8')
                                        .setValue(
                                            this.dynamicobj['201-3question8']
                                        );
                                    this.finalobj['201-3question8'] =
                                        this.dynamicobj['201-3question8'];

                                    this.economicform
                                        .get('ecothree9')
                                        .setValue(
                                            this.dynamicobj['201-3comment']
                                        );
                                    this.finalobj['201-3comment'] =
                                        this.dynamicobj['201-3comment'];
                                }
                                if (yoy == 34) {
                                    if (
                                        this.dynamicobj['201-4question1'] ==
                                            null ||
                                        this.dynamicobj['201-4question1'] ==
                                            '' ||
                                        this.dynamicobj['201-4question1'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question1'] = '';
                                    } else {
                                        this.finalobj['201-4question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question1'
                                                ]
                                            );
                                        this.lookup9 = JSON.parse(
                                            this.dynamicobj['201-4question1']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question2'] ==
                                            null ||
                                        this.dynamicobj['201-4question2'] ==
                                            '' ||
                                        this.dynamicobj['201-4question2'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question2'] = '';
                                    } else {
                                        this.finalobj['201-4question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question2'
                                                ]
                                            );
                                        this.lookup10 = JSON.parse(
                                            this.dynamicobj['201-4question2']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-4question3'] ==
                                            null ||
                                        this.dynamicobj['201-4question3'] ==
                                            '' ||
                                        this.dynamicobj['201-4question3'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question3'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question3'] = '';
                                    } else {
                                        this.finalobj['201-4question3'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question3'
                                                ]
                                            );
                                        this.lookup11 = JSON.parse(
                                            this.dynamicobj['201-4question3']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-4question4'] ==
                                            null ||
                                        this.dynamicobj['201-4question4'] ==
                                            '' ||
                                        this.dynamicobj['201-4question4'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question4'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question4'] = '';
                                    } else {
                                        this.finalobj['201-4question4'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question4'
                                                ]
                                            );
                                        this.lookup12 = JSON.parse(
                                            this.dynamicobj['201-4question4']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question5'] ==
                                            null ||
                                        this.dynamicobj['201-4question5'] ==
                                            '' ||
                                        this.dynamicobj['201-4question5'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question5'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question5'] = '';
                                    } else {
                                        this.finalobj['201-4question5'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question5'
                                                ]
                                            );
                                        this.lookup13 = JSON.parse(
                                            this.dynamicobj['201-4question5']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question6'] ==
                                            null ||
                                        this.dynamicobj['201-4question6'] ==
                                            '' ||
                                        this.dynamicobj['201-4question6'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question6'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question6'] = '';
                                    } else {
                                        this.finalobj['201-4question6'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question6'
                                                ]
                                            );
                                        this.lookup14 = JSON.parse(
                                            this.dynamicobj['201-4question6']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question7'] ==
                                            null ||
                                        this.dynamicobj['201-4question7'] ==
                                            '' ||
                                        this.dynamicobj['201-4question7'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question7'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question7'] = '';
                                    } else {
                                        this.finalobj['201-4question7'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question7'
                                                ]
                                            );
                                        this.lookup15 = JSON.parse(
                                            this.dynamicobj['201-4question7']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question8'] ==
                                            null ||
                                        this.dynamicobj['201-4question8'] ==
                                            '' ||
                                        this.dynamicobj['201-4question8'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question8'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question8'] = '';
                                    } else {
                                        this.finalobj['201-4question8'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question8'
                                                ]
                                            );
                                        this.lookup16 = JSON.parse(
                                            this.dynamicobj['201-4question8']
                                        );
                                    }

                                    this.economicform
                                        .get('location1')
                                        .setValue(
                                            this.dynamicobj['201-4question9']
                                        );
                                    this.finalobj['201-4question9'] =
                                        this.dynamicobj['201-4question9'];

                                    if (
                                        this.dynamicobj['201-4question10'] ==
                                            null ||
                                        this.dynamicobj['201-4question10'] ==
                                            '' ||
                                        this.dynamicobj['201-4question10'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question10'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question10'] = '';
                                    } else {
                                        this.finalobj['201-4question10'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question10'
                                                ]
                                            );
                                        this.lookup17 = JSON.parse(
                                            this.dynamicobj['201-4question10']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question11'] ==
                                            null ||
                                        this.dynamicobj['201-4question11'] ==
                                            '' ||
                                        this.dynamicobj['201-4question11'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question11'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question11'] = '';
                                    } else {
                                        this.finalobj['201-4question11'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question11'
                                                ]
                                            );
                                        this.lookup18 = JSON.parse(
                                            this.dynamicobj['201-4question11']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question12'] ==
                                            null ||
                                        this.dynamicobj['201-4question12'] ==
                                            '' ||
                                        this.dynamicobj['201-4question12'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question12'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question12'] = '';
                                    } else {
                                        this.finalobj['201-4question12'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question12'
                                                ]
                                            );
                                        this.lookup19 = JSON.parse(
                                            this.dynamicobj['201-4question12']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-4question13'] ==
                                            null ||
                                        this.dynamicobj['201-4question13'] ==
                                            '' ||
                                        this.dynamicobj['201-4question13'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question13'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question13'] = '';
                                    } else {
                                        this.finalobj['201-4question13'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question13'
                                                ]
                                            );
                                        this.lookup20 = JSON.parse(
                                            this.dynamicobj['201-4question13']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question14'] ==
                                            null ||
                                        this.dynamicobj['201-4question14'] ==
                                            '' ||
                                        this.dynamicobj['201-4question14'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question14'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question14'] = '';
                                    } else {
                                        this.finalobj['201-4question14'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question14'
                                                ]
                                            );
                                        this.lookup21 = JSON.parse(
                                            this.dynamicobj['201-4question14']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['201-4question15'] ==
                                            null ||
                                        this.dynamicobj['201-4question15'] ==
                                            '' ||
                                        this.dynamicobj['201-4question15'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question15'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question15'] = '';
                                    } else {
                                        this.finalobj['201-4question15'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question15'
                                                ]
                                            );
                                        this.lookup22 = JSON.parse(
                                            this.dynamicobj['201-4question15']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question16'] ==
                                            null ||
                                        this.dynamicobj['201-4question16'] ==
                                            '' ||
                                        this.dynamicobj['201-4question16'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question16'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question16'] = '';
                                    } else {
                                        this.finalobj['201-4question16'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question16'
                                                ]
                                            );
                                        this.lookup23 = JSON.parse(
                                            this.dynamicobj['201-4question16']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['201-4question17'] ==
                                            null ||
                                        this.dynamicobj['201-4question17'] ==
                                            '' ||
                                        this.dynamicobj['201-4question17'] ==
                                            '[]' ||
                                        this.dynamicobj['201-4question17'] ==
                                            undefined
                                    ) {
                                        this.finalobj['201-4question17'] = '';
                                    } else {
                                        this.finalobj['201-4question17'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '201-4question17'
                                                ]
                                            );
                                        this.lookup24 = JSON.parse(
                                            this.dynamicobj['201-4question17']
                                        );
                                    }

                                    this.economicform
                                        .get('ecofour17ii')
                                        .setValue(
                                            this.dynamicobj['201-4question18']
                                        );
                                    this.finalobj['201-4question18'] =
                                        this.dynamicobj['201-4question18'];

                                    this.economicform
                                        .get('ecofour17iii')
                                        .setValue(
                                            this.dynamicobj['201-4question19']
                                        );
                                    this.finalobj['201-4question19'] =
                                        this.dynamicobj['201-4question19'];

                                    this.economicform
                                        .get('ecofour17')
                                        .setValue(
                                            this.dynamicobj['201-4comment']
                                        );
                                    this.finalobj['201-4comment'] =
                                        this.dynamicobj['201-4comment'];
                                }
                                if (yoy == 35) {
                                    if (
                                        this.dynamicobj['202-1question1'] ==
                                            null ||
                                        this.dynamicobj['202-1question1'] ==
                                            '' ||
                                        this.dynamicobj['202-1question1'] ==
                                            '[]' ||
                                        this.dynamicobj['202-1question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['202-1question1'] = '';
                                    } else {
                                        this.finalobj['202-1question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '202-1question1'
                                                ]
                                            );
                                        this.lookupdtl3 = JSON.parse(
                                            this.dynamicobj['202-1question1']
                                        );
                                    }

                                    this.economicform
                                        .get('markpref2')
                                        .setValue(
                                            this.dynamicobj['202-1question2']
                                        );
                                    this.finalobj['202-1question2'] =
                                        this.dynamicobj['202-1question2'];

                                    this.economicform
                                        .get('markpref3')
                                        .setValue(
                                            this.dynamicobj['202-1question3']
                                        );
                                    this.finalobj['202-1question3'] =
                                        this.dynamicobj['202-1question3'];

                                    this.economicform
                                        .get('markpref4')
                                        .setValue(
                                            this.dynamicobj['202-1question4']
                                        );
                                    this.finalobj['202-1question4'] =
                                        this.dynamicobj['202-1question4'];

                                    this.economicform
                                        .get('markpref5')
                                        .setValue(
                                            this.dynamicobj['202-1comment']
                                        );
                                    this.finalobj['202-1comment'] =
                                        this.dynamicobj['202-1comment'];
                                }
                                if (yoy == 36) {
                                    if (
                                        this.dynamicobj['202-2question1'] ==
                                            null ||
                                        this.dynamicobj['202-2question1'] ==
                                            '' ||
                                        this.dynamicobj['202-2question1'] ==
                                            '[]' ||
                                        this.dynamicobj['202-2question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['202-2question1'] = '';
                                    } else {
                                        this.finalobj['202-2question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '202-2question1'
                                                ]
                                            );
                                        this.lookupdtl4 = JSON.parse(
                                            this.dynamicobj['202-2question1']
                                        );
                                    }

                                    this.economicform
                                        .get('markpreff2')
                                        .setValue(
                                            this.dynamicobj['202-2question2']
                                        );
                                    this.finalobj['202-2question2'] =
                                        this.dynamicobj['202-2question2'];

                                    this.economicform
                                        .get('markpreff3')
                                        .setValue(
                                            this.dynamicobj['202-2question3']
                                        );
                                    this.finalobj['202-2question3'] =
                                        this.dynamicobj['202-2question3'];

                                    this.economicform
                                        .get('markpreff4')
                                        .setValue(
                                            this.dynamicobj['202-2question4']
                                        );
                                    this.finalobj['202-2question4'] =
                                        this.dynamicobj['202-2question4'];

                                    this.economicform
                                        .get('markpreff5')
                                        .setValue(
                                            this.dynamicobj['202-2comment']
                                        );
                                    this.finalobj['202-2comment'] =
                                        this.dynamicobj['202-2comment'];
                                }
                                if (yoy == 37) {
                                    this.economicform
                                        .get('iei1')
                                        .setValue(
                                            this.dynamicobj['203-1question1']
                                        );
                                    this.finalobj['203-1question1'] =
                                        this.dynamicobj['203-1question1'];

                                    this.economicform
                                        .get('iei2')
                                        .setValue(
                                            this.dynamicobj['203-1question2']
                                        );
                                    this.finalobj['203-1question2'] =
                                        this.dynamicobj['203-1question2'];

                                    this.economicform
                                        .get('iei3')
                                        .setValue(
                                            this.dynamicobj['203-1question3']
                                        );
                                    this.finalobj['203-1question3'] =
                                        this.dynamicobj['203-1question3'];

                                    this.economicform
                                        .get('iei4')
                                        .setValue(
                                            this.dynamicobj['203-1comment']
                                        );
                                    this.finalobj['203-1comment'] =
                                        this.dynamicobj['203-1comment'];
                                }
                                if (yoy == 38) {
                                    if (
                                        this.dynamicobj['203-2question1'] ==
                                            null ||
                                        this.dynamicobj['203-2question1'] ==
                                            '' ||
                                        this.dynamicobj['203-2question1'] ==
                                            '[]' ||
                                        this.dynamicobj['203-2question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['203-2question1'] = '';
                                    } else {
                                        this.finalobj['203-2question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '203-2question1'
                                                ]
                                            );
                                        this.lookup25 = JSON.parse(
                                            this.dynamicobj['203-2question1']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['203-2question2'] ==
                                            null ||
                                        this.dynamicobj['203-2question2'] ==
                                            '' ||
                                        this.dynamicobj['203-2question2'] ==
                                            '[]' ||
                                        this.dynamicobj['203-2question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['203-2question2'] = '';
                                    } else {
                                        this.finalobj['203-2question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '203-2question2'
                                                ]
                                            );
                                        this.lookup26 = JSON.parse(
                                            this.dynamicobj['203-2question2']
                                        );
                                    }

                                    this.economicform
                                        .get('ieii3')
                                        .setValue(
                                            this.dynamicobj['203-2comment']
                                        );
                                    this.finalobj['203-2comment'] =
                                        this.dynamicobj['203-2comment'];
                                }
                                if (yoy == 39) {
                                    if (
                                        this.dynamicobj['204-1question1'] ==
                                            null ||
                                        this.dynamicobj['204-1question1'] ==
                                            '' ||
                                        this.dynamicobj['204-1question1'] ==
                                            '[]' ||
                                        this.dynamicobj['204-1question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['204-1question1'] = '';
                                    } else {
                                        this.finalobj['204-1question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '204-1question1'
                                                ]
                                            );
                                        this.lookupdtl5 = JSON.parse(
                                            this.dynamicobj['204-1question1']
                                        );
                                    }

                                    this.economicform
                                        .get('pp2')
                                        .setValue(
                                            this.dynamicobj['204-1question2']
                                        );
                                    this.finalobj['204-1question2'] =
                                        this.dynamicobj['204-1question2'];

                                    this.economicform
                                        .get('pp3')
                                        .setValue(
                                            this.dynamicobj['204-1question3']
                                        );
                                    this.finalobj['204-1question3'] =
                                        this.dynamicobj['204-1question3'];

                                    this.economicform
                                        .get('pp4')
                                        .setValue(
                                            this.dynamicobj['204-1comment']
                                        );
                                    this.finalobj['204-1comment'] =
                                        this.dynamicobj['204-1comment'];
                                }
                                if (yoy == 40) {
                                    this.economicform
                                        .get('Ac1')
                                        .setValue(
                                            this.dynamicobj['205-1question1']
                                        );
                                    this.finalobj['205-1question1'] =
                                        this.dynamicobj['205-1question1'];

                                    this.economicform
                                        .get('Ac1percentage')
                                        .setValue(
                                            this.dynamicobj[
                                                '205-1question1percentage'
                                            ]
                                        );
                                    this.finalobj['205-1question1percentage'] =
                                        this.dynamicobj[
                                            '205-1question1percentage'
                                        ];

                                    this.economicform
                                        .get('Ac2')
                                        .setValue(
                                            this.dynamicobj['205-1question2']
                                        );
                                    this.finalobj['205-1question2'] =
                                        this.dynamicobj['205-1question2'];

                                    this.economicform
                                        .get('Ac3')
                                        .setValue(
                                            this.dynamicobj['205-1comment']
                                        );
                                    this.finalobj['205-1comment'] =
                                        this.dynamicobj['205-1comment'];
                                }
                                if (yoy == 41) {
                                    if (
                                        this.dynamicobj['205-2question1'] ==
                                            null ||
                                        this.dynamicobj['205-2question1'] ==
                                            '' ||
                                        this.dynamicobj['205-2question1'] ==
                                            '[]' ||
                                        this.dynamicobj['205-2question1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-2question1'] = '';
                                    } else {
                                        this.finalobj['205-2question1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-2question1'
                                                ]
                                            );
                                        this.lookupdtl6 = JSON.parse(
                                            this.dynamicobj['205-2question1']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['205-2question2'] ==
                                            null ||
                                        this.dynamicobj['205-2question2'] ==
                                            '' ||
                                        this.dynamicobj['205-2question2'] ==
                                            '[]' ||
                                        this.dynamicobj['205-2question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-2question2'] = '';
                                    } else {
                                        this.finalobj['205-2question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-2question2'
                                                ]
                                            );
                                        this.lookupdtl7 = JSON.parse(
                                            this.dynamicobj['205-2question2']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['205-2question3'] ==
                                            null ||
                                        this.dynamicobj['205-2question3'] ==
                                            '' ||
                                        this.dynamicobj['205-2question3'] ==
                                            '[]' ||
                                        this.dynamicobj['205-2question3'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-2question3'] = '';
                                    } else {
                                        this.finalobj['205-2question3'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-2question3'
                                                ]
                                            );
                                        this.lookupdtl8 = JSON.parse(
                                            this.dynamicobj['205-2question3']
                                        );
                                    }

                                    this.economicform
                                        .get('Acc4')
                                        .setValue(
                                            this.dynamicobj['205-2question4']
                                        );
                                    this.finalobj['205-2question4'] =
                                        this.dynamicobj['205-2question4'];

                                    if (
                                        this.dynamicobj['205-2question5'] ==
                                            null ||
                                        this.dynamicobj['205-2question5'] ==
                                            '' ||
                                        this.dynamicobj['205-2question5'] ==
                                            '[]' ||
                                        this.dynamicobj['205-2question5'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-2question5'] = '';
                                    } else {
                                        this.finalobj['205-2question5'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-2question5'
                                                ]
                                            );
                                        this.lookupdtl9 = JSON.parse(
                                            this.dynamicobj['205-2question5']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['205-2question6'] ==
                                            null ||
                                        this.dynamicobj['205-2question6'] ==
                                            '' ||
                                        this.dynamicobj['205-2question6'] ==
                                            '[]' ||
                                        this.dynamicobj['205-2question6'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-2question6'] = '';
                                    } else {
                                        this.finalobj['205-2question6'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-2question6'
                                                ]
                                            );
                                        this.lookupdtl10 = JSON.parse(
                                            this.dynamicobj['205-2question6']
                                        );
                                    }
                                }
                                if (yoy == 42) {
                                    this.economicform
                                        .get('Accc1')
                                        .setValue(
                                            this.dynamicobj['205-3question1']
                                        );
                                    this.finalobj['205-3question1'] =
                                        this.dynamicobj['205-3question1'];
                                        this.economicform
                                        .get('Acccpointed')
                                        .setValue(
                                            this.dynamicobj['205-3questionpointed']
                                        );
                                    this.finalobj['205-3questionpointed'] =
                                        this.dynamicobj['205-3questionpointed'];

                                    this.economicform
                                        .get('Accc2')
                                        .setValue(
                                            this.dynamicobj['205-3question2']
                                        );
                                    this.finalobj['205-3question2'] =
                                        this.dynamicobj['205-3question2'];

                                    this.economicform
                                        .get('Accc3')
                                        .setValue(
                                            this.dynamicobj['205-3question3']
                                        );
                                    this.finalobj['205-3question3'] =
                                        this.dynamicobj['205-3question3'];

                                    if (
                                        this.dynamicobj['205-3question4'] ==
                                            null ||
                                        this.dynamicobj['205-3question4'] ==
                                            '' ||
                                        this.dynamicobj['205-3question4'] ==
                                            '[]' ||
                                        this.dynamicobj['205-3question4'] ==
                                            undefined
                                    ) {
                                        this.finalobj['205-3question4'] = '';
                                    } else {
                                        this.finalobj['205-3question4'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '205-3question4'
                                                ]
                                            );
                                        this.lookupdtl11 = JSON.parse(
                                            this.dynamicobj['205-3question4']
                                        );
                                    }
                                }
                                if (yoy == 43) {
                                    this.economicform
                                        .get('Acb1')
                                        .setValue(
                                            this.dynamicobj['206-1question1']
                                        );
                                    this.finalobj['206-1question1'] =
                                        this.dynamicobj['206-1question1'];

                                    if (
                                        this.dynamicobj['206-1question2'] ==
                                            null ||
                                        this.dynamicobj['206-1question2'] ==
                                            '' ||
                                        this.dynamicobj['206-1question2'] ==
                                            '[]' ||
                                        this.dynamicobj['206-1question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['206-1question2'] = '';
                                    } else {
                                        this.finalobj['206-1question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '206-1question2'
                                                ]
                                            );
                                        this.lookup30 = JSON.parse(
                                            this.dynamicobj['206-1question2']
                                        );
                                    }

                                    this.economicform
                                        .get('Acb3')
                                        .setValue(
                                            this.dynamicobj['206-1comment']
                                        );
                                    this.finalobj['206-1comment'] =
                                        this.dynamicobj['206-1comment'];
                                }
                                if (yoy == 44) {
                                    this.economicform
                                        .get('tax')
                                        .setValue(
                                            this.dynamicobj['207-1question1']
                                        );
                                    this.finalobj['207-1question1'] =
                                        this.dynamicobj['207-1question1'];

                                    if (
                                        this.dynamicobj['207-1question2'] ==
                                            null ||
                                        this.dynamicobj['207-1question2'] ==
                                            '' ||
                                        this.dynamicobj['207-1question2'] ==
                                            '[]' ||
                                        this.dynamicobj['207-1question2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['207-1question2'] = '';
                                    } else {
                                        this.finalobj['207-1question2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '207-1question2'
                                                ]
                                            );
                                        this.lookupdtl12 = JSON.parse(
                                            this.dynamicobj['207-1question2']
                                        );
                                    }

                                    this.economicform
                                        .get('tax1')
                                        .setValue(
                                            this.dynamicobj['207-1question3']
                                        );
                                    this.finalobj['207-1question3'] =
                                        this.dynamicobj['207-1question3'];
                                    this.economicform
                                        .get('tax1b')
                                        .setValue(
                                            this.dynamicobj['207-1question1a']
                                        );
                                    this.finalobj['207-1question1a'] =
                                        this.dynamicobj['207-1question1a'];
                                    this.economicform
                                        .get('tax2')
                                        .setValue(
                                            this.dynamicobj['207-1question4']
                                        );
                                    this.finalobj['207-1question4'] =
                                        this.dynamicobj['207-1question4'];

                                    this.economicform
                                        .get('tax3')
                                        .setValue(
                                            this.dynamicobj['207-1comment']
                                        );
                                    this.finalobj['207-1comment'] =
                                        this.dynamicobj['207-1comment'];
                                }
                                if (yoy == 45) {
                                    this.economicform
                                        .get('Attt1')
                                        .setValue(
                                            this.dynamicobj['207-2question1']
                                        );
                                    this.finalobj['207-2question1'] =
                                        this.dynamicobj['207-2question1'];

                                    this.economicform
                                        .get('Attt2')
                                        .setValue(
                                            this.dynamicobj['207-2question2']
                                        );
                                    this.finalobj['207-2question2'] =
                                        this.dynamicobj['207-2question2'];

                                    this.economicform
                                        .get('Attt3')
                                        .setValue(
                                            this.dynamicobj['207-2question3']
                                        );
                                    this.finalobj['207-2question3'] =
                                        this.dynamicobj['207-2question3'];

                                    this.economicform
                                        .get('Attt4')
                                        .setValue(
                                            this.dynamicobj['207-2question4']
                                        );
                                    this.finalobj['207-2question4'] =
                                        this.dynamicobj['207-2question4'];

                                    this.economicform
                                        .get('Attt5')
                                        .setValue(
                                            this.dynamicobj['207-2question5']
                                        );
                                    this.finalobj['207-2question5'] =
                                        this.dynamicobj['207-2question5'];

                                    this.economicform
                                        .get('Attt6')
                                        .setValue(
                                            this.dynamicobj['207-2question6']
                                        );
                                    this.finalobj['207-2question6'] =
                                        this.dynamicobj['207-2question6'];

                                    this.economicform
                                        .get('Attt7')
                                        .setValue(
                                            this.dynamicobj['207-2comment']
                                        );
                                    this.finalobj['207-2comment'] =
                                        this.dynamicobj['207-2comment'];
                                }
                                if (yoy == 46) {
                                    this.economicform
                                        .get('Atttt1')
                                        .setValue(
                                            this.dynamicobj['207-3question1']
                                        );
                                    this.finalobj['207-3question1'] =
                                        this.dynamicobj['207-3question1'];

                                    this.economicform
                                        .get('Atttt2')
                                        .setValue(
                                            this.dynamicobj['207-3question2']
                                        );
                                    this.finalobj['207-3question2'] =
                                        this.dynamicobj['207-3question2'];

                                    this.economicform
                                        .get('Atttt3')
                                        .setValue(
                                            this.dynamicobj['207-3question3']
                                        );
                                    this.finalobj['207-3question3'] =
                                        this.dynamicobj['207-3question3'];

                                    this.economicform
                                        .get('Atttt4')
                                        .setValue(
                                            this.dynamicobj['207-3comment']
                                        );
                                    this.finalobj['207-3comment'] =
                                        this.dynamicobj['207-3comment'];
                                }
                                if (yoy == 47) {
                                    if (
                                        this.dynamicobj['207-4BAddTable'] ==
                                            null ||
                                        this.dynamicobj['207-4BAddTable'] ==
                                            '' ||
                                        this.dynamicobj['207-4BAddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['207-4BAddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['207-4BAddTable'] = '';
                                    } else {
                                        this.finalobj['207-4BAddTable'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '207-4BAddTable'
                                                ]
                                            );
                                        this.lookupdtl207b = JSON.parse(
                                            this.dynamicobj['207-4BAddTable']
                                        );
                                    }

                                    this.economicform
                                        .get('Attttt1')
                                        .setValue(
                                            this.dynamicobj['207-4question1']
                                        );
                                    this.finalobj['207-4question1'] =
                                        this.dynamicobj['207-4question1'];

                                    this.economicform
                                        .get('location2')
                                        .setValue(
                                            this.dynamicobj['207-4question2']
                                        );
                                    this.finalobj['207-4question2'] =
                                        this.dynamicobj['207-4question2'];

                                    this.economicform
                                        .get('Attttt2')
                                        .setValue(
                                            this.dynamicobj['207-4question3']
                                        );
                                    this.finalobj['207-4question3'] =
                                        this.dynamicobj['207-4question3'];

                                    this.economicform
                                        .get('Attttt3')
                                        .setValue(
                                            this.dynamicobj['207-4question4']
                                        );
                                    this.finalobj['207-4question4'] =
                                        this.dynamicobj['207-4question4'];

                                    this.economicform
                                        .get('Attttt4')
                                        .setValue(
                                            this.dynamicobj['207-4question5']
                                        );
                                    this.finalobj['207-4question5'] =
                                        this.dynamicobj['207-4question5'];

                                    this.economicform
                                        .get('Attttt5')
                                        .setValue(
                                            this.dynamicobj['207-4question6']
                                        );
                                    this.finalobj['207-4question6'] =
                                        this.dynamicobj['207-4question6'];

                                    this.economicform
                                        .get('currency')
                                        .setValue(
                                            this.dynamicobj['207-4question7']
                                        );
                                    this.finalobj['207-4question7'] =
                                        this.dynamicobj['207-4question7'];

                                    this.economicform
                                        .get('Attttt6')
                                        .setValue(
                                            this.dynamicobj['207-4question8']
                                        );
                                    this.finalobj['207-4question8'] =
                                        this.dynamicobj['207-4question8'];

                                    this.economicform
                                        .get('currency1')
                                        .setValue(
                                            this.dynamicobj['207-4question9']
                                        );
                                    this.finalobj['207-4question9'] =
                                        this.dynamicobj['207-4question9'];

                                    this.economicform
                                        .get('Attttt7')
                                        .setValue(
                                            this.dynamicobj['207-4question10']
                                        );
                                    this.finalobj['207-4question10'] =
                                        this.dynamicobj['207-4question10'];

                                    this.economicform
                                        .get('currency2')
                                        .setValue(
                                            this.dynamicobj['207-4question11']
                                        );
                                    this.finalobj['207-4question11'] =
                                        this.dynamicobj['207-4question11'];

                                    this.economicform
                                        .get('Attttt8')
                                        .setValue(
                                            this.dynamicobj['207-4question12']
                                        );
                                    this.finalobj['207-4question12'] =
                                        this.dynamicobj['207-4question12'];

                                    this.economicform
                                        .get('currency3')
                                        .setValue(
                                            this.dynamicobj['207-4question13']
                                        );
                                    this.finalobj['207-4question13'] =
                                        this.dynamicobj['207-4question13'];

                                    this.economicform
                                        .get('Attttt9')
                                        .setValue(
                                            this.dynamicobj['207-4question14']
                                        );
                                    this.finalobj['207-4question14'] =
                                        this.dynamicobj['207-4question14'];

                                    this.economicform
                                        .get('currency4')
                                        .setValue(
                                            this.dynamicobj['207-4question15']
                                        );
                                    this.finalobj['207-4question15'] =
                                        this.dynamicobj['207-4question15'];

                                    this.economicform
                                        .get('Attttt10')
                                        .setValue(
                                            this.dynamicobj['207-4question16']
                                        );
                                    this.finalobj['207-4question16'] =
                                        this.dynamicobj['207-4question16'];

                                    this.economicform
                                        .get('currency5')
                                        .setValue(
                                            this.dynamicobj['207-4question17']
                                        );
                                    this.finalobj['207-4question17'] =
                                        this.dynamicobj['207-4question17'];

                                    this.economicform
                                        .get('Attttt11')
                                        .setValue(
                                            this.dynamicobj['207-4question18']
                                        );
                                    this.finalobj['207-4question18'] =
                                        this.dynamicobj['207-4question18'];

                                    this.economicform
                                        .get('currency6')
                                        .setValue(
                                            this.dynamicobj['207-4question19']
                                        );
                                    this.finalobj['207-4question19'] =
                                        this.dynamicobj['207-4question19'];

                                    this.economicform
                                        .get('Attttt12')
                                        .setValue(
                                            this.dynamicobj['207-4question20']
                                        );
                                    this.finalobj['207-4question20'] =
                                        this.dynamicobj['207-4question20'];

                                    this.economicform
                                        .get('Attttt13')
                                        .setValue(
                                            this.dynamicobj['207-4comment']
                                        );
                                    this.finalobj['207-4comment'] =
                                        this.dynamicobj['207-4comment'];
                                }

                                if (yoy == 48) {
                                    if (
                                        this.dynamicobj['301-1AddTable'] ==
                                            null ||
                                        this.dynamicobj['301-1AddTable'] ==
                                            '' ||
                                        this.dynamicobj['301-1AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['301-1AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['301-1AddTable'] = '';
                                    } else {
                                        this.finalobj['301-1AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['301-1AddTable']
                                            );
                                        this.lookupdtl41 = JSON.parse(
                                            this.dynamicobj['301-1AddTable']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['301-1AddTableii'] ==
                                            null ||
                                        this.dynamicobj['301-1AddTableii'] ==
                                            '' ||
                                        this.dynamicobj['301-1AddTableii'] ==
                                            '[]' ||
                                        this.dynamicobj['301-1AddTableii'] ==
                                            undefined
                                    ) {
                                        this.finalobj['301-1AddTableii'] = '';
                                    } else {
                                        this.finalobj['301-1AddTableii'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '301-1AddTableii'
                                                ]
                                            );
                                        this.lookupdtl41ii = JSON.parse(
                                            this.dynamicobj['301-1AddTableii']
                                        );
                                    }
                                }
                                if (yoy == 49) {
                                    if (
                                        this.dynamicobj['301-2AddTable'] ==
                                            null ||
                                        this.dynamicobj['301-2AddTable'] ==
                                            '' ||
                                        this.dynamicobj['301-2AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['301-2AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['301-2AddTable'] = '';
                                    } else {
                                        this.finalobj['301-2AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['301-2AddTable']
                                            );
                                        this.lookupdtl42 = JSON.parse(
                                            this.dynamicobj['301-2AddTable']
                                        );
                                    }
                                }

                                if (yoy == 50) {
                                    if (
                                        this.dynamicobj['301-3AddTable'] ==
                                            null ||
                                        this.dynamicobj['301-3AddTable'] ==
                                            '' ||
                                        this.dynamicobj['301-3AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['301-3AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['301-3AddTable'] = '';
                                    } else {
                                        this.finalobj['301-3AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['301-3AddTable']
                                            );
                                        this.lookupdtl43 = JSON.parse(
                                            this.dynamicobj['301-3AddTable']
                                        );
                                    }
                                    this.enviroform
                                        .get('Rppm2')
                                        .setValue(this.dynamicobj['301-3Q2']);
                                    this.finalobj['301-3Q2'] =
                                        this.dynamicobj['301-3Q2'];
                                }

                                if (yoy == 51) {
                                    if (
                                        this.dynamicobj['302-1AddTable'] ==
                                            null ||
                                        this.dynamicobj['302-1AddTable'] ==
                                            '' ||
                                        this.dynamicobj['302-1AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['302-1AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['302-1AddTable'] = '';
                                    } else {
                                        this.finalobj['302-1AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['302-1AddTable']
                                            );
                                        this.lookupdtl44 = JSON.parse(
                                            this.dynamicobj['302-1AddTable']
                                        );
                                    }
                                    if (
                                        this.dynamicobj['302-1AddTable2'] ==
                                            null ||
                                        this.dynamicobj['302-1AddTable2'] ==
                                            '' ||
                                        this.dynamicobj['302-1AddTable2'] ==
                                            '[]' ||
                                        this.dynamicobj['302-1AddTable2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['302-1AddTable2'] = '';
                                    } else {
                                        this.finalobj['302-1AddTable2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '302-1AddTable2'
                                                ]
                                            );
                                        this.lookupdtl44a = JSON.parse(
                                            this.dynamicobj['302-1AddTable2']
                                        );
                                    }

                                    this.enviroform
                                        .get('Ecwo3i')
                                        .setValue(this.dynamicobj['302-1Q3i']);
                                    this.finalobj['302-1Q3i'] =
                                        this.dynamicobj['302-1Q3i'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop1']
                                        );
                                    this.finalobj['302-1Q3iunitdrop1'] =
                                        this.dynamicobj['302-1Q3iunitdrop1'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop1')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop2']
                                        );
                                    this.finalobj['302-1Q3iunitdrop2'] =
                                        this.dynamicobj['302-1Q3iunitdrop2'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop2')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop3']
                                        );
                                    this.finalobj['302-1Q3iunitdrop3'] =
                                        this.dynamicobj['302-1Q3iunitdrop3'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop3')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop4']
                                        );
                                    this.finalobj['302-1Q3iunitdrop4'] =
                                        this.dynamicobj['302-1Q3iunitdrop4'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop4')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop5']
                                        );
                                    this.finalobj['302-1Q3iunitdrop5'] =
                                        this.dynamicobj['302-1Q3iunitdrop5'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop5')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop6']
                                        );
                                    this.finalobj['302-1Q3iunitdrop6'] =
                                        this.dynamicobj['302-1Q3iunitdrop6'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop6')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop7']
                                        );
                                    this.finalobj['302-1Q3iunitdrop7'] =
                                        this.dynamicobj['302-1Q3iunitdrop7'];
                                    this.enviroform
                                        .get('Ecwo3iunitdrop7')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iunitdrop8']
                                        );
                                    this.finalobj['302-1Q3iunitdrop8'] =
                                        this.dynamicobj['302-1Q3iunitdrop8'];
                                    this.enviroform
                                        .get('Ecwo3ii')
                                        .setValue(this.dynamicobj['302-1Q3ii']);
                                    this.finalobj['302-1Q3ii'] =
                                        this.dynamicobj['302-1Q3ii'];
                                    this.enviroform
                                        .get('Ecwo3iii')
                                        .setValue(
                                            this.dynamicobj['302-1Q3iii']
                                        );
                                    this.finalobj['302-1Q3iii'] =
                                        this.dynamicobj['302-1Q3iii'];
                                    this.enviroform
                                        .get('Ecwo3iv')
                                        .setValue(this.dynamicobj['302-1Q3iv']);
                                    this.finalobj['302-1Q3iv'] =
                                        this.dynamicobj['302-1Q3iv'];

                                    this.enviroform
                                        .get('Ecwo4i')
                                        .setValue(this.dynamicobj['302-1Q4i']);
                                    this.finalobj['302-1Q4i'] =
                                        this.dynamicobj['302-1Q4i'];
                                    this.enviroform
                                        .get('Ecwo4ii')
                                        .setValue(this.dynamicobj['302-1Q4ii']);
                                    this.finalobj['302-1Q4ii'] =
                                        this.dynamicobj['302-1Q4ii'];
                                    this.enviroform
                                        .get('Ecwo4iii')
                                        .setValue(
                                            this.dynamicobj['302-1Q4iii']
                                        );
                                    this.finalobj['302-1Q4iii'] =
                                        this.dynamicobj['302-1Q4iii'];
                                    this.enviroform
                                        .get('Ecwo4iv')
                                        .setValue(this.dynamicobj['302-1Q4iv']);
                                    this.finalobj['302-1Q4iv'] =
                                        this.dynamicobj['302-1Q4iv'];

                                    this.enviroform
                                        .get('Ecwo5')
                                        .setValue(this.dynamicobj['302-1Q5']);
                                    this.finalobj['302-1Q5'] =
                                        this.dynamicobj['302-1Q5'];

                                    this.enviroform
                                        .get('Ecwo5units')
                                        .setValue(
                                            this.dynamicobj['302-1Q5units']
                                        );
                                    this.finalobj['302-1Q5units'] =
                                        this.dynamicobj['302-1Q5units'];

                                    this.enviroform
                                        .get('Ecwo6')
                                        .setValue(this.dynamicobj['302-1Q6']);
                                    this.finalobj['302-1Q6'] =
                                        this.dynamicobj['302-1Q6'];
                                    this.enviroform
                                        .get('Ecwo7')
                                        .setValue(this.dynamicobj['302-1Q7']);
                                    this.finalobj['302-1Q7'] =
                                        this.dynamicobj['302-1Q7'];
                                    this.enviroform
                                        .get('Ecwo8')
                                        .setValue(
                                            this.dynamicobj['302-1Comment']
                                        );
                                    this.finalobj['302-1Comment'] =
                                        this.dynamicobj['302-1Comment'];
                                }

                                if (yoy == 52) {
                                    this.enviroform
                                        .get('Ecoo1')
                                        .setValue(this.dynamicobj['302-2Q1']);
                                    this.finalobj['302-2Q1'] =
                                        this.dynamicobj['302-2Q1'];

                                    this.enviroform
                                        .get('Ecoo1units')
                                        .setValue(
                                            this.dynamicobj['302-2Q1units']
                                        );
                                    this.finalobj['302-2Q1units'] =
                                        this.dynamicobj['302-2Q1units'];
                                    this.enviroform
                                        .get('Ecoo2')
                                        .setValue(this.dynamicobj['302-2Q2']);
                                    this.finalobj['302-2Q2'] =
                                        this.dynamicobj['302-2Q2'];
                                    this.enviroform
                                        .get('Ecoo3')
                                        .setValue(this.dynamicobj['302-2Q3']);
                                    this.finalobj['302-2Q3'] =
                                        this.dynamicobj['302-2Q3'];
                                    this.enviroform
                                        .get('Ecoo4')
                                        .setValue(
                                            this.dynamicobj['302-2Comment']
                                        );
                                    this.finalobj['302-2Comment'] =
                                        this.dynamicobj['302-2Comment'];
                                }

                                if (yoy == 53) {
                                    this.enviroform
                                        .get('Eit1')
                                        .setValue(this.dynamicobj['302-3Q1']);
                                    this.finalobj['302-3Q1'] =
                                        this.dynamicobj['302-3Q1'];
                                    this.enviroform
                                        .get('Eit2')
                                        .setValue(this.dynamicobj['302-3Q2']);
                                    this.finalobj['302-3Q2'] =
                                        this.dynamicobj['302-3Q2'];
                                    this.enviroform
                                        .get('relevantreportiv')
                                        .setValue(
                                            this.dynamicobj['relevantreportiv']
                                        );
                                    this.finalobj['relevantreportiv'] =
                                        this.dynamicobj['relevantreportiv'];
                                    this.enviroform
                                        .get('multiselect3023i')
                                        .setValue(
                                            this.dynamicobj['multiselect3023i']
                                        );
                                    this.finalobj['multiselect3023i'] =
                                        this.dynamicobj['multiselect3023i'];
                                    this.enviroform
                                        .get('Eit5')
                                        .setValue(
                                            this.dynamicobj['302-3Comment']
                                        );
                                    this.finalobj['302-3Comment'] =
                                        this.dynamicobj['302-3Comment'];
                                }
                                if (yoy == 54) {
                                    this.enviroform
                                        .get('Rec1')
                                        .setValue(this.dynamicobj['302-4Q1']);
                                    this.finalobj['302-4Q1'] =
                                        this.dynamicobj['302-4Q1'];

                                    this.enviroform
                                        .get('Rec1units')
                                        .setValue(
                                            this.dynamicobj['302-4Q1units']
                                        );
                                    this.finalobj['302-4Q1units'] =
                                        this.dynamicobj['302-4Q1units'];
                                    this.enviroform
                                        .get('multiselect3024')
                                        .setValue(
                                            this.dynamicobj[
                                                '302-3multiselect3024'
                                            ]
                                        );
                                    this.finalobj['302-3multiselect3024'] =
                                        this.dynamicobj['302-3multiselect3024'];

                                    this.enviroform
                                        .get('Rec2')
                                        .setValue(this.dynamicobj['302-4Q2']);
                                    this.finalobj['302-4Q2'] =
                                        this.dynamicobj['302-4Q2'];
                                    this.enviroform
                                        .get('Rec3')
                                        .setValue(this.dynamicobj['302-4Q3']);
                                    this.finalobj['302-4Q3'] =
                                        this.dynamicobj['302-4Q3'];
                                    this.enviroform
                                        .get('Rec4')
                                        .setValue(this.dynamicobj['302-4Q4']);
                                    this.finalobj['302-4Q4'] =
                                        this.dynamicobj['302-4Q4'];
                                    this.enviroform
                                        .get('Rec5')
                                        .setValue(
                                            this.dynamicobj['302-4Comment']
                                        );
                                    this.finalobj['302-4Comment'] =
                                        this.dynamicobj['302-4Comment'];
                                }

                                if (yoy == 55) {
                                    this.enviroform
                                        .get('Rerp1')
                                        .setValue(this.dynamicobj['302-5Q1']);
                                    this.finalobj['302-5Q1'] =
                                        this.dynamicobj['302-5Q1'];

                                    this.enviroform
                                        .get('Rerp1units')
                                        .setValue(
                                            this.dynamicobj['302-5Q1units']
                                        );
                                    this.finalobj['302-5Q1units'] =
                                        this.dynamicobj['302-5Q1units'];
                                    this.enviroform
                                        .get('Rerp2')
                                        .setValue(this.dynamicobj['302-5Q2']);
                                    this.finalobj['302-5Q2'] =
                                        this.dynamicobj['302-5Q2'];
                                    this.enviroform
                                        .get('Rerp3')
                                        .setValue(this.dynamicobj['302-5Q3']);
                                    this.finalobj['302-5Q3'] =
                                        this.dynamicobj['302-5Q3'];
                                    this.enviroform
                                        .get('Rerp4')
                                        .setValue(
                                            this.dynamicobj['302-5Comment']
                                        );
                                    this.finalobj['302-5Comment'] =
                                        this.dynamicobj['302-5Comment'];
                                }
                                if (yoy == 56) {
                                    this.enviroform
                                        .get('Iwsr1')
                                        .setValue(this.dynamicobj['303-1Q1']);
                                    this.finalobj['303-1Q1'] =
                                        this.dynamicobj['303-1Q1'];
                                    this.enviroform
                                        .get('Iwsr2')
                                        .setValue(this.dynamicobj['303-1Q2']);
                                    this.finalobj['303-1Q2'] =
                                        this.dynamicobj['303-1Q2'];
                                    this.enviroform
                                        .get('Iwsr3')
                                        .setValue(this.dynamicobj['303-1Q3']);
                                    this.finalobj['303-1Q3'] =
                                        this.dynamicobj['303-1Q3'];
                                    this.enviroform
                                        .get('Iwsr4')
                                        .setValue(this.dynamicobj['303-1Q4']);
                                    this.finalobj['303-1Q4'] =
                                        this.dynamicobj['303-1Q4'];
                                    this.enviroform
                                        .get('Iwsr5')
                                        .setValue(
                                            this.dynamicobj['303-1Comment']
                                        );
                                    this.finalobj['303-1Comment'] =
                                        this.dynamicobj['303-1Comment'];
                                }
                                if (yoy == 57) {
                                    this.enviroform
                                        .get('Mwdr1')
                                        .setValue(this.dynamicobj['303-2Q1']);
                                    this.finalobj['303-2Q1'] =
                                        this.dynamicobj['303-2Q1'];
                                    this.enviroform
                                        .get('Mwdr2')
                                        .setValue(this.dynamicobj['303-2Q2']);
                                    this.finalobj['303-2Q2'] =
                                        this.dynamicobj['303-2Q2'];
                                    this.enviroform
                                        .get('Mwdr3')
                                        .setValue(this.dynamicobj['303-2Q3']);
                                    this.finalobj['303-2Q3'] =
                                        this.dynamicobj['303-2Q3'];
                                    this.enviroform
                                        .get('Mwdr4')
                                        .setValue(this.dynamicobj['303-2Q4']);
                                    this.finalobj['303-2Q4'] =
                                        this.dynamicobj['303-2Q4'];
                                    this.enviroform
                                        .get('Mwdr5')
                                        .setValue(
                                            this.dynamicobj['303-2Comment']
                                        );
                                    this.finalobj['303-2Comment'] =
                                        this.dynamicobj['303-2Comment'];
                                }
                                if (yoy == 58) {
                                    this.enviroform
                                        .get('www3031i')
                                        .setValue(this.dynamicobj['303-3Q1i']);
                                    this.finalobj['303-3Q1i'] =
                                        this.dynamicobj['303-3Q1i'];

                                    this.enviroform
                                        .get('www3031ii')
                                        .setValue(this.dynamicobj['303-3Q1ii']);
                                    this.finalobj['303-3Q1ii'] =
                                        this.dynamicobj['303-3Q1ii'];

                                    this.enviroform
                                        .get('www3031iii')
                                        .setValue(
                                            this.dynamicobj['303-3Q1iii']
                                        );
                                    this.finalobj['303-3Q1iii'] =
                                        this.dynamicobj['303-3Q1iii'];

                                    this.enviroform
                                        .get('www3031iv')
                                        .setValue(this.dynamicobj['303-3Q1iv']);
                                    this.finalobj['303-3Q1iv'] =
                                        this.dynamicobj['303-3Q1iv'];

                                    this.enviroform
                                        .get('www3031v')
                                        .setValue(this.dynamicobj['303-3Q1v']);
                                    this.finalobj['303-3Q1v'] =
                                        this.dynamicobj['303-3Q1v'];

                                    this.enviroform
                                        .get('www3031vi')
                                        .setValue(this.dynamicobj['303-3Q1vi']);
                                    this.finalobj['303-3Q1vi'] =
                                        this.dynamicobj['303-3Q1vi'];

                                    this.enviroform
                                        .get('www3032i')
                                        .setValue(this.dynamicobj['303-3Q2i']);
                                    this.finalobj['303-3Q2i'] =
                                        this.dynamicobj['303-3Q2i'];

                                    this.enviroform
                                        .get('www3032ii')
                                        .setValue(this.dynamicobj['303-3Q2ii']);
                                    this.finalobj['303-3Q2ii'] =
                                        this.dynamicobj['303-3Q2ii'];

                                    this.enviroform
                                        .get('www3032iii')
                                        .setValue(
                                            this.dynamicobj['303-3Q2iii']
                                        );
                                    this.finalobj['303-3Q2iii'] =
                                        this.dynamicobj['303-3Q2iii'];

                                    this.enviroform
                                        .get('www3032iv')
                                        .setValue(this.dynamicobj['303-3Q2iv']);
                                    this.finalobj['303-3Q2iv'] =
                                        this.dynamicobj['303-3Q2iv'];

                                    this.enviroform
                                        .get('www3032v')
                                        .setValue(this.dynamicobj['303-3Q2v']);
                                    this.finalobj['303-3Q2v'] =
                                        this.dynamicobj['303-3Q2v'];

                                    this.enviroform
                                        .get('www3032vi')
                                        .setValue(this.dynamicobj['303-3Q2vi']);
                                    this.finalobj['303-3Q2vi'] =
                                        this.dynamicobj['303-3Q2vi'];

                                    this.enviroform
                                        .get('www30331i')
                                        .setValue(this.dynamicobj['303-3Q3i']);
                                    this.finalobj['303-3Q3i'] =
                                        this.dynamicobj['303-3Q3i'];

                                    this.enviroform
                                        .get('www30331ii')
                                        .setValue(this.dynamicobj['303-3Q3ii']);
                                    this.finalobj['303-3Q3ii'] =
                                        this.dynamicobj['303-3Q3ii'];

                                    this.enviroform
                                        .get('www30331iii')
                                        .setValue(
                                            this.dynamicobj['303-3Q3iii']
                                        );
                                    this.finalobj['303-3Q3iii'] =
                                        this.dynamicobj['303-3Q3iii'];

                                    this.enviroform
                                        .get('www30331iv')
                                        .setValue(this.dynamicobj['303-3Q3iv']);
                                    this.finalobj['303-3Q3iv'] =
                                        this.dynamicobj['303-3Q3iv'];

                                    this.enviroform
                                        .get('www30331v')
                                        .setValue(this.dynamicobj['303-3Q3v']);
                                    this.finalobj['303-3Q3v'] =
                                        this.dynamicobj['303-3Q3v'];

                                    this.enviroform
                                        .get('www30331vi')
                                        .setValue(this.dynamicobj['303-3Q3vi']);
                                    this.finalobj['303-3Q3vi'] =
                                        this.dynamicobj['303-3Q3vi'];

                                    this.enviroform
                                        .get('www30331vii')
                                        .setValue(
                                            this.dynamicobj['303-3Q3vii']
                                        );
                                    this.finalobj['303-3Q3vii'] =
                                        this.dynamicobj['303-3Q3vii'];

                                    this.enviroform
                                        .get('www30331viii')
                                        .setValue(
                                            this.dynamicobj['303-3Q3viii']
                                        );
                                    this.finalobj['303-3Q3viii'] =
                                        this.dynamicobj['303-3Q3viii'];

                                    this.enviroform
                                        .get('www30331ix')
                                        .setValue(this.dynamicobj['303-3Q3ix']);
                                    this.finalobj['303-3Q3ix'] =
                                        this.dynamicobj['303-3Q3ix'];

                                    this.enviroform
                                        .get('www30331x')
                                        .setValue(this.dynamicobj['303-3Q3x']);
                                    this.finalobj['303-3Q3x'] =
                                        this.dynamicobj['303-3Q3x'];

                                    this.enviroform
                                        .get('www30332i')
                                        .setValue(this.dynamicobj['303-3Q32i']);
                                    this.finalobj['303-3Q32i'] =
                                        this.dynamicobj['303-3Q32i'];

                                    this.enviroform
                                        .get('www30332ii')
                                        .setValue(
                                            this.dynamicobj['303-3Q32ii']
                                        );
                                    this.finalobj['303-3Q32ii'] =
                                        this.dynamicobj['303-3Q32ii'];

                                    this.enviroform
                                        .get('www30332iii')
                                        .setValue(
                                            this.dynamicobj['303-3Q32iii']
                                        );
                                    this.finalobj['303-3Q32iii'] =
                                        this.dynamicobj['303-3Q32iii'];

                                    this.enviroform
                                        .get('www30332iv')
                                        .setValue(
                                            this.dynamicobj['303-3Q32iv']
                                        );
                                    this.finalobj['303-3Q32iv'] =
                                        this.dynamicobj['303-3Q32iv'];

                                    this.enviroform
                                        .get('www30332v')
                                        .setValue(this.dynamicobj['303-3Q32v']);
                                    this.finalobj['303-3Q32v'] =
                                        this.dynamicobj['303-3Q32v'];

                                    this.enviroform
                                        .get('www30332vi')
                                        .setValue(
                                            this.dynamicobj['303-3Q32vi']
                                        );
                                    this.finalobj['303-3Q32vi'] =
                                        this.dynamicobj['303-3Q32vi'];

                                    this.enviroform
                                        .get('www30332vii')
                                        .setValue(
                                            this.dynamicobj['303-3Q32vii']
                                        );
                                    this.finalobj['303-3Q32vii'] =
                                        this.dynamicobj['303-3Q32vii'];

                                    this.enviroform
                                        .get('www30332viii')
                                        .setValue(
                                            this.dynamicobj['303-3Q32viii']
                                        );
                                    this.finalobj['303-3Q32viii'] =
                                        this.dynamicobj['303-3Q32viii'];

                                    this.enviroform
                                        .get('www30332ix')
                                        .setValue(
                                            this.dynamicobj['303-3Q32ix']
                                        );
                                    this.finalobj['303-3Q32ix'] =
                                        this.dynamicobj['303-3Q32ix'];

                                    this.enviroform
                                        .get('www30332x')
                                        .setValue(this.dynamicobj['303-3Q32x']);
                                    this.finalobj['303-3Q32x'] =
                                        this.dynamicobj['303-3Q32x'];

                                    this.enviroform
                                        .get('www5')
                                        .setValue(this.dynamicobj['303-3Q5']);
                                    this.finalobj['303-3Q5'] =
                                        this.dynamicobj['303-3Q5'];
                                }
                                if (yoy == 59) {
                                    this.enviroform
                                        .get('wdd1i')
                                        .setValue(this.dynamicobj['303-4Q1i']);
                                    this.finalobj['303-4Q1i'] =
                                        this.dynamicobj['303-4Q1i'];

                                    this.enviroform
                                        .get('wdd1ii')
                                        .setValue(this.dynamicobj['303-4Q1ii']);
                                    this.finalobj['303-4Q1ii'] =
                                        this.dynamicobj['303-4Q1ii'];

                                    this.enviroform
                                        .get('wdd1iii')
                                        .setValue(
                                            this.dynamicobj['303-4Q1iii']
                                        );
                                    this.finalobj['303-4Q1iii'] =
                                        this.dynamicobj['303-4Q1iii'];

                                    this.enviroform
                                        .get('wdd1iv')
                                        .setValue(this.dynamicobj['303-4Q1iv']);
                                    this.finalobj['303-4Q1iv'] =
                                        this.dynamicobj['303-4Q1iv'];

                                    this.enviroform
                                        .get('wdd1v')
                                        .setValue(this.dynamicobj['303-4Q1v']);
                                    this.finalobj['303-4Q1v'] =
                                        this.dynamicobj['303-4Q1v'];

                                    this.enviroform
                                        .get('wdd1vi')
                                        .setValue(this.dynamicobj['303-4Q1vi']);
                                    this.finalobj['303-4Q1vi'] =
                                        this.dynamicobj['303-4Q1vi'];

                                    this.enviroform
                                        .get('wdd1kek')
                                        .setValue(
                                            this.dynamicobj['303-4Q1kek1']
                                        );
                                    this.finalobj['303-4Q1kek1'] =
                                        this.dynamicobj['303-4Q1kek1'];

                                    this.enviroform
                                        .get('wdd2kek')
                                        .setValue(
                                            this.dynamicobj['303-4Q1kek2']
                                        );
                                    this.finalobj['303-4Q1kek2'] =
                                        this.dynamicobj['303-4Q1kek2'];

                                    this.enviroform
                                        .get('wdd3kek')
                                        .setValue(
                                            this.dynamicobj['303-4Q1kek3']
                                        );
                                    this.finalobj['303-4Q1kek3'] =
                                        this.dynamicobj['303-4Q1kek3'];

                                    this.enviroform
                                        .get('wdd4kek')
                                        .setValue(
                                            this.dynamicobj['303-4Q1kek4']
                                        );
                                    this.finalobj['303-4Q1kek4'] =
                                        this.dynamicobj['303-4Q1kek4'];

                                    this.enviroform
                                        .get('wdd6')
                                        .setValue(this.dynamicobj['303-4Q6']);
                                    this.finalobj['303-4Q6'] =
                                        this.dynamicobj['303-4Q6'];
                                    this.enviroform
                                        .get('wdd7')
                                        .setValue(this.dynamicobj['303-4Q7']);
                                    this.finalobj['303-4Q7'] =
                                        this.dynamicobj['303-4Q7'];
                                    this.enviroform
                                        .get('wdd8')
                                        .setValue(this.dynamicobj['303-4Q8']);
                                    this.finalobj['303-4Q8'] =
                                        this.dynamicobj['303-4Q8'];
                                    this.enviroform
                                        .get('wdd9')
                                        .setValue(this.dynamicobj['303-4Q9']);
                                    this.finalobj['303-4Q9'] =
                                        this.dynamicobj['303-4Q9'];
                                    this.enviroform
                                        .get('wdd10')
                                        .setValue(
                                            this.dynamicobj['303-4Comment']
                                        );
                                    this.finalobj['303-4Comment'] =
                                        this.dynamicobj['303-4Comment'];
                                }
                                if (yoy == 60) {
                                    this.enviroform
                                        .get('wcc1')
                                        .setValue(this.dynamicobj['303-5Q1']);
                                    this.finalobj['303-5Q1'] =
                                        this.dynamicobj['303-5Q1'];
                                    this.enviroform
                                        .get('wcc2')
                                        .setValue(this.dynamicobj['303-5Q2']);
                                    this.finalobj['303-5Q2'] =
                                        this.dynamicobj['303-5Q2'];
                                    this.enviroform
                                        .get('wcc3')
                                        .setValue(this.dynamicobj['303-5Q3']);
                                    this.finalobj['303-5Q3'] =
                                        this.dynamicobj['303-5Q3'];
                                    this.enviroform
                                        .get('wcc4')
                                        .setValue(this.dynamicobj['303-5Q4']);
                                    this.finalobj['303-5Q4'] =
                                        this.dynamicobj['303-5Q4'];
                                    this.enviroform
                                        .get('wcc5')
                                        .setValue(
                                            this.dynamicobj['303-5Comment']
                                        );
                                    this.finalobj['303-5Comment'] =
                                        this.dynamicobj['303-5Comment'];
                                }
                                if (yoy == 61) {
                                    this.enviroform
                                        .get('osol1')
                                        .setValue(this.dynamicobj['304-1Q1']);
                                    this.finalobj['304-1Q1'] =
                                        this.dynamicobj['304-1Q1'];

                                    this.enviroform
                                        .get('osol1location')
                                        .setValue(
                                            this.dynamicobj['304-1Q1location']
                                        );
                                    this.finalobj['304-1Q1location'] =
                                        this.dynamicobj['304-1Q1location'];

                                    this.enviroform
                                        .get('osol2')
                                        .setValue(this.dynamicobj['304-1Q2']);
                                    this.finalobj['304-1Q2'] =
                                        this.dynamicobj['304-1Q2'];
                                    this.enviroform
                                        .get('osol3')
                                        .setValue(this.dynamicobj['304-1Q3']);
                                    this.finalobj['304-1Q3'] =
                                        this.dynamicobj['304-1Q3'];
                                    this.enviroform
                                        .get('osol4')
                                        .setValue(this.dynamicobj['304-1Q4']);
                                    this.finalobj['304-1Q4'] =
                                        this.dynamicobj['304-1Q4'];
                                    if (
                                        this.dynamicobj['304-1AddTable'] ==
                                            null ||
                                        this.dynamicobj['304-1AddTable'] ==
                                            '' ||
                                        this.dynamicobj['304-1AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['304-1AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['304-1AddTable'] = '';
                                    } else {
                                        this.finalobj['304-1AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['304-1AddTable']
                                            );
                                        this.lookupdtl3045 = JSON.parse(
                                            this.dynamicobj['304-1AddTable']
                                        );
                                    }
                                    this.enviroform
                                        .get('osol6')
                                        .setValue(this.dynamicobj['304-1Q6']);
                                    this.finalobj['304-1Q6'] =
                                        this.dynamicobj['304-1Q6'];
                                    this.enviroform
                                        .get('osol7')
                                        .setValue(this.dynamicobj['304-1Q7']);
                                    this.finalobj['304-1Q7'] =
                                        this.dynamicobj['304-1Q7'];
                                }
                                if (yoy == 62) {
                                    this.enviroform
                                        .get('sia1')
                                        .setValue(this.dynamicobj['304-2Q1']);
                                    this.finalobj['304-2Q1'] =
                                        this.dynamicobj['304-2Q1'];
                                    this.enviroform
                                        .get('sia2')
                                        .setValue(this.dynamicobj['304-2Q2']);
                                    this.finalobj['304-2Q2'] =
                                        this.dynamicobj['304-2Q2'];
                                    this.enviroform
                                        .get('sia3')
                                        .setValue(this.dynamicobj['304-2Q3']);
                                    this.finalobj['304-2Q3'] =
                                        this.dynamicobj['304-2Q3'];
                                    this.enviroform
                                        .get('sia4')
                                        .setValue(this.dynamicobj['304-2Q4']);
                                    this.finalobj['304-2Q4'] =
                                        this.dynamicobj['304-2Q4'];
                                    this.enviroform
                                        .get('sia5')
                                        .setValue(this.dynamicobj['304-2Q5']);
                                    this.finalobj['304-2Q5'] =
                                        this.dynamicobj['304-2Q5'];
                                    this.enviroform
                                        .get('sia6')
                                        .setValue(this.dynamicobj['304-2Q6']);
                                    this.finalobj['304-2Q6'] =
                                        this.dynamicobj['304-2Q6'];
                                    this.enviroform
                                        .get('sia7')
                                        .setValue(this.dynamicobj['304-2Q7']);
                                    this.finalobj['304-2Q7'] =
                                        this.dynamicobj['304-2Q7'];
                                    this.enviroform
                                        .get('sia8')
                                        .setValue(this.dynamicobj['304-2Q8']);
                                    this.finalobj['304-2Q8'] =
                                        this.dynamicobj['304-2Q8'];
                                    this.enviroform
                                        .get('sia9')
                                        .setValue(this.dynamicobj['304-2Q9']);
                                    this.finalobj['304-2Q9'] =
                                        this.dynamicobj['304-2Q9'];
                                    this.enviroform
                                        .get('sia10')
                                        .setValue(this.dynamicobj['304-2Q10']);
                                    this.finalobj['304-2Q10'] =
                                        this.dynamicobj['304-2Q10'];

                                    this.enviroform
                                        .get('sia11')
                                        .setValue(
                                            this.dynamicobj['304-2Comment']
                                        );
                                    this.finalobj['304-2Comment'] =
                                        this.dynamicobj['304-2Comment'];
                                }
                                if (yoy == 63) {
                                    //63
                                    if (
                                        this.dynamicobj['304-3a-AddTable'] ==
                                            null ||
                                        this.dynamicobj['304-3a-AddTable'] ==
                                            '' ||
                                        this.dynamicobj['304-3a-AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['304-3a-AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['304-3a-AddTable'] = '';
                                    } else {
                                        this.finalobj['304-3a-AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '304-3a-AddTable'
                                                ]
                                            );
                                        this.lookupdtl304a = JSON.parse(
                                            this.dynamicobj['304-3a-AddTable']
                                        );
                                    }
                                    this.enviroform
                                        .get('hpr2')
                                        .setValue(this.dynamicobj['304-3Q2']);
                                    this.finalobj['304-3Q2'] =
                                        this.dynamicobj['304-3Q2'];
                                    this.enviroform
                                        .get('hpr3')
                                        .setValue(this.dynamicobj['304-3Q3']);
                                    this.finalobj['304-3Q3'] =
                                        this.dynamicobj['304-3Q3'];
                                    this.enviroform
                                        .get('hpr4')
                                        .setValue(this.dynamicobj['304-3Q4']);
                                    this.finalobj['304-3Q4'] =
                                        this.dynamicobj['304-3Q4'];
                                    this.enviroform
                                        .get('hpr5')
                                        .setValue(
                                            this.dynamicobj['304-3Comment']
                                        );
                                    this.finalobj['304-3Comment'] =
                                        this.dynamicobj['304-3Comment'];
                                }
                                if (yoy == 64) {
                                    this.enviroform
                                        .get('Iucn1')
                                        .setValue(this.dynamicobj['304-4Q1']);
                                    this.finalobj['304-4Q1'] =
                                        this.dynamicobj['304-4Q1'];
                                    this.enviroform
                                        .get('Iucn2')
                                        .setValue(this.dynamicobj['304-4Q2']);
                                    this.finalobj['304-4Q2'] =
                                        this.dynamicobj['304-4Q2'];
                                    this.enviroform
                                        .get('Iucn3')
                                        .setValue(this.dynamicobj['304-4Q3']);
                                    this.finalobj['304-4Q3'] =
                                        this.dynamicobj['304-4Q3'];
                                    this.enviroform
                                        .get('Iucn4')
                                        .setValue(this.dynamicobj['304-4Q4']);
                                    this.finalobj['304-4Q4'] =
                                        this.dynamicobj['304-4Q4'];
                                    this.enviroform
                                        .get('Iucn5')
                                        .setValue(this.dynamicobj['304-4Q5']);
                                    this.finalobj['304-4Q5'] =
                                        this.dynamicobj['304-4Q5'];
                                    this.enviroform
                                        .get('Iucn6')
                                        .setValue(
                                            this.dynamicobj['304-4Comment']
                                        );
                                    this.finalobj['304-4Comment'] =
                                        this.dynamicobj['304-4Comment'];
                                }
                                if (yoy == 65) {
                                    this.enviroform
                                        .get('Dghgemi1')
                                        .setValue(this.dynamicobj['305-1Q1']);
                                    this.finalobj['305-1Q1'] =
                                        this.dynamicobj['305-1Q1'];
                                    this.enviroform
                                        .get('Dghgemi2')
                                        .setValue(this.dynamicobj['305-1Q2']);
                                    this.finalobj['305-1Q2'] =
                                        this.dynamicobj['305-1Q2'];
                                    this.enviroform
                                        .get('Dghgemi3')
                                        .setValue(this.dynamicobj['305-1Q3']);
                                    this.finalobj['305-1Q3'] =
                                        this.dynamicobj['305-1Q3'];
                                    this.enviroform
                                        .get('Dghgemi4')
                                        .setValue(this.dynamicobj['305-1Q4']);
                                    this.finalobj['305-1Q4'] =
                                        this.dynamicobj['305-1Q4'];
                                    this.enviroform
                                        .get('Dghgemi5')
                                        .setValue(this.dynamicobj['305-1Q5']);
                                    this.finalobj['305-1Q5'] =
                                        this.dynamicobj['305-1Q5'];
                                    this.enviroform
                                        .get('Dghgemi6')
                                        .setValue(this.dynamicobj['305-1Q6']);
                                    this.finalobj['305-1Q6'] =
                                        this.dynamicobj['305-1Q6'];
                                    this.enviroform
                                        .get('Dghgemi7')
                                        .setValue(this.dynamicobj['305-1Q7']);
                                    this.finalobj['305-1Q7'] =
                                        this.dynamicobj['305-1Q7'];
                                    this.enviroform
                                        .get('Dghgemi8')
                                        .setValue(this.dynamicobj['305-1Q8']);
                                    this.finalobj['305-1Q8'] =
                                        this.dynamicobj['305-1Q8'];
                                    this.enviroform
                                        .get('Dghgemi9')
                                        .setValue(this.dynamicobj['305-1Q9']);
                                    this.finalobj['305-1Q9'] =
                                        this.dynamicobj['305-1Q9'];
                                    this.enviroform
                                        .get('Dghgemi10')
                                        .setValue(this.dynamicobj['305-1Q10']);
                                    this.finalobj['305-1Q10'] =
                                        this.dynamicobj['305-1Q10'];
                                    this.enviroform
                                        .get('Dghgemi11')
                                        .setValue(
                                            this.dynamicobj['305-1Comment']
                                        );
                                    this.finalobj['305-1Comment'] =
                                        this.dynamicobj['305-1Comment'];
                                }
                                if (yoy == 66) {
                                    this.enviroform
                                        .get('Dgh1')
                                        .setValue(this.dynamicobj['305-2Q1']);
                                    this.finalobj['305-2Q1'] =
                                        this.dynamicobj['305-2Q1'];
                                    this.enviroform
                                        .get('Dgh2')
                                        .setValue(this.dynamicobj['305-2Q2']);
                                    this.finalobj['305-2Q2'] =
                                        this.dynamicobj['305-2Q2'];
                                    this.enviroform
                                        .get('Dgh3')
                                        .setValue(this.dynamicobj['305-2Q3']);
                                    this.finalobj['305-2Q3'] =
                                        this.dynamicobj['305-2Q3'];
                                    this.enviroform
                                        .get('Dgh4')
                                        .setValue(this.dynamicobj['305-2Q4']);
                                    this.finalobj['305-2Q4'] =
                                        this.dynamicobj['305-2Q4'];
                                    this.enviroform
                                        .get('Dgh5')
                                        .setValue(this.dynamicobj['305-2Q5']);
                                    this.finalobj['305-2Q5'] =
                                        this.dynamicobj['305-2Q5'];
                                    this.enviroform
                                        .get('Dgh6')
                                        .setValue(this.dynamicobj['305-2Q6']);
                                    this.finalobj['305-2Q6'] =
                                        this.dynamicobj['305-2Q6'];
                                    this.enviroform
                                        .get('Dgh7')
                                        .setValue(this.dynamicobj['305-2Q7']);
                                    this.finalobj['305-2Q7'] =
                                        this.dynamicobj['305-2Q7'];
                                    this.enviroform
                                        .get('Dgh8')
                                        .setValue(this.dynamicobj['305-2Q8']);
                                    this.finalobj['305-2Q8'] =
                                        this.dynamicobj['305-2Q8'];
                                    this.enviroform
                                        .get('Dgh9')
                                        .setValue(this.dynamicobj['305-2Q9']);
                                    this.finalobj['305-2Q9'] =
                                        this.dynamicobj['305-2Q9'];
                                    this.enviroform
                                        .get('Dgh10')
                                        .setValue(this.dynamicobj['305-2Q10']);
                                    this.finalobj['305-2Q10'] =
                                        this.dynamicobj['305-2Q10'];
                                    this.enviroform
                                        .get('Dgh11')
                                        .setValue(
                                            this.dynamicobj['305-2Comment']
                                        );
                                    this.finalobj['305-2Comment'] =
                                        this.dynamicobj['305-2Comment'];
                                }
                                if (yoy == 67) {
                                    this.enviroform
                                        .get('kgf1')
                                        .setValue(this.dynamicobj['305-3Q1']);
                                    this.finalobj['305-3Q1'] =
                                        this.dynamicobj['305-3Q1'];
                                    this.enviroform
                                        .get('kgf2')
                                        .setValue(this.dynamicobj['305-3Q2']);
                                    this.finalobj['305-3Q2'] =
                                        this.dynamicobj['305-3Q2'];
                                    this.enviroform
                                        .get('kgf3')
                                        .setValue(this.dynamicobj['305-3Q3']);
                                    this.finalobj['305-3Q3'] =
                                        this.dynamicobj['305-3Q3'];
                                    this.enviroform
                                        .get('kgf4')
                                        .setValue(this.dynamicobj['305-3Q4']);
                                    this.finalobj['305-3Q4'] =
                                        this.dynamicobj['305-3Q4'];
                                    this.enviroform
                                        .get('kgf5')
                                        .setValue(this.dynamicobj['305-3Q5']);
                                    this.finalobj['305-3Q5'] =
                                        this.dynamicobj['305-3Q5'];
                                    this.enviroform
                                        .get('kgf6')
                                        .setValue(this.dynamicobj['305-3Q6']);
                                    this.finalobj['305-3Q6'] =
                                        this.dynamicobj['305-3Q6'];
                                    this.enviroform
                                        .get('kgf7')
                                        .setValue(this.dynamicobj['305-3Q7']);
                                    this.finalobj['305-3Q7'] =
                                        this.dynamicobj['305-3Q7'];
                                    this.enviroform
                                        .get('kgf8')
                                        .setValue(this.dynamicobj['305-3Q8']);
                                    this.finalobj['305-3Q8'] =
                                        this.dynamicobj['305-3Q8'];
                                        this.enviroform
                                        .get('kgfsuna')
                                        .setValue(this.dynamicobj['305-3Qsuna']);
                                    this.finalobj['305-3Qsuna'] =
                                        this.dynamicobj['305-3Qsuna'];
                                    this.enviroform
                                        .get('kgf9')
                                        .setValue(this.dynamicobj['305-3Q9']);
                                    this.finalobj['305-3Q9'] =
                                        this.dynamicobj['305-3Q9'];
                                    this.enviroform
                                        .get('kgf10')
                                        .setValue(this.dynamicobj['305-3Q10']);
                                    this.finalobj['305-3Q10'] =
                                        this.dynamicobj['305-3Q10'];
                                    this.enviroform
                                        .get('kgf11')
                                        .setValue(this.dynamicobj['305-3Q11']);
                                    this.finalobj['305-3Q11'] =
                                        this.dynamicobj['305-3Q11'];
                                    this.enviroform
                                        .get('kgf12')
                                        .setValue(this.dynamicobj['305-3Q12']);
                                    this.finalobj['305-3Q12'] =
                                        this.dynamicobj['305-3Q12'];
                                    this.enviroform
                                        .get('kgf13')
                                        .setValue(this.dynamicobj['305-3Q13']);
                                    this.finalobj['305-3Q13'] =
                                        this.dynamicobj['305-3Q13'];
                                    this.enviroform
                                        .get('kgf14')
                                        .setValue(this.dynamicobj['305-3Q14']);
                                    this.finalobj['305-3Q14'] =
                                        this.dynamicobj['305-3Q14'];
                                    this.enviroform
                                        .get('kgf15')
                                        .setValue(this.dynamicobj['305-3Q15']);
                                    this.finalobj['305-3Q15'] =
                                        this.dynamicobj['305-3Q15'];
                                    this.enviroform
                                        .get('kgf16')
                                        .setValue(this.dynamicobj['305-3Q16']);
                                    this.finalobj['305-3Q16'] =
                                        this.dynamicobj['305-3Q16'];
                                    this.enviroform
                                        .get('kgf17')
                                        .setValue(this.dynamicobj['305-3Q17']);
                                    this.finalobj['305-3Q17'] =
                                        this.dynamicobj['305-3Q17'];
                                    this.enviroform
                                        .get('kgf18')
                                        .setValue(this.dynamicobj['305-3Q18']);
                                    this.finalobj['305-3Q18'] =
                                        this.dynamicobj['305-3Q18'];
                                    this.enviroform
                                        .get('kgf19')
                                        .setValue(this.dynamicobj['305-3Q19']);
                                    this.finalobj['305-3Q19'] =
                                        this.dynamicobj['305-3Q19'];
                                    this.enviroform
                                        .get('kgf20')
                                        .setValue(this.dynamicobj['305-3Q20']);
                                    this.finalobj['305-3Q20'] =
                                        this.dynamicobj['305-3Q20'];
                                    this.enviroform
                                        .get('kgf21')
                                        .setValue(this.dynamicobj['305-3Q21']);
                                    this.finalobj['305-3Q21'] =
                                        this.dynamicobj['305-3Q21'];
                                    this.enviroform
                                        .get('kgf22')
                                        .setValue(this.dynamicobj['305-3Q22']);
                                    this.finalobj['305-3Q22'] =
                                        this.dynamicobj['305-3Q22'];
                                    this.enviroform
                                        .get('kgf23')
                                        .setValue(this.dynamicobj['305-3Q23']);
                                    this.finalobj['305-3Q23'] =
                                        this.dynamicobj['305-3Q23'];
                                    this.enviroform
                                        .get('kgf24')
                                        .setValue(this.dynamicobj['305-3Q24']);
                                    this.finalobj['305-3Q24'] =
                                        this.dynamicobj['305-3Q24'];
                                    this.enviroform
                                        .get('kgf25')
                                        .setValue(
                                            this.dynamicobj['305-3Comment']
                                        );
                                    this.finalobj['305-3Comment'] =
                                        this.dynamicobj['305-3Comment'];
                                        this.enviroform
                                        .get('kgf26')
                                        .setValue(
                                            this.dynamicobj['Processing of sold']
                                        );
                                    this.finalobj['Processing of sold'] =
                                        this.dynamicobj['Processing of sold'];
                                }
                                if (yoy == 68) {
                                    this.enviroform
                                        .get('sahoo1')
                                        .setValue(this.dynamicobj['305-4Q1']);
                                    this.finalobj['305-4Q1'] =
                                        this.dynamicobj['305-4Q1'];
                                    this.enviroform
                                        .get('sahoo2')
                                        .setValue(this.dynamicobj['305-4Q2']);
                                    this.finalobj['305-4Q2'] =
                                        this.dynamicobj['305-4Q2'];
                                        this.enviroform
                                        .get('sahoon')
                                        .setValue(this.dynamicobj['305-4Qn']);
                                    this.finalobj['305-4Qn'] =
                                        this.dynamicobj['305-4Qn'];
                                    this.enviroform
                                        .get('sahoo3')
                                        .setValue(this.dynamicobj['305-4Q3']);
                                    this.finalobj['305-4Q3'] =
                                        this.dynamicobj['305-4Q3'];
                                    this.enviroform
                                        .get('sahoo4')
                                        .setValue(this.dynamicobj['305-4Q4']);
                                    this.finalobj['305-4Q4'] =
                                        this.dynamicobj['305-4Q4'];
                                    this.enviroform
                                        .get('sahoo5')
                                        .setValue(
                                            this.dynamicobj['305-4Comment']
                                        );
                                    this.finalobj['305-4Comment'] =
                                        this.dynamicobj['305-4Comment'];
                                }
                                if (yoy == 69) {
                                    this.enviroform
                                        .get('bahu1')
                                        .setValue(this.dynamicobj['305-5Q1']);
                                    this.finalobj['305-5Q1'] =
                                        this.dynamicobj['305-5Q1'];
                                    this.enviroform
                                        .get('bahu2')
                                        .setValue(this.dynamicobj['305-5Q2']);
                                    this.finalobj['305-5Q2'] =
                                        this.dynamicobj['305-5Q2'];
                                    this.enviroform
                                        .get('bahu3')
                                        .setValue(this.dynamicobj['305-5Q3']);
                                    this.finalobj['305-5Q3'] =
                                        this.dynamicobj['305-5Q3'];
                                    this.enviroform
                                        .get('bahu4')
                                        .setValue(this.dynamicobj['305-5Q4']);
                                    this.finalobj['305-5Q4'] =
                                        this.dynamicobj['305-5Q4'];
                                    this.enviroform
                                        .get('bahu5')
                                        .setValue(this.dynamicobj['305-5Q5']);
                                    this.finalobj['305-5Q5'] =
                                        this.dynamicobj['305-5Q5'];
                                    this.enviroform
                                        .get('bahu6')
                                        .setValue(this.dynamicobj['305-5Q6']);
                                    this.finalobj['305-5Q6'] =
                                        this.dynamicobj['305-5Q6'];
                                    this.enviroform
                                        .get('bahu7')
                                        .setValue(
                                            this.dynamicobj['305-5Comment']
                                        );
                                    this.finalobj['305-5Comment'] =
                                        this.dynamicobj['305-5Comment'];
                                }
                                if (yoy == 70) {
                                    this.enviroform
                                        .get('bali1')
                                        .setValue(this.dynamicobj['305-6Q1']);
                                    this.finalobj['305-6Q1'] =
                                        this.dynamicobj['305-6Q1'];
                                    this.enviroform
                                        .get('bali2')
                                        .setValue(this.dynamicobj['305-6Q2']);
                                    this.finalobj['305-6Q2'] =
                                        this.dynamicobj['305-6Q2'];
                                    this.enviroform
                                        .get('bali3')
                                        .setValue(this.dynamicobj['305-6Q3']);
                                    this.finalobj['305-6Q3'] =
                                        this.dynamicobj['305-6Q3'];
                                    this.enviroform
                                        .get('bali4')
                                        .setValue(this.dynamicobj['305-6Q4']);
                                    this.finalobj['305-6Q4'] =
                                        this.dynamicobj['305-6Q4'];
                                    this.enviroform
                                        .get('bali5')
                                        .setValue(this.dynamicobj['305-6Q5']);
                                    this.finalobj['305-6Q5'] =
                                        this.dynamicobj['305-6Q5'];
                                    this.enviroform
                                        .get('bali6')
                                        .setValue(this.dynamicobj['305-6Q6']);
                                    this.finalobj['305-6Q6'] =
                                        this.dynamicobj['305-6Q6'];
                                    this.enviroform
                                        .get('bali7')
                                        .setValue(
                                            this.dynamicobj['305-6Comment']
                                        );
                                    this.finalobj['305-6Comment'] =
                                        this.dynamicobj['305-6Comment'];
                                }
                                if (yoy == 71) {
                                    this.enviroform
                                        .get('apple1')
                                        .setValue(this.dynamicobj['305-7Q1']);
                                    this.finalobj['305-7Q1'] =
                                        this.dynamicobj['305-7Q1'];
                                    this.enviroform
                                        .get('apple2')
                                        .setValue(this.dynamicobj['305-7Q2']);
                                    this.finalobj['305-7Q2'] =
                                        this.dynamicobj['305-7Q2'];
                                    this.enviroform
                                        .get('apple3')
                                        .setValue(this.dynamicobj['305-7Q3']);
                                    this.finalobj['305-7Q3'] =
                                        this.dynamicobj['305-7Q3'];
                                    this.enviroform
                                        .get('apple4')
                                        .setValue(this.dynamicobj['305-7Q4']);
                                    this.finalobj['305-7Q4'] =
                                        this.dynamicobj['305-7Q4'];
                                    this.enviroform
                                        .get('apple5')
                                        .setValue(this.dynamicobj['305-7Q5']);
                                    this.finalobj['305-7Q5'] =
                                        this.dynamicobj['305-7Q5'];
                                    this.enviroform
                                        .get('apple6')
                                        .setValue(this.dynamicobj['305-7Q6']);
                                    this.finalobj['305-7Q6'] =
                                        this.dynamicobj['305-7Q6'];
                                    this.enviroform
                                        .get('apple7')
                                        .setValue(this.dynamicobj['305-7Q7']);
                                    this.finalobj['305-7Q7'] =
                                        this.dynamicobj['305-7Q7'];
                                    this.enviroform
                                        .get('apple8')
                                        .setValue(this.dynamicobj['305-7Q8']);
                                    this.finalobj['305-7Q8'] =
                                        this.dynamicobj['305-7Q8'];
                                    this.enviroform
                                        .get('apple9')
                                        .setValue(this.dynamicobj['305-7Q9']);
                                    this.finalobj['305-7Q9'] =
                                        this.dynamicobj['305-7Q9'];
                                    this.enviroform
                                        .get('apple10')
                                        .setValue(this.dynamicobj['305-7Q10']);
                                    this.finalobj['305-7Q10'] =
                                        this.dynamicobj['305-7Q10'];
                                    this.enviroform
                                        .get('apple11')
                                        .setValue(this.dynamicobj['305-7Q11']);
                                    this.finalobj['305-7Q11'] =
                                        this.dynamicobj['305-7Q11'];
                                    this.enviroform
                                        .get('apple12')
                                        .setValue(this.dynamicobj['305-7Q12']);
                                    this.finalobj['305-7Q12'] =
                                        this.dynamicobj['305-7Q12'];
                                    if (
                                        this.dynamicobj['306-4Qaddiii'] ==
                                            null ||
                                        this.dynamicobj['306-4Qaddiii'] == '' ||
                                        this.dynamicobj['306-4Qaddiii'] ==
                                            '[]' ||
                                        this.dynamicobj['306-4Qaddiii'] ==
                                            undefined
                                    ) {
                                        this.finalobj['306-4Qaddiii'] = '';
                                    } else {
                                        this.finalobj['306-4Qaddiii'] =
                                            JSON.parse(
                                                this.dynamicobj['306-4Qaddiii']
                                            );
                                        this.lookupdtl306iii = JSON.parse(
                                            this.dynamicobj['306-4Qaddiii']
                                        );
                                    }
                                    this.enviroform
                                        .get('apple16')
                                        .setValue(this.dynamicobj['305-7Q16']);
                                    this.finalobj['305-7Q16'] =
                                        this.dynamicobj['305-7Q16'];
                                    this.enviroform
                                        .get('apple17')
                                        .setValue(this.dynamicobj['305-7Q17']);
                                    this.finalobj['305-7Q17'] =
                                        this.dynamicobj['305-7Q17'];
                                    this.enviroform
                                        .get('apple18')
                                        .setValue(this.dynamicobj['305-7Q18']);
                                    this.finalobj['305-7Q18'] =
                                        this.dynamicobj['305-7Q18'];
                                    this.enviroform
                                        .get('apple19')
                                        .setValue(this.dynamicobj['305-7Q19']);
                                    this.finalobj['305-7Q19'] =
                                        this.dynamicobj['305-7Q19'];
                                    this.enviroform
                                        .get('apple20')
                                        .setValue(this.dynamicobj['305-7Q20']);
                                    this.finalobj['305-7Q20'] =
                                        this.dynamicobj['305-7Q20'];
                                    this.enviroform
                                        .get('apple21')
                                        .setValue(this.dynamicobj['305-7Q21']);
                                    this.finalobj['305-7Q21'] =
                                        this.dynamicobj['305-7Q21'];
                                    this.enviroform
                                        .get('apple22')
                                        .setValue(this.dynamicobj['305-7Q22']);
                                    this.finalobj['305-7Q22'] =
                                        this.dynamicobj['305-7Q22'];
                                    this.enviroform
                                        .get('apple23')
                                        .setValue(this.dynamicobj['305-7Q23']);
                                    this.finalobj['305-7Q23'] =
                                        this.dynamicobj['305-7Q23'];
                                    this.enviroform
                                        .get('apple24')
                                        .setValue(this.dynamicobj['305-7Q24']);
                                    this.finalobj['305-7Q24'] =
                                        this.dynamicobj['305-7Q24'];
                                }
                                if (yoy == 72) {
                                    this.enviroform
                                        .get('TSIO1')
                                        .setValue(this.dynamicobj['306-1Q1']);
                                    this.finalobj['306-1Q1'] =
                                        this.dynamicobj['306-1Q1'];
                                    this.enviroform
                                        .get('TSIO2')
                                        .setValue(this.dynamicobj['306-1Q2']);
                                    this.finalobj['306-1Q2'] =
                                        this.dynamicobj['306-1Q2'];
                                    this.enviroform
                                        .get('TSIO3')
                                        .setValue(this.dynamicobj['306-1Q3']);
                                    this.finalobj['306-1Q3'] =
                                        this.dynamicobj['306-1Q3'];
                                }
                                if (yoy == 73) {
                                    this.enviroform
                                        .get('TSIT1')
                                        .setValue(this.dynamicobj['306-2Q1']);
                                    this.finalobj['306-2Q1'] =
                                        this.dynamicobj['306-2Q1'];
                                    this.enviroform
                                        .get('TSIT2')
                                        .setValue(this.dynamicobj['306-2Q2']);
                                    this.finalobj['306-2Q2'] =
                                        this.dynamicobj['306-2Q2'];
                                    this.enviroform
                                        .get('TSIT3')
                                        .setValue(this.dynamicobj['306-2Q3']);
                                    this.finalobj['306-2Q3'] =
                                        this.dynamicobj['306-2Q3'];
                                    this.enviroform
                                        .get('TSIT4')
                                        .setValue(this.dynamicobj['306-2Q4']);
                                    this.finalobj['306-2Q4'] =
                                        this.dynamicobj['306-2Q4'];
                                }
                                if (yoy == 74) {
                                    this.enviroform
                                        .get('TSITH1')
                                        .setValue(this.dynamicobj['306-3Q1']);
                                    this.finalobj['306-3Q1'] =
                                        this.dynamicobj['306-3Q1'];
                                    this.enviroform
                                        .get('TSITH2')
                                        .setValue(this.dynamicobj['306-3Q2']);
                                    this.finalobj['306-3Q2'] =
                                        this.dynamicobj['306-3Q2'];
                                    this.enviroform
                                        .get('TSITH3')
                                        .setValue(this.dynamicobj['306-3Q3']);
                                    this.finalobj['306-3Q3'] =
                                        this.dynamicobj['306-3Q3'];
                                    this.enviroform
                                        .get('TSITH4')
                                        .setValue(this.dynamicobj['306-3Q4']);
                                    this.finalobj['306-3Q4'] =
                                        this.dynamicobj['306-3Q4'];
                                    this.enviroform
                                        .get('TSITH5')
                                        .setValue(this.dynamicobj['306-3Q5']);
                                    this.finalobj['306-3Q5'] =
                                        this.dynamicobj['306-3Q5'];
                                    this.enviroform
                                        .get('TSITH6')
                                        .setValue(this.dynamicobj['306-3Q6']);
                                    this.finalobj['306-3Q6'] =
                                        this.dynamicobj['306-3Q6'];
                                    this.enviroform
                                        .get('TSITH7')
                                        .setValue(this.dynamicobj['306-3Q7']);
                                    this.finalobj['306-3Q7'] =
                                        this.dynamicobj['306-3Q7'];
                                    this.enviroform
                                        .get('TSITH8')
                                        .setValue(this.dynamicobj['306-3Q8']);
                                    this.finalobj['306-3Q8'] =
                                        this.dynamicobj['306-3Q8'];
                                    this.enviroform
                                        .get('TSITH9')
                                        .setValue(this.dynamicobj['306-3Q9']);
                                    this.finalobj['306-3Q9'] =
                                        this.dynamicobj['306-3Q9'];
                                }

                                if (yoy == 75) {
                                    this.enviroform
                                        .get('TSIF1')
                                        .setValue(this.dynamicobj['306-4Q1']);
                                    this.finalobj['306-4Q1'] =
                                        this.dynamicobj['306-4Q1'];
                                    this.enviroform
                                        .get('TSIF2')
                                        .setValue(this.dynamicobj['306-4Q2']);
                                    this.finalobj['306-4Q2'] =
                                        this.dynamicobj['306-4Q2'];
                                    this.enviroform
                                        .get('TSIF3')
                                        .setValue(this.dynamicobj['306-4Q3']);
                                    this.finalobj['306-4Q3'] =
                                        this.dynamicobj['306-4Q3'];
                                    this.enviroform
                                        .get('TSIF4')
                                        .setValue(this.dynamicobj['306-4Q4']);
                                    this.finalobj['306-4Q4'] =
                                        this.dynamicobj['306-4Q4'];
                                    this.enviroform
                                        .get('TSIF5')
                                        .setValue(this.dynamicobj['306-4Q5']);
                                    this.finalobj['306-4Q5'] =
                                        this.dynamicobj['306-4Q5'];
                                    this.enviroform
                                        .get('TSIF6')
                                        .setValue(this.dynamicobj['306-4Q6']);
                                    this.finalobj['306-4Q6'] =
                                        this.dynamicobj['306-4Q6'];
                                    this.enviroform
                                        .get('TSIF7')
                                        .setValue(this.dynamicobj['306-4Q7']);
                                    this.finalobj['306-4Q7'] =
                                        this.dynamicobj['306-4Q7'];
                                    this.enviroform
                                        .get('TSIF8')
                                        .setValue(this.dynamicobj['306-4Q8']);
                                    this.finalobj['306-4Q8'] =
                                        this.dynamicobj['306-4Q8'];
                                    this.enviroform
                                        .get('TSIF9')
                                        .setValue(this.dynamicobj['306-4Q9']);
                                    this.finalobj['306-4Q9'] =
                                        this.dynamicobj['306-4Q9'];
                                    this.enviroform
                                        .get('TSIF10')
                                        .setValue(this.dynamicobj['306-4Q10']);
                                    this.finalobj['306-4Q10'] =
                                        this.dynamicobj['306-4Q10'];
                                    this.enviroform
                                        .get('TSIF11')
                                        .setValue(this.dynamicobj['306-4Q11']);
                                    this.finalobj['306-4Q11'] =
                                        this.dynamicobj['306-4Q11'];
                                    this.enviroform
                                        .get('TSIF12')
                                        .setValue(this.dynamicobj['306-4Q12']);
                                    this.finalobj['306-4Q12'] =
                                        this.dynamicobj['306-4Q12'];
                                    this.enviroform
                                        .get('TSIF16')
                                        .setValue(this.dynamicobj['306-4Q16']);
                                    this.finalobj['306-4Q16'] =
                                        this.dynamicobj['306-4Q16'];
                                    this.enviroform
                                        .get('TSIF17')
                                        .setValue(this.dynamicobj['306-4Q17']);
                                    this.finalobj['306-4Q17'] =
                                        this.dynamicobj['306-4Q17'];
                                    this.enviroform
                                        .get('TSIF18')
                                        .setValue(this.dynamicobj['306-4Q18']);
                                    this.finalobj['306-4Q18'] =
                                        this.dynamicobj['306-4Q18'];
                                    this.enviroform
                                        .get('TSIF19')
                                        .setValue(this.dynamicobj['306-4Q19']);
                                    this.finalobj['306-4Q19'] =
                                        this.dynamicobj['306-4Q19'];
                                    this.enviroform
                                        .get('TSIF20')
                                        .setValue(this.dynamicobj['306-4Q20']);
                                    this.finalobj['306-4Q20'] =
                                        this.dynamicobj['306-4Q20'];
                                    this.enviroform
                                        .get('TSIF21')
                                        .setValue(this.dynamicobj['306-4Q21']);
                                    this.finalobj['306-4Q21'] =
                                        this.dynamicobj['306-4Q21'];
                                    this.enviroform
                                        .get('TSIF25')
                                        .setValue(this.dynamicobj['306-4Q25']);
                                    this.finalobj['306-4Q25'] =
                                        this.dynamicobj['306-4Q25'];
                                    this.enviroform
                                        .get('TSIF26')
                                        .setValue(this.dynamicobj['306-4Q26']);
                                    this.finalobj['306-4Q26'] =
                                        this.dynamicobj['306-4Q26'];
                                    this.enviroform
                                        .get('TSIF27')
                                        .setValue(this.dynamicobj['306-4Q27']);
                                    this.finalobj['306-4Q27'] =
                                        this.dynamicobj['306-4Q27'];
                                    this.enviroform
                                        .get('TSIF28')
                                        .setValue(this.dynamicobj['306-4Q28']);
                                    this.finalobj['306-4Q28'] =
                                        this.dynamicobj['306-4Q28'];
                                    this.enviroform
                                        .get('TSIF29')
                                        .setValue(this.dynamicobj['306-4Q29']);
                                    this.finalobj['306-4Q29'] =
                                        this.dynamicobj['306-4Q29'];
                                    this.enviroform
                                        .get('TSIF30')
                                        .setValue(this.dynamicobj['306-4Q30']);
                                    this.finalobj['306-4Q30'] =
                                        this.dynamicobj['306-4Q30'];
                                    this.enviroform
                                        .get('TSIF31')
                                        .setValue(this.dynamicobj['306-4Q31']);
                                    this.finalobj['306-4Q31'] =
                                        this.dynamicobj['306-4Q31'];
                                    this.enviroform
                                        .get('TSIF33')
                                        .setValue(this.dynamicobj['306-4Q33']);
                                    this.finalobj['306-4Q33'] =
                                        this.dynamicobj['306-4Q33'];
                                    this.enviroform
                                        .get('TSIF33')
                                        .setValue(this.dynamicobj['306-4Q33']);
                                    this.finalobj['306-4Q33'] =
                                        this.dynamicobj['306-4Q33'];
                                    this.enviroform
                                        .get('TSIF34')
                                        .setValue(this.dynamicobj['306-4Q34']);
                                    this.finalobj['306-4Q34'] =
                                        this.dynamicobj['306-4Q34'];
                                    this.enviroform
                                        .get('TSIF35')
                                        .setValue(this.dynamicobj['306-4Q35']);
                                    this.finalobj['306-4Q35'] =
                                        this.dynamicobj['306-4Q35'];
                                    this.enviroform
                                        .get('TSIF36')
                                        .setValue(this.dynamicobj['306-4Q36']);
                                    this.finalobj['306-4Q36'] =
                                        this.dynamicobj['306-4Q36'];
                                    this.enviroform
                                        .get('TSIF37')
                                        .setValue(this.dynamicobj['306-4Q37']);
                                    this.finalobj['306-4Q37'] =
                                        this.dynamicobj['306-4Q37'];
                                    this.enviroform
                                        .get('TSIF38')
                                        .setValue(this.dynamicobj['306-4Q38']);
                                    this.finalobj['306-4Q38'] =
                                        this.dynamicobj['306-4Q38'];
                                    this.enviroform
                                        .get('TSIF39')
                                        .setValue(this.dynamicobj['306-4Q39']);
                                    this.finalobj['306-4Q39'] =
                                        this.dynamicobj['306-4Q39'];
                                    this.enviroform
                                        .get('TSIF40')
                                        .setValue(this.dynamicobj['306-4Q40']);
                                    this.finalobj['306-4Q40'] =
                                        this.dynamicobj['306-4Q40'];
                                    this.enviroform
                                        .get('TSIF41')
                                        .setValue(this.dynamicobj['306-4Q41']);
                                    this.finalobj['306-4Q41'] =
                                        this.dynamicobj['306-4Q41'];
                                    this.enviroform
                                        .get('TSIF42')
                                        .setValue(this.dynamicobj['306-4Q42']);
                                    this.finalobj['306-4Q42'] =
                                        this.dynamicobj['306-4Q42'];
                                    this.enviroform
                                        .get('TSIF43')
                                        .setValue(this.dynamicobj['306-4Q43']);
                                    this.finalobj['306-4Q43'] =
                                        this.dynamicobj['306-4Q43'];
                                    this.enviroform
                                        .get('TSIF44')
                                        .setValue(this.dynamicobj['306-4Q44']);
                                    this.finalobj['306-4Q44'] =
                                        this.dynamicobj['306-4Q44'];
                                    this.enviroform
                                        .get('TSIF45')
                                        .setValue(this.dynamicobj['306-4Q45']);
                                    this.finalobj['306-4Q45'] =
                                        this.dynamicobj['306-4Q45'];
                                    this.enviroform
                                        .get('TSIF46')
                                        .setValue(this.dynamicobj['306-4Q46']);
                                    this.finalobj['306-4Q46'] =
                                        this.dynamicobj['306-4Q46'];
                                    this.enviroform
                                        .get('TSIF47')
                                        .setValue(this.dynamicobj['306-4Q47']);
                                    this.finalobj['306-4Q47'] =
                                        this.dynamicobj['306-4Q47'];
                                    this.enviroform
                                        .get('TSIF48')
                                        .setValue(this.dynamicobj['306-4Q48']);
                                    this.finalobj['306-4Q48'] =
                                        this.dynamicobj['306-4Q48'];
                                    this.enviroform
                                        .get('TSIF49')
                                        .setValue(this.dynamicobj['306-4Q49']);
                                    this.finalobj['306-4Q49'] =
                                        this.dynamicobj['306-4Q49'];
                                }

                                if (yoy == 76) {
                                    this.enviroform
                                        .get('TSFIV1')
                                        .setValue(this.dynamicobj['306-5Q1']);
                                    this.finalobj['306-5Q1'] =
                                        this.dynamicobj['306-5Q1'];
                                    this.enviroform
                                        .get('TSFIV2')
                                        .setValue(this.dynamicobj['306-5Q2']);
                                    this.finalobj['306-5Q2'] =
                                        this.dynamicobj['306-5Q2'];
                                    this.enviroform
                                        .get('TSFIV3')
                                        .setValue(this.dynamicobj['306-5Q3']);
                                    this.finalobj['306-5Q3'] =
                                        this.dynamicobj['306-5Q3'];
                                    this.enviroform
                                        .get('TSFIV4')
                                        .setValue(this.dynamicobj['306-5Q4']);
                                    this.finalobj['306-5Q4'] =
                                        this.dynamicobj['306-5Q4'];
                                    this.enviroform
                                        .get('TSFIV5')
                                        .setValue(this.dynamicobj['306-5Q5']);
                                    this.finalobj['306-5Q5'] =
                                        this.dynamicobj['306-5Q5'];
                                    this.enviroform
                                        .get('TSFIV6')
                                        .setValue(this.dynamicobj['306-5Q6']);
                                    this.finalobj['306-5Q6'] =
                                        this.dynamicobj['306-5Q6'];
                                    this.enviroform
                                        .get('TSFIV7')
                                        .setValue(this.dynamicobj['306-5Q7']);
                                    this.finalobj['306-5Q7'] =
                                        this.dynamicobj['306-5Q7'];
                                    this.enviroform
                                        .get('TSFIV8')
                                        .setValue(this.dynamicobj['306-5Q8']);
                                    this.finalobj['306-5Q8'] =
                                        this.dynamicobj['306-5Q8'];
                                    this.enviroform
                                        .get('TSFIV9')
                                        .setValue(this.dynamicobj['306-5Q9']);
                                    this.finalobj['306-5Q9'] =
                                        this.dynamicobj['306-5Q9'];
                                    this.enviroform
                                        .get('TSFIV10')
                                        .setValue(this.dynamicobj['306-5Q10']);
                                    this.finalobj['306-5Q10'] =
                                        this.dynamicobj['306-5Q10'];
                                    this.enviroform
                                        .get('TSFIV11')
                                        .setValue(this.dynamicobj['306-5Q11']);
                                    this.finalobj['306-5Q11'] =
                                        this.dynamicobj['306-5Q11'];
                                    this.enviroform
                                        .get('TSFIV12')
                                        .setValue(this.dynamicobj['306-5Q12']);
                                    this.finalobj['306-5Q12'] =
                                        this.dynamicobj['306-5Q12'];
                                    this.enviroform
                                        .get('TSFIV13')
                                        .setValue(this.dynamicobj['306-5Q13']);
                                    this.finalobj['306-5Q13'] =
                                        this.dynamicobj['306-5Q13'];
                                    this.enviroform
                                        .get('TSFIV14')
                                        .setValue(this.dynamicobj['306-5Q14']);
                                    this.finalobj['306-5Q14'] =
                                        this.dynamicobj['306-5Q14'];
                                    this.enviroform
                                        .get('TSFIV15')
                                        .setValue(this.dynamicobj['306-5Q15']);
                                    this.finalobj['306-5Q15'] =
                                        this.dynamicobj['306-5Q15'];
                                    this.enviroform
                                        .get('TSFIV16')
                                        .setValue(this.dynamicobj['306-5Q16']);
                                    this.finalobj['306-5Q16'] =
                                        this.dynamicobj['306-5Q16'];
                                    this.enviroform
                                        .get('TSFIV17')
                                        .setValue(this.dynamicobj['306-5Q17']);
                                    this.finalobj['306-5Q17'] =
                                        this.dynamicobj['306-5Q17'];
                                    this.enviroform
                                        .get('TSFIV18')
                                        .setValue(this.dynamicobj['306-5Q18']);
                                    this.finalobj['306-5Q18'] =
                                        this.dynamicobj['306-5Q18'];
                                    this.enviroform
                                        .get('TSFIV19')
                                        .setValue(this.dynamicobj['306-5Q19']);
                                    this.finalobj['306-5Q19'] =
                                        this.dynamicobj['306-5Q19'];
                                    this.enviroform
                                        .get('TSFIV20')
                                        .setValue(this.dynamicobj['306-5Q20']);
                                    this.finalobj['306-5Q20'] =
                                        this.dynamicobj['306-5Q20'];
                                    this.enviroform
                                        .get('TSFIV21')
                                        .setValue(this.dynamicobj['306-5Q21']);
                                    this.finalobj['306-5Q21'] =
                                        this.dynamicobj['306-5Q21'];
                                    this.enviroform
                                        .get('TSFIV22')
                                        .setValue(this.dynamicobj['306-5Q22']);
                                    this.finalobj['306-5Q22'] =
                                        this.dynamicobj['306-5Q22'];
                                    this.enviroform
                                        .get('TSFIV23')
                                        .setValue(this.dynamicobj['306-5Q23']);
                                    this.finalobj['306-5Q23'] =
                                        this.dynamicobj['306-5Q23'];
                                    this.enviroform
                                        .get('TSFIV24')
                                        .setValue(this.dynamicobj['306-5Q24']);
                                    this.finalobj['306-5Q24'] =
                                        this.dynamicobj['306-5Q24'];
                                    this.enviroform
                                        .get('TSFIV25')
                                        .setValue(this.dynamicobj['306-5Q25']);
                                    this.finalobj['306-5Q25'] =
                                        this.dynamicobj['306-5Q25'];
                                    this.enviroform
                                        .get('TSFIV26')
                                        .setValue(this.dynamicobj['306-5Q26']);
                                    this.finalobj['306-5Q26'] =
                                        this.dynamicobj['306-5Q26'];
                                    this.enviroform
                                        .get('TSFIV27')
                                        .setValue(this.dynamicobj['306-5Q27']);
                                    this.finalobj['306-5Q27'] =
                                        this.dynamicobj['306-5Q27'];
                                    this.enviroform
                                        .get('TSFIV28')
                                        .setValue(this.dynamicobj['306-5Q28']);
                                    this.finalobj['306-5Q28'] =
                                        this.dynamicobj['306-5Q28'];
                                    this.enviroform
                                        .get('TSFIV29')
                                        .setValue(this.dynamicobj['306-5Q29']);
                                    this.finalobj['306-5Q29'] =
                                        this.dynamicobj['306-5Q29'];
                                    this.enviroform
                                        .get('TSFIV30')
                                        .setValue(this.dynamicobj['306-5Q30']);
                                    this.finalobj['306-5Q30'] =
                                        this.dynamicobj['306-5Q30'];
                                    this.enviroform
                                        .get('TSFIV31')
                                        .setValue(this.dynamicobj['306-5Q31']);
                                    this.finalobj['306-5Q31'] =
                                        this.dynamicobj['306-5Q31'];
                                    this.enviroform
                                        .get('TSFIV33')
                                        .setValue(this.dynamicobj['306-5Q33']);
                                    this.finalobj['306-5Q33'] =
                                        this.dynamicobj['306-5Q33'];
                                    this.enviroform
                                        .get('TSFIV33')
                                        .setValue(this.dynamicobj['306-5Q33']);
                                    this.finalobj['306-5Q33'] =
                                        this.dynamicobj['306-5Q33'];
                                    this.enviroform
                                        .get('TSFIV34')
                                        .setValue(this.dynamicobj['306-5Q34']);
                                    this.finalobj['306-5Q34'] =
                                        this.dynamicobj['306-5Q34'];
                                    this.enviroform
                                        .get('TSFIV35')
                                        .setValue(this.dynamicobj['306-5Q35']);
                                    this.finalobj['306-5Q35'] =
                                        this.dynamicobj['306-5Q35'];
                                    this.enviroform
                                        .get('TSFIV36')
                                        .setValue(this.dynamicobj['306-5Q36']);
                                    this.finalobj['306-5Q36'] =
                                        this.dynamicobj['306-5Q36'];
                                    this.enviroform
                                        .get('TSFIV37')
                                        .setValue(this.dynamicobj['306-5Q37']);
                                    this.finalobj['306-5Q37'] =
                                        this.dynamicobj['306-5Q37'];
                                    this.enviroform
                                        .get('TSFIV38')
                                        .setValue(this.dynamicobj['306-5Q38']);
                                    this.finalobj['306-5Q38'] =
                                        this.dynamicobj['306-5Q38'];
                                    this.enviroform
                                        .get('TSFIV39')
                                        .setValue(this.dynamicobj['306-5Q39']);
                                    this.finalobj['306-5Q39'] =
                                        this.dynamicobj['306-5Q39'];
                                    this.enviroform
                                        .get('TSFIV40')
                                        .setValue(this.dynamicobj['306-5Q40']);
                                    this.finalobj['306-5Q40'] =
                                        this.dynamicobj['306-5Q40'];
                                    this.enviroform
                                        .get('TSFIV41')
                                        .setValue(this.dynamicobj['306-5Q41']);
                                    this.finalobj['306-5Q41'] =
                                        this.dynamicobj['306-5Q41'];
                                    this.enviroform
                                        .get('TSFIV42')
                                        .setValue(this.dynamicobj['306-5Q42']);
                                    this.finalobj['306-5Q42'] =
                                        this.dynamicobj['306-5Q42'];
                                    this.enviroform
                                        .get('TSFIV43')
                                        .setValue(this.dynamicobj['306-5Q43']);
                                    this.finalobj['306-5Q43'] =
                                        this.dynamicobj['306-5Q43'];
                                    this.enviroform
                                        .get('TSFIV44')
                                        .setValue(this.dynamicobj['306-5Q44']);
                                    this.finalobj['306-5Q44'] =
                                        this.dynamicobj['306-5Q44'];
                                    this.enviroform
                                        .get('TSFIV45')
                                        .setValue(this.dynamicobj['306-5Q45']);
                                    this.finalobj['306-5Q45'] =
                                        this.dynamicobj['306-5Q45'];
                                    this.enviroform
                                        .get('TSFIV46')
                                        .setValue(this.dynamicobj['306-5Q46']);
                                    this.finalobj['306-5Q46'] =
                                        this.dynamicobj['306-5Q46'];
                                    this.enviroform
                                        .get('TSFIV47')
                                        .setValue(this.dynamicobj['306-5Q47']);
                                    this.finalobj['306-5Q47'] =
                                        this.dynamicobj['306-5Q47'];
                                    this.enviroform
                                        .get('TSFIV48')
                                        .setValue(this.dynamicobj['306-5Q48']);
                                    this.finalobj['306-5Q48'] =
                                        this.dynamicobj['306-5Q48'];
                                    this.enviroform
                                        .get('TSFIV49')
                                        .setValue(this.dynamicobj['306-5Q49']);
                                    this.finalobj['306-5Q49'] =
                                        this.dynamicobj['306-5Q49'];
                                    this.enviroform
                                        .get('TSFIV50')
                                        .setValue(this.dynamicobj['306-5Q50']);
                                    this.finalobj['306-5Q50'] =
                                        this.dynamicobj['306-5Q50'];
                                    this.enviroform
                                        .get('TSFIV51')
                                        .setValue(this.dynamicobj['306-5Q51']);
                                    this.finalobj['306-5Q51'] =
                                        this.dynamicobj['306-5Q51'];
                                    this.enviroform
                                        .get('TSFIV53')
                                        .setValue(this.dynamicobj['306-5Q53']);
                                    this.finalobj['306-5Q53'] =
                                        this.dynamicobj['306-5Q53'];
                                    this.enviroform
                                        .get('TSFIV53')
                                        .setValue(this.dynamicobj['306-5Q53']);
                                    this.finalobj['306-5Q53'] =
                                        this.dynamicobj['306-5Q53'];
                                    this.enviroform
                                        .get('TSFIV54')
                                        .setValue(this.dynamicobj['306-5Q54']);
                                    this.finalobj['306-5Q54'] =
                                        this.dynamicobj['306-5Q54'];
                                    this.enviroform
                                        .get('TSFIV55')
                                        .setValue(this.dynamicobj['306-5Q55']);
                                    this.finalobj['306-5Q55'] =
                                        this.dynamicobj['306-5Q55'];
                                    this.enviroform
                                        .get('TSFIV56')
                                        .setValue(this.dynamicobj['306-5Q56']);
                                    this.finalobj['306-5Q56'] =
                                        this.dynamicobj['306-5Q56'];
                                    this.enviroform
                                        .get('TSFIV57')
                                        .setValue(this.dynamicobj['306-5Q57']);
                                    this.finalobj['306-5Q57'] =
                                        this.dynamicobj['306-5Q57'];
                                    this.enviroform
                                        .get('TSFIV58')
                                        .setValue(this.dynamicobj['306-5Q58']);
                                    this.finalobj['306-5Q58'] =
                                        this.dynamicobj['306-5Q58'];
                                    this.enviroform
                                        .get('TSFIV59')
                                        .setValue(this.dynamicobj['306-5Q59']);
                                    this.finalobj['306-5Q59'] =
                                        this.dynamicobj['306-5Q59'];
                                    this.enviroform
                                        .get('TSFIV60')
                                        .setValue(this.dynamicobj['306-5Q60']);
                                    this.finalobj['306-5Q60'] =
                                        this.dynamicobj['306-5Q60'];
                                }

                                if (yoy == 77) {
                                    this.enviroform
                                        .get('TSO1')
                                        .setValue(this.dynamicobj['307-1Q1']);
                                    this.finalobj['307-1Q1'] =
                                        this.dynamicobj['307-1Q1'];
                                    this.enviroform
                                        .get('TSO2')
                                        .setValue(this.dynamicobj['307-1Q2']);
                                    this.finalobj['307-1Q2'] =
                                        this.dynamicobj['307-1Q2'];
                                    this.enviroform
                                        .get('TSO3')
                                        .setValue(this.dynamicobj['307-1Q3']);
                                    this.finalobj['307-1Q3'] =
                                        this.dynamicobj['307-1Q3'];
                                    this.enviroform
                                        .get('TSO4')
                                        .setValue(this.dynamicobj['307-1Q4']);
                                    this.finalobj['307-1Q4'] =
                                        this.dynamicobj['307-1Q4'];
                                    this.enviroform
                                        .get('TSO5')
                                        .setValue(this.dynamicobj['307-1Q5']);
                                    this.finalobj['307-1Q5'] =
                                        this.dynamicobj['307-1Q5'];
                                    this.enviroform
                                        .get('TSO6')
                                        .setValue(this.dynamicobj['307-1Q6']);
                                    this.finalobj['307-1Q6'] =
                                        this.dynamicobj['307-1Q6'];
                                }
                                if (yoy == 78) {
                                    this.enviroform
                                        .get('Teo1')
                                        .setValue(this.dynamicobj['308-1Q1']);
                                    this.finalobj['308-1Q1'] =
                                        this.dynamicobj['308-1Q1'];
                                    this.enviroform
                                        .get('Teo2')
                                        .setValue(this.dynamicobj['308-1Q2']);
                                    this.finalobj['308-1Q2'] =
                                        this.dynamicobj['308-1Q2'];
                                }

                                if (yoy == 79) {
                                    this.enviroform
                                        .get('TeT1')
                                        .setValue(this.dynamicobj['308-2Q1']);
                                    this.finalobj['308-2Q1'] =
                                        this.dynamicobj['308-2Q1'];
                                    this.enviroform
                                        .get('TeT2')
                                        .setValue(this.dynamicobj['308-2Q2']);
                                    this.finalobj['308-2Q2'] =
                                        this.dynamicobj['308-2Q2'];
                                    this.enviroform
                                        .get('TeT3')
                                        .setValue(this.dynamicobj['308-2Q3']);
                                    this.finalobj['308-2Q3'] =
                                        this.dynamicobj['308-2Q3'];
                                    this.enviroform
                                        .get('TeT4')
                                        .setValue(this.dynamicobj['308-2Q4']);
                                    this.finalobj['308-2Q4'] =
                                        this.dynamicobj['308-2Q4'];
                                    this.enviroform
                                        .get('TeT5')
                                        .setValue(this.dynamicobj['308-2Q5']);
                                    this.finalobj['308-2Q5'] =
                                        this.dynamicobj['308-2Q5'];
                                    this.enviroform
                                        .get('TeT6')
                                        .setValue(this.dynamicobj['308-2Q6']);
                                    this.finalobj['308-2Q6'] =
                                        this.dynamicobj['308-2Q6'];
                                    this.enviroform
                                        .get('TeT7')
                                        .setValue(this.dynamicobj['308-2Q7']);
                                    this.finalobj['308-2Q7'] =
                                        this.dynamicobj['308-2Q7'];
                                    this.enviroform
                                        .get('TeT8')
                                        .setValue(this.dynamicobj['308-2Q8']);
                                    this.finalobj['308-2Q8'] =
                                        this.dynamicobj['308-2Q8'];
                                }
                                if (yoy == 80) {
                                    this.socialform
                                        .get('Nehaet1')
                                        .setValue(this.dynamicobj['401-1QA1a']);
                                    console.log(this.dynamicobj['401-1QA1a']);
                                    this.finalobj['401-1QA1a'] =
                                        this.dynamicobj['401-1QA1a'];
                                    this.socialform
                                        .get('Nehaet2')
                                        .setValue(this.dynamicobj['401-1QA1b']);
                                    this.finalobj['401-1QA1b'] =
                                        this.dynamicobj['401-1QA1b'];
                                    this.socialform
                                        .get('Nehaet3')
                                        .setValue(this.dynamicobj['401-1QA1c']);
                                    this.finalobj['401-1QA1c'] =
                                        this.dynamicobj['401-1QA1c'];
                                    this.socialform
                                        .get('Nehaet4')
                                        .setValue(this.dynamicobj['401-1QA1d']);
                                    this.finalobj['401-1QA1d'] =
                                        this.dynamicobj['401-1QA1d'];
                                    this.socialform
                                        .get('Nehaet5')
                                        .setValue(this.dynamicobj['401-1QA1e']);
                                    this.finalobj['401-1QA1e'] =
                                        this.dynamicobj['401-1QA1e'];
                                    this.socialform
                                        .get('Nehaet6')
                                        .setValue(this.dynamicobj['401-1QA1f']);
                                    this.finalobj['401-1QA1f'] =
                                        this.dynamicobj['401-1QA1f'];
                                    this.socialform
                                        .get('Nehaet7')
                                        .setValue(this.dynamicobj['401-1QA1g']);
                                    this.finalobj['401-1QA1g'] =
                                        this.dynamicobj['401-1QA1g'];
                                    this.socialform
                                        .get('Nehaet8')
                                        .setValue(this.dynamicobj['401-1QA1h']);
                                    this.finalobj['401-1QA1h'] =
                                        this.dynamicobj['401-1QA1h'];
                                    this.socialform
                                        .get('Nehaet9')
                                        .setValue(this.dynamicobj['401-1QA1i']);
                                    this.finalobj['401-1QA1i'] =
                                        this.dynamicobj['401-1QA1i'];
                                    this.socialform
                                        .get('Nehaet10')
                                        .setValue(this.dynamicobj['401-1QA1j']);
                                    this.finalobj['401-1QA1j'] =
                                        this.dynamicobj['401-1QA1j'];
                                    this.socialform
                                        .get('Nehaet11')
                                        .setValue(this.dynamicobj['401-1QA1k']);
                                    this.finalobj['401-1QA1k'] =
                                        this.dynamicobj['401-1QA1k'];
                                    this.socialform
                                        .get('Nehaet12')
                                        .setValue(this.dynamicobj['401-1QA1l']);
                                    this.finalobj['401-1QA1l'] =
                                        this.dynamicobj['401-1QA1l'];
                                    this.socialform
                                        .get('Nehaet13')
                                        .setValue(this.dynamicobj['401-1QA1m']);
                                    this.finalobj['401-1QA1m'] =
                                        this.dynamicobj['401-1QA1m'];
                                    this.socialform
                                        .get('Nehaet14')
                                        .setValue(this.dynamicobj['401-1QA1n']);
                                    this.finalobj['401-1QA1n'] =
                                        this.dynamicobj['401-1QA1n'];
                                    this.socialform
                                        .get('Nehaet15')
                                        .setValue(this.dynamicobj['401-1QA1o']);
                                    this.finalobj['401-1QA1o'] =
                                        this.dynamicobj['401-1QA1o'];
                                    this.socialform
                                        .get('Nehaet16')
                                        .setValue(this.dynamicobj['401-1QA1p']);
                                    this.finalobj['401-1QA1p'] =
                                        this.dynamicobj['401-1QA1p'];
                                    this.socialform
                                        .get('Nehaet17')
                                        .setValue(this.dynamicobj['401-1QA1q']);
                                    this.finalobj['401-1QA1q'] =
                                        this.dynamicobj['401-1QA1q'];
                                    this.socialform
                                        .get('Nehaet18')
                                        .setValue(this.dynamicobj['401-1QA1r']);
                                    this.finalobj['401-1QA1r'] =
                                        this.dynamicobj['401-1QA1r'];
                                    this.socialform
                                        .get('Nehaet19')
                                        .setValue(this.dynamicobj['401-1QA1s']);
                                    this.finalobj['401-1QA1s'] =
                                        this.dynamicobj['401-1QA1s'];
                                    this.socialform
                                        .get('Nehaet20')
                                        .setValue(this.dynamicobj['401-1QA1t']);
                                    this.finalobj['401-1QA1t'] =
                                        this.dynamicobj['401-1QA1t'];
                                    this.socialform
                                        .get('Nehaet21')
                                        .setValue(this.dynamicobj['401-1QA1u']);
                                    this.finalobj['401-1QA1u'] =
                                        this.dynamicobj['401-1QA1u'];
                                    this.socialform
                                        .get('Nehaet22')
                                        .setValue(this.dynamicobj['401-1QA1v']);
                                    this.finalobj['401-1QA1v'] =
                                        this.dynamicobj['401-1QA1v'];
                                    this.socialform
                                        .get('Nehaet23')
                                        .setValue(this.dynamicobj['401-1QA1w']);
                                    this.finalobj['401-1QA1w'] =
                                        this.dynamicobj['401-1QA1w'];
                                    this.socialform
                                        .get('Nehaet24')
                                        .setValue(this.dynamicobj['401-1QA1x']);
                                    this.finalobj['401-1QA1x'] =
                                        this.dynamicobj['401-1QA1x'];

                                    if (
                                        this.dynamicobj['401-1AddTable1'] ==
                                            null ||
                                        this.dynamicobj['401-1AddTable1'] ==
                                            '' ||
                                        this.dynamicobj['401-1AddTable1'] ==
                                            '[]' ||
                                        this.dynamicobj['401-1AddTable1'] ==
                                            undefined
                                    ) {
                                        this.finalobj['401-1AddTable1'] = '';
                                    } else {
                                        this.finalobj['401-1AddTable1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '401-1AddTable1'
                                                ]
                                            );
                                        this.lookupdtlturnover1 = JSON.parse(
                                            this.dynamicobj['401-1AddTable1']
                                        );
                                    }

                                    if (
                                        this.dynamicobj['401-1AddTable2'] ==
                                            null ||
                                        this.dynamicobj['401-1AddTable2'] ==
                                            '' ||
                                        this.dynamicobj['401-1AddTable2'] ==
                                            '[]' ||
                                        this.dynamicobj['401-1AddTable2'] ==
                                            undefined
                                    ) {
                                        this.finalobj['401-1AddTable2'] = '';
                                    } else {
                                        this.finalobj['401-1AddTable2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    '401-1AddTable2'
                                                ]
                                            );
                                        this.lookupdtlturnover2 = JSON.parse(
                                            this.dynamicobj['401-1AddTable2']
                                        );
                                    }
                                }
                                if (yoy == 81) {
                                    console.log(yoy);
                                    this.socialform
                                        .get('Benefits1')
                                        .setValue(this.dynamicobj['401-2QA1a']);
                                    console.log(this.dynamicobj);
                                    console.log(this.dynamicobj['401-2QA1a']);
                                    this.finalobj['401-2QA1a'] =
                                        this.dynamicobj['401-2QA1a'];
                                    this.socialform
                                        .get('Benefits2')
                                        .setValue(this.dynamicobj['401-2QA1b']);
                                    this.finalobj['401-2QA1b'] =
                                        this.dynamicobj['401-2QA1b'];
                                    this.socialform
                                        .get('Benefits3')
                                        .setValue(this.dynamicobj['401-2QA1c']);
                                    this.finalobj['401-2QA1c'] =
                                        this.dynamicobj['401-2QA1c'];
                                    this.socialform
                                        .get('Benefits4')
                                        .setValue(this.dynamicobj['401-2QA1d']);
                                    this.finalobj['401-2QA1d'] =
                                        this.dynamicobj['401-2QA1d'];
                                    this.socialform
                                        .get('Benefits5')
                                        .setValue(this.dynamicobj['401-2QA1e']);
                                    this.finalobj['401-2QA1e'] =
                                        this.dynamicobj['401-2QA1e'];
                                    this.socialform
                                        .get('grief1')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief1']
                                        );
                                    this.finalobj['401-2QA1grief1'] =
                                        this.dynamicobj['401-2QA1grief1'];
                                    this.socialform
                                        .get('grief2')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief2']
                                        );
                                    this.finalobj['401-2QA1grief2'] =
                                        this.dynamicobj['401-2QA1grief2'];
                                    this.socialform
                                        .get('grief3')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief3']
                                        );
                                    this.finalobj['401-2QA1grief3'] =
                                        this.dynamicobj['401-2QA1grief3'];
                                    this.socialform
                                        .get('grief4')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief4']
                                        );
                                    this.finalobj['401-2QA1grief4'] =
                                        this.dynamicobj['401-2QA1grief4'];
                                    this.socialform
                                        .get('grief5')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief5']
                                        );
                                    this.finalobj['401-2QA1grief5'] =
                                        this.dynamicobj['401-2QA1grief5'];
                                    this.socialform
                                        .get('grief6')
                                        .setValue(
                                            this.dynamicobj['401-2QA1grief6']
                                        );
                                    this.finalobj['401-2QA1grief6'] =
                                        this.dynamicobj['401-2QA1grief6'];
                                    this.socialform
                                        .get('Benefits6')
                                        .setValue(this.dynamicobj['401-2QA1f']);
                                    this.finalobj['401-2QA1f'] =
                                        this.dynamicobj['401-2QA1f'];
                                    this.socialform
                                        .get('Benefits7')
                                        .setValue(this.dynamicobj['401-2QA1g']);
                                    this.finalobj['401-2QA1g'] =
                                        this.dynamicobj['401-2QA1g'];
                                    this.socialform
                                        .get('Benefits8')
                                        .setValue(this.dynamicobj['401-2QA1h']);
                                    this.finalobj['401-2QA1h'] =
                                        this.dynamicobj['401-2QA1h'];
                                    this.socialform
                                        .get('Benefits9')
                                        .setValue(this.dynamicobj['401-2QA1i']);
                                    this.finalobj['401-2QA1i'] =
                                        this.dynamicobj['401-2QA1i'];
                                    this.socialform
                                        .get('Benefits10')
                                        .setValue(this.dynamicobj['401-2QA1j']);
                                    this.finalobj['401-2QA1j'] =
                                        this.dynamicobj['401-2QA1j'];
                                    this.socialform
                                        .get('Benefits11')
                                        .setValue(this.dynamicobj['401-2QA1k']);
                                    this.finalobj['401-2QA1k'] =
                                        this.dynamicobj['401-2QA1k'];
                                    this.socialform
                                        .get('Benefits4012')
                                        .setValue(
                                            this.dynamicobj[
                                                '401-2b If yes topics'
                                            ]
                                        );
                                    this.finalobj['401-2b If yes topics'] =
                                        this.dynamicobj['401-2b If yes topics'];

                                    this.socialform
                                        .get('Benefits12')
                                        .setValue(this.dynamicobj['401-2QB']);
                                    this.finalobj['401-2QB'] =
                                        this.dynamicobj['401-2QB'];
                                    this.socialform
                                        .get('Benefits13')
                                        .setValue(
                                            this.dynamicobj['401-2comment']
                                        );
                                    this.finalobj['401-2comment'] =
                                        this.dynamicobj['401-2comment'];
                                    this.socialform
                                        .get('Benefits14')
                                        .setValue(this.dynamicobj['401-2QA1l']);
                                    this.finalobj['401-2QA1l'] =
                                        this.dynamicobj['401-2QA1l'];
                                }
                                if (yoy == 82) {
                                    this.socialform
                                        .get('Parent1')
                                        .setValue(this.dynamicobj['401-3Q1']);
                                    this.finalobj['401-3Q1'] =
                                        this.dynamicobj['401-3Q1'];
                                    this.socialform
                                        .get('Parent2')
                                        .setValue(this.dynamicobj['401-3Q2']);
                                    this.finalobj['401-3Q2'] =
                                        this.dynamicobj['401-3Q2'];
                                    this.socialform
                                        .get('Parent3')
                                        .setValue(this.dynamicobj['401-3Q3']);
                                    this.finalobj['401-3Q3'] =
                                        this.dynamicobj['401-3Q3'];
                                    this.socialform
                                        .get('Parent4')
                                        .setValue(this.dynamicobj['401-3Q4']);
                                    this.finalobj['401-3Q4'] =
                                        this.dynamicobj['401-3Q4'];
                                    this.socialform
                                        .get('Parent5')
                                        .setValue(this.dynamicobj['401-3Q5']);
                                    this.finalobj['401-3Q5'] =
                                        this.dynamicobj['401-3Q5'];
                                    this.socialform
                                        .get('Parent6')
                                        .setValue(this.dynamicobj['401-3Q6']);
                                    this.finalobj['401-3Q6'] =
                                        this.dynamicobj['401-3Q6'];
                                    this.socialform
                                        .get('Parent7')
                                        .setValue(this.dynamicobj['401-3Q7']);
                                    this.finalobj['401-3Q7'] =
                                        this.dynamicobj['401-3Q7'];
                                    this.socialform
                                        .get('Parent8')
                                        .setValue(this.dynamicobj['401-3Q8']);
                                    this.finalobj['401-3Q8'] =
                                        this.dynamicobj['401-3Q8'];
                                    this.socialform
                                        .get('Parent9')
                                        .setValue(this.dynamicobj['401-3Q9']);
                                    this.finalobj['401-3Q9'] =
                                        this.dynamicobj['401-3Q9'];
                                    this.socialform
                                        .get('Parent10')
                                        .setValue(this.dynamicobj['401-3Q10']);
                                    this.finalobj['401-3Q10'] =
                                        this.dynamicobj['401-3Q10'];
                                    this.socialform
                                        .get('Parent11')
                                        .setValue(this.dynamicobj['401-3Q11']);
                                    this.finalobj['401-3Q11'] =
                                        this.dynamicobj['401-3Q11'];
                                    this.socialform
                                        .get('Parent12')
                                        .setValue(this.dynamicobj['401-3Q12']);
                                    this.finalobj['401-3Q12'] =
                                        this.dynamicobj['401-3Q12'];
                                    this.socialform
                                        .get('Parent13')
                                        .setValue(
                                            this.dynamicobj['401-3comment']
                                        );
                                    this.finalobj['401-3comment'] =
                                        this.dynamicobj['401-3comment'];
                                }
                                if (yoy == 83) {
                                    this.socialform
                                        .get('mnproca1')
                                        .setValue(this.dynamicobj['402-1Q1']);
                                    this.finalobj['402-1Q1'] =
                                        this.dynamicobj['402-1Q1'];
                                    this.socialform
                                        .get('mnproca2')
                                        .setValue(this.dynamicobj['402-1Q2']);
                                    this.finalobj['402-1Q2'] =
                                        this.dynamicobj['402-1Q2'];
                                    this.socialform
                                        .get('mnproca3')
                                        .setValue(
                                            this.dynamicobj['402-1QComment']
                                        );
                                    this.finalobj['402-1QComment'] =
                                        this.dynamicobj['402-1QComment'];
                                }

                                if (yoy == 84) {
                                    this.socialform
                                        .get('ohasmss1')
                                        .setValue(this.dynamicobj['403-1Q1']);
                                    this.finalobj['403-1Q1'] =
                                        this.dynamicobj['403-1Q1'];
                                    this.socialform
                                        .get('ohasmss2')
                                        .setValue(this.dynamicobj['403-1Q2']);
                                    this.finalobj['403-1Q2'] =
                                        this.dynamicobj['403-1Q2'];
                                    this.socialform
                                        .get('ohasmss3')
                                        .setValue(this.dynamicobj['403-1Q3']);
                                    this.finalobj['403-1Q1'] =
                                        this.dynamicobj['403-1Q1'];
                                    this.socialform
                                        .get('ohasmss4')
                                        .setValue(
                                            this.dynamicobj['403-1QComment']
                                        );
                                    this.finalobj['403-1QComment'] =
                                        this.dynamicobj['403-1QComment'];
                                }

                                if (yoy == 85) {
                                    this.socialform
                                        .get('hiraaii1')
                                        .setValue(this.dynamicobj['403-2Q1']);
                                    this.finalobj['403-2Q1'] =
                                        this.dynamicobj['403-2Q1'];
                                    this.socialform
                                        .get('hiraaii2')
                                        .setValue(this.dynamicobj['403-2Q2']);
                                    this.finalobj['403-2Q2'] =
                                        this.dynamicobj['403-2Q2'];
                                    this.socialform
                                        .get('hiraaii3')
                                        .setValue(this.dynamicobj['403-2Q3']);
                                    this.finalobj['403-2Q1'] =
                                        this.dynamicobj['403-2Q3'];
                                    this.socialform
                                        .get('hiraaii4')
                                        .setValue(this.dynamicobj['403-2Q4']);
                                    this.finalobj['403-2Q4'] =
                                        this.dynamicobj['403-2Q4'];
                                    this.socialform
                                        .get('hiraaii5')
                                        .setValue(this.dynamicobj['403-2Q5']);
                                    this.finalobj['403-2Q5'] =
                                        this.dynamicobj['403-2Q5'];
                                    this.socialform
                                        .get('hiraaii6')
                                        .setValue(
                                            this.dynamicobj['403-2QComment']
                                        );
                                    this.finalobj['403-2QComment'] =
                                        this.dynamicobj['403-2QComment'];
                                }
                                if (yoy == 86) {
                                    this.socialform
                                        .get('ohs1')
                                        .setValue(this.dynamicobj['403-3Q1']);
                                    this.finalobj['403-3Q1'] =
                                        this.dynamicobj['403-3Q1'];

                                    this.socialform
                                        .get('ohs2')
                                        .setValue(
                                            this.dynamicobj['403-3QComment']
                                        );
                                    this.finalobj['403-3QComment'] =
                                        this.dynamicobj['403-3QComment'];
                                }
                                if (yoy == 87) {
                                    this.socialform
                                        .get('wpcacoohas1')
                                        .setValue(this.dynamicobj['403-4Q1']);
                                    this.finalobj['403-4Q1'] =
                                        this.dynamicobj['403-4Q1'];
                                    this.socialform
                                        .get('wpcacoohas2')
                                        .setValue(this.dynamicobj['403-4Q2']);
                                    this.finalobj['403-4Q2'] =
                                        this.dynamicobj['403-4Q2'];
                                    this.socialform
                                        .get('wpcacoohas3')
                                        .setValue(
                                            this.dynamicobj['403-4QComment']
                                        );
                                    this.finalobj['403-4QComment'] =
                                        this.dynamicobj['403-4QComment'];
                                }
                                if (yoy == 88) {
                                    this.socialform
                                        .get('wtoohas1')
                                        .setValue(this.dynamicobj['403-5Q1']);
                                    this.finalobj['403-5Q1'] =
                                        this.dynamicobj['403-5Q1'];

                                    this.socialform
                                        .get('wtoohas2')
                                        .setValue(
                                            this.dynamicobj['403-5QComment']
                                        );
                                    this.finalobj['403-5QComment'] =
                                        this.dynamicobj['403-5QComment'];
                                }
                                if (yoy == 89) {
                                    this.socialform
                                        .get('powh1')
                                        .setValue(this.dynamicobj['403-6Q1']);
                                    this.finalobj['403-6Q1'] =
                                        this.dynamicobj['403-6Q1'];
                                    this.socialform
                                        .get('powh2')
                                        .setValue(this.dynamicobj['403-6Q2']);
                                    this.finalobj['403-6Q2'] =
                                        this.dynamicobj['403-6Q2'];
                                    this.socialform
                                        .get('powh3')
                                        .setValue(
                                            this.dynamicobj['403-6QComment']
                                        );
                                    this.finalobj['403-6QComment'] =
                                        this.dynamicobj['403-6QComment'];
                                }
                                if (yoy == 90) {
                                    this.socialform
                                        .get('pamoohasid1')
                                        .setValue(this.dynamicobj['403-7Q1']);
                                    this.finalobj['403-7Q1'] =
                                        this.dynamicobj['403-7Q1'];

                                    this.socialform
                                        .get('pamoohasid2')
                                        .setValue(
                                            this.dynamicobj['403-7QComment']
                                        );
                                    this.finalobj['403-7QComment'] =
                                        this.dynamicobj['403-7QComment'];
                                }
                                if (yoy == 91) {
                                    this.socialform
                                        .get('wcbaohasms1')
                                        .setValue(this.dynamicobj['403-8Q1']);
                                    this.finalobj['403-8Q1'] =
                                        this.dynamicobj['403-8Q1'];
                                    this.socialform
                                        .get('wcbaohasms2')
                                        .setValue(this.dynamicobj['403-8Q2']);
                                    this.finalobj['403-8Q2'] =
                                        this.dynamicobj['403-8Q2'];
                                    this.socialform
                                        .get('wcbaohasms3')
                                        .setValue(this.dynamicobj['403-8Q3']);
                                    this.finalobj['403-8Q3'] =
                                        this.dynamicobj['403-8Q3'];
                                    this.socialform
                                        .get('wcbaohasms4')
                                        .setValue(this.dynamicobj['403-8Q4']);
                                    this.finalobj['403-8Q4'] =
                                        this.dynamicobj['403-8Q4'];
                                    this.socialform
                                        .get('wcbaohasms5')
                                        .setValue(this.dynamicobj['403-8Q5']);
                                    this.finalobj['403-8Q5'] =
                                        this.dynamicobj['403-8Q5'];
                                    this.socialform
                                        .get('wcbaohasms6')
                                        .setValue(this.dynamicobj['403-8Q6']);
                                    this.finalobj['403-8Q6'] =
                                        this.dynamicobj['403-8Q6'];
                                    this.socialform
                                        .get('wcbaohasms7')
                                        .setValue(this.dynamicobj['403-8Q7']);
                                    this.finalobj['403-8Q7'] =
                                        this.dynamicobj['403-8Q7'];
                                    this.socialform
                                        .get('wcbaohasms8')
                                        .setValue(this.dynamicobj['403-8Q8']);
                                    this.finalobj['403-8Q8'] =
                                        this.dynamicobj['403-8Q8'];
                                    this.socialform
                                        .get('wcbaohasms9')
                                        .setValue(
                                            this.dynamicobj['403-8QComment']
                                        );
                                    this.finalobj['403-8QComment'] =
                                        this.dynamicobj['403-8QComment'];
                                }
                                if (yoy == 92) {
                                    this.socialform
                                        .get('wrinjuries1')
                                        .setValue(this.dynamicobj['403-9Q1']);
                                    this.finalobj['403-9Q1'] =
                                        this.dynamicobj['403-9Q1'];
                                    this.socialform
                                        .get('wrinjuries2')
                                        .setValue(this.dynamicobj['403-9Q2']);
                                    this.finalobj['403-9Q2'] =
                                        this.dynamicobj['403-9Q2'];
                                    this.socialform
                                        .get('wrinjuries3')
                                        .setValue(this.dynamicobj['403-9Q3']);
                                    this.finalobj['403-9Q3'] =
                                        this.dynamicobj['403-9Q3'];
                                    this.socialform
                                        .get('wrinjuries4')
                                        .setValue(this.dynamicobj['403-9Q4']);
                                    this.finalobj['403-9Q4'] =
                                        this.dynamicobj['403-9Q4'];
                                    this.socialform
                                        .get('wrinjuries5')
                                        .setValue(this.dynamicobj['403-9Q5']);
                                    this.finalobj['403-9Q5'] =
                                        this.dynamicobj['403-9Q5'];
                                    this.socialform
                                        .get('wrinjuries6')
                                        .setValue(this.dynamicobj['403-9Q6']);
                                    this.finalobj['403-9Q6'] =
                                        this.dynamicobj['403-9Q6'];
                                    this.socialform
                                        .get('wrinjuries7')
                                        .setValue(this.dynamicobj['403-9Q7']);
                                    this.finalobj['403-9Q7'] =
                                        this.dynamicobj['403-9Q7'];
                                    this.socialform
                                        .get('wrinjuries8')
                                        .setValue(this.dynamicobj['403-9Q8']);
                                    this.finalobj['403-9Q8'] =
                                        this.dynamicobj['403-9Q8'];
                                    this.socialform
                                        .get('wrinjuries9')
                                        .setValue(this.dynamicobj['403-9Q9']);
                                    this.finalobj['403-9Q9'] =
                                        this.dynamicobj['403-9Q9'];
                                    this.socialform
                                        .get('wrinjuries10')
                                        .setValue(this.dynamicobj['403-9Q10']);
                                    this.finalobj['403-9Q10'] =
                                        this.dynamicobj['403-9Q10'];
                                    this.socialform
                                        .get('wrinjuries11')
                                        .setValue(this.dynamicobj['403-9Q11']);
                                    this.finalobj['403-9Q11'] =
                                        this.dynamicobj['403-9Q11'];
                                    this.socialform
                                        .get('wrinjuries12')
                                        .setValue(this.dynamicobj['403-9Q12']);
                                    this.finalobj['403-9Q12'] =
                                        this.dynamicobj['403-9Q12'];
                                    this.socialform
                                        .get('wrinjuries13')
                                        .setValue(this.dynamicobj['403-9Q13']);
                                    this.finalobj['403-9Q13'] =
                                        this.dynamicobj['403-9Q13'];
                                    this.socialform
                                        .get('wrinjuries14')
                                        .setValue(this.dynamicobj['403-9Q14']);
                                    this.finalobj['403-9Q14'] =
                                        this.dynamicobj['403-9Q14'];
                                    this.socialform
                                        .get('wrinjuries15')
                                        .setValue(this.dynamicobj['403-9Q15']);
                                    this.finalobj['403-9Q15'] =
                                        this.dynamicobj['403-9Q15'];
                                    this.socialform
                                        .get('wrinjuries16')
                                        .setValue(this.dynamicobj['403-9Q16']);
                                    this.finalobj['403-9Q16'] =
                                        this.dynamicobj['403-9Q16'];
                                    this.socialform
                                        .get('wrinjuries17')
                                        .setValue(this.dynamicobj['403-9Q17']);
                                    this.finalobj['403-9Q17'] =
                                        this.dynamicobj['403-9Q17'];
                                    this.socialform
                                        .get('wrinjuries18')
                                        .setValue(this.dynamicobj['403-9Q18']);
                                    this.finalobj['403-9Q18'] =
                                        this.dynamicobj['403-9Q18'];
                                    this.socialform
                                        .get('wrinjuries19')
                                        .setValue(this.dynamicobj['403-9Q19']);
                                    this.finalobj['403-9Q19'] =
                                        this.dynamicobj['403-9Q19'];
                                    this.socialform
                                        .get('wrinjuries20')
                                        .setValue(this.dynamicobj['403-9Q20']);
                                    this.finalobj['403-9Q20'] =
                                        this.dynamicobj['403-9Q20'];
                                    this.socialform
                                        .get('wrinjuries21')
                                        .setValue(this.dynamicobj['403-9Q21']);
                                    this.finalobj['403-9Q21'] =
                                        this.dynamicobj['403-9Q21'];
                                    this.socialform
                                        .get('wrinjuries22')
                                        .setValue(this.dynamicobj['403-9Q22']);
                                    this.finalobj['403-9Q22'] =
                                        this.dynamicobj['403-9Q22'];
                                    this.socialform
                                        .get('wrinjuries23')
                                        .setValue(this.dynamicobj['403-9Q23']);
                                    this.finalobj['403-9Q23'] =
                                        this.dynamicobj['403-9Q23'];
                                }
                                if (yoy == 93) {
                                    this.socialform
                                        .get('wrih1')
                                        .setValue(this.dynamicobj['403-10Q1']);
                                    this.finalobj['403-10Q1'] =
                                        this.dynamicobj['403-10Q1'];
                                    this.socialform
                                        .get('wrih2')
                                        .setValue(this.dynamicobj['403-10Q2']);
                                    this.finalobj['403-10Q2'] =
                                        this.dynamicobj['403-10Q2'];
                                    this.socialform
                                        .get('wrih3')
                                        .setValue(this.dynamicobj['403-10Q3']);
                                    this.finalobj['403-10Q3'] =
                                        this.dynamicobj['403-10Q3'];
                                    this.socialform
                                        .get('wrih4')
                                        .setValue(this.dynamicobj['403-10Q4']);
                                    this.finalobj['403-10Q4'] =
                                        this.dynamicobj['403-10Q4'];
                                    this.socialform
                                        .get('wrih5')
                                        .setValue(this.dynamicobj['403-10Q5']);
                                    this.finalobj['403-10Q5'] =
                                        this.dynamicobj['403-10Q5'];
                                    this.socialform
                                        .get('wrih6')
                                        .setValue(this.dynamicobj['403-10Q6']);
                                    this.finalobj['403-10Q6'] =
                                        this.dynamicobj['403-10Q6'];
                                    this.socialform
                                        .get('wrih7')
                                        .setValue(this.dynamicobj['403-10Q7']);
                                    this.finalobj['403-10Q7'] =
                                        this.dynamicobj['403-10Q7'];
                                    this.socialform
                                        .get('wrih8')
                                        .setValue(this.dynamicobj['403-10Q8']);
                                    this.finalobj['403-10Q8'] =
                                        this.dynamicobj['403-10Q8'];
                                    this.socialform
                                        .get('wrih9')
                                        .setValue(this.dynamicobj['403-10Q9']);
                                    this.finalobj['403-10Q9'] =
                                        this.dynamicobj['403-10Q9'];
                                    this.socialform
                                        .get('wrih10')
                                        .setValue(this.dynamicobj['403-10Q10']);
                                    this.finalobj['403-10Q10'] =
                                        this.dynamicobj['403-10Q10'];
                                    this.socialform
                                        .get('wrih11')
                                        .setValue(this.dynamicobj['403-10Q11']);
                                    this.finalobj['403-10Q11'] =
                                        this.dynamicobj['403-10Q11'];
                                    this.socialform
                                        .get('wrih12')
                                        .setValue(
                                            this.dynamicobj['403-10QComment']
                                        );
                                    this.finalobj['403-10QComment'] =
                                        this.dynamicobj['403-10QComment'];
                                }

                                if (yoy == 94) {
                                    this.socialform
                                        .get('empy1')
                                        .setValue(this.dynamicobj['404-1Q1']);
                                    this.finalobj['404-1Q1'] =
                                        this.dynamicobj['404-1Q1'];
                                    this.socialform
                                        .get('empy2')
                                        .setValue(this.dynamicobj['404-1Q2']);
                                    this.finalobj['404-1Q2'] =
                                        this.dynamicobj['404-1Q2'];

                                    if (
                                        this.dynamicobj['404-1Q3'] == null ||
                                        this.dynamicobj['404-1Q3'] == '' ||
                                        this.dynamicobj['404-1Q3'] == '[]' ||
                                        this.dynamicobj['404-1Q3'] == undefined
                                    ) {
                                        this.finalobj['404-1Q3'] = '';
                                    } else {
                                        this.finalobj['404-1Q3'] = JSON.parse(
                                            this.dynamicobj['404-1Q3']
                                        );
                                        this.lookupdtl50 = JSON.parse(
                                            this.dynamicobj['404-1Q3']
                                        );
                                    }
                                }

                                if (yoy == 95) {
                                    this.socialform
                                        .get('empy3')
                                        .setValue(this.dynamicobj['404-2Q1']);
                                    this.finalobj['404-2Q1'] =
                                        this.dynamicobj['404-2Q1'];
                                    this.socialform
                                        .get('empy4')
                                        .setValue(this.dynamicobj['404-2Q2']);
                                    this.finalobj['404-2Q2'] =
                                        this.dynamicobj['404-2Q2'];
                                }

                                if (yoy == 96) {
                                    this.socialform
                                        .get('empy5')
                                        .setValue(this.dynamicobj['404-3Q1']);
                                    this.finalobj['404-3Q1'] =
                                        this.dynamicobj['404-3Q1'];
                                    this.socialform
                                        .get('empy6')
                                        .setValue(this.dynamicobj['404-1Q2']);
                                    this.finalobj['404-3Q2'] =
                                        this.dynamicobj['404-3Q2'];
                                    if (
                                        this.dynamicobj['404-3Q3'] == null ||
                                        this.dynamicobj['404-3Q3'] == '' ||
                                        this.dynamicobj['404-3Q3'] == '[]' ||
                                        this.dynamicobj['404-3Q3'] == undefined
                                    ) {
                                        this.finalobj['404-3Q3'] = '';
                                    } else {
                                        this.finalobj['404-3Q3'] = JSON.parse(
                                            this.dynamicobj['404-3Q3']
                                        );
                                        this.lookupdtl51 = JSON.parse(
                                            this.dynamicobj['404-3Q3']
                                        );
                                    }
                                }

                                if (yoy == 97) {
                                    this.socialform
                                        .get('empy7')
                                        .setValue(this.dynamicobj['405-1Q1']);
                                    this.finalobj['405-1Q1'] =
                                        this.dynamicobj['405-1Q1'];
                                    this.socialform
                                        .get('empy8')
                                        .setValue(this.dynamicobj['405-1Q2']);
                                    this.finalobj['405-1Q2'] =
                                        this.dynamicobj['405-1Q2'];
                                    this.socialform
                                        .get('empy9')
                                        .setValue(this.dynamicobj['405-1Q3']);
                                    this.finalobj['405-1Q3'] =
                                        this.dynamicobj['405-1Q3'];
                                    this.socialform
                                        .get('empy10')
                                        .setValue(this.dynamicobj['405-1Q4']);
                                    this.finalobj['405-1Q4'] =
                                        this.dynamicobj['405-1Q4'];
                                    this.socialform
                                        .get('empy11')
                                        .setValue(this.dynamicobj['405-1Q5']);
                                    this.finalobj['405-1Q5'] =
                                        this.dynamicobj['405-1Q5'];
                                    if (
                                        this.dynamicobj['405-1Q6'] == null ||
                                        this.dynamicobj['405-1Q6'] == '' ||
                                        this.dynamicobj['405-1Q6'] == '[]' ||
                                        this.dynamicobj['405-1Q6'] == undefined
                                    ) {
                                        this.finalobj['405-1Q6'] = '';
                                    } else {
                                        this.finalobj['405-1Q6'] = JSON.parse(
                                            this.dynamicobj['405-1Q6']
                                        );
                                        this.lookupdtl52 = JSON.parse(
                                            this.dynamicobj['405-1Q6']
                                        );
                                    }
                                    this.socialform
                                        .get('emputa7')
                                        .setValue(this.dynamicobj['405-1Q7']);
                                    this.finalobj['405-1Q7'] =
                                        this.dynamicobj['405-1Q7'];
                                    this.socialform
                                        .get('emputa8')
                                        .setValue(this.dynamicobj['405-1Q8']);
                                    this.finalobj['405-1Q8'] =
                                        this.dynamicobj['405-1Q8'];
                                    this.socialform
                                        .get('emputa9')
                                        .setValue(this.dynamicobj['405-1Q9']);
                                    this.finalobj['405-1Q9'] =
                                        this.dynamicobj['405-1Q9'];
                                    this.socialform
                                        .get('emputa10')
                                        .setValue(this.dynamicobj['405-1Q10']);
                                    this.finalobj['405-1Q10'] =
                                        this.dynamicobj['405-1Q10'];
                                    this.socialform
                                        .get('emputa11')
                                        .setValue(this.dynamicobj['405-1Q11']);
                                    this.finalobj['405-1Q11'] =
                                        this.dynamicobj['405-1Q11'];
                                    if (
                                        this.dynamicobj['405-1Q12'] == null ||
                                        this.dynamicobj['405-1Q12'] == '' ||
                                        this.dynamicobj['405-1Q12'] == '[]' ||
                                        this.dynamicobj['405-1Q12'] == undefined
                                    ) {
                                        this.finalobj['405-1Q12'] = '';
                                    } else {
                                        this.finalobj['405-1Q12'] = JSON.parse(
                                            this.dynamicobj['405-1Q12']
                                        );
                                        this.lookupdtl52puta = JSON.parse(
                                            this.dynamicobj['405-1Q12']
                                        );
                                    }
                                }

                                if (yoy == 98) {
                                    if (
                                        this.dynamicobj['405-2Q1'] ==
                                            undefined ||
                                        this.dynamicobj['405-2Q1'] == null ||
                                        this.dynamicobj['405-2Q1'] == '' ||
                                        this.dynamicobj['405-2Q1'] == '[]'
                                    ) {
                                        this.finalobj['405-2Q1'] = '';
                                    } else {
                                        console.log(this.dynamicobj['405-2Q1']);
                                        this.finalobj['405-2Q1'] = JSON.parse(
                                            this.dynamicobj['405-2Q1']
                                        );
                                        this.lookupdtl53 = JSON.parse(
                                            this.dynamicobj['405-2Q1']
                                        );
                                        console.log(this.lookupdtl53);
                                    }

                                    this.socialform
                                        .get('empy12')
                                        .setValue(this.dynamicobj['405-2Q2']);
                                    this.finalobj['405-2Q2'] =
                                        this.dynamicobj['405-2Q2'];
                                }
                                if (yoy == 99) {
                                    this.socialform
                                        .get('empy13')
                                        .setValue(this.dynamicobj['406-1Q1']);
                                    this.finalobj['406-1Q1'] =
                                        this.dynamicobj['406-1Q1'];
                                    this.socialform
                                        .get('empy14')
                                        .setValue(this.dynamicobj['406-1Q2']);
                                    this.finalobj['406-1Q2'] =
                                        this.dynamicobj['406-1Q2'];
                                    this.socialform
                                        .get('empy15')
                                        .setValue(this.dynamicobj['406-1Q3']);
                                    this.finalobj['406-1Q3'] =
                                        this.dynamicobj['406-1Q3'];
                                    this.socialform
                                        .get('empy16')
                                        .setValue(this.dynamicobj['406-1Q4']);
                                    this.finalobj['406-1Q4'] =
                                        this.dynamicobj['406-1Q4'];
                                    this.socialform
                                        .get('empy17')
                                        .setValue(this.dynamicobj['406-1Q5']);
                                    this.finalobj['406-1Q5'] =
                                        this.dynamicobj['406-1Q5'];
                                }
                                if (yoy == 100) {
                                    this.socialform
                                        .get('empy18')
                                        .setValue(this.dynamicobj['407-1Q1']);
                                    this.finalobj['407-1Q1'] =
                                        this.dynamicobj['407-1Q1'];
                                    this.socialform
                                        .get('empy19')
                                        .setValue(this.dynamicobj['407-1Q2']);
                                    this.finalobj['407-1Q2'] =
                                        this.dynamicobj['407-1Q2'];
                                    this.socialform
                                        .get('empy20')
                                        .setValue(this.dynamicobj['407-1Q3']);
                                    this.finalobj['407-1Q3'] =
                                        this.dynamicobj['407-1Q3'];
                                }

                                if (yoy == 101) {
                                    this.socialform
                                        .get('empy21')
                                        .setValue(this.dynamicobj['408-1Q1']);
                                    this.finalobj['408-1Q1'] =
                                        this.dynamicobj['408-1Q1'];
                                    this.socialform
                                        .get('empy22')
                                        .setValue(this.dynamicobj['408-1Q2']);
                                    this.finalobj['408-1Q2'] =
                                        this.dynamicobj['408-1Q2'];
                                    this.socialform
                                        .get('empy23')
                                        .setValue(this.dynamicobj['408-1Q3']);
                                    this.finalobj['408-1Q3'] =
                                        this.dynamicobj['408-1Q3'];
                                    this.socialform
                                        .get('empy24')
                                        .setValue(this.dynamicobj['408-1Q4']);
                                    this.finalobj['408-1Q4'] =
                                        this.dynamicobj['408-1Q4'];
                                    this.socialform
                                        .get('empy25')
                                        .setValue(this.dynamicobj['408-1Q5']);
                                    this.finalobj['408-1Q5'] =
                                        this.dynamicobj['408-1Q5'];
                                }

                                if (yoy == 102) {
                                    this.socialform
                                        .get('empy26')
                                        .setValue(this.dynamicobj['409-1Q1']);
                                    this.finalobj['409-1Q1'] =
                                        this.dynamicobj['409-1Q1'];
                                    this.socialform
                                        .get('empy27')
                                        .setValue(this.dynamicobj['409-1Q2']);
                                    this.finalobj['409-1Q2'] =
                                        this.dynamicobj['409-1Q2'];
                                    this.socialform
                                        .get('empy28')
                                        .setValue(this.dynamicobj['409-1Q3']);
                                    this.finalobj['409-1Q3'] =
                                        this.dynamicobj['409-1Q3'];
                                }

                                if (yoy == 103) {
                                    this.socialform
                                        .get('empy29')
                                        .setValue(this.dynamicobj['410-1Q1']);
                                    this.finalobj['410-1Q1'] =
                                        this.dynamicobj['410-1Q1'];
                                    this.socialform
                                        .get('empy30')
                                        .setValue(this.dynamicobj['410-1Q2']);
                                    this.finalobj['410-1Q2'] =
                                        this.dynamicobj['410-1Q2'];
                                }

                                if (yoy == 104) {
                                    this.socialform
                                        .get('empy31')
                                        .setValue(this.dynamicobj['411-1Q1']);
                                    this.finalobj['411-1Q1'] =
                                        this.dynamicobj['411-1Q1'];
                                    this.socialform
                                        .get('empy32')
                                        .setValue(this.dynamicobj['411-1Q2']);
                                    this.finalobj['411-1Q2'] =
                                        this.dynamicobj['411-1Q2'];
                                    this.socialform
                                        .get('empy33')
                                        .setValue(this.dynamicobj['411-1Q3']);
                                    this.finalobj['411-1Q3'] =
                                        this.dynamicobj['411-1Q3'];
                                    this.socialform
                                        .get('empy34')
                                        .setValue(this.dynamicobj['411-1Q4']);
                                    this.finalobj['411-1Q4'] =
                                        this.dynamicobj['411-1Q4'];
                                    this.socialform
                                        .get('empy35')
                                        .setValue(this.dynamicobj['411-1Q5']);
                                    this.finalobj['411-1Q5'] =
                                        this.dynamicobj['411-1Q5'];
                                }

                                if (yoy == 105) {
                                    if (
                                        this.dynamicobj['102-23q5'] ==
                                            undefined ||
                                        this.dynamicobj['102-23q5'] == null ||
                                        this.dynamicobj['102-23q5'] == '' ||
                                        this.dynamicobj['102-23q5'] == '[]'
                                    ) {
                                        this.finalobj['102-23q5'] = '';
                                    } else {
                                        console.log(this.dynamicobj['102-23q5']);
                                        this.finalobj['102-23q5'] = JSON.parse(
                                            this.dynamicobj['102-23q5']
                                        );
                                        this.lookupdtl54 = JSON.parse(
                                            this.dynamicobj['102-23q5']
                                        );
                                        console.log(this.lookupdtl54);
                                    }
                                }

                                if (yoy == 106) {
                                    this.socialform
                                        .get('empy36')
                                        .setValue(this.dynamicobj['102-23q6']);
                                    this.finalobj['102-23q6'] =
                                        this.dynamicobj['102-23q6'];
                                    this.socialform
                                        .get('empy37')
                                        .setValue(this.dynamicobj['102-23q7']);
                                    this.finalobj['102-23q7'] =
                                        this.dynamicobj['102-23q7'];
                                }

                                if (yoy == 107) {
                                    this.socialform
                                        .get('empy38')
                                        .setValue(this.dynamicobj['102-23q58']);
                                    this.finalobj['102-23q58'] =
                                        this.dynamicobj['102-23q58'];
                                    this.socialform
                                        .get('empy39')
                                        .setValue(this.dynamicobj['102-23q9']);
                                    this.finalobj['102-23q9'] =
                                        this.dynamicobj['102-23q9'];
                                    this.socialform
                                        .get('empy40')
                                        .setValue(this.dynamicobj['102-23q10']);
                                    this.finalobj['102-23q10'] =
                                        this.dynamicobj['102-23q10'];
                                }

                                if (yoy == 108) {
                                    if (
                                        this.dynamicobj['413-1AddTable'] ==
                                            null ||
                                        this.dynamicobj['413-1AddTable'] ==
                                            '' ||
                                        this.dynamicobj['413-1AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['413-1AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['413-1AddTable'] = '';
                                    } else {
                                        this.finalobj['413-1AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['413-1AddTable']
                                            );
                                        this.lookup413 = JSON.parse(
                                            this.dynamicobj['413-1AddTable']
                                        );
                                    }
                                }

                                if (yoy == 109) {
                                    if (
                                        this.dynamicobj['413-2AddTable'] ==
                                            null ||
                                        this.dynamicobj['413-2AddTable'] ==
                                            '' ||
                                        this.dynamicobj['413-2AddTable'] ==
                                            '[]' ||
                                        this.dynamicobj['413-2AddTable'] ==
                                            undefined
                                    ) {
                                        this.finalobj['413-2AddTable'] = '';
                                    } else {
                                        this.finalobj['413-2AddTable'] =
                                            JSON.parse(
                                                this.dynamicobj['413-2AddTable']
                                            );
                                        this.lookup4132 = JSON.parse(
                                            this.dynamicobj['413-2AddTable']
                                        );
                                    }
                                }

                                if (yoy == 110) {
                                    this.socialform
                                        .get('nstwsusc1')
                                        .setValue(this.dynamicobj['414-1Q1']);
                                    this.finalobj['414-1Q1'] =
                                        this.dynamicobj['414-1Q1'];
                                    this.socialform
                                        .get('nstwsusccomment')
                                        .setValue(this.dynamicobj['414-1Q2']);
                                    this.finalobj['414-1Q2'] =
                                        this.dynamicobj['414-1Q2'];
                                }

                                if (yoy == 111) {
                                    this.socialform
                                        .get('nstwsuscrev1')
                                        .setValue(this.dynamicobj['414-2Q1']);
                                    this.finalobj['414-2Q1'] =
                                        this.dynamicobj['414-2Q1'];
                                    this.socialform
                                        .get('nstwsuscrev2')
                                        .setValue(this.dynamicobj['414-2Q2']);
                                    this.finalobj['414-2Q2'] =
                                        this.dynamicobj['414-1Q2'];
                                    this.socialform
                                        .get('nstwsuscrev3')
                                        .setValue(this.dynamicobj['414-2Q3']);
                                    this.finalobj['414-2Q3'] =
                                        this.dynamicobj['414-2Q3'];
                                    this.socialform
                                        .get('nstwsuscrev4')
                                        .setValue(this.dynamicobj['414-2Q4']);
                                    this.finalobj['414-2Q4'] =
                                        this.dynamicobj['414-2Q4'];
                                    this.socialform
                                        .get('nstwsuscrev5')
                                        .setValue(this.dynamicobj['414-2Q5']);
                                    this.finalobj['414-2Q5'] =
                                        this.dynamicobj['414-2Q5'];
                                    this.socialform
                                        .get('nstwsuscrev6')
                                        .setValue(this.dynamicobj['414-1Q2']);
                                    this.finalobj['414-2Q6'] =
                                        this.dynamicobj['414-2Q6'];
                                    this.socialform
                                        .get('nstwsuscrev7')
                                        .setValue(this.dynamicobj['414-2Q7']);
                                    this.finalobj['414-2Q7'] =
                                        this.dynamicobj['414-2Q7'];
                                }
                                if (yoy == 112) {
                                    if (
                                        this.dynamicobj['415-1Q1'] ==
                                            undefined ||
                                        this.dynamicobj['415-1Q1'] == null ||
                                        this.dynamicobj['415-1Q1'] == '' ||
                                        this.dynamicobj['415-1Q1'] == '[]'
                                    ) {
                                        this.finalobj['415-1Q1'] = '';
                                    } else {
                                        console.log(this.dynamicobj['415-1Q1']);
                                        this.finalobj['415-1Q1'] = JSON.parse(
                                            this.dynamicobj['415-1Q1']
                                        );
                                        this.lookupdtl102 = JSON.parse(
                                            this.dynamicobj['415-1Q1']
                                        );
                                        console.log(this.lookupdtl102);
                                    }
                                    this.socialform
                                        .get('revanent5')
                                        .setValue(this.dynamicobj['415-1Q22']);
                                    this.finalobj['415-1Q22'] =
                                        this.dynamicobj['415-1Q22'];
                                    this.socialform
                                        .get('revanent6')
                                        .setValue(this.dynamicobj['415-1Q2']);
                                    this.finalobj['415-1Q2'] =
                                        this.dynamicobj['415-1Q2'];
                                }
                                if (yoy == 113) {
                                    this.socialform
                                        .get('wraith1')
                                        .setValue(this.dynamicobj['416-1Q1']);
                                    this.finalobj['416-1Q1'] =
                                        this.dynamicobj['416-1Q1'];
                                    this.socialform
                                        .get('wraith2')
                                        .setValue(this.dynamicobj['416-1Q2']);
                                    this.finalobj['416-1Q2'] =
                                        this.dynamicobj['416-1Q2'];
                                }

                                if (yoy == 114) {
                                    this.socialform
                                        .get('bloodhound1')
                                        .setValue(this.dynamicobj['416-2Q1']);
                                    this.finalobj['416-2Q1'] =
                                        this.dynamicobj['416-2Q1'];
                                    this.socialform
                                        .get('bloodhound2')
                                        .setValue(this.dynamicobj['416-2Q2']);
                                    this.finalobj['416-2Q2'] =
                                        this.dynamicobj['416-1Q2'];
                                    this.socialform
                                        .get('bloodhound3')
                                        .setValue(this.dynamicobj['416-2Q3']);
                                    this.finalobj['416-2Q3'] =
                                        this.dynamicobj['416-2Q3'];
                                    this.socialform
                                        .get('bloodhound4')
                                        .setValue(this.dynamicobj['416-2Q4']);
                                    this.finalobj['416-2Q4'] =
                                        this.dynamicobj['416-2Q4'];
                                    this.socialform
                                        .get('bloodhound5')
                                        .setValue(this.dynamicobj['416-2Q5']);
                                    this.finalobj['416-2Q5'] =
                                        this.dynamicobj['416-2Q5'];
                                }
                                if (yoy == 115) {
                                    this.socialform
                                        .get('gibraltar1')
                                        .setValue(this.dynamicobj['417-1Q1']);
                                    this.finalobj['417-1Q1'] =
                                        this.dynamicobj['417-1Q1'];
                                    this.socialform
                                        .get('gibraltar2')
                                        .setValue(this.dynamicobj['417-1Q2']);
                                    this.finalobj['417-1Q2'] =
                                        this.dynamicobj['417-1Q2'];
                                    this.socialform
                                        .get('gibraltar3')
                                        .setValue(this.dynamicobj['417-1Q3']);
                                    this.finalobj['417-1Q3'] =
                                        this.dynamicobj['417-1Q3'];
                                    this.socialform
                                        .get('gibraltar4')
                                        .setValue(this.dynamicobj['417-1Q4']);
                                    this.finalobj['417-1Q4'] =
                                        this.dynamicobj['417-1Q4'];
                                    this.socialform
                                        .get('gibraltar5')
                                        .setValue(this.dynamicobj['417-1Q5']);
                                    this.finalobj['417-1Q5'] =
                                        this.dynamicobj['417-1Q5'];
                                    this.socialform
                                        .get('gibraltar6')
                                        .setValue(this.dynamicobj['417-1Q5']);
                                    this.finalobj['417-1Q6'] =
                                        this.dynamicobj['417-1Q5'];
                                    this.socialform
                                        .get('gibraltar7')
                                        .setValue(this.dynamicobj['417-1Q7']);
                                    this.finalobj['417-1Q7'] =
                                        this.dynamicobj['417-1Q7'];
                                }

                                if (yoy == 116) {
                                    this.socialform
                                        .get('lifeline1')
                                        .setValue(this.dynamicobj['417-2Q1']);
                                    this.finalobj['417-2Q1'] =
                                        this.dynamicobj['417-2Q1'];
                                    this.socialform
                                        .get('lifeline2')
                                        .setValue(this.dynamicobj['417-2Q2']);
                                    this.finalobj['417-2Q2'] =
                                        this.dynamicobj['417-2Q2'];
                                    this.socialform
                                        .get('lifeline3')
                                        .setValue(this.dynamicobj['417-2Q3']);
                                    this.finalobj['417-2Q3'] =
                                        this.dynamicobj['417-2Q3'];
                                    this.socialform
                                        .get('lifeline4')
                                        .setValue(this.dynamicobj['417-2Q4']);
                                    this.finalobj['417-2Q4'] =
                                        this.dynamicobj['417-2Q4'];
                                    this.socialform
                                        .get('lifeline5')
                                        .setValue(this.dynamicobj['417-2Q5']);
                                    this.finalobj['417-2Q5'] =
                                        this.dynamicobj['417-2Q5'];
                                }

                                if (yoy == 117) {
                                    this.socialform
                                        .get('caustic1')
                                        .setValue(this.dynamicobj['417-3Q1']);
                                    this.finalobj['417-3Q1'] =
                                        this.dynamicobj['417-3Q1'];
                                    this.socialform
                                        .get('caustic2')
                                        .setValue(this.dynamicobj['417-3Q2']);
                                    this.finalobj['417-3Q2'] =
                                        this.dynamicobj['417-3Q2'];
                                    this.socialform
                                        .get('caustic3')
                                        .setValue(this.dynamicobj['417-3Q3']);
                                    this.finalobj['417-3Q3'] =
                                        this.dynamicobj['417-3Q3'];
                                    this.socialform
                                        .get('caustic4')
                                        .setValue(this.dynamicobj['417-3Q4']);
                                    this.finalobj['417-3Q4'] =
                                        this.dynamicobj['417-3Q4'];
                                    this.socialform
                                        .get('caustic5')
                                        .setValue(this.dynamicobj['417-3Q5']);
                                    this.finalobj['417-3Q5'] =
                                        this.dynamicobj['417-3Q5'];
                                }

                                if (yoy == 118) {
                                    this.socialform
                                        .get('newcastle1')
                                        .setValue(this.dynamicobj['418-1Q1']);
                                    this.finalobj['418-1Q1'] =
                                        this.dynamicobj['418-1Q1'];
                                    this.socialform
                                        .get('newcastle2')
                                        .setValue(this.dynamicobj['418-1Q2']);
                                    this.finalobj['418-1Q2'] =
                                        this.dynamicobj['418-1Q2'];
                                    this.socialform
                                        .get('newcastle3')
                                        .setValue(this.dynamicobj['418-1Q3']);
                                    this.finalobj['418-1Q3'] =
                                        this.dynamicobj['418-1Q3'];
                                    this.socialform
                                        .get('newcastle4')
                                        .setValue(this.dynamicobj['418-1Q4']);
                                    this.finalobj['418-1Q4'] =
                                        this.dynamicobj['418-1Q4'];
                                    this.socialform
                                        .get('newcastle5')
                                        .setValue(this.dynamicobj['418-1Q5']);
                                    this.finalobj['418-1Q5'] =
                                        this.dynamicobj['418-1Q5'];
                                }

                                if (yoy == 119) {
                                    this.socialform
                                        .get('ash1')
                                        .setValue(this.dynamicobj['419-1Q1']);
                                    this.finalobj['419-1Q1'] =
                                        this.dynamicobj['419-1Q1'];
                                    this.socialform
                                        .get('ash2')
                                        .setValue(this.dynamicobj['419-1Q2']);
                                    this.finalobj['419-1Q2'] =
                                        this.dynamicobj['419-1Q2'];
                                    this.socialform
                                        .get('ash3')
                                        .setValue(this.dynamicobj['419-1Q3']);
                                    this.finalobj['419-1Q3'] =
                                        this.dynamicobj['419-1Q3'];
                                    this.socialform
                                        .get('ash4')
                                        .setValue(this.dynamicobj['419-1Q4']);
                                    this.finalobj['419-1Q4'] =
                                        this.dynamicobj['419-1Q4'];
                                    this.socialform
                                        .get('ash5')
                                        .setValue(this.dynamicobj['419-1Q5']);
                                    this.finalobj['419-1Q5'] =
                                        this.dynamicobj['419-1Q5'];
                                    this.socialform
                                        .get('ash6')
                                        .setValue(this.dynamicobj['419-1Q4']);
                                    this.finalobj['419-1Q4'] =
                                        this.dynamicobj['419-1Q4'];
                                    this.socialform
                                        .get('ash7')
                                        .setValue(this.dynamicobj['419-1Q5']);
                                    this.finalobj['419-1Q5'] =
                                        this.dynamicobj['419-1Q5'];
                                }
                                if (yoy == 120) {
                                    this.materialform
                                        .get('mtptdmt1')
                                        .setValue(
                                            this.dynamicobj['Material-1Q1']
                                        );
                                    this.finalobj['Material-1Q1'] =
                                        this.dynamicobj['Material-1Q1'];

                                    this.materialform
                                        .get('mtptdmt2')
                                        .setValue(
                                            this.dynamicobj['Material-1Q2']
                                        );
                                    this.finalobj['Material-1Q2'] =
                                        this.dynamicobj['Material-1Q2'];

                                    this.materialform
                                        .get('mtptdmt3')
                                        .setValue(
                                            this.dynamicobj['Material-1Q3']
                                        );
                                    this.finalobj['Material-1Q3'] =
                                        this.dynamicobj['Material-1Q3'];
                                }
                                if (yoy == 121) {
                                    this.materialform
                                        .get('mtptdmtone1')
                                        .setValue(
                                            this.dynamicobj['Material-2Q1']
                                        );
                                    this.finalobj['Material-2Q1'] =
                                        this.dynamicobj['Material-2Q1'];

                                    this.materialform
                                        .get('mtptdmtone2')
                                        .setValue(
                                            this.dynamicobj['Material-2Q2']
                                        );
                                    this.finalobj['Material-2Q2'] =
                                        this.dynamicobj['Material-2Q2'];
                                }
                                if (yoy == 122) {
                                    if (
                                        this.dynamicobj['mtptdmttwotable1'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable1'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable1'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable1'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable1'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable1']
                                        );
                                        this.finalobj['mtptdmttwotable1'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable1'
                                                ]
                                            );
                                        this.lookupmtptdmttwo1 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable1']
                                        );
                                        console.log(this.lookupmtptdmttwo1);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable2'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable2'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable2'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable2'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable2'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable2']
                                        );
                                        this.finalobj['mtptdmttwotable2'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable2'
                                                ]
                                            );
                                        this.lookupmtptdmttwo2 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable2']
                                        );
                                        console.log(this.lookupmtptdmttwo2);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable3'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable3'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable3'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable3'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable3'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable3']
                                        );
                                        this.finalobj['mtptdmttwotable3'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable3'
                                                ]
                                            );
                                        this.lookupmtptdmttwo3 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable3']
                                        );
                                        console.log(this.lookupmtptdmttwo3);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable4'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable4'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable4'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable4'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable4'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable4']
                                        );
                                        this.finalobj['mtptdmttwotable4'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable4'
                                                ]
                                            );
                                        this.lookupmtptdmttwo4 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable4']
                                        );
                                        console.log(this.lookupmtptdmttwo4);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable5'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable5'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable5'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable5'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable5'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable5']
                                        );
                                        this.finalobj['mtptdmttwotable5'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable5'
                                                ]
                                            );
                                        this.lookupmtptdmttwo5 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable5']
                                        );
                                        console.log(this.lookupmtptdmttwo5);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable6'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable6'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable6'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable6'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable6'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable6']
                                        );
                                        this.finalobj['mtptdmttwotable6'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable6'
                                                ]
                                            );
                                        this.lookupmtptdmttwo6 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable6']
                                        );
                                        console.log(this.lookupmtptdmttwo6);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable7'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable7'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable7'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable7'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable7'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable7']
                                        );
                                        this.finalobj['mtptdmttwotable7'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable7'
                                                ]
                                            );
                                        this.lookupmtptdmttwo7 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable7']
                                        );
                                        console.log(this.lookupmtptdmttwo7);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable8'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable8'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable8'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable8'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable8'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable8']
                                        );
                                        this.finalobj['mtptdmttwotable8'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable8'
                                                ]
                                            );
                                        this.lookupmtptdmttwo8 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable8']
                                        );
                                        console.log(this.lookupmtptdmttwo8);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable9'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable9'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable9'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable9'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable9'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable9']
                                        );
                                        this.finalobj['mtptdmttwotable9'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable9'
                                                ]
                                            );
                                        this.lookupmtptdmttwo9 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable9']
                                        );
                                        console.log(this.lookupmtptdmttwo9);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable10'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable10'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable10'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable10'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable10'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable10']
                                        );
                                        this.finalobj['mtptdmttwotable10'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable10'
                                                ]
                                            );
                                        this.lookupmtptdmttwo10 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable10']
                                        );
                                        console.log(this.lookupmtptdmttwo10);
                                    }

                                    if (
                                        this.dynamicobj['mtptdmttwotable11'] ==
                                            undefined ||
                                        this.dynamicobj['mtptdmttwotable11'] ==
                                            null ||
                                        this.dynamicobj['mtptdmttwotable11'] ==
                                            '' ||
                                        this.dynamicobj['mtptdmttwotable11'] ==
                                            '[]'
                                    ) {
                                        this.finalobj['mtptdmttwotable11'] = '';
                                    } else {
                                        console.log(
                                            this.dynamicobj['mtptdmttwotable11']
                                        );
                                        this.finalobj['mtptdmttwotable11'] =
                                            JSON.parse(
                                                this.dynamicobj[
                                                    'mtptdmttwotable11'
                                                ]
                                            );
                                        this.lookupmtptdmttwo11 = JSON.parse(
                                            this.dynamicobj['mtptdmttwotable11']
                                        );
                                        console.log(this.lookupmtptdmttwo11);
                                    }
                                }
                                //end
                            }

                            if (data.length - 1 == i) {
                                console.log(this.finalobj);
                            }
                        }
                    });
            } else {
                this.is
                    .getReportTemplateMenuSubIdByReportId(this.reportid)
                    .subscribe((data: any) => {
                        for (let i = 0; i < data.length; i++) {
                            let yoy = data[i]['TemplateMenuId'];

                            if (Questions[yoy] != undefined) {
                                if (JSON.stringify(this.finalobj) == '{}') {
                                    this.finalobj = Questions[yoy][0];
                                } else {
                                    Object.assign(
                                        this.finalobj,
                                        Questions[yoy][0]
                                    );
                                }
                            }

                            if (data.length - 1 == i) {
                                console.log(this.finalobj);
                            }
                        }
                    });
            }

            this.reportname = res[0].ReportName;
            this.reportstartdate = res[0].StartDate;
            this.reportenddate = res[0].EndDate;
        });

        this.ds.getuserbyId(this.AuthService.user.id).subscribe((data) => {
            this.name = data[0]['FirstName'];
        });
        this.ss.getTemplateMenuDetails().subscribe((Data) => {
            this.templatemenu = Data;
            this.getdatabyId(this.templatemenu[0].Id);
        });
        this.ss.getTemplateSubMenuDetails().subscribe((data) => {
            this.templatedata = data;
        });
        this.ss.getTemplateSubMenuItemDetails().subscribe((data) => {});
        this.is.getLookupDetailsByHdrId(7).subscribe((Data) => {
            this.units = Data;
        });
        this.is.getLookupDetailsByHdrId(18).subscribe((Data) => {
            this.workhours = Data;
        });
    }
    addFieldValue102() {
        this.newAttribute102 = {
            country100: '',
            beneficiary: '',
            Monetory: '',
            currency100: '',
        };
        this.lookupdtl102.push(this.newAttribute102);
    }
    addFieldValue() {
        this.newAttribute = {
            Subject: '',
            Type: '',
            Assessments: '',
            Labs: '',
            Projects: '',
        };
        this.lookupdtl.push(this.newAttribute);
        this.reltypeothers = '';
        console.log(typeof this.lookupdtl);
    }
    addFieldValue2x() {
        this.newAttribute2x = {
            Subject2x: '',
            Type2x: '',
            Assessments2x: '',
            Labs2x: '',
            Projects2x: '',
        };
        this.lookupdtl2x.push(this.newAttribute2x);
        this.reltypeother = '';
        console.log(typeof this.lookupdtl2x);
    }
    addFieldValue1() {
        this.newAttribute1 = {
            SupplierName: '',
            Relationship: '',
            SupPrim: '',
            Geo: '',
            Startdate: '',
            Enddate: '',
            supplierExpanse: '',
        };
        this.lookupdtl1.push(this.newAttribute1);
        this.reltypeother1 = '';
    }
    addFieldValue2() {
        this.newAttribute2 = {
            Customertab: '',
            relatab2: '',
            supp2tab: '',
            geotab2: '',
            statab2: '',
            endtab2: '',
            expetab2: '',
        };
        this.lookupdtl2.push(this.newAttribute2);
        this.reltypeother2 = '';
    }

    addFieldValue4() {
        this.newAttribute4 = { operation1: '', percentage1: '' };
        this.lookupdtl4.push(this.newAttribute4);
    }

    addFieldValue5() {
        this.newAttribute31 = { Geo1: '', percentage2: '' };
        this.lookupdtl5.push(this.newAttribute31);
    }

    addFieldValue6() {
        this.newAttribute32 = { Geo2: '', Number1: '', percentage3: '' };
        this.lookupdtl6.push(this.newAttribute32);
    }

    addFieldValue7() {
        this.newAttribute33 = { Geo3: '', Number2: '', percentage4: '' };
        this.lookupdtl7.push(this.newAttribute33);
    }
    //materials

    addFieldmtptdmttwo1() {
        this.newattributemtptdmttwo1 = { mtptdmttwo1: '', mtptdmttwo2: '' };
        this.lookupmtptdmttwo1.push(this.newattributemtptdmttwo1);
    }
    addFieldmtptdmttwo2() {
        this.newattributemtptdmttwo2 = { mtptdmttwo3: '', mtptdmttwo4: '' };
        this.lookupmtptdmttwo2.push(this.newattributemtptdmttwo2);
    }
    //employees 2-7
    changeMale1(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('Male1' + i.toString()))
                .value
        );
        console.log(this.lookup2in7[i]['Male1'] = (
            (<HTMLInputElement>document.getElementById('Male1' + i.toString()))
                .value
        ));           

    }
    calculateAllSum() {
        const quant1 = this.enviroform.get('kgf2').value;
        const quant2 = this.enviroform.get('kgf3').value;
        const quant3 = this.enviroform.get('kgf4').value;
        const quant4 = this.enviroform.get('kgf5').value;
        const quant5 = this.enviroform.get('kgf25').value;
        const quant6 = this.enviroform.get('kgf6').value;
        const quant7 = this.enviroform.get('kgf7').value;
        const quant8 = this.enviroform.get('kgf8').value;
        const quant9 = this.enviroform.get('kgf9').value;
        const quant10 = this.enviroform.get('kgf26').value;
        const quant11 = this.enviroform.get('kgf10').value;
        const quant12 = this.enviroform.get('kgf11').value;
        const quant13 = this.enviroform.get('kgf12').value;
        const quant14 = this.enviroform.get('kgf13').value;
        const quant15 = this.enviroform.get('kgf14').value;
      
        // Remove commas and convert to numbers
        const parseValue = (value) => {
          if (!value) return 0; // Return 0 if value is empty or undefined
          const parsedValue = parseFloat(value.replace(/,/g, ''));
          return isNaN(parsedValue) ? 0 : parsedValue; // Return 0 if parsed value is NaN
        };
      
        const sum =
          parseValue(quant1) +
          parseValue(quant2) +
          parseValue(quant3) +
          parseValue(quant4) +
          parseValue(quant5) +
          parseValue(quant6) +
          parseValue(quant7) +
          parseValue(quant8) +
          parseValue(quant9) +
          parseValue(quant10) +
          parseValue(quant11) +
          parseValue(quant12) +
          parseValue(quant13) +
          parseValue(quant14) +
          parseValue(quant15);
      
        console.log(sum);
        this.enviroform.get('kgf1').setValue(sum);
      }
      
    changeFemale1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Female1' + i.toString())
            )).value
        );
        this.lookup2in7[i]['Female1'] = (
            (<HTMLInputElement>(
                document.getElementById('Female1' + i.toString())
            )).value
        );
    }

    changeothers1(i) {
        // console.log(
        //     (<HTMLInputElement>(
        //         document.getElementById('Male1' + i.toString())
        //     )).value
        // );
        // console.log(
        //     (<HTMLInputElement>(
        //         document.getElementById('Female1' + i.toString())
        //     )).value
        // );
        // console.log(
        //     (<HTMLInputElement>(
        //         document.getElementById('others1' + i.toString())
        //     )).value
        // );
        this.lookup2in7[i]['others1'] = (
            (<HTMLInputElement>(
                document.getElementById('others1' + i.toString())
            )).value
        );
    }
    changegenderMale1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderMale1' + i.toString())
            )).value
        );
        this.lookup2in7bi[i]['genderMale1'] = (
            (<HTMLInputElement>(
                document.getElementById('genderMale1' + i.toString())
            )).value
        );
    }

    changegenderFemale1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderFemale1' + i.toString())
            )).value
        );
        this.lookup2in7bi[i]['genderFemale1'] = (
            (<HTMLInputElement>(
                document.getElementById('genderFemale1' + i.toString())
            )).value
        );
    }

    changegenderothers1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderothers1' + i.toString())
            )).value
        );
        this.lookup2in7bi[i]['genderothers1'] = (
            (<HTMLInputElement>(
                document.getElementById('genderothers1' + i.toString())
            )).value
        );
    }

    OnchangegenderLocationlist1(i, value) {
       
    
        var empty = '';
        this.onInputChangecountry(empty);
        
      var male=
         ( (<HTMLInputElement>document.getElementById('genderMale1' + i.toString()))
              .value)
              var intconv=parseFloat(male.replace(/,/g, ''))
              console.log(intconv);
     var fem=
     ((<HTMLInputElement>document.getElementById('genderFemale1' + i.toString()))
            .value)
            var intconv1=parseFloat(fem.replace(/,/g, ''))
            console.log(intconv1);
      var oth=
        ((<HTMLInputElement>document.getElementById('genderothers1' + i.toString()))
          .value)
          var intconv2=parseFloat(oth.replace(/,/g, ''))
          console.log(intconv2);
          var tota=intconv + intconv1 + intconv2;
          this.lookup2in7bi[i]['gendertotal1']=tota;
  
        this.lookup2in7bi[i]['genderLocationlist1'] = value.value;
    }
    
    changegendertotal1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('gendertotal1' + i.toString())
            )).value
        );
        this.lookup2in7bi[i]['gendertotal1'] = parseInt(
            (<HTMLInputElement>(
                document.getElementById('gendertotal1' + i.toString())
            )).value
        );
    }
    deletegender2(index) {
        this.lookup2in7bi.splice(index, 1);
    }

    changegenderMale2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderMale2' + i.toString())
            )).value
        );
        this.lookup2in7bii[i]['genderMale2'] = (
            (<HTMLInputElement>(
                document.getElementById('genderMale2' + i.toString())
            )).value
        );
    }

    changegenderFemale2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderFemale2' + i.toString())
            )).value
        );
        this.lookup2in7bii[i]['genderFemale2'] = (
            (<HTMLInputElement>(
                document.getElementById('genderFemale2' + i.toString())
            )).value
        );
    }

    changegenderothers2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderothers2' + i.toString())
            )).value
        );
        this.lookup2in7bii[i]['genderothers2'] = (
            (<HTMLInputElement>(
                document.getElementById('genderothers2' + i.toString())
            )).value
        );
    }

    OnchangegenderLocationlist2(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        
      var male=
         ( (<HTMLInputElement>document.getElementById('genderMale2' + i.toString()))
              .value)
              var intconv=parseFloat(male.replace(/,/g, ''))
              console.log(intconv);
     var fem=
     ((<HTMLInputElement>document.getElementById('genderFemale2' + i.toString()))
            .value)
            var intconv1=parseFloat(fem.replace(/,/g, ''))
            console.log(intconv1);
      var oth=
        ((<HTMLInputElement>document.getElementById('genderothers2' + i.toString()))
          .value)
          var intconv2=parseFloat(oth.replace(/,/g, ''))
          console.log(intconv2);
          var tota=intconv + intconv1 + intconv2;
          this.lookup2in7bii[i]['gendertotal2']=tota;
  
        this.lookup2in7bii[i]['genderLocationlist2'] = value.value;
    }
    changegendertotal2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('gendertotal2' + i.toString())
            )).value
        );
        this.lookup2in7bii[i]['gendertotal2'] = (
            (<HTMLInputElement>(
                document.getElementById('gendertotal2' + i.toString())
            )).value
        );
    }
    deletegender3(index) {
        this.lookup2in7bii.splice(index, 1);
    }

    changegenderMale3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderMale3' + i.toString())
            )).value
        );
        this.lookup2in7biii[i]['genderMale3'] = (
            (<HTMLInputElement>(
                document.getElementById('genderMale3' + i.toString())
            )).value
        );
    }

    changegenderFemale3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderFemale3' + i.toString())
            )).value
        );
        this.lookup2in7biii[i]['genderFemale3'] = (
            (<HTMLInputElement>(
                document.getElementById('genderFemale3' + i.toString())
            )).value
        );
    }

    changegenderothers3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderothers3' + i.toString())
            )).value
        );
        this.lookup2in7biii[i]['genderothers3'] = (
            (<HTMLInputElement>(
                document.getElementById('genderothers3' + i.toString())
            )).value
        );
    }

    OnchangegenderLocationlist3(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        var male=
        ( (<HTMLInputElement>document.getElementById('genderMale3' + i.toString()))
             .value)
             var intconv=parseFloat(male.replace(/,/g, ''))
             console.log(intconv);
    var fem=
    ((<HTMLInputElement>document.getElementById('genderFemale3' + i.toString()))
           .value)
           var intconv1=parseFloat(fem.replace(/,/g, ''))
           console.log(intconv1);
     var oth=
       ((<HTMLInputElement>document.getElementById('genderothers3' + i.toString()))
         .value)
         var intconv2=parseFloat(oth.replace(/,/g, ''))
         console.log(intconv2);
         var tota=intconv + intconv1 + intconv2;
         this.lookup2in7biii[i]['gendertotal3']=tota;
        this.lookup2in7biii[i]['genderLocationlist3'] = value.value;
    }
    changegendertotal3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('gendertotal3' + i.toString())
            )).value
        );
        this.lookup2in7biii[i]['gendertotal3'] = (
            (<HTMLInputElement>(
                document.getElementById('gendertotal3' + i.toString())
            )).value
        );
    }
    deletegender4(index) {
        this.lookup2in7biii.splice(index, 1);
    }

    changegenderMale4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderMale4' + i.toString())
            )).value
        );
        this.lookup2in7biv[i]['genderMale4'] = (
            (<HTMLInputElement>(
                document.getElementById('genderMale4' + i.toString())
            )).value
        );
    }

    changegenderFemale4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderFemale4' + i.toString())
            )).value
        );
        this.lookup2in7biv[i]['genderFemale4'] = (
            (<HTMLInputElement>(
                document.getElementById('genderFemale4' + i.toString())
            )).value
        );
    }

    changegenderothers4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderothers4' + i.toString())
            )).value
        );
        this.lookup2in7biv[i]['genderothers4'] = (
            (<HTMLInputElement>(
                document.getElementById('genderothers4' + i.toString())
            )).value
        );
    }

    OnchangegenderLocationlist4(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        var male=
        ( (<HTMLInputElement>document.getElementById('genderMale4' + i.toString()))
             .value)
             var intconv=parseFloat(male.replace(/,/g, ''))
             console.log(intconv);
    var fem=
    ((<HTMLInputElement>document.getElementById('genderFemale4' + i.toString()))
           .value)
           var intconv1=parseFloat(fem.replace(/,/g, ''))
           console.log(intconv1);
     var oth=
       ((<HTMLInputElement>document.getElementById('genderothers4' + i.toString()))
         .value)
         var intconv2=parseFloat(oth.replace(/,/g, ''))
         console.log(intconv2);
         var tota=intconv + intconv1 + intconv2;
         this.lookup2in7biv[i]['gendertotal4']=tota;
        this.lookup2in7biv[i]['genderLocationlist4'] = value.value;
    }
    changegendertotal4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('gendertotal4' + i.toString())
            )).value
        );
        this.lookup2in7biv[i]['gendertotal4'] = (
            (<HTMLInputElement>(
                document.getElementById('gendertotal4' + i.toString())
            )).value
        );
    }
    deletegender5(index) {
        this.lookup2in7biv.splice(index, 1);
    }

    changegenderMale5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderMale5' + i.toString())
            )).value
        );
        this.lookup2in7bv[i]['genderMale5'] = (
            (<HTMLInputElement>(
                document.getElementById('genderMale5' + i.toString())
            )).value
        );
    }

    changegenderFemale5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderFemale5' + i.toString())
            )).value
        );
        this.lookup2in7bv[i]['genderFemale5'] = (
            (<HTMLInputElement>(
                document.getElementById('genderFemale5' + i.toString())
            )).value
        );
    }

    changegenderothers5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('genderothers5' + i.toString())
            )).value
        );
        this.lookup2in7bv[i]['genderothers5'] = (
            (<HTMLInputElement>(
                document.getElementById('genderothers5' + i.toString())
            )).value
        );
    }

    OnchangegenderLocationlist5(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        var male=
        ( (<HTMLInputElement>document.getElementById('genderMale5' + i.toString()))
             .value)
             var intconv=parseFloat(male.replace(/,/g, ''))
             console.log(intconv);
    var fem=
    ((<HTMLInputElement>document.getElementById('genderFemale5' + i.toString()))
           .value)
           var intconv1=parseFloat(fem.replace(/,/g, ''))
           console.log(intconv1);
     var oth=
       ((<HTMLInputElement>document.getElementById('genderothers5' + i.toString()))
         .value)
         var intconv2=parseFloat(oth.replace(/,/g, ''))
         console.log(intconv2);
         var tota=intconv + intconv1 + intconv2;
         this.lookup2in7bv[i]['gendertotal5']=tota;
        this.lookup2in7bv[i]['genderLocationlist5'] = value.value;
    }
    changegendertotal5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('gendertotal5' + i.toString())
            )).value
        );
        this.lookup2in7bv[i]['gendertotal5'] = (
            (<HTMLInputElement>(
                document.getElementById('gendertotal5' + i.toString())
            )).value
        );
    }
    deletegender6(index) {
        this.lookup2in7bv.splice(index, 1);
    }

    OnchangeLocationlist1(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        
      var male=
         ( (<HTMLInputElement>document.getElementById('Male1' + i.toString()))
              .value)
              var intconv=parseFloat(male.replace(/,/g, ''))
              console.log(intconv);
     var fem=
     ((<HTMLInputElement>document.getElementById('Female1' + i.toString()))
            .value)
            var intconv1=parseFloat(fem.replace(/,/g, ''))
            console.log(intconv1);
   var oth=
   ((<HTMLInputElement>document.getElementById('others1' + i.toString()))
          .value)
          var intconv2=parseFloat(oth.replace(/,/g, ''))
          console.log(intconv2);
          var tota=intconv + intconv1 + intconv2;
          this.lookup2in7[i]['total1']=tota;
  
        this.lookup2in7[i]['Locationlist1'] = value.value;
    }

    deletegender1(index) {
        this.lookup2in7.splice(index, 1);
    }
    addFieldmtptdmttwo3() {
        this.newattributemtptdmttwo3 = { mtptdmttwo5: '', mtptdmttwo6: '' };
        this.lookupmtptdmttwo3.push(this.newattributemtptdmttwo3);
    }

    addFieldmtptdmttwo4() {
        this.newattributemtptdmttwo4 = { mtptdmttwo7: '', mtptdmttwo8: '' };
        this.lookupmtptdmttwo4.push(this.newattributemtptdmttwo4);
    }

    addFieldmtptdmttwo5() {
        this.newattributemtptdmttwo5 = { mtptdmttwo9: '', mtptdmttwo10: '' };
        this.lookupmtptdmttwo5.push(this.newattributemtptdmttwo5);
    }

    addFieldmtptdmttwo6() {
        this.newattributemtptdmttwo6 = { mtptdmttwo11: '', mtptdmttwo12: '' };
        this.lookupmtptdmttwo6.push(this.newattributemtptdmttwo6);
    }

    addFieldmtptdmttwo7() {
        this.newattributemtptdmttwo7 = { mtptdmttwo13: '', mtptdmttwo14: '' };
        this.lookupmtptdmttwo7.push(this.newattributemtptdmttwo7);
    }

    addFieldmtptdmttwo8() {
        this.newattributemtptdmttwo8 = { mtptdmttwo15: '', mtptdmttwo16: '' };
        this.lookupmtptdmttwo8.push(this.newattributemtptdmttwo8);
    }

    addFieldmtptdmttwo9() {
        this.newattributemtptdmttwo9 = { mtptdmttwo17: '', mtptdmttwo18: '' };
        this.lookupmtptdmttwo9.push(this.newattributemtptdmttwo9);
    }

    addFieldmtptdmttwo10() {
        this.newattributemtptdmttwo10 = { mtptdmttwo19: '', mtptdmttwo20: '' };
        this.lookupmtptdmttwo10.push(this.newattributemtptdmttwo10);
    }

    addFieldmtptdmttwo11() {
        this.newattributemtptdmttwo11 = { mtptdmttwo21: '', mtptdmttwo22: '' };
        this.lookupmtptdmttwo11.push(this.newattributemtptdmttwo11);
    }

    addFieldValue8() {
        this.newAttribute34 = { Geo4: '',Geo4new: '', Number3: '', percentage5: '' };
        this.lookupdtl8.push(this.newAttribute34);
    }
    addFieldValue9() {
        this.newAttribute35 = { Geo5: '', Number4: '', percentage6: '' };
        this.lookupdtl9.push(this.newAttribute35);
    }
    addFieldValue10() {
        this.newAttribute36 = { Geo6: '', Number5: '', percentage7: '' };
        this.lookupdtl10.push(this.newAttribute36);
    }
    addFieldValue11() {
        this.newAttribute37 = { description: '', Outcome: '' };
        this.lookupdtl11.push(this.newAttribute37);
    }

    addFieldValue12() {
        this.newAttribute38 = { position10: '', frequency: '' };
        this.lookupdtl12.push(this.newAttribute38);
        this.reltypeother3 = '';
    }

    addFieldValue50() {
        this.newAttribute39 = { Employee: '', Training: '' };
        this.lookupdtl50.push(this.newAttribute39);
        this.reltypeother7 = '';
    }

    addFieldValue51() {
        this.newAttribute40 = { Employee1: '', Training1: '' };
        this.lookupdtl51.push(this.newAttribute40);
        this.reltypeother8 = '';
    }
    //materials
    OnChangemtptdmttwo1(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo1[i]['mtptdmttwo1'] = value.value;
    }
    changemtptdmttwo2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo2' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo1[i]['mtptdmttwo2'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo2' + i.toString())
        )).value;
    }
    deletemtptdmttwo1(index) {
        this.lookupmtptdmttwo1.splice(index, 1);
    }

    OnChangemtptdmttwo3(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo2[i]['mtptdmttwo3'] = value.value;
    }
    changemtptdmttwo4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo4' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo2[i]['mtptdmttwo4'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo4' + i.toString())
        )).value;
    }
    deletemtptdmttwo2(index) {
        this.lookupmtptdmttwo2.splice(index, 1);
    }

    OnChangemtptdmttwo5(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo3[i]['mtptdmttwo5'] = value.value;
    }
    changemtptdmttwo6(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo6' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo3[i]['mtptdmttwo6'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo6' + i.toString())
        )).value;
    }
    deletemtptdmttwo3(index) {
        this.lookupmtptdmttwo3.splice(index, 1);
    }

    OnChangemtptdmttwo7(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo4[i]['mtptdmttwo7'] = value.value;
    }
    changemtptdmttwo8(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo8' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo4[i]['mtptdmttwo8'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo8' + i.toString())
        )).value;
    }
    deletemtptdmttwo4(index) {
        this.lookupmtptdmttwo4.splice(index, 1);
    }

    OnChangemtptdmttwo9(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo5[i]['mtptdmttwo9'] = value.value;
    }
    changemtptdmttwo10(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo10' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo5[i]['mtptdmttwo10'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo10' + i.toString())
        )).value;
    }
    deletemtptdmttwo5(index) {
        this.lookupmtptdmttwo5.splice(index, 1);
    }

    OnChangemtptdmttwo11(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo6[i]['mtptdmttwo11'] = value.value;
    }
    changemtptdmttwo12(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo12' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo6[i]['mtptdmttwo12'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo12' + i.toString())
        )).value;
    }
    deletemtptdmttwo6(index) {
        this.lookupmtptdmttwo6.splice(index, 1);
    }

    OnChangemtptdmttwo13(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo7[i]['mtptdmttwo13'] = value.value;
    }
    changemtptdmttwo14(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo14' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo7[i]['mtptdmttwo14'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo14' + i.toString())
        )).value;
    }
    deletemtptdmttwo7(index) {
        this.lookupmtptdmttwo7.splice(index, 1);
    }

    OnChangemtptdmttwo15(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo8[i]['mtptdmttwo15'] = value.value;
    }
    changemtptdmttwo16(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo16' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo8[i]['mtptdmttwo16'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo16' + i.toString())
        )).value;
    }
    deletemtptdmttwo8(index) {
        this.lookupmtptdmttwo8.splice(index, 1);
    }

    OnChangemtptdmttwo17(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo9[i]['mtptdmttwo17'] = value.value;
    }
    changemtptdmttwo18(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo18' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo9[i]['mtptdmttwo18'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo18' + i.toString())
        )).value;
    }

    deletemtptdmttwo9(index) {
        this.lookupmtptdmttwo9.splice(index, 1);
    }
    OnChangemtptdmttwo19(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo10[i]['mtptdmttwo19'] = value.value;
    }
    changemtptdmttwo20(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo20' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo10[i]['mtptdmttwo20'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo20' + i.toString())
        )).value;
    }
    deletemtptdmttwo10(index) {
        this.lookupmtptdmttwo10.splice(index, 1);
    }

    OnChangemtptdmttwo21(i, value) {
        var empty = '';
        this.onInputChangeindustrymateriality(empty);
        this.lookupmtptdmttwo11[i]['mtptdmttwo21'] = value.value;
    }
    changemtptdmttwo22(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('mtptdmttwo22' + i.toString())
            )).value
        );
        this.lookupmtptdmttwo11[i]['mtptdmttwo22'] = (<HTMLInputElement>(
            document.getElementById('mtptdmttwo22' + i.toString())
        )).value;
    }
    deletemtptdmttwo11(index) {
        this.lookupmtptdmttwo11.splice(index, 1);
    }
    addFieldValue52() {
        this.newAttribute41 = { Diversity: '', Individuals: '' };
        this.lookupdtl52.push(this.newAttribute41);
        this.reltypeother9 = '';
    }
    addFieldValue52puta() {
        this.newAttribute41 = { Diversity: '', Individualsputa: '' };
        this.lookupdtl52puta.push(this.newAttribute41);
    }
    addFieldValue53() {
        this.newAttribute42 = {
            Employee2: '',
            Location50: '',
            Landmark1: '',
            State1: '',
            Country1: '',
            Code1: '',
            Ratio: '',
        };
        this.lookupdtl53.push(this.newAttribute42);
        this.reltypeother10 = '';
    }
    addValue() {
        this.newAttribute5 = { mh2: '', mh3: '' };
        this.lookup.push(this.newAttribute5);
    }
    addValue413() {
        this.newAttribute413 = {
            Owlceiaadp1: '',
            Owlceiaadp2: '',
            Owlceiaadp3: '',
        };
        this.lookup413.push(this.newAttribute413);
        this.reltypeother6 = '';
    }
    addValue4132() {
        this.newAttribute4132 = {
            Location4132: '',
            Landmark4132: '',
            State4132: '',
            Country4132: '',
            Code4132: '',
            olocalcomm6: '',
        };
        this.lookup4132.push(this.newAttribute4132);
    }
    addValue1() {
        this.newAttribute6 = { muuh3: '', mh4: '' };
        this.lookup1.push(this.newAttribute6);
    }
    addValue2() {
        this.newAttribute7 = { muuh4: '', mh5: '' };
        this.lookup2.push(this.newAttribute7);
    }

    addValue4() {
        this.newAttribute9 = { ecothree2: '' };
        this.lookup4.push(this.newAttribute9);
    }
    addValue5() {
        this.newAttribute10 = { ecothree3: '' };
        this.lookup5.push(this.newAttribute10);
    }
    addValue6() {
        this.newAttribute11 = { ecothree4: '' };
        this.lookup6.push(this.newAttribute11);
    }
    addValue7() {
        this.newAttribute12 = { ecothree5: '' };
        this.lookup7.push(this.newAttribute12);
    }
    // addValue8(){
    //   this.newAttribute13= {'ecothree6':''};
    //   this.lookup8.push(this.newAttribute13)
    //   console.log(this.lookup8)

    // }
    addValue8() {
        this.newAttribute13 = { ecothree7: '' };
        this.lookup8.push(this.newAttribute13);
        console.log(this.lookup8);
    }

    addFieldValue100() {
        this.newAttribute100 = { Number20: '', units: '', view: '' };
        this.lookupdtll00.push(this.newAttribute100);
    }
    addFieldValue101() {
        this.newAttribute101 = { Number21: '', units21: '', view21: '' };
        this.lookupdtll01.push(this.newAttribute101);
    }

    addValue25() {
        this.newAttribute30 = { ieii1: '' };
        this.lookup25.push(this.newAttribute30);
    }
    addValue26() {
        this.newAttribute31 = { ieii2: '' };
        this.lookup26.push(this.newAttribute31);
    }

    addValue30() {
        this.newAttribute32 = { Acb2: '' };
        this.lookup30.push(this.newAttribute32);
    }
    addFieldValue54() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl54.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl54.length - 1;
            const lastFuelType = this.lookupdtl54[lastIndex].country50;
            const lastView = this.lookupdtl54[lastIndex].view45;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view.Name; // use the selected option or the first option if no option is selected
        }
        if (this.lookupdtl54.length > 0) {
            this.isdisabledview45 = true;
        } else {
            this.isdisabledview45 = false;
        }

        this.newAttribute42 = {
            country50: '',
            Number45: '',
            percentage45: '',
            view45: defaultView,
        };
        this.lookupdtl54.push(this.newAttribute42);
    }
    //304
    addFieldValue304Q5() {
        this.newAttribute3045 = {
            osol5: '',
            osol5countrylist: '',
            Squaremeter: '',
        };
        this.lookupdtl3045.push(this.newAttribute3045);
    }
    addFieldValue306iii() {
        this.newAttribute306iii = { one: '', two: '', three: '' };
        this.lookupdtl306iii.push(this.newAttribute306iii);
    }
    addFieldValue306ii() {
        this.newAttribute306ii = { uno: '', dos: '', thres: '' };
        this.lookupdtl306ii.push(this.newAttribute306ii);
    }
    addFieldValueturnover1() {
        this.newAttributeturnover1 = {
            Region401: '',
            totalnewhires401: '',
            turnover1: '',
        };
        this.lookupdtlturnover1.push(this.newAttributeturnover1);
    }

    addFieldValueturnover22() {
        this.newAttributeturnover2 = {
            Region401b: '',
            totalnewhires401b: '',
            turnover2: '',
        };
        this.lookupdtlturnover2.push(this.newAttributeturnover2);
    }
    getdatabyId(Id: number) {}
    hoverfunc(event) {
        this.hovereach = event.target.innerText;
    }
    Test(item) {
        console.log(item)
        this.oioi = 0;
        this.koli = 0;
        this.codeval = item.target.innerText;
        console.log(this.codeval);
        this.showguidance(this.codeval);
    }
    //changes in the setvalues for dynamic value.......................................................................
    showguidance(TemplateSubMenuName) {
        this.is
            .getDescriptionByScreenName(TemplateSubMenuName)
            .subscribe((data) => {
                console.log(data);
                console.log(this.codeval);
                this.listofarrayvalues = data;
                console.log(this.listofarrayvalues);

                if (data[0]['TemplateSubMenuName'] == 'Organization Details') {
                    this.org = true;
                    console.log(this.element);
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.org = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Entities included in the organizations sustainability Reporting'
                ) {
                    this.entity = true;
                    console.log(this.element);
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue();
                    console.log(this.lookupdtl.length);
                    if (this.lookupdtl.length > 1) {
                        this.deleteQ102a(this.lookupdtl.length - 1);
                    }
                    this.addFieldValue2x();
                    if (this.lookupdtl2x.length > 1) {
                        this.deleteQ102b(this.lookupdtl2x.length - 1);
                    }
                } else {
                    this.entity = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Reporting period, frequency and contact point'
                ) {
                    this.reportingperiod = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.reportingperiod = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Restatements of information'
                ) {
                    this.refexa = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.refexa = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'External Assurance') {
                    this.external = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.external = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Activities, Valuechain and other business relationships'
                ) {
                    this.activities = true;
                    this.addFieldValue1();
                    if (this.lookupdtl1.length > 1) {
                        this.deleteQ10261(this.lookupdtl1.length - 1);
                    }

                    this.addFieldValue2();
                    if (this.lookupdtl2.length > 1) {
                        this.deleteQ1026(this.lookupdtl2.length - 1);
                    }
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.activities = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Employees') {
                    this.employees = true;
                    this.addFieldgender1();
                    if (this.lookup2in7.length > 1) {
                        this.deletegender1(this.lookup2in7.length - 1);
                    }
                    this.addFieldgender2();
                    if (this.lookup2in7bi.length > 1) {
                        this.deletegender2(this.lookup2in7bi.length - 1);
                    }
                    this.addFieldgender3();
                    if (this.lookup2in7bii.length > 1) {
                        this.deletegender3(this.lookup2in7bii.length - 1);
                    }
                    this.addFieldgender4();
                    if (this.lookup2in7biii.length > 1) {
                        this.deletegender4(this.lookup2in7biii.length - 1);
                    }
                    this.addFieldgender5();
                    if (this.lookup2in7biv.length > 1) {
                        this.deletegender5(this.lookup2in7biv.length - 1);
                    }
                    this.addFieldgender6();
                    if (this.lookup2in7bv.length > 1) {
                        this.deletegender6(this.lookup2in7bv.length - 1);
                    }
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.employees = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Workers who are not Employees'
                ) {
                    this.workers = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.workers = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Governance structure and composition'
                ) {
                    this.governance = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.governance = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Nomination and selection of the highest governance body'
                ) {
                    this.nomination = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.nomination = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Chair of the highest governance body'
                ) {
                    this.chair = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.chair = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Role of the highest governance body in overseeing the management of impacts'
                ) {
                    this.rolegovernance = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.rolegovernance = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Delegation of responsibility for managing impacts'
                ) {
                    this.delegation = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.delegation = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Role of the highest governance body in sustainability reporting'
                ) {
                    this.sust = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.sust = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Conflicts of interest') {
                    this.conf = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.conf = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Communication of critical concerns'
                ) {
                    this.Communication = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Communication = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Collective knowledge of the highest governance body'
                ) {
                    this.Collective = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Collective = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Evaluation of the performance of the highest governance body'
                ) {
                    this.Evaluation = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Evaluation = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Remuneration policies') {
                    this.Remuneration = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Remuneration = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Process to determine remuneration'
                ) {
                    this.Proc12 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Proc12 = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Annual total compensation ratio'
                ) {
                    this.Annual = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Annual = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Statement on sustainable development strategy'
                ) {
                    this.Statement = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Statement = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Policy commitments') {
                    this.Policy = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue54();
                    if (this.lookupdtl54.length > 1) {
                        this.deleteQ4121(this.lookupdtl54.length - 1);
                    }
                } else {
                    this.Policy = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Embedding policy commitments'
                ) {
                    this.Embedding = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Embedding = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Process to remediate negative impacts'
                ) {
                    this.Process1 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Process1 = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Mechanisms for seeking advice and raising concerns'
                ) {
                    this.mech = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.mech = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Compliance with laws and regulations'
                ) {
                    this.compir = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue27bi();
                    if (this.lookupdtl27bi.length > 1) {
                        this.delete27bi(this.lookupdtl27bi.length - 1);
                    }
                    this.addFieldValue27bii();
                    if (this.lookupdtl27bii.length > 1) {
                        this.delete27bii(this.lookupdtl27bii.length - 1);
                    }
                } else {
                    this.compir = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] == 'Membership associations'
                ) {
                    this.mema = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.mema = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Approach to stakeholder engagement'
                ) {
                    this.aseg = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.aseg = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Collective bargaining agreements'
                ) {
                    this.cba = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.cba = false;
                }
                //Economic start here....................................
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Direct economic value generated and distributed'
                ) {
                    this.moneyhiest = true;

                    this.addValue();
                    if (this.lookup.length > 1) {
                        this.deletemh2(this.lookup.length - 1);
                    }

                    this.addValue1();
                    if (this.lookup1.length > 1) {
                        this.deletemh3(this.lookup1.length - 1);
                    }
                    this.addValue2();
                    if (this.lookup2.length > 1) {
                        this.deletemh4(this.lookup2.length - 1);
                    }
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.moneyhiest = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Financial implications and other risks and opportunities due to climate change'
                ) {
                    this.ecotwo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValueeco();
                    if (this.lookupdtleco.length > 1) {
                        this.deleteQ2011v(this.lookupdtleco.length - 1);
                    }
                } else {
                    this.ecotwo = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Defined benefit plan obligations and other retirement plans'
                ) {
                    this.ecothree = true;
                    this.addValue3();
                    if (this.lookup3.length > 1) {
                        this.deleteecothree1(this.lookup3.length - 1);
                    }
                    this.addValue4();
                    if (this.lookup4.length > 1) {
                        this.deleteecothree2(this.lookup4.length - 1);
                    }
                    this.addValue5();
                    if (this.lookup5.length > 1) {
                        this.deleteecothree3(this.lookup5.length - 1);
                    }

                    this.addValue6();
                    if (this.lookup6.length > 1) {
                        this.deleteecothree4(this.lookup6.length - 1);
                    }
                    this.addValue7();
                    if (this.lookup7.length > 1) {
                        this.deleteecothree5(this.lookup7.length - 1);
                    }
                    this.addValue8();
                    if (this.lookup8.length > 1) {
                        this.deleteecothree7(this.lookup8.length - 1);
                    }
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.ecothree = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Financial assistance received from government'
                ) {
                    this.ecofour = true;
                    this.addValue9();
                    if (this.lookup9.length > 1) {
                        this.deleteecofour1(this.lookup9.length - 1);
                    }
                    this.addValue10();
                    if (this.lookup10.length > 1) {
                        this.deleteecofour2(this.lookup10.length - 1);
                    }
                    this.addValue11();
                    if (this.lookup11.length > 1) {
                        this.deleteecofour3(this.lookup11.length - 1);
                    }
                    this.addValue12();
                    if (this.lookup12.length > 1) {
                        this.deleteecofour4(this.lookup12.length - 1);
                    }
                    this.addValue13();
                    if (this.lookup13.length > 1) {
                        this.deleteecofour5(this.lookup13.length - 1);
                    }
                    this.addValue14();
                    if (this.lookup14.length > 1) {
                        this.deleteecofour6(this.lookup14.length - 1);
                    }
                    this.addValue15();
                    if (this.lookup15.length > 1) {
                        this.deleteecofour7(this.lookup15.length - 1);
                    }
                    this.addValue16();
                    if (this.lookup16.length > 1) {
                        this.deleteecofour8(this.lookup16.length - 1);
                    }
                    this.addValue17();
                    if (this.lookup17.length > 1) {
                        this.deleteecofour9(this.lookup17.length - 1);
                    }
                    this.addValue18();
                    if (this.lookup18.length > 1) {
                        this.deleteecofour10(this.lookup18.length - 1);
                    }
                    this.addValue19();
                    if (this.lookup19.length > 1) {
                        this.deleteecofour11(this.lookup19.length - 1);
                    }
                    this.addValue20();
                    if (this.lookup20.length > 1) {
                        this.deleteecofour12(this.lookup20.length - 1);
                    }
                    this.addValue21();
                    if (this.lookup21.length > 1) {
                        this.deleteecofour13(this.lookup21.length - 1);
                    }
                    this.addValue22();
                    if (this.lookup22.length > 1) {
                        this.deleteecofour14(this.lookup22.length - 1);
                    }
                    this.addValue23();
                    if (this.lookup23.length > 1) {
                        this.deleteecofour15(this.lookup23.length - 1);
                    }
                    this.addValue24();
                    if (this.lookup24.length > 1) {
                        this.deleteecofour16(this.lookup24.length - 1);
                    }
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.ecofour = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Ratios of standard entry level wage by gender compared to local minimum wage'
                ) {
                    this.markpref = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue3();
                    if (this.lookupdtl3.length > 1) {
                        this.deleteQ2021(this.lookupdtl3.length - 1);
                    }
                } else {
                    this.markpref = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Proportion of senior management hired from the local community'
                ) {
                    this.markpreff = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue4();
                    if (this.lookupdtl4.length > 1) {
                        this.deletedtl4(this.lookupdtl4.length - 1);
                    }
                } else {
                    this.markpreff = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Infrastructure investments and services supported'
                ) {
                    this.iei = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.iei = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Significant indirect economic impacts'
                ) {
                    this.ieii = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addValue25();
                    if (this.lookup25.length > 1) {
                        this.deleteieii1(this.lookup25.length - 1);
                    }
                    this.addValue26();
                    if (this.lookup26.length > 1) {
                        this.deleteieii2(this.lookup26.length - 1);
                    }
                } else {
                    this.ieii = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Proportion of spending on local suppliers'
                ) {
                    this.pp = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue5();
                    if (this.lookupdtl5.length > 1) {
                        this.deleteQ2041(this.lookupdtl5.length - 1);
                    }
                } else {
                    this.pp = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations assessed for risks related to corruption'
                ) {
                    this.Ac = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Ac = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Communication and training about anti-corruption policies and procedures'
                ) {
                    this.Acc = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue6();
                    if (this.lookupdtl6.length > 1) {
                        this.deleteQ205a(this.lookupdtl6.length - 1);
                    }
                    this.addFieldValue7();
                    if (this.lookupdtl7.length > 1) {
                        this.deleteQ205b(this.lookupdtl7.length - 1);
                    }
                    this.addFieldValue8();
                    if (this.lookupdtl8.length > 1) {
                        this.deleteQ205c(this.lookupdtl8.length - 1);
                    }
                    this.addFieldValue9();
                    if (this.lookupdtl9.length > 1) {
                        this.deleteQ205d(this.lookupdtl9.length - 1);
                    }
                    this.addFieldValue10();
                    if (this.lookupdtl10.length > 1) {
                        this.deleteQ205e(this.lookupdtl10.length - 1);
                    }
                } else {
                    this.Acc = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Confirmed incidents of corruption and actions taken'
                ) {
                    this.Accc = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue11();
                    if (this.lookupdtl11.length > 1) {
                        this.deleteQ2053(this.lookupdtl11.length - 1);
                    }
                } else {
                    this.Accc = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Legal actions for anti-competitive behavior, anti-trust, and monopoly practices'
                ) {
                    this.Acb = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addValue30();
                    if (this.lookup30.length > 1) {
                        this.deleteAcb2(this.lookup30.length - 1);
                    }
                } else {
                    this.Acb = false;
                }
                //Environment start here..................................
                if (data[0]['TemplateSubMenuName'] == 'Approach to tax') {
                    this.Att = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue12();
                    if (this.lookupdtl12.length > 1) {
                        this.deleteQ2071(this.lookupdtl12.length - 1);
                    }
                } else {
                    this.Att = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Tax Governance, control and risk management'
                ) {
                    this.Attt = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Attt = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Stakeholder engagement and management of concerns related to tax'
                ) {
                    this.Atttt = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Atttt = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Country-by-country reporting'
                ) {
                    this.Attttt = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }

                    this.addFieldValue2074b();
                    if (this.lookupdtl207b.length > 1) {
                        this.deleteQ207b(this.lookupdtl207b.length - 1);
                    }
                } else {
                    this.Attttt = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Materials used by weight or volume'
                ) {
                    this.Mtt16 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue301Q1();
                    if (this.lookupdtl41.length > 1) {
                        this.deleteQ301a(this.lookupdtl41.length - 1);
                    }
                    this.addFieldValue301Qii();
                    if (this.lookupdtl41ii.length > 1) {
                        this.deleteQ301b(this.lookupdtl41ii.length - 1);
                    }
                } else {
                    this.Mtt16 = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Recycled input materials used'
                ) {
                    this.Mttt16 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue301Q2();
                    if (this.lookupdtl42.length > 1) {
                        this.deleteQ3012(this.lookupdtl42.length - 1);
                    }
                } else {
                    this.Mttt16 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Reclaimed products and their packaging materials'
                ) {
                    this.Rppm = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue301Q3();
                    if (this.lookupdtl43.length > 1) {
                        this.deleteQ3013(this.lookupdtl43.length - 1);
                    }
                } else {
                    this.Rppm = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Energy consumption within the organization'
                ) {
                    this.Ecwo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue302Q1();
                    if (this.lookupdtl44.length > 1) {
                        this.deleteQ3021(this.lookupdtl44.length - 1);
                    }
                    this.addFieldValue302Q1a();
                    if (this.lookupdtl44a.length > 1) {
                        this.deleteQ3021a(this.lookupdtl44a.length - 1);
                    }
                } else {
                    this.Ecwo = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Energy consumption outside of the organization'
                ) {
                    this.Ecoo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Ecoo = false;
                }

                if (data[0]['TemplateSubMenuName'] == 'Energy intensity') {
                    this.Eit = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Eit = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Reduction of energy consumption'
                ) {
                    this.Rec = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Rec = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Reductions in energy requirements of products and services'
                ) {
                    this.Rerp = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Rerp = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Interactions with water as a shared resource'
                ) {
                    this.Iwsr = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Iwsr = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Management of water discharge-related impacts'
                ) {
                    this.Mwdr = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Mwdr = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Water withdrawal') {
                    this.www = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.www = false;
                }

                if (data[0]['TemplateSubMenuName'] == 'Water discharge') {
                    this.wdd = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wdd = false;
                }

                if (data[0]['TemplateSubMenuName'] == 'Water consumption') {
                    this.wcc = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wcc = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operational sites owned, leased, managed in, or adjacent to, protected areas and areas of high biodiversity value outside protected areas'
                ) {
                    this.osol = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue304Q5();
                    if (this.lookupdtl3045.length > 1) {
                        this.deleteosol5(this.lookupdtl3045.length - 1);
                    }
                } else {
                    this.osol = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Significant impacts of activities, products, and services on biodiversity'
                ) {
                    this.sia = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.sia = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Habitats protected or restored'
                ) {
                    this.hpr = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue3043a();
                    if (this.lookupdtl304a.length > 1) {
                        this.delete3043a(this.lookupdtl304a.length - 1);
                    }
                } else {
                    this.hpr = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'IUCN Red List species and national conservation list species with habitats in areas affected by operations'
                ) {
                    this.Iucn = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Iucn = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Average hours of training per year per employee'
                ) {
                    this.emp1 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue50();
                    if (this.lookupdtl50.length > 1) {
                        this.deletedtl50(this.lookupdtl50.length - 1);
                    }
                } else {
                    this.emp1 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Programs for upgrading employee skills and transition assistance programs'
                ) {
                    this.emp2 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp2 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Percentage of employees receiving regular performance and career development reviews'
                ) {
                    this.emp3 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue51();
                    if (this.lookupdtl51.length > 1) {
                        this.deleteQ4043(this.lookupdtl51.length - 1);
                    }
                } else {
                    this.emp3 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Diversity of governance bodies and employees'
                ) {
                    this.emp4 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue52();
                    if (this.lookupdtl52.length > 1) {
                        this.deleteQ40451(this.lookupdtl52.length - 1);
                    }
                    this.addFieldValue52puta();
                    if (this.lookupdtl52puta.length > 1) {
                        this.deleteQ4051puta(this.lookupdtl52puta.length - 1);
                    }
                } else {
                    this.emp4 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Ratio of basic salary and remuneration of women to men'
                ) {
                    this.emp5 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue53();
                    if (this.lookupdtl53.length > 1) {
                        this.deleteQ4052(this.lookupdtl53.length - 1);
                    }
                } else {
                    this.emp5 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Incidents of discrimination and corrective actions taken'
                ) {
                    this.emp6 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp6 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations and suppliers in which the right to freedom of association and collective bargaining may be at risk'
                ) {
                    this.emp7 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp7 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations and suppliers at significant risk for incidents of child labor'
                ) {
                    this.emp8 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp8 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations and suppliers at significant risk for incidents of forced or compulsory labor'
                ) {
                    this.emp9 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp9 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Security personnel trained in human rights policies or procedures'
                ) {
                    this.emp10 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp10 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Incidents of violations involving rights of indigenous peoples'
                ) {
                    this.emp11 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp11 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations that have been subject to human rights reviews or impact assessments'
                ) {
                    this.emp12 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue54();
                    if (this.lookupdtl54.length > 1) {
                        this.deleteQ4121(this.lookupdtl54.length - 1);
                    }
                } else {
                    this.emp12 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Employee training on human rights policies or procedures'
                ) {
                    this.emp13 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp13 = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Significant investment agreements and contracts that include human rights clauses or that underwent human rights screening'
                ) {
                    this.emp14 = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.emp14 = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Direct (Scope 1) GHG emissions'
                ) {
                    this.Dghgemi = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Dghgemi = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Energy indirect (Scope 2) GHG emissions'
                ) {
                    this.Dgh = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Dgh = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Other indirect (Scope 3) GHG emissions'
                ) {
                    this.kgf = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.kgf = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] == 'GHG emissions intensity'
                ) {
                    this.sahoo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.sahoo = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Reduction of GHG emissions'
                ) {
                    this.bahu = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.bahu = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Emissions of ozone-depleting substances (ODS)'
                ) {
                    this.bali = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.bali = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Nitrogen oxides (NOx), sulfur oxides (SOx), and other significant air emissions'
                ) {
                    this.apple = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.apple = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Waste generation and significant waste-related impacts'
                ) {
                    this.TSIO = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TSIO = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Management of significant waste-related impacts'
                ) {
                    this.TSIT = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TSIT = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Waste generated') {
                    this.TSITH = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TSITH = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Waste diverted from disposal'
                ) {
                    this.TSIF = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue306iii();
                    if (this.lookupdtl306iii.length > 1) {
                        this.delete306iii(this.lookupdtl306iii.length - 1);
                    }
                    this.addFieldValue306ii();
                    if (this.lookupdtl306ii.length > 1) {
                        this.delete306ii(this.lookupdtl306ii.length - 1);
                    }
                } else {
                    this.TSIF = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Waste directed to disposal'
                ) {
                    this.TSFIV = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TSFIV = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Non-compliance with environmental laws and regulations'
                ) {
                    this.TSO = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TSO = false;
                }

                if (
                    data[0]['TemplateSubMenuName'] ==
                    'New suppliers that were screened using environmental criteria'
                ) {
                    this.Teo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Teo = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Negative environmental impacts in the supply chain and actions taken'
                ) {
                    this.TeT = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.TeT = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'New employee hires and employee turnover'
                ) {
                    this.Nehaet = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValueturnover1();
                    if (this.lookupdtlturnover1.length > 1) {
                        this.deleteturnover1(
                            this.lookupdtlturnover1.length - 1
                        );
                    }
                    this.addFieldValueturnover22();
                    if (this.lookupdtlturnover2.length > 1) {
                        this.deleteturnover2(
                            this.lookupdtlturnover2.length - 1
                        );
                    }
                } else {
                    this.Nehaet = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Benefits provided to full-time employees that are not provided to temporary or part-time employees'
                ) {
                    this.Bpftetan = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Bpftetan = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Parental leave') {
                    this.Parentalleave = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.Parentalleave = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Minimum notice periods regarding operational changes'
                ) {
                    this.mnproc = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.mnproc = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Occupational health and safety management system'
                ) {
                    this.ohasms = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.ohasms = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Hazard identification, risk assessment, and incident investigation'
                ) {
                    this.hiraaii = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.hiraaii = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Occupational health services'
                ) {
                    this.ohs = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.ohs = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Worker participation, consultation, and communication on occupational health and safety'
                ) {
                    this.wpcacoohas = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wpcacoohas = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Worker training on occupational health and safety'
                ) {
                    this.wtoohas = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wtoohas = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Promotion of worker health'
                ) {
                    this.powh = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.powh = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Prevention and mitigation of occupational health and safety impacts directly linked by business relationships'
                ) {
                    this.pamoohasid = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.pamoohasid = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Workers covered by an occupational health and safety management system'
                ) {
                    this.wcbaohasms = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wcbaohasms = false;
                }
                if (data[0]['TemplateSubMenuName'] == 'Work-related injuries') {
                    this.wrinjuries = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wrinjuries = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] == 'Work-related ill health'
                ) {
                    this.wrih = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wrih = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations with local community engagement, impact assessments, and development programs'
                ) {
                    this.Owlceiaadp = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addValue413();
                    if (this.lookup413.length > 1) {
                        this.deleteQ4131(this.lookup413.length - 1);
                    }
                } else {
                    this.Owlceiaadp = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Operations with significant actual and potential negative impacts on local communities'
                ) {
                    this.olocalcomm = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addValue4132();
                    if (this.lookup4132.length > 1) {
                        this.deleteQ4132(this.lookup4132.length - 1);
                    }
                } else {
                    this.olocalcomm = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'New suppliers that were screened using social criteria'
                ) {
                    this.nstwsusc = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.nstwsusc = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Negative social impacts in the supply chain and actions taken'
                ) {
                    this.nstwsuscrev = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.nstwsuscrev = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] == 'Political contributions'
                ) {
                    this.revanent = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldValue102();
                    if (this.lookupdtl102.length > 1) {
                        this.deletedtl102(this.lookupdtl102.length - 1);
                    }
                } else {
                    this.revanent = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Assessment of the health and safety impacts of product and service categories'
                ) {
                    this.wraith = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.wraith = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Incidents of non-compliance concerning the health and safety impacts of products and services'
                ) {
                    this.bloodhound = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.bloodhound = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Requirements for product and service information and labeling'
                ) {
                    this.gibraltar = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.gibraltar = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Incidents of non-compliance concerning product and service information and labeling'
                ) {
                    this.lifeline = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.lifeline = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Incidents of non-compliance concerning marketing communications'
                ) {
                    this.caustic = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.caustic = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Substantiated complaints concerning breaches of customer privacy and losses of customer data'
                ) {
                    this.newcastle = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.newcastle = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Non-compliance with laws and regulations in the social and economic area'
                ) {
                    this.ash = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.ash = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Process to determine material topics'
                ) {
                    this.mtptdmt = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.mtptdmt = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] == 'List of material topics'
                ) {
                    this.mtptdmtone = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                } else {
                    this.mtptdmtone = false;
                }
                if (
                    data[0]['TemplateSubMenuName'] ==
                    'Management of material topics'
                ) {
                    this.mtptdmttwo = true;
                    if (this.element != undefined) {
                        this.element.nativeElement.classList.remove('show');
                        this.scrollTop();
                    }
                    this.addFieldmtptdmttwo1();
                    if (this.lookupmtptdmttwo1.length > 1) {
                        this.deletemtptdmttwo1(
                            this.lookupmtptdmttwo1.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo2();
                    if (this.lookupmtptdmttwo2.length > 1) {
                        this.deletemtptdmttwo2(
                            this.lookupmtptdmttwo2.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo3();
                    if (this.lookupmtptdmttwo3.length > 1) {
                        this.deletemtptdmttwo3(
                            this.lookupmtptdmttwo3.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo4();
                    if (this.lookupmtptdmttwo4.length > 1) {
                        this.deletemtptdmttwo4(
                            this.lookupmtptdmttwo4.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo5();
                    if (this.lookupmtptdmttwo5.length > 1) {
                        this.deletemtptdmttwo5(
                            this.lookupmtptdmttwo5.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo6();
                    if (this.lookupmtptdmttwo6.length > 1) {
                        this.deletemtptdmttwo6(
                            this.lookupmtptdmttwo6.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo7();
                    if (this.lookupmtptdmttwo7.length > 1) {
                        this.deletemtptdmttwo7(
                            this.lookupmtptdmttwo7.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo8();
                    if (this.lookupmtptdmttwo8.length > 1) {
                        this.deletemtptdmttwo8(
                            this.lookupmtptdmttwo8.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo9();
                    if (this.lookupmtptdmttwo9.length > 1) {
                        this.deletemtptdmttwo9(
                            this.lookupmtptdmttwo9.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo10();
                    if (this.lookupmtptdmttwo10.length > 1) {
                        this.deletemtptdmttwo10(
                            this.lookupmtptdmttwo10.length - 1
                        );
                    }
                    this.addFieldmtptdmttwo11();
                    if (this.lookupmtptdmttwo11.length > 1) {
                        this.deletemtptdmttwo11(
                            this.lookupmtptdmttwo11.length - 1
                        );
                    }
                } else {
                    this.mtptdmttwo = false;
                }

                //  End

                this.templateitemdata = true;
            });
    }

    dropdownItem(Id: number) {
        this.is
            .getDistinctScreenNameByTemplateSubMenuId(Id)
            .subscribe((data) => {
                console.log(data);
                this.dropdownname = data;
                if (this.dropdownboolean == false) {
                    this.dropdownboolean = true;
                } else {
                    this.dropdownboolean = false;
                }
            });
        console.log(Id);
    }

    back() {
        // Swal.fire({
        //   title: 'Are you sure ?, Changes cant be reverted',
        //   icon: 'warning',
        //   showCancelButton: true,
        //   confirmButtonColor: '#3085d6',
        //   cancelButtonColor: '#d33',
        //   confirmButtonText: 'Yes Go back!',

        // }).then((result) => {
        //   if (result.isConfirmed) {
        //     this.router.navigate(['/selectdis',this.reportid]);

        //   }
        //   else{
        //     this.router.navigate(['/importdis',this.reportid]);
        //   }
        // })
        this.Stage = '/selectdis';
        var obj = {
            ReportId: this.reportid,
            Stage: this.Stage,
        };
        this.st.updateStage(obj).subscribe((data) => {
            this.router.navigate([`${this.Stage}/${this.reportid}`]);
        });
    }

    opendi(ReportId: any, GuidanceNumber: any, Userid: any) {
        const dialogRef = this.dialog.open(PopupComponent, {
            autoFocus: false,
            data: { ReportId, GuidanceNumber, Userid },
        });
    }

    openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {
      const dialogRef = this.dialog.open(UploadimgComponent, {
        autoFocus: false,
        data: { ReportId, GuidanceNumber, OrgId, ques },
      });
      this.gs.GetUploadEvidenceByReportId(this.reportid, ques).subscribe((data) => {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]['IsActive']);
          if (data[i]['IsActive'] == 'true') {
            this.evidenceexist = true;
            break; // Assuming only one 'IsActive' can be true
          }
        }
      });
    }
    openscope3calculators(data) {
        this.userenteredemissionfromdrop = false;
        console.log(data);

        const dialogRef = this.dialog.open(Scope3calculatorsComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf2')
                .setValue(
                    this.is.scope3specificsum.toLocaleString() + ' tCO2e'
                );
            this.finalobj['305-3Q2'] = `${
                this.enviroform.get('kgf2').value
            } tCO2e`;
            console.log(this.is.userentered);
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop = true;
            } else {
                this.userenteredemissionfromdrop = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculators1(data) {
        this.userenteredemissionfromdrop1 = false;
        const dialogRef = this.dialog.open(Scope3avgComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf3')
                .setValue(this.is.scope3avg.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q3'] = `${this.enviroform.get('kgf3').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop1 = true;
            } else {
                this.userenteredemissionfromdrop1 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorsscope3(data) {
        this.userenteredemissionfromdrop2 = false;
        const dialogRef = this.dialog.open(Scope3category3Component, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf4')
                .setValue(this.is.scope3category3.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q4'] = `${this.enviroform.get('kgf4').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop2 = true;
            } else {
                this.userenteredemissionfromdrop2 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculators2(data) {
        this.userenteredemissionfromdrop7 = false;
        const dialogRef = this.dialog.open(Scope3hotelComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf6')
                .setValue(this.is.scope3hotel.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q6'] = `${this.enviroform.get('kgf6').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop7 = true;
            } else {
                this.userenteredemissionfromdrop7 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculators8emp(data) {
        this.userenteredemissionfromdrop8 = false;
        const dialogRef = this.dialog.open(Scope3category7Component, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf7')
                .setValue(this.is.scope3category7.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q7'] = `${this.enviroform.get('kgf7').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop8 = true;
            } else {
                this.userenteredemissionfromdrop8 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorscateg813(data) {
        this.userenteredemissionfromdrop9 = false;
        const dialogRef = this.dialog.open(Scope3category813Component, {
            autoFocus: false,
            data: { downstreamValue: 'eight' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf8')
                .setValue(this.is.scope3category813.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q8'] = `${this.enviroform.get('kgf8').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop9 = true;
            } else {
                this.userenteredemissionfromdrop9 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorscateg813dos(data) {
        this.userenteredemissionfromdrop10 = false;
        const dialogRef = this.dialog.open(Scope3category813Component, {
            autoFocus: false,
            data: { downstreamValue: '13' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf12')
                .setValue(this.is.scope3category813.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q12'] = `${this.enviroform.get('kgf12').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop10 = true;
            } else {
                this.userenteredemissionfromdrop10 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorscategfranchie(data) {
        this.userenteredemissionfromdrop11 = false;
        const dialogRef = this.dialog.open(Scope3category14Component, {
            autoFocus: false,
            data: { downstreamValue: '13' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf13')
                .setValue(this.is.scope3category14.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q13'] = `${this.enviroform.get('kgf13').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop11 = true;
            } else {
                this.userenteredemissionfromdrop11 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorscateginvestm(data) {
        this.userenteredemissionfromdrop12 = false;
        const dialogRef = this.dialog.open(Scope3category15Component, {
            autoFocus: false,
            data: { downstreamValue: '13' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf14')
                .setValue(this.is.scope3category15.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q14'] = `${this.enviroform.get('kgf14').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop12 = true;
            } else {
                this.userenteredemissionfromdrop12 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculators4(data) {
        this.userenteredemissionfromdrop3 = false;
        const dialogRef = this.dialog.open(Scope3category4Component, {
            autoFocus: false,
            data: { downstreamValue: 'upstream' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf5')
                .setValue(this.is.scope3category4.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q5'] = `${this.enviroform.get('kgf5').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop3 = true;
            } else {
                this.userenteredemissionfromdrop3 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculators5(data) {
        this.userenteredemissionfromdrop6 = false;
        const dialogRef = this.dialog.open(Scope3category4Component, {
            autoFocus: false,
            data: { downstreamValue: 'downstream' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf9')
                .setValue(this.is.scope3category4.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q9'] = `${this.enviroform.get('kgf9').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop6 = true;
            } else {
                this.userenteredemissionfromdrop6 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorsolshi(data) {
        this.userenteredemissionfromdropsoldshi = false;
        const dialogRef = this.dialog.open(Scope3category10Component, {
            autoFocus: false,
            data: { downstreamValue: 'ww' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf26')
                .setValue(this.is.scope3category10.toLocaleString() + ' tCO2e');
            this.finalobj['Processing of sold'] = `${this.enviroform.get('kgf26').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdropsoldshi = true;
            } else {
                this.userenteredemissionfromdropsoldshi = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorsolshi2(data) {
        this.userenteredemissionfromdropsoldshi2 = false;
        const dialogRef = this.dialog.open(Scope3category11Component, {
            autoFocus: false,
            data: { downstreamValue: 'ww' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf10')
                .setValue(this.is.scope3category11.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q10'] = `${this.enviroform.get('kgf10').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdropsoldshi2 = true;
            } else {
                this.userenteredemissionfromdropsoldshi2 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorswaste(data) {
        this.userenteredemissionfromdrop4 = false;
        const dialogRef = this.dialog.open(Scope3category5Component, {
            autoFocus: false,
            data: { downstreamValue: 'five' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf25')
                .setValue(this.is.scope3category5.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Comment'] = `${this.enviroform.get('kgf25').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop4 = true;
            } else {
                this.userenteredemissionfromdrop4 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    openscope3calculatorswaste12(data) {
        this.userenteredemissionfromdrop5 = false;
        const dialogRef = this.dialog.open(Scope3category5Component, {
            autoFocus: false,
            data: { downstreamValue: 'twelve' },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform
                .get('kgf11')
                .setValue(this.is.scope3category5.toLocaleString() + ' tCO2e');
            this.finalobj['305-3Q11'] = `${this.enviroform.get('kgf11').value}`;
            if (this.is.userentered == 'yes') {
                this.userenteredemissionfromdrop5 = true;
            } else {
                this.userenteredemissionfromdrop5 = false;
            }
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031i').setValue(this.is.liquid);
            this.finalobj['303-3Q1i'] = `${
                this.enviroform.get('www3031i').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd1(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031ii').setValue(this.is.liquid);
            this.finalobj['303-3Q1ii'] = `${
                this.enviroform.get('www3031ii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd2(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031iii').setValue(this.is.liquid);
            this.finalobj['303-3Q1iii'] = `${
                this.enviroform.get('www3031iii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd3(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031iv').setValue(this.is.liquid);
            this.finalobj['303-3Q1iv'] = `${
                this.enviroform.get('www3031iv').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd4(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031v').setValue(this.is.liquid);
            this.finalobj['303-3Q1v'] = `${
                this.enviroform.get('www3031v').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd5(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3031vi').setValue(this.is.liquid);
            this.finalobj['303-3Q1vi'] = `${
                this.enviroform.get('www3031vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd6(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032i').setValue(this.is.liquid);
            this.finalobj['303-3Q2i'] = `${
                this.enviroform.get('www3032i').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    // initializeGrammarly() {
          
    //     document
    //     .querySelectorAll("grammarly-editor-plugin")
    //     .forEach((grammarlyEditor: any) => {
    //       grammarlyEditor.config = {
        
    //         oauthAssertionProvider: async () => {
    //           const response =await fetch("http://52.66.252.200:6088/Grammarly/grammarly",{
    //             method: "POST",
    //             mode: "cors",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({
    //               clientId: "client_Es7CWDPreL6MsVEx1EvCir",
    //               organization: "trst01"
    //             }),
    //           });
    //           console.log(response);
    //         //   this.is.grammar(response).subscribe((data)=>{
    //         //     console.log(data);
    //         //   })
    //           return await response.json();
    //         },
    //       };
    //     });
    //    }
    opendidd7(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032ii').setValue(this.is.liquid);
            this.finalobj['303-3Q2ii'] = `${
                this.enviroform.get('www3032ii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd8(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032iii').setValue(this.is.liquid);
            this.finalobj['303-3Q2iii'] = `${
                this.enviroform.get('www3032iii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd9(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032iv').setValue(this.is.liquid);
            this.finalobj['303-3Q2iv'] = `${
                this.enviroform.get('www3032iv').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd10(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032v').setValue(this.is.liquid);
            this.finalobj['303-3Q2v'] = `${
                this.enviroform.get('www3032v').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd11(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www3032vi').setValue(this.is.liquid);
            this.finalobj['303-3Q2vi'] = `${
                this.enviroform.get('www3032vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd303c1(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331i').setValue(this.is.liquid);
            this.finalobj['303-3Q3i'] = `${
                this.enviroform.get('www30331i').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c2(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331ii').setValue(this.is.liquid);
            this.finalobj['303-3Q3ii'] = `${
                this.enviroform.get('www30331ii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c3(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331iii').setValue(this.is.liquid);
            this.finalobj['303-3Q3iii'] = `${
                this.enviroform.get('www30331iii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c4(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331iv').setValue(this.is.liquid);
            this.finalobj['303-3Q3iv'] = `${
                this.enviroform.get('www30331iv').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c5(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331v').setValue(this.is.liquid);
            this.finalobj['303-3Q3v'] = `${
                this.enviroform.get('www30331v').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c6(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331vi').setValue(this.is.liquid);
            this.finalobj['303-3Q3vi'] = `${
                this.enviroform.get('www30331vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c7(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331vii').setValue(this.is.liquid);
            this.finalobj['303-3Q3vii'] = `${
                this.enviroform.get('www30331vii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c8(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331viii').setValue(this.is.liquid);
            this.finalobj['303-3Q3viii'] = `${
                this.enviroform.get('www30331viii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c9(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331ix').setValue(this.is.liquid);
            this.finalobj['303-3Q3ix'] = `${
                this.enviroform.get('www30331ix').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c10(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30331x').setValue(this.is.liquid);
            this.finalobj['303-3Q3x'] = `${
                this.enviroform.get('www30331x').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c11(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332i').setValue(this.is.liquid);
            this.finalobj['303-3Q32i'] = `${
                this.enviroform.get('www30332i').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c12(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332ii').setValue(this.is.liquid);
            this.finalobj['303-3Q32ii'] = `${
                this.enviroform.get('www30332ii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c13(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332iii').setValue(this.is.liquid);
            this.finalobj['303-3Q32iii'] = `${
                this.enviroform.get('www30332iii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c14(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332iv').setValue(this.is.liquid);
            this.finalobj['303-3Q32iv'] = `${
                this.enviroform.get('www30332iv').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c15(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332v').setValue(this.is.liquid);
            this.finalobj['303-3Q32v'] = `${
                this.enviroform.get('www30332v').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c16(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332vi').setValue(this.is.liquid);
            this.finalobj['303-3Q32vi'] = `${
                this.enviroform.get('www30332vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c17(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332vii').setValue(this.is.liquid);
            this.finalobj['303-3Q32vii'] = `${
                this.enviroform.get('www30332vii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c18(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332viii').setValue(this.is.liquid);
            this.finalobj['303-3Q32viii'] = `${
                this.enviroform.get('www30332viii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c19(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332ix').setValue(this.is.liquid);
            this.finalobj['303-3Q32ix'] = `${
                this.enviroform.get('www30332ix').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd303c20(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('www30332x').setValue(this.is.liquid);
            this.finalobj['303-3Q32x'] = `${
                this.enviroform.get('www30332x').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd3035a(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wcc1').setValue(this.is.liquid);
            this.finalobj['303-5Q1'] = `${this.enviroform.get('wcc1').value}`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp1(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1i').setValue(this.is.liquid);
            this.finalobj['303-4Q1i'] = `${this.enviroform.get('wdd1i').value}`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp2(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1ii').setValue(this.is.liquid);
            this.finalobj['303-4Q1ii'] = `${
                this.enviroform.get('wdd1ii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp3(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1iii').setValue(this.is.liquid);
            this.finalobj['303-4Q1iii'] = `${
                this.enviroform.get('wdd1iii').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp4(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1iv').setValue(this.is.liquid);
            this.finalobj['303-4Q1iv'] = `${
                this.enviroform.get('wdd1iv').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp5(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1v').setValue(this.is.liquid);
            this.finalobj['303-4Q1v'] = `${this.enviroform.get('wdd1v').value}`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp6(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1vi').setValue(this.is.liquid);
            this.finalobj['303-4Q1vi'] = `${
                this.enviroform.get('wdd1vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    opendidd3035b(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wcc2').setValue(this.is.liquid);
            this.finalobj['303-5Q2'] = `${this.enviroform.get('wcc2').value}`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendidd3035c(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wcc3').setValue(this.is.liquid);
            this.finalobj['303-5Q3'] = `${this.enviroform.get('wcc3').value}`;
            if (result) {
                console.log(result);
            }
        });
    }

    openghemiicalc(data) {
        const dialogRef = this.dialog.open(GhemissionsComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(this.is.metricsCO2e);
            this.enviroform
                .get('Dghgemi1')
                .setValue(this.is.metricsCO2e.toLocaleString());
            this.finalobj['305-1Q1'] = `${
                this.enviroform.get('Dghgemi1').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    openghemiicalc2(data) {
        const dialogRef = this.dialog.open(GhemissionsComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(this.is.metricsCO2e);
            this.enviroform
                .get('Dghgemi3')
                .setValue(this.is.metricsCO2e.toLocaleString());
            this.finalobj['305-1Q3'] = `${
                this.enviroform.get('Dghgemi3').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    openelectriccalculator(data) {
        const dialogRef = this.dialog.open(ElectriccalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(this.is.electricsum);
            this.enviroform
                .get('Dgh1')
                .setValue(this.is.electricsum.toLocaleString());
            this.finalobj['305-2Q1'] = `${this.enviroform.get('Dgh1').value}`;
            if (result) {
                console.log(result);
            }
        });
    }
    openrenenonrenewcal(data) {
        const dialogRef = this.dialog.open(Scope2renewComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            console.log(this.is.scope2marketbased);
            this.enviroform
                .get('Dgh2')
                .setValue(this.is.scope2marketbased.toLocaleString());
            this.finalobj['305-2Q2'] = `${this.enviroform.get('Dgh2').value}`;
            if (result) {
                console.log(result);
            }
        });
    }

    display(Id: any) {
        this.is.getTemplateSubMenuItemDetailsById(Id).subscribe((data) => {
            console.log(data);
            this.templateitemdata = data;
            this.displaydata = true;
        });
    }
    enabledrop(data) {
        console.log(data);
        if (data == 'Yes') {
            this.yesthen = true;
        } else {
            this.yesthen = false;
        }
    }
    enabledropducks(value) {
        console.log(value);
        if (value == 'Yes') {
            this.ducks = true;
        } else {
            this.ducks = false;
        }
        this.finalobj['102-14Report topics'] = value;
    }
    Benefits4012(value) {
        console.log(value);
        if (value == 'Yes') {
            this.benifit4012 = true;
        } else {
            this.benifit4012 = false;
        }
        this.finalobj['401-2b If yes topics'] = value;
    }

    onSave() {
        if (this.lookup2in7.length > 0) {
            this.finalobj['102-7A-Table'] = JSON.stringify(this.lookup2in7);
        }
        this.finalobj['102-7B-Table1'] = JSON.stringify(this.lookup2in7bi);
        this.finalobj['102-7B-Table2'] = JSON.stringify(this.lookup2in7bii);
        this.finalobj['102-7B-Table3'] = JSON.stringify(this.lookup2in7biii);
        this.finalobj['102-7B-Table4'] = JSON.stringify(this.lookup2in7biv);
        this.finalobj['102-7B-Table5'] = JSON.stringify(this.lookup2in7bv);
        this.finalobj['mtptdmttwotable1'] = JSON.stringify(
            this.lookupmtptdmttwo1
        );
        this.finalobj['304-3a-AddTable'] = JSON.stringify(this.lookupdtl304a);
        this.finalobj['mtptdmttwotable2'] = JSON.stringify(
            this.lookupmtptdmttwo2
        );

        this.finalobj['201-3question1'] = JSON.stringify(this.lookup3);

        this.finalobj['201-2question-v'] = JSON.stringify(this.lookupdtleco);

        this.finalobj['207-4BAddTable'] = JSON.stringify(this.lookupdtl207b);

        this.finalobj['mtptdmttwotable3'] = JSON.stringify(
            this.lookupmtptdmttwo3
        );

        this.finalobj['mtptdmttwotable4'] = JSON.stringify(
            this.lookupmtptdmttwo4
        );
        this.finalobj['102-27b11AddTable'] = JSON.stringify(this.lookupdtl27bi);

        this.finalobj['102-27b22AddTable'] = JSON.stringify(
            this.lookupdtl27bii
        );
        this.finalobj['mtptdmttwotable5'] = JSON.stringify(
            this.lookupmtptdmttwo5
        );

        this.finalobj['mtptdmttwotable6'] = JSON.stringify(
            this.lookupmtptdmttwo6
        );

        this.finalobj['mtptdmttwotable7'] = JSON.stringify(
            this.lookupmtptdmttwo7
        );

        this.finalobj['mtptdmttwotable8'] = JSON.stringify(
            this.lookupmtptdmttwo8
        );

        this.finalobj['mtptdmttwotable9'] = JSON.stringify(
            this.lookupmtptdmttwo9
        );

        this.finalobj['mtptdmttwotable10'] = JSON.stringify(
            this.lookupmtptdmttwo10
        );

        this.finalobj['mtptdmttwotable11'] = JSON.stringify(
            this.lookupmtptdmttwo11
        );

        if (this.lookupdtl.length > 0) {
            this.finalobj['102-2AddTable'] = JSON.stringify(this.lookupdtl);
        }
        if (this.lookupdtl2x.length > 0) {
            this.finalobj['102-2AddTable2x'] = JSON.stringify(this.lookupdtl2x);
        }
        if (this.lookupdtl1.length > 0) {
            this.finalobj['102-6T1AddTable'] = JSON.stringify(this.lookupdtl1);
        }
        if (this.lookupdtl2.length > 0) {
            this.finalobj['102-6AddTable'] = JSON.stringify(this.lookupdtl2);
        }

        if (this.lookupdtl3.length > 0) {
            this.finalobj['202-1question1'] = JSON.stringify(this.lookupdtl3);
        }

        if (this.lookupdtl4.length > 0) {
            this.finalobj['202-2question1'] = JSON.stringify(this.lookupdtl4);
        }

        if (this.lookupdtl5.length > 0) {
            this.finalobj['204-1question1'] = JSON.stringify(this.lookupdtl5);
        }

        if (this.lookupdtl50.length > 0) {
            this.finalobj['404-1Q3'] = JSON.stringify(this.lookupdtl50);
        }

        if (this.lookupdtl51.length > 0) {
            this.finalobj['404-3Q3'] = JSON.stringify(this.lookupdtl51);
        }
        if (this.lookupdtl52.length > 0) {
            this.finalobj['405-1Q6'] = JSON.stringify(this.lookupdtl52);
        }
        if (this.lookupdtl52puta.length > 0) {
            this.finalobj['405-1Q12'] = JSON.stringify(this.lookupdtl52puta);
        }

        if (this.lookupdtl53.length > 0) {
            this.finalobj['405-2Q1'] = JSON.stringify(this.lookupdtl53);
        }

        if (this.lookupdtl54.length > 0) {
            this.finalobj['102-23q5'] = JSON.stringify(this.lookupdtl54);
        }
        this.finalobj['413-1AddTable'] = JSON.stringify(this.lookup413);
        this.finalobj['413-2AddTable'] = JSON.stringify(this.lookup4132);
        this.finalobj['201-1question2'] = JSON.stringify(this.lookup);

        this.finalobj['201-1question3'] = JSON.stringify(this.lookup1);

        this.finalobj['201-1question4'] = JSON.stringify(this.lookup2);

        this.finalobj['201-3question1'] = JSON.stringify(this.lookup3);

        this.finalobj['201-3question2'] = JSON.stringify(this.lookup4);

        this.finalobj['201-3question3'] = JSON.stringify(this.lookup5);

        this.finalobj['201-3question4'] = JSON.stringify(this.lookup6);

        this.finalobj['201-3question5'] = JSON.stringify(this.lookup7);

        this.finalobj['201-3question7'] = JSON.stringify(this.lookup8);

        this.finalobj['201-4question1'] = JSON.stringify(this.lookup9);

        this.finalobj['201-4question2'] = JSON.stringify(this.lookup10);

        this.finalobj['201-4question3'] = JSON.stringify(this.lookup11);

        this.finalobj['201-4question4'] = JSON.stringify(this.lookup12);

        this.finalobj['201-4question5'] = JSON.stringify(this.lookup13);

        this.finalobj['201-4question6'] = JSON.stringify(this.lookup14);

        this.finalobj['201-4question7'] = JSON.stringify(this.lookup15);

        this.finalobj['201-4question8'] = JSON.stringify(this.lookup16);

        this.finalobj['201-4question10'] = JSON.stringify(this.lookup17);

        this.finalobj['201-4question11'] = JSON.stringify(this.lookup18);

        this.finalobj['201-4question12'] = JSON.stringify(this.lookup19);

        this.finalobj['201-4question13'] = JSON.stringify(this.lookup20);

        this.finalobj['201-4question14'] = JSON.stringify(this.lookup21);

        this.finalobj['201-4question15'] = JSON.stringify(this.lookup22);

        this.finalobj['201-4question16'] = JSON.stringify(this.lookup23);

        this.finalobj['201-4question17'] = JSON.stringify(this.lookup24);

        this.finalobj['203-2question1'] = JSON.stringify(this.lookup25);

        this.finalobj['203-2question2'] = JSON.stringify(this.lookup26);

        this.finalobj['205-2question1'] = JSON.stringify(this.lookupdtl6);

        this.finalobj['205-2question2'] = JSON.stringify(this.lookupdtl7);

        this.finalobj['205-2question3'] = JSON.stringify(this.lookupdtl8);

        this.finalobj['205-2question5'] = JSON.stringify(this.lookupdtl9);

        this.finalobj['205-2question6'] = JSON.stringify(this.lookupdtl10);

        this.finalobj['205-3question4'] = JSON.stringify(this.lookupdtl11);

        this.finalobj['206-1question2'] = JSON.stringify(this.lookup30);

        this.finalobj['207-1question2'] = JSON.stringify(this.lookupdtl12);

        this.finalobj['301-1AddTable'] = JSON.stringify(this.lookupdtl41);
        this.finalobj['301-1AddTableii'] = JSON.stringify(this.lookupdtl41ii);

        this.finalobj['302-1AddTable2'] = JSON.stringify(this.lookupdtl44a);

        this.finalobj['301-2AddTable'] = JSON.stringify(this.lookupdtl42);

        this.finalobj['301-3AddTable'] = JSON.stringify(this.lookupdtl43);

        this.finalobj['302-1AddTable'] = JSON.stringify(this.lookupdtl44);

        this.finalobj['304-1AddTable'] = JSON.stringify(this.lookupdtl3045);
        this.finalobj['306-4Qaddiii'] = JSON.stringify(this.lookupdtl306iii);
        this.finalobj['306-4Qaddii'] = JSON.stringify(this.lookupdtl306ii);
        this.finalobj['401-1AddTable1'] = JSON.stringify(
            this.lookupdtlturnover1
        );
        this.finalobj['415-1Q1'] = JSON.stringify(this.lookupdtl102);
        this.finalobj['401-1AddTable2'] = JSON.stringify(
            this.lookupdtlturnover2
        );

        this.crs.getReportById(this.reportid).subscribe((data) => {
            const reportdata = data[0];
            const selectedboxes: any = {
                Id: reportdata.Id,
                ReportName: reportdata.ReportName,
                InitialDraftReport: this.finalobj,
                StartDate: reportdata.StartDate,
                EndDate: reportdata.EndDate,
                IsActive: reportdata.IsActive,
                UpdatedByUserId: reportdata.UpdatedByUserId,
                UpdatedDate: reportdata.UpdatedDate,
            };

            this.ss
                .updatereportstatus({ ReportId: this.reportid })
                .subscribe((data) => {
                    this.cs.createreport(selectedboxes).subscribe((data) => {
                        console.log(data);
                    });
                });
        });
    }
    scrollTop() {
        //   this.scroll.nativeElement.scrollTop=0;

        document.getElementById('orange').scrollIntoView();

        //window.scroll(0, 0)
    }
    SaveandNext() {
        this.onSave();
        console.log(this.lookupdtl);
        console.log(this.lookupdtl1);
        console.log(this.lookupdtl2);
        this.Stage = '/imagereport';
        var obj = {
            ReportId: this.reportid,
            Stage: this.Stage,
        };
        this.st.updateStage(obj).subscribe((data) => {
            this.router.navigate([`${this.Stage}/${this.reportid}`]);
        });
    }
    editimg() {
        this.showimg = true;
    }
    fileToUpload: any;
    handleFileInput(file: FileList) {
        this.fileToUpload = file.item(0);
        let reader = new FileReader();
        reader.onload = (event: any) => {
            // this.imageUrl = event.target.result;
            const Url = event.target.result;
            const Img = event.target.result[Url.length - 1];
            const Img1 = event.target.result[Url.length - 2];
            if (Img === '=' && Img1 === '=') {
                this.imgSize = Url.length * (3 / 4) - 2;
                console.log(this.imgSize);
            } else {
                this.imgSize = Url.length * (3 / 4) - 1;
                console.log(this.imgSize);
            }

            if (this.imgSize < 256000) {
                this.imageUrl = event.target.result;
            } else {
                this.imageUrl = null;

                // console.log(this.imageUrl);
            }
            //  console.log(this.imageUrl)
        };
        reader.readAsDataURL(this.fileToUpload);
    }
    // Textarea events:

    Text1(value) {
        this.finalobj['102-1comment'] = value.target.value;
    }
    // Text2(value)
    // {
    //   this.finalobj["102-2comment"] = value.target.value;
    // }
    Text3(value) {
        this.finalobj['102-3comment'] = value.target.value;
    }
    Text4(value) {
        this.finalobj['102-4comment'] = value.target.value;
    }
    Text5(value) {
        this.finalobj['102-5comment'] = value.target.value;
    }
    Text6(value) {
        this.finalobj['102-6comment'] = value.target.value;
    }
    Text7(value) {
        this.finalobj['102-7comment'] = value.target.value;
    }
    Text8(value) {
        this.finalobj['102-9comment'] = value.target.value;
    }
    Text9(value) {
        this.finalobj['102-9comment'] = value.target.value;
    }
    Text10(value) {
        this.finalobj['102-10comment'] = value.target.value;
    }
    Text11(value) {
        this.finalobj['102-11comment'] = value.target.value;
    }
    Text12(value) {
        this.finalobj['102-12comment'] = value.target.value;
    }

    Text13(value) {
        this.finalobj['102-13comment'] = value.target.value;
    }
    Text14(value) {
        this.finalobj['102-14comment'] = value.target.value;
    }
    Text16(value) {
        this.finalobj['102-16comment'] = value.target.value;
    }
    Text17(value) {
        this.finalobj['102-17comment'] = value.target.value;
    }
    Text18(value) {
        this.finalobj['102-18comment'] = value.target.value;
    }
    Text19(value) {
        this.finalobj['102-19comment'] = value.target.value;
    }
    Text20(value) {
        this.finalobj['102-20comment'] = value.target.value;
    }
    Text21(value) {
        this.finalobj['102-21comment'] = value.target.value;
    }
    Text22(value) {
        this.finalobj['102-22comment'] = value.target.value;
    }
    Text23(value) {
        this.finalobj['102-23comment'] = value.target.value;
    }
    Text24(value) {
        this.finalobj['102-24comment'] = value.target.value;
    }
    Text25(value) {
        this.finalobj['102-25comment'] = value.target.value;
    }
    Text26(value) {
        this.finalobj['102-26comment'] = value.target.value;
    }
    Text27(value) {
        this.finalobj['102-27comment'] = value.target.value;
    }
    Text28(value) {
        this.finalobj['102-28comment'] = value.target.value;
    }
    Text29(value) {
        this.finalobj['102-29comment'] = value.target.value;
    }

    Text30(value) {
        this.finalobj['102-30comment'] = value.target.value;
    }
    //start genreal disclor
    nameoforg(value) {
        this.finalobj['Name of the Organization'] = value.target.value;
    }
    ownershipandlegalfor(value) {
        this.finalobj['Nature of ownership and Legal Form'] = value.value;
    }
    countries(event) {
        console.log(event.target.value);
        this.inputofcountries = event.target.value;
        this.finalobj['Number of countries where the organization operates'] =
            this.inputofcountries;
    }
    location(value) {
        this.finalobj['Location of the Organization Headquarters'] =
            value.value;
        console.log(value.value);
    }
    relevantreport(value) {
        console.log(value);
        console.log(value.value);
        this.arrayofcounts = this.selectedOptions.length;
        console.log(value.value.length);

        this.finalobj[
            'Names of countries where it has significant operations and/or that are relevant to the topics covered in the report'
        ] = this.selectedOptions;
    }
    relevantreport1(value) {
      console.log(value);
      console.log(value.value);
      this.arrayofcounts2 = this.selectedOptions2.length;
      console.log(value.value.length);

      this.finalobj[
          '305-3Q16'
      ] = this.selectedOptions2;
  }
    Attttt1(value) {
        console.log(value);
        console.log(value.value);
        this.arrayofcounts1 = this.selectedOptions1.length;
        console.log(value.value.length);
        this.finalobj['207-4question1'] = this.selectedOptions1;
    }
    selectedOptions: string[] = [];
    selectedOptions1: string[] = [];
    selectedOptions2: string[] = [];

    selectionChange(event: MatOptionSelectionChange) {
        const selectedOption = event.source.value;
        const index = this.selectedOptions.indexOf(selectedOption);
        if (event.source.selected && index < 0) {
            this.selectedOptions.push(selectedOption);
            console.log(this.selectedOptions);
        } else if (!event.source.selected && index >= 0) {
            this.selectedOptions.splice(index, 1);
            console.log(this.selectedOptions);
        }
    }
    selectionChange1(event: MatOptionSelectionChange) {
        const selectedOptionvalueas = event.source.value;
        const index = this.selectedOptions1.indexOf(selectedOptionvalueas);
        if (event.source.selected && index < 0) {
            this.selectedOptions1.push(selectedOptionvalueas);
            console.log(this.selectedOptions1);
        } else if (!event.source.selected && index >= 0) {
            this.selectedOptions1.splice(index, 1);
            console.log(this.selectedOptions1);
        }
    }
    selectionChange2(event: MatOptionSelectionChange) {
      const selectedOptionvalueas = event.source.value;
      const index = this.selectedOptions2.indexOf(selectedOptionvalueas);
      if (event.source.selected && index < 0) {
          this.selectedOptions2.push(selectedOptionvalueas);
          console.log(this.selectedOptions2);
      } else if (!event.source.selected && index >= 0) {
          this.selectedOptions2.splice(index, 1);
          console.log(this.selectedOptions2);
      }
  }

    relevantreportiv(value) {
        console.log(value.value);
        if (this.finalobj['relevantreportiv'] != '') {
            this.finalobj['relevantreportiv'] = value.value;
        }
    }

    entitytype(value) {
        this.finalobj['102-2Entities'] = value.target.value;
    }
    changeSubject(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Subject' + i.toString())
            )).value
        );
        this.lookupdtl[i]['Subject'] = (<HTMLInputElement>(
            document.getElementById('Subject' + i.toString())
        )).value;
    }
    storeschans: any;
    reltypeothers: any;
    OnChangeType(i, value) {
        var empty = '';
        this.onInputChange(empty);
        console.log(i);
        // this.storeschans=i;
        console.log(value);
        this.reltypeothers = value.value;
        console.log(this.reltypeothers);
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl[i]['Type'] = value.value;
        }
    }
    changeAssessments(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Assessments' + i.toString())
            )).value
        );
        this.lookupdtl[i]['Assessments'] = (<HTMLInputElement>(
            document.getElementById('Assessments' + i.toString())
        )).value;
    }
    OnChangeLabs(i, value) {
        //  console.log((<HTMLInputElement>document.getElementById("Labs" + i.toString())).value)
        //  this.lookupdtl[i]['Labs'] = (<HTMLInputElement>document.getElementById("Labs" + i.toString())).value
        var empty = '';
        this.onInputChangeindustry(empty);
        this.lookupdtl[i]['Labs'] = value.value;
    }
    OnChangeProjects(i, value) {
        //  console.log((<HTMLInputElement>document.getElementById("Projects" + i.toString())).value)
        //  this.lookupdtl[i]['Projects'] = (<HTMLInputElement>document.getElementById("Projects" + i.toString())).value

        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl[i]['Projects'] = value.value;
    }
    deleteRecord(index) {
        this.lookupdtl.splice(index, 1);
    }
    changeSubject2x(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Subject2x' + i.toString())
            )).value
        );
        this.lookupdtl2x[i]['Subject2x'] = (<HTMLInputElement>(
            document.getElementById('Subject2x' + i.toString())
        )).value;
    }
    storeschan: any;
    reltypeother: any;
    icounter: any;
    OnchangeType2x(i, value) {
        //  console.log((<HTMLInputElement>document.getElementById("Type2x" + i.toString())).value)
        //  this.lookupdtl2x[i]['Type2x'] = (<HTMLInputElement>document.getElementById("Type2x" + i.toString())).value
        var empty = '';

        this.onInputChange(empty);
        console.log(i);
        this.storeschan = i;
        console.log(value);
        this.reltypeother = value.value;
        console.log(this.reltypeother);
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl2x[i]['Type2x'] = value.value;
            console.log(this.lookupdtl2x);
        }
    }
    inputfordrops: any;
    inputfordrop1: any;
    inputfordrop2: any;
    inputfordrop3: any;
    inputfordrop4: any;
    inputfordrop5: any;
    inputfordrop6: any;
    inputfordrop7: any;
    inputfordrop8: any;
    inputfordrop9: any;
    inputfordrop10: any;
    inputfordrop: any;
    inputforother10(i, value) {
        this.inputfordrop10 = (<HTMLInputElement>(
            document.getElementById('Employee2' + i.toString())
        )).value;
        console.log(this.inputfordrop10);
        this.lookupdtl53[i]['Employee2'] = this.inputfordrop10;
        console.log(this.lookupdtl53);
    }
    inputforother9(i, value) {
        this.inputfordrop9 = (<HTMLInputElement>(
            document.getElementById('Diversity' + i.toString())
        )).value;
        console.log(this.inputfordrop9);
        this.lookupdtl52[i]['Diversity'] = this.inputfordrop9;
        console.log(this.lookupdtl52);
    }

    inputforother8(i, value) {
        this.inputfordrop8 = (<HTMLInputElement>(
            document.getElementById('Employee1' + i.toString())
        )).value;
        console.log(this.inputfordrop8);
        this.lookupdtl51[i]['Employee1'] = this.inputfordrop8;
        console.log(this.lookupdtl50);
    }
    inputforother7(i, value) {
        this.inputfordrop7 = (<HTMLInputElement>(
            document.getElementById('Employee' + i.toString())
        )).value;
        console.log(this.inputfordrop7);
        this.lookupdtl50[i]['Employee'] = this.inputfordrop7;
        console.log(this.lookupdtl50);
    }
    inputforother6(i, value) {
        this.inputfordrop6 = (<HTMLInputElement>(
            document.getElementById('Owlceiaadp1' + i.toString())
        )).value;
        console.log(this.inputfordrop6);
        this.lookup413[i]['Owlceiaadp1'] = this.inputfordrop6;
        console.log(this.lookup413);
    }
    inputforother5(i, value) {
        this.inputfordrop5 = (<HTMLInputElement>(
            document.getElementById('FuelType1' + i.toString())
        )).value;
        console.log(this.inputfordrop5);
        this.lookupdtl44a[i]['FuelType1'] = this.inputfordrop5;
        console.log(this.lookupdtl44a);
    }
    inputforother4(i, value) {
        this.inputfordrop4 = (<HTMLInputElement>(
            document.getElementById('FuelType' + i.toString())
        )).value;
        console.log(this.inputfordrop4);
        this.lookupdtl44[i]['FuelType'] = this.inputfordrop4;
        console.log(this.lookupdtl44);
    }
    inputforother3(i, value) {
        this.inputfordrop3 = (<HTMLInputElement>(
            document.getElementById('position10' + i.toString())
        )).value;
        console.log(this.inputfordrop3);
        this.lookupdtl12[i]['position10'] = this.inputfordrop3;
        console.log(this.lookupdtl12);
    }
    inputforother2(i, value) {
        this.inputfordrop2 = (<HTMLInputElement>(
            document.getElementById('relatab2' + i.toString())
        )).value;
        console.log(this.inputfordrop2);
        this.lookupdtl2[i]['relatab2'] = this.inputfordrop2;
        console.log(this.lookupdtl2);
    }
    inputforother1(i, value) {
        this.inputfordrop1 = (<HTMLInputElement>(
            document.getElementById('Relationship' + i.toString())
        )).value;
        console.log(this.inputfordrop1);
        this.lookupdtl1[i]['Relationship'] = this.inputfordrop1;
        console.log(this.lookupdtl1);
    }
    inputforothers(i, value) {
        this.inputfordrops = (<HTMLInputElement>(
            document.getElementById('Type' + i.toString())
        )).value;
        console.log(this.inputfordrops);
        this.lookupdtl[i]['Type'] = this.inputfordrops;
        console.log(this.lookupdtl);
    }
    inputforother(i, value) {
        this.inputfordrop = (<HTMLInputElement>(
            document.getElementById('Type2x' + i.toString())
        )).value;
        console.log(this.inputfordrop);
        this.lookupdtl2x[i]['Type2x'] = this.inputfordrop;
        console.log(this.lookupdtl2x);
    }
    changeAssessments2x(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Assessments2x' + i.toString())
            )).value
        );
        this.lookupdtl2x[i]['Assessments2x'] = (<HTMLInputElement>(
            document.getElementById('Assessments2x' + i.toString())
        )).value;
    }
    OnChangeLabs2x(i, value) {
        //  console.log((<HTMLInputElement>document.getElementById("Labs2x" + i.toString())).value)
        //  this.lookupdtl2x[i]['Labs2x'] = (<HTMLInputElement>document.getElementById("Labs2x" + i.toString())).value
        var empty = '';
        this.onInputChangeindustry(empty);
        this.lookupdtl2x[i]['Labs2x'] = value.value;
    }
    OnChangeProjects2x(i, value) {
        //  console.log((<HTMLInputElement>document.getElementById("Projects2x" + i.toString())).value)
        //  this.lookupdtl2x[i]['Projects2x'] = (<HTMLInputElement>document.getElementById("Projects2x" + i.toString())).value
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl2x[i]['Projects2x'] = value.value;
    }

    deleteRecord2x(index) {
        this.lookupdtl2x.splice(index, 1);
    }
    deleteQ1026(index) {
        this.lookupdtl2.splice(index, 1);
    }

    changeCustomertab(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Customertab' + i.toString())
            )).value
        );
        this.lookupdtl2[i]['Customertab'] = (<HTMLInputElement>(
            document.getElementById('Customertab' + i.toString())
        )).value;
    }
    Onchangerelatab2(i, value) {
        var empty = '';

        this.onInputChange(empty);
        console.log(i);
        // this.storeschan=i;
        // console.log(value)
        this.reltypeother2 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl2[i]['relatab2'] = value.value;
        }
    }
    OnChangesupp2tab(i, value) {
        var empty = '';
        this.onInputChangeindustry(empty);
        this.lookupdtl2[i]['supp2tab'] = value.value;
    }
    Onchangegeotab2(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl2[i]['geotab2'] = value.value;
    }

    changestatab2(i) {
        const startdateInput = <HTMLInputElement>(
            document.getElementById('statab2' + i.toString())
        );
        const startdateValue = startdateInput.value;
        this.lookupdtl2[i]['statab2'] = startdateValue;
        const enddateInput = <HTMLInputElement>(
            document.getElementById('endtab2' + i.toString())
        );
        enddateInput.min = startdateValue;
    }

    changeendtab2(i) {
        const enddateInput = <HTMLInputElement>(
            document.getElementById('endtab2' + i.toString())
        );
        const enddateValue = enddateInput.value;
        const startdateInput = <HTMLInputElement>(
            document.getElementById('statab2' + i.toString())
        );
        const startdateValue = startdateInput.value;

        if (enddateValue <= startdateValue) {
            enddateInput.value = startdateValue;
            alert('End date cannot be less than start date');
            this.lookupdtl2[i]['endtab2'] = startdateValue;
        } else {
            this.lookupdtl2[i]['endtab2'] = enddateValue;
        }
    }

    changeexpetab2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('expetab2' + i.toString())
            )).value
        );
        this.lookupdtl2[i]['expetab2'] = (<HTMLInputElement>(
            document.getElementById('expetab2' + i.toString())
        )).value;
    }
    OnChangecountry100(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl102[i]['country100'] = value.value;
    }
    changebeneficiary(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('beneficiary' + i.toString())
            )).value
        );
        this.lookupdtl102[i]['beneficiary'] = (<HTMLInputElement>(
            document.getElementById('beneficiary' + i.toString())
        )).value;
    }
    changeMonetory(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Monetory' + i.toString())
            )).value
        );
        this.lookupdtl102[i]['Monetory'] = (<HTMLInputElement>(
            document.getElementById('Monetory' + i.toString())
        )).value;
    }
    OnChangecurrency100(i, value) {
        this.lookupdtl102[i]['currency100'] = value.value;
    }
    OnChangeSupPrim(i, value) {
        //this.lookupdtl1[i]['SupPrim'] = (<HTMLInputElement>document.getElementById("SupPrim" + i.toString())).value
        var empty = '';
        this.onInputChangeindustry(empty);
        this.lookupdtl1[i]['SupPrim'] = value.value;
    }
    OnChangeGeo(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl1[i]['Geo'] = value.value;
    }
    OnChangeoperation(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl3[i]['operation'] = value.value;
    }

    reltypeother9: any;
    OnChangeDiversity(i, value) {
        this.reltypeother9 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl52[i]['Diversity'] = value.value;
        }
    }
    OnChangeDiversityputa(i, value) {
        this.lookupdtl52puta[i]['Diversity'] = value.value;
    }
    changeosol5(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('osol5' + i.toString()))
                .value
        );
        this.lookupdtl3045[i]['osol5'] = (<HTMLInputElement>(
            document.getElementById('osol5' + i.toString())
        )).value;
    }
    OnChangeosol5countrylist(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl3045[i]['osol5countrylist'] = value.value;
    }
    Squaremeter(i, value) {
        this.lookupdtl3045[i]['Squaremeter'] = value.value;
    }
    ChangeIndividuals(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Individuals' + i.toString())
            )).value
        );
        this.lookupdtl52[i]['Individuals'] = (<HTMLInputElement>(
            document.getElementById('Individuals' + i.toString())
        )).value;
    }
    ChangeIndividualsputa(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Individualsputa' + i.toString())
            )).value
        );
        this.lookupdtl52puta[i]['Individualsputa'] = (<HTMLInputElement>(
            document.getElementById('Individualsputa' + i.toString())
        )).value;
    }

    reltypeother10: any;
    OnChangeEmployee2(i, value) {
        this.reltypeother10 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl53[i]['Employee2'] = value.value;
        }
    }
    Location50(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Location50' + i.toString())
            )).value
        );
        this.lookupdtl53[i]['Location50'] = (<HTMLInputElement>(
            document.getElementById('Location50' + i.toString())
        )).value;
    }
    Landmark1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Landmark1' + i.toString())
            )).value
        );
        this.lookupdtl53[i]['Landmark1'] = (<HTMLInputElement>(
            document.getElementById('Landmark1' + i.toString())
        )).value;
    }
    State1(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('State1' + i.toString()))
                .value
        );
        this.lookupdtl53[i]['State1'] = (<HTMLInputElement>(
            document.getElementById('State1' + i.toString())
        )).value;
    }

    OnChangeCountry1(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl53[i]['Country1'] = value.value;
    }

    Code1(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('Code1' + i.toString()))
                .value
        );
        this.lookupdtl53[i]['Code1'] = (<HTMLInputElement>(
            document.getElementById('Code1' + i.toString())
        )).value;
    }

    Ratio(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('Ratio' + i.toString()))
                .value
        );
        this.lookupdtl53[i]['Ratio'] = (<HTMLInputElement>(
            document.getElementById('Ratio' + i.toString())
        )).value;
    }
    Location4132(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Location4132' + i.toString())
            )).value
        );
        this.lookup4132[i]['Location4132'] = (<HTMLInputElement>(
            document.getElementById('Location4132' + i.toString())
        )).value;
    }
    Landmark4132(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Landmark4132' + i.toString())
            )).value
        );
        this.lookup4132[i]['Landmark4132'] = (<HTMLInputElement>(
            document.getElementById('Landmark4132' + i.toString())
        )).value;
    }
    State4132(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('State4132' + i.toString())
            )).value
        );
        this.lookup4132[i]['State4132'] = (<HTMLInputElement>(
            document.getElementById('State4132' + i.toString())
        )).value;
    }

    OnChangeCountry4132(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookup4132[i]['Country4132'] = value.value;
    }

    Code4132(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Code4132' + i.toString())
            )).value
        );
        this.lookup4132[i]['Code4132'] = (<HTMLInputElement>(
            document.getElementById('Code4132' + i.toString())
        )).value;
    }
    olocalcomm6(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('olocalcomm6' + i.toString())
            )).value
        );
        this.lookup4132[i]['olocalcomm6'] = (<HTMLInputElement>(
            document.getElementById('olocalcomm6' + i.toString())
        )).value;
    }

    deleteQ4132(index) {
        this.lookup4132.splice(index, 1);
    }

    OnChangecountry50(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl54[i]['country50'] = value.value;
    }

    onOptionSelectedcountry50(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl54[i]['country50'] = this.selectedName;
    }

    onOptionSelectedCountry1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl53[i]['Country1'] = this.selectedName;
    }
    onOptionSelectedCountry4132(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup4132[i]['Country4132'] = this.selectedName;
    }
    onOptionSelectedgenderLocationlist1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7bi[i]['genderLocationlist1'] = this.selectedName;
    }
    onOptionSelectedgenderLocationlist2(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7bii[i]['genderLocationlist2'] = this.selectedName;
    }
    onOptionSelectedgenderLocationlist3(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7biii[i]['genderLocationlist3'] = this.selectedName;
    }
    onOptionSelectedgenderLocationlist4(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7biv[i]['genderLocationlist4'] = this.selectedName;
    }
    onOptionSelectedgenderLocationlist5(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7bv[i]['genderLocationlist5'] = this.selectedName;
    }
    filteredList11:any
    onInputChangecash(value: string) {
        this.filteredList11 = this.cassssh.filter(
          (item) =>
              item.Name.toLowerCase().indexOf(value.toLowerCase()) !==
              -1
      );
      console.log(value);
      console.log(this.filteredList11.Name);
      }
      onOptionSelectedcash(event: any) {
        console.log(event)
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        // this.finalobj['102-27Q5'] = value.value;
        
    }
    Number45(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number45' + i.toString())
            )).value
        );
        this.lookupdtl54[i]['Number45'] = (<HTMLInputElement>(
            document.getElementById('Number45' + i.toString())
        )).value;
    }
    percentage45(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('percentage45' + i.toString())
            )).value
        );
        this.lookupdtl54[i]['percentage45'] = (<HTMLInputElement>(
            document.getElementById('percentage45' + i.toString())
        )).value;
    }
    OnChangeview45(i, value) {
        this.lookupdtl54[i]['view45'] = value.value;
        this.isdisabledview45 = true;
    }

    OnChangeoperation1(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl4[i]['operation1'] = value.value;
    }

    changepercentage1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('percentage1' + i.toString())
            )).value
        );
        this.lookupdtl4[i]['percentage1'] = (<HTMLInputElement>(
            document.getElementById('percentage1' + i.toString())
        )).value;
    }

    OnChangeGeo1(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl5[i]['Geo1'] = value.value;
    }

    changepercentage2(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage2' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl5[i]['percentage2'] = percentageValue;
    }
    OnChangeGeo2(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl6[i]['Geo2'] = value.value;
    }
    validateInput(event: KeyboardEvent) {
        const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const inputElement = event.target as HTMLInputElement;
        const inputValue = inputElement.value;
        const key = event.key;
    
        // Allow some special keys like Backspace, Delete, and Arrow keys
        if (event.key === 'Backspace' || event.key === 'Delete' || event.key.startsWith('Arrow')) {
          return;
        }
    
        // Prevent input if the pressed key is not a number or the input already contains a '+'
        if (!allowedKeys.includes(key) || inputValue.includes('+')) {
          event.preventDefault();
        }
      }
    changeNumber1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number1' + i.toString())
            )).value
        );
        this.lookupdtl6[i]['Number1'] = (<HTMLInputElement>(
            document.getElementById('Number1' + i.toString())
        )).value;
    }

    changepercentage3(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage3' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl6[i]['percentage3'] = percentageValue;
    }
    OnChangeGeo3(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl7[i]['Geo3'] = value.value;
    }

    changeNumber2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number2' + i.toString())
            )).value
        );
        this.lookupdtl7[i]['Number2'] = (<HTMLInputElement>(
            document.getElementById('Number2' + i.toString())
        )).value;
    }

    changepercentage4(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage4' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl7[i]['percentage4'] = percentageValue;
    }

    OnChangeGeo4(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl8[i]['Geo4'] = value.value;
    }
    OnChangeGeo4new(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl8[i]['Geo4new'] = value.value;
    }

    changeNumber3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number3' + i.toString())
            )).value
        );
        this.lookupdtl8[i]['Number3'] = (<HTMLInputElement>(
            document.getElementById('Number3' + i.toString())
        )).value;
    }

    changepercentage5(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage5' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl8[i]['percentage5'] = percentageValue;
    }

    OnChangeGeo5(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl9[i]['Geo5'] = value.value;
    }

    changeNumber4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number4' + i.toString())
            )).value
        );
        this.lookupdtl9[i]['Number4'] = (<HTMLInputElement>(
            document.getElementById('Number4' + i.toString())
        )).value;
    }

    changepercentage6(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage6' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl9[i]['percentage6'] = percentageValue;
    }

    OnChangeGeo6(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl10[i]['Geo6'] = value.value;
    }

    changeNumber5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Number5' + i.toString())
            )).value
        );
        this.lookupdtl10[i]['Number5'] = (<HTMLInputElement>(
            document.getElementById('Number5' + i.toString())
        )).value;
    }

    changepercentage7(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('percentage7' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl10[i]['percentage7'] = percentageValue;
    }

    OnChangefrequency(i, value) {
        this.lookupdtl12[i]['frequency'] = value.value;
    }

    reltypeother3: any;
    OnChangeposition10(i, value) {
        var empty = '';
        this.onInputChangepositionlist(empty);
        this.reltypeother3 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl12[i]['position10'] = value.value;
        }
    }

    //social tables
    OnChangeEmployee(i, value) {
        this.reltypeother7 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl50[i]['Employee'] = value.value;
        }
    }
    changeTraining(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Training' + i.toString())
            )).value
        );
        this.lookupdtl50[i]['Training'] = (<HTMLInputElement>(
            document.getElementById('Training' + i.toString())
        )).value;
    }

    reltypeother8: any;
    OnChangeEmployee1(i, value) {
        this.reltypeother8 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl51[i]['Employee1'] = value.value;
        }
    }
    changeTraining1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Training1' + i.toString())
            )).value
        );
        this.lookupdtl51[i]['Training1'] = (<HTMLInputElement>(
            document.getElementById('Training1' + i.toString())
        )).value;
    }

    changedescription(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('description' + i.toString())
            )).value
        );
        this.lookupdtl11[i]['description'] = (<HTMLInputElement>(
            document.getElementById('description' + i.toString())
        )).value;
    }

    changeOutcome(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Outcome' + i.toString())
            )).value
        );
        this.lookupdtl11[i]['Outcome'] = (<HTMLInputElement>(
            document.getElementById('Outcome' + i.toString())
        )).value;
    }
    changeMaterials(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Materials' + i.toString())
            )).value
        );
        this.lookupdtl41[i]['Materials'] = (<HTMLInputElement>(
            document.getElementById('Materials' + i.toString())
        )).value;
    }

    changeTotalWeight(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('TotalWeight' + i.toString())
            )).value
        );
        this.lookupdtl41[i]['TotalWeight'] = (<HTMLInputElement>(
            document.getElementById('TotalWeight' + i.toString())
        )).value;
    }
    changeMaterialsii(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Materialsii' + i.toString())
            )).value
        );
        this.lookupdtl41ii[i]['Materialsii'] = (<HTMLInputElement>(
            document.getElementById('Materialsii' + i.toString())
        )).value;
    }
    changetotal1(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('total1' + i.toString()))
                .value
        );
        console.log(this.lookup2in7[i]['total1'] = (
            (<HTMLInputElement>document.getElementById('total1' + i.toString()))
                .value
        ));
    }
    
    changeTotalWeightii(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('TotalWeightii' + i.toString())
            )).value
        );
        this.lookupdtl41ii[i]['TotalWeightii'] = (<HTMLInputElement>(
            document.getElementById('TotalWeightii' + i.toString())
        )).value;
    }

    changemh2(i) {
        this.lookup[i]['mh2'] = (<HTMLInputElement>(
            document.getElementById('mh2' + i.toString())
        )).value;
    }

    changemh3(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('muuh3' + i.toString()))
                .value
        );
        this.lookup1[i]['muuh3'] = (<HTMLInputElement>(
            document.getElementById('muuh3' + i.toString())
        )).value;
    }
    changemh4(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('muuh4' + i.toString()))
                .value
        );
        this.lookup2[i]['muuh4'] = (<HTMLInputElement>(
            document.getElementById('muuh4' + i.toString())
        )).value;
    }
    deleteecothree1(index) {
        this.lookup3.splice(index, 1);
    }
    changeecothree2(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('ecothree2' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookup4[i]['ecothree2'] = percentageValue;
    }
    changeecothree3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecothree3' + i.toString())
            )).value
        );
        this.lookup5[i]['ecothree3'] = (<HTMLInputElement>(
            document.getElementById('ecothree3' + i.toString())
        )).value;
    }
    changeecothree4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecothree4' + i.toString())
            )).value
        );
        this.lookup6[i]['ecothree4'] = (<HTMLInputElement>(
            document.getElementById('ecothree4' + i.toString())
        )).value;
    }
    changeecothree5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecothree5' + i.toString())
            )).value
        );
        this.lookup7[i]['ecothree5'] = (<HTMLInputElement>(
            document.getElementById('ecothree5' + i.toString())
        )).value;
    }

    changeecothree7(i) {
        this.lookup8[i]['ecothree7'] = (<HTMLInputElement>(
            document.getElementById('ecothree7' + i.toString())
        )).value;
    }

    changeieii1(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('ieii1' + i.toString()))
                .value
        );
        this.lookup25[i]['ieii1'] = (<HTMLInputElement>(
            document.getElementById('ieii1' + i.toString())
        )).value;
    }

    changeieii2(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('ieii2' + i.toString()))
                .value
        );
        this.lookup26[i]['ieii2'] = (<HTMLInputElement>(
            document.getElementById('ieii2' + i.toString())
        )).value;
    }
    changeeAcb2(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('Acb2' + i.toString()))
                .value
        );
        this.lookup30[i]['Acb2'] = (<HTMLInputElement>(
            document.getElementById('Acb2' + i.toString())
        )).value;
    }
    //301-2
    //    OnChangeUnits1(i){
    //     const inputElem = <HTMLInputElement>document.getElementById("Unit1" + i.toString());
    //     const inputValue =parseFloat( inputElem.value);
    //     const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
    //     console.log(percentageValue);
    //     this.lookupdtl42[i]['Unit1'] = percentageValue;
    // }
    OnChangeView1(i, value) {
        this.lookupdtl42[i]['View1'] = value.value;
        this.isdisabledView1 = true;
    }
    changeMaterials1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Materials1' + i.toString())
            )).value
        );
        this.lookupdtl42[i]['Materials1'] = (<HTMLInputElement>(
            document.getElementById('Materials1' + i.toString())
        )).value;
    }

    changeTotalWeight1(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('TotalWeight1' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl42[i]['TotalWeight1'] = percentageValue;
    }
    //301-3

    changeProduct(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Product' + i.toString())
            )).value
        );
        this.lookupdtl43[i]['Product'] = (<HTMLInputElement>(
            document.getElementById('Product' + i.toString())
        )).value;
    }

    changeproductsPercentage(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('productsPercentage' + i.toString())
            )).value
        );
        this.lookupdtl43[i]['productsPercentage'] = (<HTMLInputElement>(
            document.getElementById('productsPercentage' + i.toString())
        )).value;
    }
    OnChangeUnits2(i) {
        const inputElem = <HTMLInputElement>(
            document.getElementById('Unit2' + i.toString())
        );
        const inputValue = parseFloat(inputElem.value);
        const percentageValue = inputValue < 100.01 ? `${inputValue}%` : '100%'; // append "%" only if the value is less than 100
        console.log(percentageValue);
        this.lookupdtl43[i]['Unit2'] = percentageValue;
    }
    OnChangeView2(i, value) {
        this.lookupdtl43[i]['View2'] = value.value;
        this.isdisabledView2 = true;
    }
    OnChangeUnits(i, value) {
        this.lookupdtl41[i]['Units'] = value.value;
    }
    OnChangeUnitsii(i, value) {
        this.lookupdtl41ii[i]['Unitsii'] = value.value;
    }
    OnChangeView(i, value) {
        this.lookupdtl41[i]['View'] = value.value;
        this.isdisabled = true;
    }
    OnChangeViewii(i, value) {
        this.lookupdtl41ii[i]['Viewii'] = value.value;
        this.isdisabledviewii = true;
    }
    onOptionSelected(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl1[i]['Relationship'] = this.selectedName;
    }

    reltypeother4: any;
    OnchangeFuelType(i, value) {
        var empty = '';
        this.onInputChangeFueltype(empty);
        this.reltypeother4 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl44[i]['FuelType'] = value.value;
        }
    }

    changeTotalFuelConsumption(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('TotalFuelConsumption' + i.toString())
            )).value
        );
        this.lookupdtl44[i]['TotalFuelConsumption'] = (<HTMLInputElement>(
            document.getElementById('TotalFuelConsumption' + i.toString())
        )).value;
    }
    OnChangeUnits3(i, value) {
        this.lookupdtl44[i]['Unit3'] = value.value;
    }
    OnChangeView3(i, value) {
        this.lookupdtl44[i]['View3'] = value.value;
        this.isdisabledView3 = true;
    }

    reltypeother5: any;
    OnchangeFuelType1(i, value) {
        var empty = '';
        this.onInputChangeFueltype(empty);
        this.reltypeother5 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl44a[i]['FuelType1'] = value.value;
        }
    }

    changeTotalFuelConsumption1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('TotalFuelConsumption1' + i.toString())
            )).value
        );
        this.lookupdtl44a[i]['TotalFuelConsumption1'] = (<HTMLInputElement>(
            document.getElementById('TotalFuelConsumption1' + i.toString())
        )).value;
    }
    OnChangeUnits4(i, value) {
        this.lookupdtl44a[i]['Unit4'] = value.value;
    }
    OnChangeView4(i, value) {
        this.lookupdtl44a[i]['View4'] = value.value;
        this.isdisabledView4 = true;
    }

    reltypeother6: any;
    OnChangeOwlceiaadp1(i, value) {
        this.reltypeother6 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookup413[i]['Owlceiaadp1'] = value.value;
        }
    }
    Owlceiaadp2(i) {
        this.lookup413[i]['Owlceiaadp2'] = (<HTMLInputElement>(
            document.getElementById('Owlceiaadp2' + i.toString())
        )).value;
    }
    Owlceiaadp3(i) {
        this.lookup413[i]['Owlceiaadp3'] = (<HTMLInputElement>(
            document.getElementById('Owlceiaadp3' + i.toString())
        )).value;
    }

    reason(value) {
        this.finalobj['102-3Reason for'] = value.target.value;
    }
    reason1(value) {
        this.finalobj['102-3Publication date of the report'] =
            value.target.value;
    }
    contactperson(value) {
        this.finalobj['102-3Contact Person'] = value.target.value;
    }
    email(value) {
        this.finalobj['102-3Email'] = value.target.value;
    }
    phone(event) {
        let value = event.target.value;
        if (value.length > 15) {
            value = value.slice(0, 15);
            event.target.value = value;
        }
        this.finalobj['102-3Phone'] = value;
    }

    refexa1(value) {
        this.finalobj['102-4The effect'] = value.target.value;
    }

    policytype(value) {
        this.finalobj['102-5Description'] = value.target.value;
    }
    assuredtypee(value) {
        this.finalobj['102-5Provide'] = value.target.value;
    }
    providertype(value) {
        this.finalobj['102-5Describe'] = value.target.value;
    }
    sectiontype(value) {
        this.finalobj['102-5Describe the relationship'] = value.target.value;
    }

    sectors(value) {
        console.log(value.value);

        {
            this.finalobj['102-6Sectors Served'] = value.value;
        }
    }
    desc(value) {
        this.finalobj['102-6A description Organizations'] = value.target.value;
    }
    prim1(value) {
        this.finalobj['102-6Primary Brands'] = value.target.value;
    }

    prim1Product(value) {
        this.finalobj['102-6Product'] = value.target.value;
    }

    prim1Services(value) {
        this.finalobj['102-6Services'] = value.target.value;
    }
    prim(value) {
        this.finalobj['102-6Aincluding services'] = value.target.value;
    }
    ps(value) {
        this.finalobj['102-6Aservices carried'] = value.target.value;
    }

    reportinf(value) {
        this.finalobj['102-8Total number'] = value.target.value;
    }
    reportper(value) {
        this.finalobj['102-8An explanation'] = value.target.value;
    }
    reportper1(value) {
        this.finalobj['102-8No. of workers'] = value.target.value;
    }
    workerss(value) {
        this.finalobj['102-9Governance'] = value.target.value;
    }
    methods(value) {
        this.finalobj['102-9list of committees'] = value.value;
        // if(this.finalobj["102-9list of committees"] !="") { this.finalobj["102-9list of committees"] = value.value }
    }
    previous(value) {
        this.finalobj['102-9Describe'] = value.target.value;
    }
    comm(value) {
        this.finalobj['102-9executive'] = value.target.value;
    }
    comm1(value) {
        this.finalobj['102-9Independence'] = value.target.value;
    }
    comm2(value) {
        this.finalobj['102-9Tenure'] = value.target.value;
    }
    comm3(value) {
        this.finalobj['102-9Number of each'] = value.target.value;
    }
    comm4(value) {
        this.finalobj['102-9Gender'] = value.target.value;
    }
    comm5(value) {
        this.finalobj['102-9Membership'] = value.target.value;
    }
    comm6(value) {
        this.finalobj['102-9competencies'] = value.target.value;
    }
    comm7(value) {
        this.finalobj['102-9Stakeholder'] = value.target.value;
    }

    criteria1(value) {
        this.finalobj['102-10Nomination'] = value.target.value;
    }
    criteria2(value) {
        this.finalobj['102-10Nomination selection'] = value.target.value;
    }
    criteria(value) {
        this.finalobj['102-10Criteria'] = value.target.value;
    }

    //look up details one for table 102-6
    //lookupdtl1
    SupplierName(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('SupplierName' + i.toString())
            )).value
        );
        this.lookupdtl1[i]['SupplierName'] = (<HTMLInputElement>(
            document.getElementById('SupplierName' + i.toString())
        )).value;
    }

    reltypeother1: any;
    OnchangeRelationship(i, value) {
        console.log(i);

        var empty = '';

        this.onInputChange(empty);
        console.log(i);
        // this.storeschan=i;
        // console.log(value)
        this.reltypeother1 = value.value;
        if (value.value != 'Others') {
            console.log(i);
            this.lookupdtl1[i]['Relationship'] = value.value;
        }
    }
    onOptionSelectedSupPrim(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl1[i]['SupPrim'] = this.selectedName;
    }
    onOptionSelectedGeo(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl1[i]['Geo'] = this.selectedName;
    }
    onOptionSelectedosol5countrylist(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3045[i]['osol5countrylist'] = this.selectedName;
    }
    onOptionSelectedhpr1location(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl304a[i]['hpr1location'] = this.selectedName;
    }

    onOptionSelectedrelatab2(i, value) {
        console.log(i);

        console.log(value.value);
        var empty = '';
        this.onInputChange(empty);
        this.lookupdtl2[i]['relatab2'] = value.value;
    }
    onOptionSelectedsupp2tab(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl2[i]['supp2tab'] = this.selectedName;
    }
    onOptionSelectedgeotab2(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl2[i]['geotab2'] = this.selectedName;
    }
    onOptionSelectedLocationlist1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookup2in7[i]['Locationlist1'] = this.selectedName;
    }
    onOptionSelectedposition10(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl12[i]['position10'] = this.selectedName;
    }
    onOptionSelectedFuelType(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl44[i]['FuelType'] = this.selectedName;
    }
    onOptionSelectedFuelType1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl44a[i]['FuelType1'] = this.selectedName;
    }

    onInputChange(value: string) {
        this.filteredList5 = this.Relationshiptype.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        console.log(value);
        console.log(this.filteredList5.Name);
    }

    onInputChangeindustry(value: string) {
        this.filteredList6 = this.industries.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        console.log(value);
        console.log(this.filteredList6.Name);
    }
    onInputChangecountry(value: string) {
        this.filteredList7 = this.countrylist.filter(
            (item) =>
                item.CountryName.toLowerCase().indexOf(value.toLowerCase()) !==
                -1
        );
        console.log(value);
        console.log(this.filteredList7.CountryName);
    }
    onInputChangecountrynew(value:string){
        this.filteredList7new = this.pagdri.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !==
                -1
        );
    }
    onInputChangecountry1(value: string) {
        this.filteredList7 = this.countrylist.filter(
          (item) =>
              item.CountryName.toLowerCase().indexOf(value.toLowerCase()) !==
              -1
      );
      console.log(value);
      console.log(this.filteredList7.CountryName);
      }
    onInputChangeindustrymateriality(value: string) {
        this.filteredList8 = this.materialityindus.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        console.log(value);
        console.log(this.filteredList8.Name);
    }
    onInputChangepositionlist(value: string) {
        this.filteredList9 = this.positionlist.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        console.log(value);
        console.log(this.filteredList9.Name);
    }
    onInputChangeFueltype(value: string) {
        this.filteredList10 = this.Fueltype.filter(
            (item) =>
                item.Name.toLowerCase().indexOf(value.toLowerCase()) !== -1
        );
        console.log(value);
        console.log(this.filteredList10.Name);
    }

    onOptionSelectedtype(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl[i]['Type'] = this.selectedName;
    }
    onOptionSelectedlabs(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl[i]['Labs'] = this.selectedName;
    }
    onOptionSelectedProjects(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl[i]['Projects'] = this.selectedName;
    }
    onOptionSelectedoperation(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['operation'] = this.selectedName;
    }
    onOptionSelectedoperation1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['operation1'] = this.selectedName;
    }
    onOptionSelectedGeo1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo1'] = this.selectedName;
    }
    onOptionSelectedGeo2(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo2'] = this.selectedName;
    }
    onOptionSelectedGeo3(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo3'] = this.selectedName;
    }
    onOptionSelectedGeo4(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo4'] = this.selectedName;
    }
    onOptionSelectedGeo4new(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo4new'] = this.selectedName;
    }
    onOptionSelectedGeo5(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo5'] = this.selectedName;
    }
    onOptionSelectedGeo6(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl3[i]['Geo6'] = this.selectedName;
    }

    onOptionSelectedType2x(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl2x[i]['Type2x'] = this.selectedName;
    }
    onOptionSelectedLabs2x(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl2x[i]['Labs2x'] = this.selectedName;
    }
    onOptionSelectedProjects2x(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl2x[i]['Projects2x'] = this.selectedName;
    }

    onOptionSelectedmtptdmttwo1(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo1[i]['mtptdmttwo1'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo3(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo2[i]['mtptdmttwo3'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo5(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo3[i]['mtptdmttwo5'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo7(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo4[i]['mtptdmttwo7'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo9(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo5[i]['mtptdmttwo9'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo11(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo6[i]['mtptdmttwo11'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo13(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo7[i]['mtptdmttwo13'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo15(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo8[i]['mtptdmttwo15'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo17(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo9[i]['mtptdmttwo17'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo19(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo10[i]['mtptdmttwo19'] = this.selectedName;
    }
    onOptionSelectedmtptdmttwo21(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupmtptdmttwo11[i]['mtptdmttwo21'] = this.selectedName;
    }
    onOptionSelectedcountry207b(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl207b[i]['country207b'] = this.selectedName;
    }

    Startdate(i) {
        const startdateInput = <HTMLInputElement>(
            document.getElementById('Startdate' + i.toString())
        );
        const startdateValue = startdateInput.value;
        this.lookupdtl1[i]['Startdate'] = startdateValue;

        // Disable dates before the start date
        const enddateInput = <HTMLInputElement>(
            document.getElementById('Enddate' + i.toString())
        );
        enddateInput.min = startdateValue;

        // Reset end date if it's before the start date
        // const enddateValue = enddateInput.value;
        // if (enddateValue <= startdateValue) {
        //   enddateInput.value = startdateValue;
        //   alert('End date cannot be less than start date');
        //   this.lookupdtl1[i]['Enddate'] = startdateValue;
        // } else {
        //   this.lookupdtl1[i]['Enddate'] = enddateValue;
        // }
    }

    Enddate(i) {
        const enddateInput = <HTMLInputElement>(
            document.getElementById('Enddate' + i.toString())
        );
        const enddateValue = enddateInput.value;

        const startdateInput = <HTMLInputElement>(
            document.getElementById('Startdate' + i.toString())
        );
        const startdateValue = startdateInput.value;

        if (enddateValue <= startdateValue) {
            enddateInput.value = startdateValue;
            alert('End date cannot be less than start date');
            this.lookupdtl1[i]['Enddate'] = startdateValue;
        } else {
            this.lookupdtl1[i]['Enddate'] = enddateValue;
        }
    }
    supplierExpanse(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('supplierExpanse' + i.toString())
            )).value
        );
        this.lookupdtl1[i]['supplierExpanse'] = (<HTMLInputElement>(
            document.getElementById('supplierExpanse' + i.toString())
        )).value;
    }
    yessorno(value) {
        this.finalobj['102-11Whether'] = value.value;
    }
    commentbox(value) {
        this.finalobj['102-11If arrangement'] = value.target.value;
    }
    comment2(value) {
        this.finalobj['102-11Explain'] = value.target.value;
    }

    pol1(value) {
        this.finalobj['102-12Highest'] = value.target.value;
    }
    pol2(value) {
        this.finalobj['102-12Describe people'] = value.target.value;
    }
    pol3(value) {
        this.finalobj['102-12Describe impacts'] = value.target.value;
    }
    pol4(value) {
        this.finalobj['102-12Describe iiimpacts'] = value.target.value;
    }
    pol5(value) {
        this.finalobj['102-12Describe review'] = value.target.value;
    }

    dele(value) {
        this.finalobj['102-13Describe people'] = value.target.value;
    }
    dele1(value) {
        this.finalobj['102-13Describe environment people'] = value.target.value;
    }

    sust1(value) {
        this.finalobj['102-14If yes topics'] = value.target.value;
    }
    sust2(value) {
        this.finalobj['102-14Describe topics'] = value.target.value;
    }

    conf11(value) {
        this.finalobj['102-15Processes mitigated'] = value.target.value;
    }
    conf12(value) {
        console.log(value);

        this.finalobj['102-15comment'] = value;
        if (value == 'Yes') {
            this.yesthen = true;
        } else {
            this.yesthen = false;
        }
    }
    conf22(value) {
        this.finalobj['102-15If yes topics'] = value.target.value;
    }

    Communication1(value) {
        this.finalobj['102-16Process body'] = value.target.value;
    }
    Communication2(value) {
        this.finalobj['102-16Total body'] = value.target.value;
    }
    Communication3(value) {
        this.finalobj['102-16Mechanism concerns'] = value.target.value;
    }
    Communication4(value) {
        this.finalobj['102-16Mechanism'] = value.target.value;
    }

    Collectivee(value) {
        this.finalobj['102-17Measures topics'] = value.target.value;
    }

    Evaluationn(value) {
        this.finalobj['102-18Processes topics'] = value.target.value;
    }
    Evaluation2(value) {
        this.finalobj['102-18Actions practice'] = value.target.value;
    }

    Remuneration1(value) {
        this.finalobj['102-19Remuneration remuneration'] = value.target.value;
    }
    Remuneration2(value) {
        this.finalobj['102-19Fixed shares'] = value.target.value;
    }
    Remuneration3(value) {
        this.finalobj['102-19Sign-on payments'] = value.target.value;
    }
    Remuneration4(value) {
        this.finalobj['102-19Termination payments'] = value.target.value;
    }
    Remuneration5(value) {
        this.finalobj['102-19Clawbacks'] = value.target.value;
    }
    Remuneration6(value) {
        this.finalobj['102-19Retirement employees'] = value.target.value;
    }

    changeecothree1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecothree1' + i.toString())
            )).value
        );
        this.lookup3[i]['ecothree1'] = (<HTMLInputElement>(
            document.getElementById('ecothree1' + i.toString())
        )).value;
    }
    OnChangecurrencyecothree(i, value) {
        this.lookup3[i]['currencyecothree'] = value.value;
    }
    onmh3(i, value) {
        this.lookup[i]['mh3'] = value.value;
    }
    onmh33(i, value) {
        this.lookup1[i]['mh4'] = value.value;
    }
    onmh333(i, value) {
        this.lookup2[i]['mh5'] = value.value;
    }

    Proc1(value) {
        this.finalobj['102-20Process remuneration'] = value.target.value;
    }
    Proc2(value) {
        this.finalobj['102-20Whetherdetermining remuneration'] =
            value.target.value;
    }
    Proc3(value) {
        this.finalobj['102-20How regarding remuneration'] = value.target.value;
    }
    Proc4(value) {
        this.finalobj['102-20Whether management'] = value.target.value;
    }
    Proc5(value) {
        this.finalobj['102-20If applicable proposals'] = value.target.value;
    }

    Annual1(value) {
        this.finalobj['102-21The country'] = value.target.value;
    }
    Annual2(value) {
        this.finalobj['102-21Thecountry'] = value.target.value;
    }
    Annual3(value) {
        this.finalobj['102-21Describe compiled'] = value.target.value;
    }

    Statement1(value) {
        this.finalobj['102-22Describe development'] = value.target.value;
    }

    Statement2(value) {
        this.finalobj['102-22Describe rights'] = value.target.value;
    }

    Statement3(value) {
        this.finalobj['102-22Describe and people'] = value.target.value;
    }

    Statement4(value) {
        this.finalobj['102-22Describe the instruments'] = value.target.value;
    }

    Statement5(value) {
        this.finalobj['102-22Describe  political'] = value.target.value;
    }

    Statement6(value) {
        this.finalobj['102-22Describe period'] = value.target.value;
    }

    Policy1(value) {
        this.finalobj['102-23q1'] = value.target.value;
    }
    Policy2(value) {
        this.finalobj['102-23q2'] = value.target.value;
    }
    Policy3(value) {
        this.finalobj['102-23q3'] = value.target.value;
    }
    Policy4(value) {
        this.finalobj['102-23q4'] = value.target.value;
    }
    Policy5(value) {
        this.finalobj['102-23q11'] = value.target.value;
    }
    Policy6(value) {
        this.finalobj['102-23q12'] = value.target.value;
    }
    Policy7(value) {
        this.finalobj['102-23q13'] = value.target.value;
    }
    Policy8(value) {
        this.finalobj['102-23q14'] = value.target.value;
    }
    Policy9(value) {
        this.finalobj['102-23q15'] = value.target.value;
    }
    Policy10(value) {
        this.finalobj['102-23q16'] = value.target.value;
    }
    Policy11(value) {
        this.finalobj['102-23q17'] = value.target.value;
    }

    Embedding1(value) {
        this.finalobj['102-24Q1'] = value.target.value;
    }

    Embedding2(value) {
        this.finalobj['102-24Q2'] = value.target.value;
    }
    Embedding3(value) {
        this.finalobj['102-24Q3'] = value.target.value;
    }

    Embedding4(value) {
        this.finalobj['102-24Q4'] = value.target.value;
    }

    //25

    Processinto1(value) {
        this.finalobj['102-25Q1'] = value.target.value;
    }

    Processinto2(value) {
        this.finalobj['102-25Q2'] = value.target.value;
    }
    Processinto3(value) {
        this.finalobj['102-25Q3'] = value.target.value;
    }

    Processinto4(value) {
        this.finalobj['102-25Q4'] = value.target.value;
    }
    Processinto5(value) {
        this.finalobj['102-25Q5'] = value.target.value;
    }

    //26
    mech1(value) {
        this.finalobj['102-26Q1'] = value.target.value;
    }

    mech2(value) {
        this.finalobj['102-26Q2'] = value.target.value;
    }
    mech3(value) {
        this.finalobj['102-26Q3'] = value.target.value;
    }

    mech4(value) {
        this.finalobj['102-26Q4'] = value.target.value;
    }
    mech5(value) {
        this.finalobj['102-26Q5'] = value.value;
    }
    mech6(value) {
        this.finalobj['102-26Q6'] = value.target.value;
    }
    mech7(value) {
        this.finalobj['102-26Q7'] = value.value;
    }
    mech8(value) {
        this.finalobj['102-26Q8'] = value.value;
    }
    mech9(value) {
        this.finalobj['102-26Q9'] = value.value;
    }
    mech10(value) {
        this.finalobj['102-26Q10'] = value.target.value;
    }
    mech11(value) {
        this.finalobj['102-26Q11'] = value.target.value;
    }
    mech12(value) {
        this.finalobj['102-26Q12'] = value.target.value;
    }
    mech13(value) {
        this.finalobj['102-26Q13'] = value.target.value;
    }
    mech14(value) {
        this.finalobj['102-26Q14'] = value.target.value;
    }
    mech15(value) {
        this.finalobj['102-26Q15'] = value.target.value;
    }
    // mech16(value)
    // {
    //   this.finalobj["102-26Q16"] = value.target.value;
    // }
    //27
    compir1(value) {
        this.finalobj['102-27Q1'] = value.target.value;
    }

    compir2(value) {
        this.finalobj['102-27Q2'] = value.target.value;
    }
    compir3(value) {
        this.finalobj['102-27Q3'] = value.target.value;
    }

    compir4(value) {
        this.finalobj['102-27Q4'] = value.target.value;
    }
    compir5(value) {
        this.finalobj['102-27Q5'] = value.value;
    }
    compir6(value) {
        this.finalobj['102-27Q6'] = value.target.value;
    }
    compir7(value) {
        this.finalobj['102-27Q7'] = value.target.value;
    }
    compir8(value) {
        this.finalobj['102-27Q8'] = value.target.value;
    }
    compir9(value) {
        this.finalobj['102-27Q9'] = value.target.value;
    }
    compir10(value) {
        this.finalobj['102-27Q10'] = value.target.value;
    }
    addValue3() {
        this.newAttribute8 = { ecothree1: '', currencyecothree: '' };
        this.lookup3.push(this.newAttribute8);
    }
    compir11(value) {
        this.finalobj['102-27Q11'] = value.target.value;
    }
    mema1(value) {
        this.finalobj['102-28Q1'] = value.target.value;
    }
    asseg1(value) {
        this.finalobj['102-29Q1'] = value.target.value;
    }
    asseg2(value) {
        this.finalobj['102-29Q2'] = value.target.value;
    }
    asseg3(value) {
        this.finalobj['102-29Q3'] = value.target.value;
    }

    cba1(value) {
        this.finalobj['102-30Q1'] = value.target.value;
    }
    cba2(value) {
        console.log(value);
        if (value.value == 'Yes') {
            this.explainyesclicked = true;
        } else {
            this.explainyesclicked = false;
        }
        this.finalobj['102-30Q2'] = value.value;
    }

    cba3(value) {
        this.finalobj['102-30Q3'] = value.target.value;
    }

    //economic starts here.......................................................

    mh1(value) {
        if (value.value == 'Cash') {
            this.cashbool = true;
        } else {
            this.cashbool = false;
        }
        this.finalobj['201-1question1'] = value.value;
        console.log(this.finalobj['201-1question1']);
    }
    mh1cash(value) {
        console.log(value.target.value);
        this.finalobj['201-1questioncash'] = value.target.value;
        console.log(this.finalobj['201-1questioncash']);
    }

    // mh2(value)
    // {
    //    this.finalobj["201-1question2"] = value.target.value;
    //    console.log(this.finalobj["201-1question2"] )

    // }
    // mh3(value)
    // {
    //    this.finalobj["201-1question3"] = value.target.value;
    //    console.log(this.finalobj["201-1question3"] )

    // }
    // mh4(value)
    // {
    //    this.finalobj["201-1question4"] = value.target.value;
    //    console.log(this.finalobj["201-1question4"] )

    // }
    mh5(value) {
        this.finalobj['201-1question5'] = value.target.value;
        console.log(this.finalobj['201-1question5']);
    }
    mh6(value) {
        this.finalobj['201-1question6'] = value.target.value;
        console.log(this.finalobj['201-1question6']);
    }
    mh7(value) {
        this.finalobj['201-1comment'] = value.target.value;
        console.log(this.finalobj['201-1question7']);
    }

    //201-2

    eco1(value) {
        this.finalobj['201-2question1'] = value.target.value;
    }
    eco2(value) {
        this.finalobj['201-2question2'] = value.target.value;
    }
    eco3(value) {
        this.finalobj['201-2question3'] = value.target.value;
    }
    eco4(value) {
        this.finalobj['201-2question4'] = value.target.value;
    }
    eco5(value) {
        this.finalobj['201-2question5'] = value.target.value;
    }
    eco6(value) {
        this.finalobj['201-2question6'] = value.target.value;
    }
    eco7(value) {
        this.finalobj['201-2comment'] = value.target.value;
    }

    //201-3

    // ecothree1(value)
    // {
    //    this.finalobj["201-3question1"] = value.target.value;
    // }
    // ecothree2(value)
    // {
    //    this.finalobj["201-3question2"] = value.target.value;
    // }
    // ecothree3(value)
    // {
    //    this.finalobj["201-3question3"] = value.target.value;
    // }
    // ecothree4(value)
    // {
    //    this.finalobj["201-3question4"] = value.target.value;
    // }
    // ecothree5(value)
    // {
    //    this.finalobj["201-3question5"] = value.target.value;
    // }
    ecothree8(value) {
        this.finalobj['201-3question8'] = value.target.value;
    }
    ecothree9(value) {
        this.finalobj['201-3comment'] = value.target.value;
    }

    //204-1

    // ecofour1(value)
    // {
    //    this.finalobj["201-4question1"] = value.target.value;
    // }
    // ecofour2(value)
    // {
    //    this.finalobj["201-4question2"] = value.target.value;
    // }
    // ecofour3(value)
    // {
    //    this.finalobj["201-4question3"] = value.target.value;
    // }
    // ecofour4(value)
    // {
    //    this.finalobj["201-4question4"] = value.target.value;
    // }
    // ecofour5(value)
    // {
    //    this.finalobj["201-4question5"] = value.target.value;
    // }
    //  ecofour6(value)
    // {
    //    this.finalobj["201-4question6"] = value.target.value;
    // }
    // ecofour7(value)
    // {
    //    this.finalobj["201-4question7"] = value.target.value;
    // }
    // ecofour8(value)
    // {
    //    this.finalobj["201-4question8"] = value.target.value;
    // }
    ecofour17(value) {
        this.finalobj['201-4comment'] = value.target.value;
    }
    ecofour17ii(value) {
        this.finalobj['201-4question18'] = value.value;
    }

    //202-1

    // markpref1(value)
    // {
    //    this.finalobj["202-1question1"] = value.target.value;
    // }
    markpref2(value) {
        this.finalobj['202-1question2'] = value.target.value;
    }
    markpref3(value) {
        this.finalobj['202-1question3'] = value.target.value;
    }
    markpref4(value) {
        this.finalobj['202-1question4'] = value.target.value;
    }
    markpref5(value) {
        this.finalobj['202-1comment'] = value.target.value;
    }

    //202-2
    // markpreff1(value)
    // {
    //    this.finalobj["202-2question1"] = value.target.value;
    // }
    markpreff2(value) {
        this.finalobj['202-2question2'] = value.target.value;
    }
    markpreff3(value) {
        this.finalobj['202-2question3'] = value.target.value;
    }
    markpreff4(value) {
        this.finalobj['202-2question4'] = value.target.value;
    }
    markpreff5(value) {
        this.finalobj['202-2comment'] = value.target.value;
    }

    //203-1
    iei1(value) {
        this.finalobj['203-1question1'] = value.target.value;
    }
    iei2(value) {
        this.finalobj['203-1question2'] = value.target.value;
    }
    iei3(value) {
        this.finalobj['203-1question3'] = value.target.value;
    }
    iei4(value) {
        this.finalobj['203-1comment'] = value.target.value;
    }

    //203-2
    // ieii1(value)
    // {
    //    this.finalobj["203-2question1"] = value.target.value;
    // }
    // ieii2(value)
    // {
    //    this.finalobj["203-2question2"] = value.target.value;
    // }
    ieii3(value) {
        this.finalobj['203-2comment'] = value.target.value;
    }

    //204-1
    // pp1(value)
    // {
    //    this.finalobj["204-1question1"] = value.target.value;
    // }
    pp2(value) {
        this.finalobj['204-1question2'] = value.target.value;
    }
    pp3(value) {
        this.finalobj['204-1question3'] = value.target.value;
    }
    pp4(value) {
        this.finalobj['204-1comment'] = value.target.value;
    }

    //205-1

    Ac2(value) {
        this.finalobj['205-1question2'] = value.target.value;
    }
    Ac3(value) {
        this.finalobj['205-1comment'] = value.target.value;
    }

    //205-2
    // Acc1(value)
    // {
    //    this.finalobj["205-2question1"] = value.target.value;
    // }
    // Acc2(value)
    // {
    //    this.finalobj["205-2question2"] = value.target.value;
    // }
    // Acc3(value)
    // {
    //    this.finalobj["205-2question3"] = value.target.value;
    // }
    Acc4(value) {
        this.finalobj['205-2question4'] = value.target.value;
    }
    // Acc5(value)
    // {
    //    this.finalobj["205-2question5"] = value.target.value;
    // }
    // Acc6(value)
    // {
    //    this.finalobj["205-2question6"] = value.target.value;
    // }
    Acc7(value) {
        this.finalobj['205-2comment'] = value.target.value;
    }

    //205-3
    Accc1(value) {
        this.finalobj['205-3question1'] = value.target.value;
    }
    Acccpointed(value) {
        this.finalobj['205-3questionpointed'] = value.target.value;
    }
    Accc2(value) {
        this.finalobj['205-3question2'] = value.target.value;
    }
    Accc3(value) {
        this.finalobj['205-3question3'] = value.target.value;
    }
    // Accc4(value)
    // {
    //    this.finalobj["205-3question4"] = value.target.value;
    // }
    Accc5(value) {
        this.finalobj['205-3comment'] = value.target.value;
    }

    //206-1
    Acb1(value) {
        this.finalobj['206-1question1'] = value.target.value;
    }

    Acb3(value) {
        this.finalobj['206-1comment'] = value.target.value;
    }

    tax(value) {
        this.finalobj['207-1question1'] = value.value;
    }
    tax1(value) {
        this.finalobj['207-1question3'] = value.target.value;
    }
    tax2(value) {
        this.finalobj['207-1question4'] = value.target.value;
    }
    tax3(value) {
        this.finalobj['207-1comment'] = value.target.value;
    }

    Att10(value) {
        this.finalobj['201-4comment'] = value.target.value;
    }

    Attt1(value) {
        this.finalobj['207-2question1'] = value.target.value;
    }
    Attt2(value) {
        this.finalobj['207-2question2'] = value.target.value;
    }
    Attt3(value) {
        this.finalobj['207-2question3'] = value.target.value;
    }
    Attt4(value) {
        this.finalobj['207-2question4'] = value.target.value;
    }
    Attt5(value) {
        this.finalobj['207-2question5'] = value.target.value;
    }
    Attt6(value) {
        this.finalobj['207-2question6'] = value.target.value;
    }
    Attt7(value) {
        this.finalobj['207-2comment'] = value.target.value;
    }

    Atttt1(value) {
        this.finalobj['207-3question1'] = value.target.value;
    }
    Atttt2(value) {
        this.finalobj['207-3question2'] = value.target.value;
    }
    Atttt3(value) {
        this.finalobj['207-3question3'] = value.target.value;
    }
    Atttt4(value) {
        this.finalobj['207-3comment'] = value.target.value;
    }
    onOptionSelectedcountry(event: any) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        this.finalobj['Location of the Organization Headquarters'] =this.selectedName;
    }
    onOptionSelectedcountry100(event: any, i) {
        this.selectedName = event.option.value;
        console.log(this.selectedName);
        console.log(i);
        this.lookupdtl102[i]['country100'] = this.selectedName;
    }
    location2(value) {
        this.finalobj['207-4question2'] = value.value;
        console.log(value.value);
    }

    location1(value) {
        this.finalobj['201-4question9'] = value.value;
        console.log(value.value);
    }
    Attttt2(value) {
        this.finalobj['207-4question3'] = value.target.value;
    }

    Attttt3(value) {
        this.finalobj['207-4question4'] = value.target.value;
    }
    Attttt4(value) {
        this.finalobj['207-4question5'] = value.target.value;
    }
    Attttt5(value) {
        this.finalobj['207-4question6'] = value.target.value;
    }

    currency(value) {
        this.finalobj['207-4question7'] = value.value;
        console.log(value.value);
    }
    Attttt6(value) {
        this.finalobj['207-4question8'] = value.target.value;
    }

    currency1(value) {
        this.finalobj['207-4question9'] = value.value;
        console.log(value.value);
    }
    Attttt7(value) {
        this.finalobj['207-4question10'] = value.target.value;
    }

    currency2(value) {
        this.finalobj['207-4question11'] = value.value;
        console.log(value.value);
    }
    Attttt8(value) {
        this.finalobj['207-4question12'] = value.target.value;
    }

    currency3(value) {
        this.finalobj['207-4question13'] = value.value;
        console.log(value.value);
    }
    Attttt9(value) {
        this.finalobj['207-4question14'] = value.target.value;
    }

    currency4(value) {
        this.finalobj['207-4question15'] = value.value;
        console.log(value.value);
    }
    Attttt10(value) {
        this.finalobj['207-4question16'] = value.target.value;
    }

    currency5(value) {
        this.finalobj['207-4question17'] = value.value;
        console.log(value.value);
    }
    Attttt11(value) {
        this.finalobj['207-4question18'] = value.target.value;
    }

    currency6(value) {
        this.finalobj['207-4question19'] = value.value;
        console.log(value.value);
    }
    Attttt12(value) {
        this.finalobj['207-4question20'] = value.target.value;
    }

    Attttt13(value) {
        this.finalobj['207-4comment'] = value.target.value;
    }

    enabledropducks2(value) {
        console.log(value);
        if (value == 'Yes') {
            this.explainyesclicked12 = true;
        } else {
            this.explainyesclicked12 = false;
        }
        this.finalobj['102-14Report topics'] = value;
    }

    select(value) {
        this.cash = false;
    }

    //ecomnomic ends here..........................................................

    //start environment here
    //48
    Mtt161(value) {
        this.finalobj['301-1Q1'] = value.target.value;
    }
    Mtt162(value) {
        this.finalobj['301-1Q2'] = value.target.value;
    }
    Mtt163(value) {
        this.finalobj['301-1Comment'] = value.target.value;
    }
    //49
    Mttt161(value) {
        this.finalobj['301-2Q1'] = value.target.value;
    }
    Mttt162(value) {
        this.finalobj['301-2Comment'] = value.target.value;
    }
    //50
    Rppm1(value) {
        this.finalobj['301-3Q1'] = value.target.value;
    }
    Rppm2(value) {
        this.finalobj['301-3Q2'] = value.target.value;
    }
    Rppm3(value) {
        this.finalobj['301-3Comment'] = value.target.value;
    }
    //51
    Ecwo1(value) {
        this.finalobj['302-1Q1'] = value.target.value;
    }
    Ecwo2(value) {
        this.finalobj['302-1Q2'] = value.target.value;
    }
    Ecwo3(value) {
        this.finalobj['302-1Q3'] = value.target.value;
    }
    Ecwo4(value) {
        this.finalobj['302-1Q4'] = value.target.value;
    }

    Ecwo5(value) {
        this.finalobj['302-1Q5'] = value.target.value;
    }
    Ecwo5units(value) {
        this.finalobj['302-1Q5units'] = value.value;
    }
    Ecwo6(value) {
        this.finalobj['302-1Q6'] = value.target.value;
    }
    Ecwo7(value) {
        this.finalobj['302-1Q7'] = value.target.value;
    }
    Ecwo8(value) {
        this.finalobj['302-1Comment'] = value.target.value;
    }
    //52
    Ecoo1(value) {
        this.finalobj['302-2Q1'] = value.target.value;
    }
    Ecoo1units(value) {
        this.finalobj['302-2Q1units'] = value.value;
    }
    Ecoo2(value) {
        this.finalobj['302-2Q2'] = value.target.value;
    }
    Ecoo3(value) {
        this.finalobj['302-2Q3'] = value.target.value;
    }
    Ecoo4(value) {
        this.finalobj['302-2Comment'] = value.target.value;
    }
    //53
    Eit1(value) {
        this.finalobj['302-3Q1'] = value.target.value;
    }
    Eit2(value) {
        this.finalobj['302-3Q2'] = value.target.value;
    }
    Eit5(value) {
        this.finalobj['302-3Comment'] = value.target.value;
    }
    //54
    Rec1(value) {
        this.finalobj['302-4Q1'] = value.target.value;
    }

    Rec1units(value) {
        this.finalobj['302-4Q1units'] = value.value;
    }
    Rec2(value) {
        this.finalobj['302-4Q2'] = value.target.value;
    }
    Rec3(value) {
        this.finalobj['302-4Q3'] = value.target.value;
    }
    Rec4(value) {
        this.finalobj['302-4Q4'] = value.target.value;
    }
    Rec5(value) {
        this.finalobj['302-4Comment'] = value.target.value;
    }
    //55
    Rerp1(value) {
        this.finalobj['302-5Q1'] = value.target.value;
    }
    Rerp1units(value) {
        this.finalobj['302-5Q1units'] = value.value;
    }
    Rerp2(value) {
        this.finalobj['302-5Q2'] = value.target.value;
    }
    Rerp3(value) {
        this.finalobj['302-5Q3'] = value.target.value;
    }
    Rerp4(value) {
        this.finalobj['302-5Comment'] = value.target.value;
    }
    Iwsr1(value) {
        this.finalobj['303-1Q1'] = value.target.value;
    }
    Iwsr2(value) {
        this.finalobj['303-1Q2'] = value.target.value;
    }
    Iwsr3(value) {
        this.finalobj['303-1Q3'] = value.target.value;
    }
    Iwsr4(value) {
        this.finalobj['303-1Q4'] = value.target.value;
    }
    Iwsr5(value) {
        this.finalobj['303-1Comment'] = value.target.value;
    }

    // changed here --> 303-2	57

    Mwdr1(value) {
        this.finalobj['303-2Q1'] = value.target.value;
    }
    Mwdr2(value) {
        this.finalobj['303-2Q2'] = value.target.value;
    }
    Mwdr3(value) {
        this.finalobj['303-2Q3'] = value.target.value;
    }
    Mwdr4(value) {
        this.finalobj['303-2Q4'] = value.target.value;
    }
    Mwdr5(value) {
        this.finalobj['303-2Comment'] = value.target.value;
    }
    //  58	303-3
    www1(value) {
        this.finalobj['303-3Q1'] = value.target.value;
    }
    www2(value) {
        this.finalobj['303-3Q2'] = value.target.value;
    }
    www3(value) {
        this.finalobj['303-3Q3'] = value.target.value;
    }
    www4(value) {
        this.finalobj['303-3Q4'] = value.target.value;
    }
    www5(value) {
        this.finalobj['303-3Q5'] = value.target.value;
    }
    www6(value) {
        this.finalobj['303-3Comment'] = value.target.value;
    }
    // 59	303-4
    wdd1(value) {
        this.finalobj['303-4Q1'] = value.target.value;
    }

    wdd6(value) {
        this.finalobj['303-4Q6'] = value.target.value;
    }
    wdd7(value) {
        this.finalobj['303-4Q7'] = value.target.value;
    }
    wdd8(value) {
        this.finalobj['303-4Q8'] = value.target.value;
    }
    wdd9(value) {
        this.finalobj['303-4Q9'] = value.target.value;
    }
    wdd10(value) {
        this.finalobj['303-4Comment'] = value.target.value;
    }
    // 60	303-5
    wcc1(value) {
        this.finalobj['303-5Q1'] = value.target.value;
    }
    wcc2(value) {
        this.finalobj['303-5Q2'] = value.target.value;
    }
    wcc3(value) {
        this.finalobj['303-5Q3'] = value.target.value;
    }
    wcc4(value) {
        this.finalobj['303-5Q4'] = value.target.value;
    }
    wcc5(value) {
        this.finalobj['303-4Comment'] = value.target.value;
    }
    // 61	304-1
    osol1(value) {
        this.finalobj['304-1Q1'] = value.target.value;
    }
    osol1location(value) {
        this.finalobj['304-1Q1location'] = value.value;
    }
    osol2(value) {
        this.finalobj['304-1Q2'] = value.target.value;
    }
    osol3(value) {
        this.finalobj['304-1Q3'] = value.target.value;
    }
    osol4(value) {
        this.finalobj['304-1Q4'] = value.target.value;
    }
    osol5(value) {
        this.finalobj['304-1Q5'] = value.target.value;
    }
    osol6(value) {
        this.finalobj['304-1Q6'] = value.target.value;
    }
    osol7(value) {
        this.finalobj['304-1Q7'] = value.target.value;
    }
    osol8(value) {
        this.finalobj['304-1Comment'] = value.target.value;
    }
    // 62	304-2
    sia1(value) {
        this.finalobj['304-2Q1'] = value.target.value;
    }
    sia2(value) {
        this.finalobj['304-2Q2'] = value.target.value;
    }
    sia3(value) {
        this.finalobj['304-2Q3'] = value.target.value;
    }
    sia4(value) {
        this.finalobj['304-2Q4'] = value.target.value;
    }
    sia5(value) {
        this.finalobj['304-2Q5'] = value.target.value;
    }
    sia6(value) {
        this.finalobj['304-2Q6'] = value.target.value;
    }
    sia7(value) {
        this.finalobj['304-2Q7'] = value.target.value;
    }
    sia8(value) {
        this.finalobj['304-2Q8'] = value.target.value;
    }
    sia9(value) {
        this.finalobj['304-2Q9'] = value.target.value;
    }
    sia10(value) {
        this.finalobj['304-2Q10'] = value.target.value;
    }
    sia11(value) {
        this.finalobj['304-2Comment'] = value.target.value;
    }
    hpr2(value) {
        this.finalobj['304-3Q2'] = value.target.value;
    }
    hpr3(value) {
        this.finalobj['304-3Q3'] = value.target.value;
    }
    hpr4(value) {
        this.finalobj['304-3Q4'] = value.target.value;
    }
    hpr5(value) {
        this.finalobj['304-3Comment'] = value.target.value;
    }
    Iucn1(value) {
        this.finalobj['304-4Q1'] = value.target.value;
    }
    Iucn2(value) {
        this.finalobj['304-4Q2'] = value.target.value;
    }
    Iucn3(value) {
        this.finalobj['304-4Q3'] = value.target.value;
    }
    Iucn4(value) {
        this.finalobj['304-4Q4'] = value.target.value;
    }
    Iucn5(value) {
        this.finalobj['304-4Q5'] = value.target.value;
    }
    Iucn6(value) {
        this.finalobj['304-4Comment'] = value.target.value;
    }
    Dghgemi1(value) {
        this.finalobj['305-1Q1'] = value.target.value;
    }
    Dghgemi2(value) {
        this.finalobj['305-1Q2'] = value.target.value;
    }
    Dghgemi3(value) {
        this.finalobj['305-1Q3'] = value.target.value;
    }
    Dghgemi4(event) {
        const inputValue = event.target.value;
        if (inputValue.length > 4) {
            event.target.value = inputValue.slice(0, 4);
        }
        this.finalobj['305-1Q4'] = event.target.value;
    }

    Dghgemi5(value) {
        this.finalobj['305-1Q5'] = value.target.value;
    }
    Dghgemi6(value) {
        this.finalobj['305-1Q6'] = value.target.value;
    }
    Dghgemi7(value) {
        this.finalobj['305-1Q7'] = value.target.value;
    }
    Dghgemi8(value) {
        this.finalobj['305-1Q8'] = value.target.value;
    }
    Dghgemi9(value) {
        this.finalobj['305-1Q9'] = value.target.value;
    }
    Dghgemi10(value) {
        this.finalobj['305-1Q10'] = value.target.value;
    }
    Dghgemi11(value) {
        this.finalobj['305-1Comment'] = value.target.value;
    }
    Dgh1(value) {
        this.finalobj['305-2Q1'] = value.target.value;
    }
    Dgh2(value) {
        this.finalobj['305-2Q2'] = value.target.value;
    }
    Dgh3(value) {
        this.finalobj['305-2Q3'] = value.value;
    }
    Dgh4(event) {
        const inputValue = event.target.value;
        if (inputValue.length > 4) {
            event.target.value = inputValue.slice(0, 4);
        }
        this.finalobj['305-2Q4'] = event.target.value;
    }
    // 59	303-4
    wdd1i(value) {
        this.finalobj['303-4Q1i'] = value.target.value;
    }
    wdd1ii(value) {
        this.finalobj['303-4Q1ii'] = value.target.value;
    }
    wdd1iii(value) {
        this.finalobj['303-4Q1iii'] = value.target.value;
    }
    wdd1iv(value) {
        this.finalobj['303-4Q1iv'] = value.target.value;
    }
    wdd1v(value) {
        this.finalobj['303-4Q1v'] = value.target.value;
    }
    wdd1vi(value) {
        this.finalobj['303-4Q1vi'] = value.target.value;
    }
    wdd1kek(value) {
        this.finalobj['303-4Q1kek1'] = value.target.value;
    }
    wdd2kek(value) {
        this.finalobj['303-4Q1kek2'] = value.target.value;
    }
    wdd3kek(value) {
        this.finalobj['303-4Q1kek3'] = value.target.value;
    }
    wdd4kek(value) {
        this.finalobj['303-4Q1kek4'] = value.target.value;
    }

    Dgh5(value) {
        this.finalobj['305-2Q5'] = value.target.value;
    }
    Dgh6(value) {
        this.finalobj['305-2Q6'] = value.target.value;
    }
    Dgh7(value) {
        this.finalobj['305-2Q7'] = value.target.value;
    }
    Dgh8(value) {
        this.finalobj['305-2Q8'] = value.target.value;
    }
    Dgh9(value) {
        this.finalobj['305-2Q9'] = value.target.value;
    }
    Dgh10(value) {
        this.finalobj['305-2Q10'] = value.target.value;
    }
    Dgh11(value) {
        this.finalobj['305-2Comment'] = value.target.value;
    }

    kgf1(value) {
        this.finalobj['305-3Q1'] = value.target.value;
    }
    kgf2(value) {
        this.finalobj['305-3Q2'] = value.target.value;
    }
    kgf3(value) {
        this.finalobj['305-3Q3'] = value.target.value;
    }
    kgf4(value) {
        this.finalobj['305-3Q4'] = value.target.value;
    }
    kgf5(value) {
        this.finalobj['305-3Q5'] = value.target.value;
    }
    kgf6(value) {
        this.finalobj['305-3Q6'] = value.target.value;
    }
    kgf7(value) {
        this.finalobj['305-3Q7'] = value.target.value;
    }
    kgf8(value) {
        this.finalobj['305-3Q8'] = value.target.value;
    }
    kgfsuna(value) {
        this.finalobj['305-3Qsuna'] = value.target.value;
    }
    kgf9(value) {
        this.finalobj['305-3Q9'] = value.target.value;
    }
    kgf10(value) {
        this.finalobj['305-3Q10'] = value.target.value;
    }
    kgf11(value) {
        this.finalobj['305-3Q11'] = value.target.value;
    }
    kgf12(value) {
        this.finalobj['305-3Q12'] = value.target.value;
    }
    kgf13(value) {
        this.finalobj['305-3Q13'] = value.target.value;
    }
    kgf14(value) {
        this.finalobj['305-3Q14'] = value.target.value;
    }
    kgf15(value) {
        this.finalobj['305-3Q15'] = value.target.value;
    }
    kgf16(value) {
        if (this.finalobj['305-3Q16'] != '') {
            this.finalobj['305-3Q16'] = value.value;
        }
    }
    kgf17(value) {
        this.finalobj['305-3Q17'] = value.target.value;
    }
    kgf18(value) {
        this.finalobj['305-3Q18'] = value.target.value;
    }
    kgf19(value) {
      const inputValue = value.target.value;
        if (inputValue.length > 4) {
          value.target.value = inputValue.slice(0, 4);
        }
        this.finalobj['305-3Q19'] = value.target.value;
    }
    kgf20(value) {
        this.finalobj['305-3Q20'] = value.target.value;
    }
    kgf21(value) {
        this.finalobj['305-3Q21'] = value.target.value;
    }
    kgf22(value) {
        this.finalobj['305-3Q22'] = value.target.value;
    }
    kgf23(value) {
        this.finalobj['305-3Q23'] = value.target.value;
    }
    kgf24(value) {
        this.finalobj['305-3Q24'] = value.target.value;
    }
    kgf25(value) {
        this.finalobj['305-3Comment'] = value.target.value;
    }
    kgf26(value) {
        this.finalobj['Processing of sold'] = value.target.value;
    }
    sahoo1(value) {
        this.finalobj['305-4Q1'] = value.target.value;
    }
    sahoo2(value) {
        this.finalobj['305-4Q2'] = value.target.value;
    }
    sahoon(value) {
        this.finalobj['305-4Qn'] = value.target.value;
    }
    sahoo3(value) {
        this.finalobj['305-4Q3'] = value.target.value;
    }
    sahoo4(value) {
        this.finalobj['305-4Q4'] = value.target.value;
    }
    sahoo5(value) {
        this.finalobj['305-4Comment'] = value.target.value;
    }

    bahu1(value) {
        this.finalobj['305-5Q1'] = value.target.value;
    }
    bahu2(value) {
        this.finalobj['305-5Q2'] = value.target.value;
    }
    bahu3(event) {
        const inputValue = event.target.value;
        if (inputValue.length > 4) {
            event.target.value = inputValue.slice(0, 4);
        }
        this.finalobj['305-5Q3'] = event.target.value;
    }
    bahu4(value) {
        this.finalobj['305-5Q4'] = value.target.value;
    }
    bahu5(value) {
        this.finalobj['305-5Q5'] = value.value;
    }
    bahu6(value) {
        this.finalobj['305-5Q6'] = value.target.value;
    }
    bahu7(value) {
        this.finalobj['305-5Comment'] = value.target.value;
    }
    bali1(value) {
        this.finalobj['305-6Q1'] = value.target.value;
    }
    bali2(value) {
        this.finalobj['305-6Q2'] = value.target.value;
    }
    bali3(value) {
        this.finalobj['305-6Q3'] = value.target.value;
    }
    bali4(value) {
        this.finalobj['305-6Q4'] = value.target.value;
    }
    bali5(value) {
        this.finalobj['305-6Q5'] = value.target.value;
    }
    bali6(value) {
        this.finalobj['305-6Q6'] = value.target.value;
    }
    bali7(value) {
        this.finalobj['305-6Comment'] = value.target.value;
    }

    multiselect3023i(value) {
        if (this.finalobj['multiselect3023i'] != '') {
            this.finalobj['multiselect3023i'] = value.value;
        }

        console.log(value.value);
    }
    multiselect3023(value) {
        console.log(value.value);
        if (this.finalobj['302-3multiselect3023'] != '') {
            this.finalobj['302-3multiselect3023'] = value.value;
        }
    }
    multiselect3024(value) {
        console.log(value.value);
        if (this.finalobj['302-3multiselect3024'] != '') {
            this.finalobj['302-3multiselect3024'] = value.value;
        }
    }

    // 306

    TSIO1(value) {
        this.finalobj['306-1Q1'] = value.target.value;
    }
    TSIO2(value) {
        this.finalobj['306-1Q2'] = value.target.value;
    }
    TSIO3(value) {
        this.finalobj['306-1Q3'] = value.target.value;
    }

    TSIT1(value) {
        this.finalobj['306-2Q1'] = value.target.value;
    }
    TSIT2(value) {
        this.finalobj['306-2Q2'] = value.target.value;
    }
    TSIT3(value) {
        this.finalobj['306-2Q3'] = value.target.value;
    }
    TSIT4(value) {
        this.finalobj['306-2Q4'] = value.target.value;
    }

    TSITH1(value) {
        this.finalobj['306-3Q1'] = value.target.value;
    }
    TSITH2(value) {
        this.finalobj['306-3Q2'] = value.target.value;
    }
    TSITH3(value) {
        this.finalobj['306-3Q3'] = value.target.value;
    }
    TSITH4(value) {
        this.finalobj['306-3Q4'] = value.target.value;
    }
    TSITH5(value) {
        this.finalobj['306-3Q5'] = value.target.value;
    }
    TSITH6(value) {
        this.finalobj['306-3Q6'] = value.target.value;
    }
    TSITH7(value) {
        this.finalobj['306-3Q7'] = value.target.value;
    }
    TSITH8(value) {
        this.finalobj['306-3Q8'] = value.target.value;
    }
    TSITH9(value) {
        this.finalobj['306-3Q9'] = value.target.value;
    }

    TSIF1(value) {
        this.finalobj['306-4Q1'] = value.target.value;
    }
    TSIF2(value) {
        this.finalobj['306-4Q2'] = value.value;
    }
    TSIF3(value) {
        this.finalobj['306-4Q3'] = value.target.value;
    }
    TSIF4(value) {
        this.finalobj['306-4Q4'] = value.target.value;
    }
    TSIF5(value) {
        this.finalobj['306-4Q5'] = value.target.value;
    }
    TSIF6(value) {
        this.finalobj['306-4Q6'] = value.target.value;
    }
    TSIF7(value) {
        this.finalobj['306-4Q7'] = value.target.value;
    }
    TSIF8(value) {
        this.finalobj['306-4Q8'] = value.target.value;
    }
    TSIF9(value) {
        this.finalobj['306-4Q9'] = value.target.value;
    }
    TSIF10(value) {
        this.finalobj['306-4Q10'] = value.target.value;
    }
    TSIF11(value) {
        this.finalobj['306-4Q11'] = value.target.value;
    }
    TSIF12(value) {
        this.finalobj['306-4Q12'] = value.target.value;
    }
    TSIF13(i) {
        this.lookupdtl306iii[i]['one'] = (<HTMLInputElement>(
            document.getElementById('one' + i.toString())
        )).value;
    }
    TSIF14(i) {
        this.lookupdtl306iii[i]['two'] = (<HTMLInputElement>(
            document.getElementById('two' + i.toString())
        )).value;
    }
    TSIF15(i, value) {
        this.lookupdtl306iii[i]['three'] = value.value;
    }
    TSIF16(value) {
        this.finalobj['306-4Q16'] = value.target.value;
    }
    TSIF17(value) {
        this.finalobj['306-4Q17'] = value.target.value;
    }
    TSIF18(value) {
        this.finalobj['306-4Q18'] = value.target.value;
    }
    TSIF19(value) {
        this.finalobj['306-4Q19'] = value.target.value;
    }
    TSIF20(value) {
        this.finalobj['306-4Q20'] = value.target.value;
    }
    TSIF21(value) {
        this.finalobj['306-4Q21'] = value.target.value;
    }
    TSIF22(i) {
        this.lookupdtl306ii[i]['uno'] = (<HTMLInputElement>(
            document.getElementById('uno' + i.toString())
        )).value;
    }
    TSIF23(i) {
        this.lookupdtl306ii[i]['dos'] = (<HTMLInputElement>(
            document.getElementById('dos' + i.toString())
        )).value;
    }
    TSIF24(i, value) {
        this.lookupdtl306ii[i]['thres'] = value.value;
    }
    TSIF25(value) {
        this.finalobj['306-4Q25'] = value.target.value;
    }
    TSIF26(value) {
        this.finalobj['306-4Q26'] = value.target.value;
    }
    TSIF27(value) {
        this.finalobj['306-4Q27'] = value.target.value;
    }
    Ecwo3iunitdrop(event) {
        console.log(event);
        console.log(event.value);
        this.finalobj['302-1Q3iunitdrop1'] = event.value;
    }
    Ecwo3iunitdrop1(event) {
        this.finalobj['302-1Q3iunitdrop2'] = event.value;
    }
    Ecwo3iunitdrop2(event) {
        this.finalobj['302-1Q3iunitdrop3'] = event.value;
    }
    Ecwo3iunitdrop3(event) {
        this.finalobj['302-1Q3iunitdrop4'] = event.value;
    }
    Ecwo3iunitdrop4(event) {
        this.finalobj['302-1Q3iunitdrop5'] = event.value;
    }
    Ecwo3iunitdrop5(event) {
        this.finalobj['302-1Q3iunitdrop6'] = event.value;
    }
    Ecwo3iunitdrop6(event) {
        this.finalobj['302-1Q3iunitdrop7'] = event.value;
    }
    Ecwo3iunitdrop7(event) {
        this.finalobj['302-1Q3iunitdrop8'] = event.value;
    }
    TSIF28(value) {
        this.finalobj['306-4Q28'] = value.target.value;
    }
    TSIF29(value) {
        this.finalobj['306-4Q29'] = value.target.value;
    }
    TSIF30(value) {
        this.finalobj['306-4Q30'] = value.target.value;
    }
    TSIF31(value) {
        this.finalobj['306-4Q33'] = value.target.value;
    }
    TSIF32(value) {
        this.finalobj['306-4Q32'] = value.target.value;
    }
    TSIF33(value) {
        this.finalobj['306-4Q33'] = value.target.value;
    }
    TSIF34(value) {
        this.finalobj['306-4Q34'] = value.target.value;
    }
    TSIF35(value) {
        this.finalobj['306-4Q35'] = value.target.value;
    }
    TSIF36(value) {
        this.finalobj['306-4Q36'] = value.target.value;
    }
    TSIF37(value) {
        this.finalobj['306-4Q37'] = value.target.value;
    }
    TSIF38(value) {
        this.finalobj['306-4Q38'] = value.target.value;
    }
    TSIF39(value) {
        this.finalobj['306-4Q39'] = value.target.value;
    }
    TSIF40(value) {
        this.finalobj['306-4Q40'] = value.target.value;
    }
    TSIF41(value) {
        this.finalobj['306-4Q41'] = value.target.value;
    }
    TSIF42(value) {
        this.finalobj['306-4Q42'] = value.target.value;
    }
    TSIF43(value) {
        this.finalobj['306-4Q43'] = value.target.value;
    }
    TSIF44(value) {
        this.finalobj['306-4Q44'] = value.target.value;
    }
    TSIF45(value) {
        this.finalobj['306-4Q45'] = value.target.value;
    }
    TSIF46(value) {
        this.finalobj['306-4Q46'] = value.target.value;
    }
    TSIF47(value) {
        this.finalobj['306-4Q47'] = value.target.value;
    }
    TSIF48(value) {
        this.finalobj['306-4Q48'] = value.target.value;
    }
    TSIF49(value) {
        this.finalobj['306-4Q49'] = value.target.value;
    }

    TSFIV1(value) {
        this.finalobj['306-4Q1'] = value.target.value;
    }
    TSFIV2(value) {
        this.finalobj['306-4Q2'] = value.value;
    }
    TSFIV3(value) {
        this.finalobj['306-4Q3'] = value.target.value;
    }
    TSFIV4(value) {
        this.finalobj['306-4Q4'] = value.target.value;
    }
    TSFIV5(value) {
        this.finalobj['306-4Q5'] = value.value;
    }
    TSFIV6(value) {
        this.finalobj['306-4Q6'] = value.target.value;
    }
    TSFIV7(value) {
        this.finalobj['306-4Q7'] = value.value;
    }
    TSFIV8(value) {
        this.finalobj['306-4Q8'] = value.target.value;
    }
    TSFIV9(value) {
        this.finalobj['306-4Q9'] = value.value;
    }
    TSFIV10(value) {
        this.finalobj['306-4Q10'] = value.target.value;
    }
    TSFIV11(value) {
        this.finalobj['306-4Q11'] = value.value;
    }
    TSFIV12(value) {
        this.finalobj['306-4Q12'] = value.target.value;
    }
    TSFIV13(value) {
        this.finalobj['306-4Q13'] = value.value;
    }
    TSFIV14(value) {
        this.finalobj['306-4Q14'] = value.target.value;
    }
    TSFIV15(value) {
        this.finalobj['306-4Q15'] = value.target.value;
    }
    TSFIV16(value) {
        this.finalobj['306-4Q16'] = value.target.value;
    }
    TSFIV17(value) {
        this.finalobj['306-4Q17'] = value.target.value;
    }
    TSFIV18(value) {
        this.finalobj['306-4Q18'] = value.target.value;
    }
    TSFIV19(value) {
        this.finalobj['306-4Q19'] = value.target.value;
    }
    TSFIV20(value) {
        this.finalobj['306-4Q20'] = value.target.value;
    }
    TSFIV21(value) {
        this.finalobj['306-4Q21'] = value.target.value;
    }
    TSFIV22(value) {
        this.finalobj['306-4Q22'] = value.target.value;
    }
    TSFIV23(value) {
        this.finalobj['306-4Q23'] = value.target.value;
    }
    TSFIV24(value) {
        this.finalobj['306-4Q24'] = value.target.value;
    }
    TSFIV25(value) {
        this.finalobj['306-4Q25'] = value.target.value;
    }
    TSFIV26(value) {
        this.finalobj['306-4Q26'] = value.target.value;
    }
    TSFIV27(value) {
        this.finalobj['306-4Q27'] = value.target.value;
    }
    TSFIV28(value) {
        this.finalobj['306-4Q28'] = value.target.value;
    }
    TSFIV29(value) {
        this.finalobj['306-4Q29'] = value.target.value;
    }
    TSFIV30(value) {
        this.finalobj['306-4Q30'] = value.target.value;
    }
    TSFIV31(value) {
        this.finalobj['306-4Q33'] = value.target.value;
    }
    TSFIV32(value) {
        this.finalobj['306-4Q32'] = value.target.value;
    }
    TSFIV33(value) {
        this.finalobj['306-4Q33'] = value.target.value;
    }
    TSFIV34(value) {
        this.finalobj['306-4Q34'] = value.target.value;
    }
    TSFIV35(value) {
        this.finalobj['306-4Q35'] = value.target.value;
    }
    TSFIV36(value) {
        this.finalobj['306-4Q36'] = value.target.value;
    }
    TSFIV37(value) {
        this.finalobj['306-4Q37'] = value.target.value;
    }
    TSFIV38(value) {
        this.finalobj['306-4Q38'] = value.target.value;
    }
    TSFIV39(value) {
        this.finalobj['306-4Q39'] = value.target.value;
    }
    TSFIV40(value) {
        this.finalobj['306-4Q40'] = value.target.value;
    }
    TSFIV41(value) {
        this.finalobj['306-4Q41'] = value.target.value;
    }
    TSFIV42(value) {
        this.finalobj['306-4Q42'] = value.target.value;
    }
    TSFIV43(value) {
        this.finalobj['306-4Q43'] = value.target.value;
    }
    TSFIV44(value) {
        this.finalobj['306-4Q44'] = value.target.value;
    }
    TSFIV45(value) {
        this.finalobj['306-4Q45'] = value.target.value;
    }
    TSFIV46(value) {
        this.finalobj['306-4Q46'] = value.target.value;
    }
    TSFIV47(value) {
        this.finalobj['306-4Q47'] = value.target.value;
    }
    TSFIV48(value) {
        this.finalobj['306-4Q48'] = value.target.value;
    }
    TSFIV49(value) {
        this.finalobj['306-4Q49'] = value.target.value;
    }
    TSFIV50(value) {
        this.finalobj['306-4Q50'] = value.target.value;
    }
    TSFIV51(value) {
        this.finalobj['306-4Q51'] = value.target.value;
    }
    TSFIV52(value) {
        this.finalobj['306-4Q52'] = value.target.value;
    }
    TSFIV53(value) {
        this.finalobj['306-4Q53'] = value.target.value;
    }
    TSFIV54(value) {
        this.finalobj['306-4Q54'] = value.target.value;
    }
    TSFIV55(value) {
        this.finalobj['306-4Q55'] = value.target.value;
    }
    TSFIV56(value) {
        this.finalobj['306-4Q56'] = value.target.value;
    }
    TSFIV57(value) {
        this.finalobj['306-4Q57'] = value.target.value;
    }
    TSFIV58(value) {
        this.finalobj['306-4Q58'] = value.target.value;
    }
    TSFIV59(value) {
        this.finalobj['306-4Q59'] = value.target.value;
    }
    TSFIV60(value) {
        this.finalobj['306-4Q60'] = value.target.value;
    }

    Teo1(value) {
        this.finalobj['308-1Q5'] = value.target.value;
    }
    Teo2(value) {
        this.finalobj['308-1Q2'] = value.target.value;
    }

    addFieldValue301Q1() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl41.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl41.length - 1;
            const lastFuelType = this.lookupdtl41[lastIndex].Materials;
            const lastView = this.lookupdtl41[lastIndex].View;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view.Name; // use the selected option or the first option if no option is selected
        }

        this.newAttribute41 = {
            Materials: '',
            TotalWeight: '',
            Units: '',
            View: defaultView,
        };
        this.lookupdtl41.push(this.newAttribute41);
    }
    addFieldValue301Qii() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl41ii.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl41ii.length - 1;
            const lastFuelType = this.lookupdtl41ii[lastIndex].Materialsii;
            const lastView = this.lookupdtl41ii[lastIndex].Viewii;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view[0].Name; // use the selected option or the first option if no option is selected
        }

        this.newAttribute41ii = {
            Materialsii: '',
            TotalWeightii: '',
            Unitsii: '',
            Viewii: defaultView,
        };
        this.lookupdtl41ii.push(this.newAttribute41ii);
    }
    addFieldValue301Q2() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl42.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl42.length - 1;
            const lastFuelType = this.lookupdtl42[lastIndex].Materials1;
            const lastView = this.lookupdtl42[lastIndex].View1;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view[0].Name; // use the selected option or the first option if no option is selected
        }

        this.newAttribute42 = {
            Materials1: '',
            TotalWeight1: '',
            Unit1: '',
            View1: defaultView,
        };
        this.lookupdtl42.push(this.newAttribute42);
    }
    addFieldValue301Q3() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl43.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl43.length - 1;
            const lastFuelType = this.lookupdtl43[lastIndex].Product;
            const lastView = this.lookupdtl43[lastIndex].view2;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view[0].Name; // use the selected option or the first option if no option is selected
        }

        this.newAttribute43 = {
            Product: '',
            productsPercentage: '',
            Unit2: '',
            View2: defaultView,
        };
        this.lookupdtl43.push(this.newAttribute43);
    }
    addFieldValue302Q1() {
        let defaultView = ''; // default value for View3
        if (this.lookupdtl44.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl44.length - 1;
            const lastFuelType = this.lookupdtl44[lastIndex].FuelType;
            const lastView = this.lookupdtl44[lastIndex].View3;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view[0].Name; // use the selected option or the first option if no option is selected
        }
        const newAttribute44 = {
            FuelType: '',
            TotalFuelConsumption: '',
            Unit3: '',
            View3: defaultView,
        };
        this.lookupdtl44.push(newAttribute44);
        this.reltypeother4 = '';
    }

    addFieldValue302Q1a() {
        let defaultView = ''; // default value for View4
        if (this.lookupdtl44a.length === 0) {
            defaultView = ''; // add an empty view option if the table is empty
        } else {
            const lastIndex = this.lookupdtl44a.length - 1;
            const lastFuelType = this.lookupdtl44a[lastIndex].FuelType1;
            const lastView = this.lookupdtl44a[lastIndex].View4;
            const selectedView = this.view.find(
                (view) => view.Name === lastView
            ); // get the selected option
            defaultView = selectedView ? selectedView.Name : this.view[0].Name; // use the selected option or the first option if no option is selected
        }

        this.newAttribute44a = {
            FuelType1: '',
            TotalFuelConsumption1: '',
            Unit4: '',
            View4: defaultView,
        };
        this.lookupdtl44a.push(this.newAttribute44a);
        this.reltypeother5 = '';
    }

    TeT1(value) {
        this.finalobj['308-2Q1'] = value.target.value;
    }
    TeT2(value) {
        this.finalobj['308-2Q2'] = value.target.value;
    }
    TeT3(value) {
        this.finalobj['308-2Q3'] = value.target.value;
    }
    TeT4(value) {
        this.finalobj['308-2Q4'] = value.target.value;
    }
    TeT5(value) {
        this.finalobj['308-2Q5'] = value.target.value;
    }
    TeT6(value) {
        this.finalobj['308-2Q6'] = value.target.value;
    }
    TeT7(value) {
        this.finalobj['308-2Q7'] = value.target.value;
    }
    TeT8(value) {
        this.finalobj['308-2Q8'] = value.target.value;
    }

    TSO1(value) {
        this.finalobj['307-1Q1'] = value.target.value;
    }
    TSO2(value) {
        this.finalobj['307-1Q2'] = value.target.value;
    }
    TSO3(value) {
        this.finalobj['307-1Q3'] = value.target.value;
    }
    TSO4(value) {
        this.finalobj['307-1Q4'] = value.target.value;
    }
    TSO5(value) {
        this.finalobj['307-1Q5'] = value.target.value;
    }
    TSO6(value) {
        this.finalobj['307-1Q6'] = value.target.value;
    }
    Statementvii(value) {
        this.finalobj['102-22main challenges'] = value.target.value;
    }
    //401-1
    Nehaet1(value) {
        this.finalobj['401-1QA1a'] = value.target.value;
    }
    Nehaet2(value) {
        this.finalobj['401-1QA1b'] = value.target.value;
    }
    Nehaet3(value) {
        this.finalobj['401-1QA1c'] = value.target.value;
    }
    Nehaet4(value) {
        this.finalobj['401-1QA1d'] = value.target.value;
    }
    Nehaet5(value) {
        this.finalobj['401-1QA1e'] = value.target.value;
    }
    Nehaet6(value) {
        this.finalobj['401-1QA1f'] = value.target.value;
    }
    Nehaet7(value) {
        this.finalobj['401-1QA1g'] = value.target.value;
    }
    Nehaet8(value) {
        this.finalobj['401-1QA1h'] = value.target.value;
    }
    Nehaet9(value) {
        this.finalobj['401-1QA1i'] = value.target.value;
    }
    Nehaet10(value) {
        this.finalobj['401-1QA1j'] = value.target.value;
    }
    Nehaet11(value) {
        this.finalobj['401-1QA1k'] = value.target.value;
    }
    Nehaet12(value) {
        this.finalobj['401-1QA1l'] = value.target.value;
    }
    Nehaet13(value) {
        this.finalobj['401-1QA1m'] = value.target.value;
    }
    Nehaet14(value) {
        this.finalobj['401-1QA1n'] = value.target.value;
    }
    Nehaet15(value) {
        this.finalobj['401-1QA1o'] = value.target.value;
    }
    Nehaet16(value) {
        this.finalobj['401-1QA1p'] = value.target.value;
    }
    Nehaet17(value) {
        this.finalobj['401-1QA1q'] = value.target.value;
    }
    Nehaet18(value) {
        this.finalobj['401-1QA1r'] = value.target.value;
    }
    Nehaet19(value) {
        this.finalobj['401-1QA1s'] = value.target.value;
    }
    Nehaet20(value) {
        this.finalobj['401-1QA1t'] = value.target.value;
    }
    Nehaet21(value) {
        this.finalobj['401-1QA1u'] = value.target.value;
    }
    Nehaet22(value) {
        this.finalobj['401-1QA1v'] = value.target.value;
    }
    Nehaet23(value) {
        this.finalobj['401-1QA1w'] = value.target.value;
    }
    Nehaet24(value) {
        this.finalobj['401-1QA1x'] = value.target.value;
    }

    Region401(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Region401' + i.toString())
            )).value
        );
        this.lookupdtlturnover1[i]['Region401'] = (<HTMLInputElement>(
            document.getElementById('Region401' + i.toString())
        )).value;
    }
    totalnewhires401(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('totalnewhires401' + i.toString())
            )).value
        );
        this.lookupdtlturnover1[i]['totalnewhires401'] = (<HTMLInputElement>(
            document.getElementById('totalnewhires401' + i.toString())
        )).value;
    }
    turnover1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('turnover1' + i.toString())
            )).value
        );
        this.lookupdtlturnover1[i]['turnover1'] = (<HTMLInputElement>(
            document.getElementById('turnover1' + i.toString())
        )).value;
    }

    Region401b(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('Region401b' + i.toString())
            )).value
        );
        this.lookupdtlturnover2[i]['Region401b'] = (<HTMLInputElement>(
            document.getElementById('Region401b' + i.toString())
        )).value;
    }
    totalnewhires401b(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('totalnewhires401b' + i.toString())
            )).value
        );
        this.lookupdtlturnover2[i]['totalnewhires401b'] = (<HTMLInputElement>(
            document.getElementById('totalnewhires401b' + i.toString())
        )).value;
    }
    turnover2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('turnover2' + i.toString())
            )).value
        );
        this.lookupdtlturnover2[i]['turnover2'] = (<HTMLInputElement>(
            document.getElementById('turnover2' + i.toString())
        )).value;
    }

    //401-2
    Benefits1(value) {
        this.finalobj['401-2QA1a'] = value.target.value;
    }
    Benefits2(value) {
        this.finalobj['401-2QA1b'] = value.target.value;
    }
    Benefits3(value) {
        this.finalobj['401-2QA1c'] = value.target.value;
    }
    Benefits4(value) {
        this.finalobj['401-2QA1d'] = value.value;
    }
    Benefits5(value) {
        this.finalobj['401-2QA1e'] = value.target.value;
    }
    Grief1(value) {
        this.finalobj['401-2QA1grief1'] = value.target.value;
    }
    Grief2(value) {
        this.finalobj['401-2QA1grief2'] = value.target.value;
    }
    Grief3(value) {
        this.finalobj['401-2QA1grief3'] = value.target.value;
    }
    Grief4(value) {
        this.finalobj['401-2QA1grief4'] = value.target.value;
    }
    Grief5(value) {
        this.finalobj['401-2QA1grief5'] = value.target.value;
    }
    Grief6(value) {
        this.finalobj['401-2QA1grief6'] = value.target.value;
    }
    Benefits6(value) {
        console.log(value);
        if (value.value == 'Yes') {
            this.grig1 = true;
        } else {
            this.grig1 = false;
        }
        this.finalobj['401-2QA1f'] = value.value;
    }
    //403-8
    wcbaohasms1(value) {
        this.finalobj['403-8Q1'] = value.target.value;
    }

    wcbaohasms2(value) {
        this.finalobj['403-8Q2'] = value.target.value;
    }
    wcbaohasms3(value) {
        this.finalobj['403-8Q3'] = value.target.value;
    }

    wcbaohasms4(value) {
        this.finalobj['403-8Q4'] = value.target.value;
    }
    wcbaohasms5(value) {
        this.finalobj['403-8Q5'] = value.target.value;
    }
    wcbaohasms6(value) {
        this.finalobj['403-8Q6'] = value.target.value;
    }
    wcbaohasms7(value) {
        this.finalobj['403-8Q7'] = value.target.value;
    }
    wcbaohasms8(value) {
        this.finalobj['403-8Q8'] = value.target.value;
    }
    wcbaohasms9(value) {
        this.finalobj['403-8QComment'] = value.target.value;
    }

    //401-9
    wrinjuries1(value) {
        this.finalobj['403-9Q1'] = value.target.value;
    }
    wrinjuries2(value) {
        this.finalobj['403-9Q2'] = value.target.value;
    }
    wrinjuries3(value) {
        this.finalobj['403-9Q3'] = value.target.value;
    }
    wrinjuries4(value) {
        this.finalobj['403-9Q4'] = value.target.value;
    }
    wrinjuries5(value) {
        this.finalobj['403-9Q5'] = value.target.value;
    }
    wrinjuries6(value) {
        this.finalobj['403-9Q6'] = value.target.value;
    }
    wrinjuries7(value) {
        this.finalobj['403-9Q7'] = value.target.value;
    }
    wrinjuries8(value) {
        const maxVal = 9999; // Maximum value with 4 digits
        let val = value.target.value.replace(/,/g, ''); // Remove any existing commas
        val = val.replace(/\D/g, ''); // Remove non-digit characters
        if (+val > maxVal) {
          val = val.slice(0, 4); // Slice the value to the maximum allowed length
          value.target.value = val; // Set the input value
          this.showErrorMessage = true; // Display error message
        } else {
          this.showErrorMessage = false; // Hide error message
        this.finalobj['403-9Q8'] = value.target.value;
        }
    }
    wrinjuries9(value) {
        this.finalobj['403-9Q9'] = value.target.value;
    }
    wrinjuries10(value) {
        this.finalobj['403-9Q10'] = value.target.value;
    }
    wrinjuries11(value) {
        this.finalobj['403-9Q11'] = value.target.value;
    }

    wrinjuries12(value) {
        this.finalobj['403-9Q12'] = value.target.value;
    }
    wrinjuries13(value) {
        this.finalobj['403-9Q13'] = value.target.value;
    }
    wrinjuries14(value) {
        this.finalobj['403-9Q14'] = value.target.value;
    }
    wrinjuries15(value) {
        this.finalobj['403-9Q15'] = value.target.value;
    }
    wrinjuries16(value) {
        const maxVal = 9999; // Maximum value with 4 digits
        let val = value.target.value.replace(/,/g, ''); // Remove any existing commas
        val = val.replace(/\D/g, ''); // Remove non-digit characters
        if (+val > maxVal) {
          val = val.slice(0, 4); // Slice the value to the maximum allowed length
          value.target.value = val; // Set the input value
          this.showErrorMessage = true; // Display error message
        } else {
          this.showErrorMessage = false; // Hide error message
        this.finalobj['403-9Q16'] = value.target.value;
        }
    }
    wrinjuries17(value) {
        this.finalobj['403-9Q17'] = value.target.value;
    }
    wrinjuries18(value) {
        this.finalobj['403-9Q18'] = value.target.value;
    }
    wrinjuries19(value) {
        this.finalobj['403-9Q19'] = value.target.value;
    }
    wrinjuries20(value) {
        this.finalobj['403-9Q20'] = value.target.value;
    }
    wrinjuries21(value) {
        this.finalobj['403-9Q21'] = value.value;
    }
    wrinjuries22(value) {
        this.finalobj['403-9Q22'] = value.target.value;
    }
    wrinjuries23(value) {
        this.finalobj['403-9Q23'] = value.target.value;
    }
    wrinjuries24(value) {
        this.finalobj['403-9QComment'] = value.target.value;
    }
    //401-9
    wrih1(value) {
        this.finalobj['403-10Q1'] = value.target.value;
    }
    wrih2(value) {
        this.finalobj['403-10Q2'] = value.target.value;
    }
    wrih3(value) {
        this.finalobj['403-10Q3'] = value.target.value;
    }
    wrih4(value) {
        this.finalobj['403-10Q4'] = value.target.value;
    }
    wrih5(value) {
        this.finalobj['403-10Q5'] = value.target.value;
    }
    wrih6(value) {
        this.finalobj['403-10Q6'] = value.target.value;
    }
    wrih7(value) {
        this.finalobj['403-10Q7'] = value.target.value;
    }
    wrih8(value) {
        this.finalobj['403-10Q8'] = value.target.value;
    }
    wrih9(value) {
        this.finalobj['403-10Q9'] = value.target.value;
    }
    wrih10(value) {
        this.finalobj['403-10Q10'] = value.target.value;
    }
    duck111(value) {
        this.finalobj['seven27'] = value.target.value;
    }
    duck1(value) {
        this.finalobj['seven28'] = value.target.value;
    }
    duck2(value) {
        this.finalobj['seven29'] = value.target.value;
    }
    wrih11(value) {
        this.finalobj['403-10Q11'] = value.target.value;
    }

    wrih12(value) {
        this.finalobj['403-10QComment'] = value.target.value;
    }
    Benefits7(value) {
        if (value.value == 'Yes') {
            this.grig2 = true;
        } else {
            this.grig2 = false;
        }
        this.finalobj['401-2QA1g'] = value.value;
    }
    Benefits8(value) {
        if (value.value == 'Yes') {
            this.grig3 = true;
        } else {
            this.grig3 = false;
        }
        this.finalobj['401-2QA1h'] = value.value;
    }
    www3031i(value) {
        this.finalobj['303-3Q1i'] = value.target.value;
    }
    www3031ii(value) {
        this.finalobj['303-3Q1ii'] = value.target.value;
    }
    www3031iii(value) {
        this.finalobj['303-3Q1iii'] = value.target.value;
    }
    www3031iv(value) {
        this.finalobj['303-3Q1iv'] = value.target.value;
    }
    www3031v(value) {
        this.finalobj['303-3Q1v'] = value.target.value;
    }
    www3031vi(value) {
        this.finalobj['303-3Q1vi'] = value.target.value;
    }

    // www2(value){
    //   this.finalobj["303-3Q2"]=value.target.value;
    // }

    www3032i(value) {
        this.finalobj['303-3Q2i'] = value.target.value;
    }
    www3032ii(value) {
        this.finalobj['303-3Q2ii'] = value.target.value;
    }
    www3032iii(value) {
        this.finalobj['303-3Q2iii'] = value.target.value;
    }
    www3032iv(value) {
        this.finalobj['303-3Q2iv'] = value.target.value;
    }
    www3032v(value) {
        this.finalobj['303-3Q2v'] = value.target.value;
    }
    www3032vi(value) {
        this.finalobj['303-3Q2vi'] = value.target.value;
    }

    // www3(value){
    //   this.finalobj["303-3Q3"]=value.target.value;
    // }

    www30331i(value) {
        this.finalobj['303-3Q3i'] = value.target.value;
    }

    www30331ii(value) {
        this.finalobj['303-3Q3ii'] = value.target.value;
    }

    www30331iii(value) {
        this.finalobj['303-3Q3iii'] = value.target.value;
    }

    www30331iv(value) {
        this.finalobj['303-3Q3iv'] = value.target.value;
    }

    www30331v(value) {
        this.finalobj['303-3Q3v'] = value.target.value;
    }

    www30331vi(value) {
        this.finalobj['303-3Q3vi'] = value.target.value;
    }

    www30331vii(value) {
        this.finalobj['303-3Q3vii'] = value.target.value;
    }

    www30331viii(value) {
        this.finalobj['303-3Q3viii'] = value.target.value;
    }

    www30331ix(value) {
        this.finalobj['303-3Q3ix'] = value.target.value;
    }

    www30331x(value) {
        this.finalobj['303-3Q3x'] = value.target.value;
    }

    // www4(value){
    //   this.finalobj["303-3Q4"]=value.target.value;
    // }
    www30332i(value) {
        this.finalobj['303-3Q32i'] = value.target.value;
    }

    www30332ii(value) {
        this.finalobj['303-3Q32ii'] = value.target.value;
    }

    www30332iii(value) {
        this.finalobj['303-3Q32iii'] = value.target.value;
    }

    www30332iv(value) {
        this.finalobj['303-3Q32iv'] = value.target.value;
    }

    www30332v(value) {
        this.finalobj['303-3Q32v'] = value.target.value;
    }

    www30332vi(value) {
        this.finalobj['303-3Q32vi'] = value.target.value;
    }

    www30332vii(value) {
        this.finalobj['303-3Q32vii'] = value.target.value;
    }

    www30332viii(value) {
        this.finalobj['303-3Q32viii'] = value.target.value;
    }

    www30332ix(value) {
        this.finalobj['303-3Q32ix'] = value.target.value;
    }
    //207-4-b
    OnChangecountry207b(i, value) {
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl207b[i]['country207b'] = value.value;
    }
    changeresidententities(i) {
        this.lookupdtl207b[i]['residententities'] = (<HTMLInputElement>(
            document.getElementById('residententities' + i.toString())
        )).value;
    }
    changePrimaryactivities(i) {
        this.lookupdtl207b[i]['Primaryactivities'] = (<HTMLInputElement>(
            document.getElementById('Primaryactivities' + i.toString())
        )).value;
    }
    changetotalEmployees(i) {
        this.lookupdtl207b[i]['totalEmployees'] = (<HTMLInputElement>(
            document.getElementById('totalEmployees' + i.toString())
        )).value;
    }
    changebasisofcalculation(i) {
        this.lookupdtl207b[i]['basisofcalculation'] = (<HTMLInputElement>(
            document.getElementById('basisofcalculation' + i.toString())
        )).value;
    }
    deleteQ207b(index) {
        this.lookupdtl207b.splice(index, 1);
    }
    www30332x(value) {
        this.finalobj['303-3Q32x'] = value.target.value;
    }
    Benefits9(value) {
        if (value.value == 'Yes') {
            this.grig4 = true;
        } else {
            this.grig4 = false;
        }
        this.finalobj['401-2QA1i'] = value.value;
    }
    Benefits10(value) {
        if (value.value == 'Yes') {
            this.grig5 = true;
        } else {
            this.grig5 = false;
        }
        this.finalobj['401-2QA1j'] = value.value;
    }
    Benefits11(value) {
        if (value.value == 'Yes') {
            this.grig6 = true;
        } else {
            this.grig6 = false;
        }
        this.finalobj['401-2QA1k'] = value.value;
    }
    Benefits14(value) {
        this.finalobj['401-2QA1l'] = value.target.value;
    }
    Benefits12(value) {
        this.finalobj['401-2QB'] = value.target.value;
    }
    Benefits13(value) {
        this.finalobj['401-2comment'] = value.target.value;
    }

    //401-3
    Parent1(value) {
        this.finalobj['401-3Q1'] = value.target.value;
    }
    Parent2(value) {
        this.finalobj['401-3Q2'] = value.target.value;
    }
    addFieldValue2074b() {
        this.newAttribute207b = {
            country207b: '',
            residententities: '',
            Primaryactivities: '',
            totalEmployees: '',
            basisofcalculation: '',
        };
        this.lookupdtl207b.push(this.newAttribute207b);
    }
    Parent3(value) {
        this.finalobj['401-3Q3'] = value.target.value;
    }
    Parent4(value) {
        this.finalobj['401-3Q4'] = value.target.value;
    }
    Parent5(value) {
        this.finalobj['401-3Q5'] = value.target.value;
    }
    Parent6(value) {
        this.finalobj['401-3Q6'] = value.target.value;
    }
    Parent7(value) {
        this.finalobj['401-3Q7'] = value.target.value;
    }
    tax1b(value) {
        this.finalobj['207-1question1a'] = value.target.value;
    }

    Parent8(value) {
        this.finalobj['401-3Q8'] = value.target.value;
    }
    Parent9(value) {
        this.finalobj['401-3Q9'] = value.target.value;
    }
    Parent10(value) {
        this.finalobj['401-3Q10'] = value.target.value;
    }
    Parent11(value) {
        this.finalobj['401-3Q11'] = value.target.value;
    }

    Parent12(value) {
        this.finalobj['401-3Q12'] = value.target.value;
    }
    Parent13(value) {
        this.finalobj['401-3comment'] = value.target.value;
    }
    //402-1
    mnproca1(value) {
        const maxVal = 52;
        let val = value.target.value;
        if (val > maxVal) {
            val = val.slice(0, 1); // slice the value to the maximum allowed length
            value.target.value = val; // set the input value to the sliced value
        }
        this.finalobj['402-1Q1'] = value.target.value;
    }
    showErrorMessage = false;

    checkInputValue(event: any) {
        const maxVal = 52;
        let val = event.target.value;
        if (val > maxVal) {
            val = val.slice(0, 1); // slice the value to the maximum allowed length
            event.target.value = val; // set the input value to the sliced value
            this.showErrorMessage = true; // display error message
        } else {
            this.showErrorMessage = false; // hide error message
            this.finalobj['402-1Q1'] = val; // update finalobj
        }
    }
    mnproca2(value) {
        this.finalobj['402-1Q2'] = value.target.value;
    }
    mnproca3(value) {
        this.finalobj['402-1QComment'] = value.target.value;
    }
    //403-1
    ohasmss1(value) {
        this.finalobj['403-1Q1'] = value.target.value;
    }
    ohasmss2(value) {
        this.finalobj['403-1Q2'] = value.target.value;
    }
    ohasmss3(value) {
        this.finalobj['403-1Q3'] = value.target.value;
    }
    ohasmss4(value) {
        this.finalobj['403-1QComment'] = value.target.value;
    }
    //403-2
    hiraaii1(value) {
        this.finalobj['403-2Q1'] = value.target.value;
    }
    hiraaii2(value) {
        this.finalobj['403-2Q2'] = value.target.value;
    }
    hiraaii3(value) {
        this.finalobj['403-2Q3'] = value.target.value;
    }
    hiraaii4(value) {
        this.finalobj['403-2Q4'] = value.target.value;
    }
    hiraaii5(value) {
        this.finalobj['403-2Q5'] = value.target.value;
    }
    hiraaii6(value) {
        this.finalobj['403-2QComment'] = value.target.value;
    }
    //403-3
    ohs1(value) {
        this.finalobj['403-3Q1'] = value.target.value;
    }
    ohs2(value) {
        this.finalobj['403-3QComment'] = value.target.value;
    }

    //403-4
    wpcacoohas1(value) {
        this.finalobj['403-4Q1'] = value.target.value;
    }
    wpcacoohas2(value) {
        this.finalobj['403-4Q2'] = value.target.value;
    }
    wpcacoohas3(value) {
        this.finalobj['403-4QComment'] = value.target.value;
    }
    //403-5
    wtoohas1(value) {
        this.finalobj['403-5Q1'] = value.target.value;
    }
    wtoohas2(value) {
        this.finalobj['403-5QComment'] = value.target.value;
    }
    //403-6
    powh1(value) {
        this.finalobj['403-6Q1'] = value.target.value;
    }
    powh2(value) {
        this.finalobj['403-6Q2'] = value.target.value;
    }
    powh3(value) {
        this.finalobj['403-6QComment'] = value.target.value;
    }
    //403-7
    pamoohasid1(value) {
        this.finalobj['403-7Q1'] = value.target.value;
    }
    pamoohasid2(value) {
        this.finalobj['403-7QComment'] = value.target.value;
    }
    //End
    //social
    empy1(event: any) {
        const maxVal = 9999; // Maximum value with 4 digits
        let val = event.target.value.replace(/,/g, ''); // Remove any existing commas
        val = val.replace(/\D/g, ''); // Remove non-digit characters
        if (+val > maxVal) {
          val = val.slice(0, 4); // Slice the value to the maximum allowed length
          event.target.value = val; // Set the input value
          this.showErrorMessage = true; // Display error message
        } else {
          this.showErrorMessage = false; // Hide error message
          this.finalobj['404-1Q1'] = val; // Update finalobj
        }
    }

    empy2(event) {
        const maxVal = 9999; // Maximum value with 4 digits
        let val = event.target.value.replace(/,/g, ''); // Remove any existing commas
        val = val.replace(/\D/g, ''); // Remove non-digit characters
        if (+val > maxVal) {
          val = val.slice(0, 4); // Slice the value to the maximum allowed length
          event.target.value = val; // Set the input value
          this.showErrorMessage = true; // Display error message
        } else {
          this.showErrorMessage = false; // Hide error message
          this.finalobj['404-1Q2'] = val; // Update finalobj
        }
      }
      
    empy3(value) {
        this.finalobj['404-2Q1'] = value.target.value;
    }
    empy4(value) {
        this.finalobj['404-2Q2'] = value.target.value;
    }
    empy5(value) {
        this.finalobj['404-3Q1'] = value.target.value;
    }
    empy6(value) {
        this.finalobj['404-3Q2'] = value.target.value;
    }
    empy7(value) {
        this.finalobj['405-1Q1'] = value.target.value;
    }
    empy8(value) {
        this.finalobj['405-1Q2'] = value.target.value;
    }
    empy9(value) {
        this.finalobj['405-1Q3'] = value.target.value;
    }
    empy10(value) {
        this.finalobj['405-1Q4'] = value.target.value;
    }
    empy11(value) {
        this.finalobj['405-1Q5'] = value.target.value;
    }

    emputa7(value) {
        this.finalobj['405-1Q7'] = value.target.value;
    }
    emputa8(value) {
        this.finalobj['405-1Q8'] = value.target.value;
    }
    emputa9(value) {
        this.finalobj['405-1Q9'] = value.target.value;
    }
    emputa10(value) {
        this.finalobj['405-1Q10'] = value.target.value;
    }
    emputa11(value) {
        this.finalobj['405-1Q11'] = value.target.value;
    }

    empy12(value) {
        this.finalobj['405-2Q2'] = value.target.value;
    }
    empy13(value) {
        this.finalobj['406-1Q1'] = value.target.value;
    }
    empy14(value) {
        this.finalobj['406-1Q2'] = value.target.value;
    }
    empy15(value) {
        this.finalobj['406-1Q3'] = value.target.value;
    }
    empy16(value) {
        this.finalobj['406-1Q4'] = value.target.value;
    }

    empy17(value) {
        this.finalobj['406-1Q5'] = value.target.value;
    }
    empy18(value) {
        this.finalobj['407-1Q1'] = value.target.value;
    }
    empy19(value) {
        this.finalobj['407-1Q2'] = value.target.value;
    }

    empy20(value) {
        this.finalobj['407-1Q3'] = value.target.value;
    }

    empy21(value) {
        this.finalobj['408-1Q1'] = value.target.value;
    }

    empy22(value) {
        this.finalobj['408-1Q2'] = value.target.value;
    }
    empy23(value) {
        this.finalobj['408-1Q3'] = value.target.value;
    }
    empy24(value) {
        this.finalobj['408-1Q4'] = value.target.value;
    }

    empy25(value) {
        this.finalobj['408-1Q5'] = value.target.value;
    }

    empy26(value) {
        this.finalobj['409-1Q1'] = value.target.value;
    }

    empy27(value) {
        this.finalobj['409-1Q2'] = value.target.value;
    }
    empy28(value) {
        this.finalobj['409-1Q3'] = value.target.value;
    }

    empy29(value) {
        this.finalobj['410-1Q1'] = value.target.value;
    }

    empy31(value) {
        this.finalobj['411-1Q1'] = value.target.value;
    }

    empy33(value) {
        this.finalobj['411-1Q3'] = value.target.value;
    }
    empy34(value) {
        this.finalobj['411-1Q4'] = value.target.value;
    }

    empy36(value) {
        this.finalobj['102-23q6'] = value.target.value;
    }

    empy37(value) {
        this.finalobj['102-23q7'] = value.target.value;
    }
    empy30(value) {
        console.log(value.value);
        console.log(typeof this.finalobj['410-1Q2']);

        this.finalobj['410-1Q2'] = value.value;
    }
    empy32(value) {
        console.log(value.value);

        this.finalobj['411-1Q2'] = value.value;
    }
    empy35(value) {
        console.log(value.value);

        this.finalobj['411-1Q5'] = value.value;
    }

    empy38(value) {
        this.finalobj['102-23q58'] = value.target.value;
    }

    empy39(value) {
        this.finalobj['102-23q9'] = value.target.value;
    }
    empy40(value) {
        this.finalobj['102-23q10'] = value.target.value;
    }
    Eit31(value) {
        this.finalobj['302-3Q3'] = value.target.checked;
    }
    Eit32(value) {
        this.finalobj['302-3Q3'] = value.target.checked;
    }
    Eit33(value) {
        this.finalobj['302-3Q3'] = value.target.checked;
    }
    Eit34(value) {
        this.finalobj['302-3Q3'] = value.target.checked;
    }
    Eit35(value) {
        this.finalobj['302-3Q3'] = value.target.checked;
    }

    osol55(i) {
        console.log(
            (<HTMLInputElement>document.getElementById('osol55' + i.toString()))
                .value
        );
        this.lookupdtl3045[i]['osol55'] = (<HTMLInputElement>(
            document.getElementById('osol55' + i.toString())
        )).value;
    }
    apple1(value) {
        this.finalobj['305-7Q1'] = value.target.value;
    }
    apple2(value) {
        this.finalobj['305-7Q2'] = value.value;
    }
    apple3(value) {
        this.finalobj['305-7Q3'] = value.value;
    }
    apple4(value) {
        this.finalobj['305-7Q4'] = value.target.value;
    }
    apple5(value) {
        this.finalobj['305-7Q5'] = value.value;
    }
    apple6(value) {
        this.finalobj['305-7Q6'] = value.value;
    }
    apple7(value) {
        this.finalobj['305-7Q7'] = value.target.value;
    }
    apple8(value) {
        this.finalobj['305-7Q8'] = value.value;
    }
    apple9(value) {
        this.finalobj['305-7Q9'] = value.value;
    }
    apple10(value) {
        this.finalobj['305-7Q10'] = value.target.value;
    }
    apple11(value) {
        this.finalobj['305-7Q11'] = value.value;
    }
    apple12(value) {
        this.finalobj['305-7Q12'] = value.value;
    }
    apple13(value) {
        this.finalobj['305-7Q13'] = value.target.value;
    }
    apple14(value) {
        this.finalobj['305-7Q14'] = value.value;
    }
    apple15(value) {
        this.finalobj['305-7Q15'] = value.value;
    }
    apple16(value) {
        this.finalobj['305-7Q16'] = value.target.value;
    }
    apple17(value) {
        this.finalobj['305-7Q17'] = value.value;
    }
    apple18(value) {
        this.finalobj['305-7Q18'] = value.value;
    }
    apple19(value) {
        this.finalobj['305-7Q19'] = value.target.value;
    }
    apple20(value) {
        this.finalobj['305-7Q20'] = value.value;
    }
    apple21(value) {
        this.finalobj['305-7Q21'] = value.value;
    }
    apple22(value) {
        this.finalobj['305-7Q22'] = value.target.value;
    }
    apple23(value) {
        this.finalobj['305-7Q23'] = value.target.value;
    }
    apple24(value) {
        this.finalobj['305-7Q24'] = value.target.value;
    }

    //413-2
    // olocalcomm1(value) {
    //   console.log(value.value);

    //     this.finalobj["413-2Q1"] =  value.target.value;
    //   }

    //   olocalcomm2(value){
    //   this.finalobj["413-2Q2"] = value.target.value;

    // }
    // olocalcomm3(value){
    //   this.finalobj["413-2Q3"] = value.target.value;

    // }
    // olocalcomm4(value){
    //   console.log(value.value);

    //   this.finalobj["413-2Q4"] = value.value;

    // }
    // olocalcomm5(value){
    //   this.finalobj["413-2Q5"] = value.target.value;

    // }
    // olocalcomm6(value){
    //   this.finalobj["413-2Q6"] = value.target.value;

    // }
    olocalcomm7(value) {
        this.finalobj['413-2Q7'] = value.target.value;
    }

    nstwsusc1(value) {
        this.finalobj['414-1Q1'] = value.target.value;
    }
    nstwsusccomment(value) {
        this.finalobj['414-1Q2'] = value.target.value;
    }

    //414-2

    nstwsuscrev1(value) {
        this.finalobj['414-2Q1'] = value.target.value;
    }
    nstwsuscrev2(value) {
        this.finalobj['414-2Q2'] = value.target.value;
    }
    nstwsuscrev3(value) {
        this.finalobj['414-2Q3'] = value.target.value;
    }
    nstwsuscrev4(value) {
        this.finalobj['414-2Q4'] = value.target.value;
    }
    nstwsuscrev5(value) {
        this.finalobj['414-2Q5'] = value.target.value;
    }
    nstwsuscrev6(value) {
        this.finalobj['414-2Q6'] = value.target.value;
    }
    nstwsuscrev7(value) {
        this.finalobj['414-2Q7'] = value.target.value;
    }
    //415-1
    revanent6(value) {
        this.finalobj['415-1Q2'] = value.target.value;
    }

    //416-1
    wraith1(value) {
        this.finalobj['416-1Q1'] = value.target.value;
    }
    wraith2(value) {
        this.finalobj['416-1Q2'] = value.target.value;
    }

    //416-2

    bloodhound1(value) {
        this.finalobj['416-2Q1'] = value.target.value;
    }
    bloodhound2(value) {
        this.finalobj['416-2Q2'] = value.target.value;
    }
    bloodhound3(value) {
        this.finalobj['416-2Q3'] = value.target.value;
    }
    bloodhound4(value) {
        this.finalobj['416-2Q4'] = value.target.value;
    }
    bloodhound5(value) {
        this.finalobj['416-2Q5'] = value.target.value;
    }

    //417-1
    gibraltar1(value) {
        this.finalobj['417-1Q1'] = value.value;
    }
    gibraltar2(value) {
        this.finalobj['417-1Q2'] = value.value;
    }
    gibraltar3(value) {
        this.finalobj['417-1Q3'] = value.value;
    }
    gibraltar4(value) {
        this.finalobj['417-1Q4'] = value.value;
    }
    gibraltar5(value) {
        this.finalobj['417-1Q5'] = value.target.value;
    }
    gibraltar6(value) {
        this.finalobj['417-1Q6'] = value.target.value;
    }
    gibraltar7(value) {
        this.finalobj['417-1Q7'] = value.target.value;
    }
    get f() {
        return this.gdform.controls;
    }

    //417-2
    lifeline1(value) {
        this.finalobj['417-2Q1'] = value.target.value;
    }
    lifeline2(value) {
        this.finalobj['417-2Q2'] = value.target.value;
    }
    lifeline3(value) {
        this.finalobj['417-2Q3'] = value.target.value;
    }
    lifeline4(value) {
        this.finalobj['417-2Q4'] = value.target.value;
    }
    lifeline5(value) {
        this.finalobj['417-2Q5'] = value.target.value;
    }

    //417-3
    caustic1(value) {
        this.finalobj['417-3Q1'] = value.target.value;
    }
    caustic2(value) {
        this.finalobj['417-3Q2'] = value.target.value;
    }
    caustic3(value) {
        this.finalobj['417-3Q3'] = value.target.value;
    }
    caustic4(value) {
        this.finalobj['417-3Q4'] = value.target.value;
    }
    caustic5(value) {
        this.finalobj['417-3Q5'] = value.target.value;
    }
    //418-1
    newcastle1(value) {
        this.finalobj['418-1Q1'] = value.target.value;
    }
    newcastle2(value) {
        this.finalobj['418-1Q2'] = value.target.value;
    }
    newcastle3(value) {
        this.finalobj['418-1Q3'] = value.target.value;
    }
    newcastle4(value) {
        this.finalobj['418-1Q4'] = value.target.value;
    }
    newcastle5(value) {
        this.finalobj['418-1Q5'] = value.target.value;
    }

    //419-1

    ash1(value) {
        this.finalobj['419-1Q1'] = value.target.value;
    }
    ash2(value) {
        this.finalobj['419-1Q2'] = value.value;
    }
    ash3(value) {
        this.finalobj['419-1Q3'] = value.target.value;
    }
    ash4(value) {
        this.finalobj['419-1Q4'] = value.target.value;
    }
    ash5(value) {
        this.finalobj['419-1Q5'] = value.target.value;
    }
    addFieldValue27bi() {
        this.newAttribute27bi = { compir5bi: '', compir6bi: '', compir7bi: '' };
        this.lookupdtl27bi.push(this.newAttribute27bi);
    }
    addFieldValue27bii() {
        this.newAttribute27bii = {
            compir5bii: '',
            compir6bii: '',
            compir7bii: '',
        };
        this.lookupdtl27bii.push(this.newAttribute27bii);
    }
    ash6(value) {
        this.finalobj['419-1Q4'] = value.target.value;
    }
    ash7(value) {
        this.finalobj['419-1Q5'] = value.target.value;
    }
    revanent5(value) {
        this.finalobj['415-1Q22'] = value.target.value;
    }
    //delete tables
    //300seies

    deleteQ301a(i) {
        this.lookupdtl41.splice(i, 1);
    }
    addFieldValueeco() {
        this.newAttributeeco = { eco5: '', currencyeco8: '', eco599: '' };
        this.lookupdtleco.push(this.newAttributeeco);
    }

    deleteQ301b(i) {
        this.lookupdtl41ii.splice(i, 1);
    }
    //201-2-5

    deleteQ3012(i) {
        this.lookupdtl42.splice(i, 1);
    }
    deleteQ3013(i) {
        this.lookupdtl43.splice(i, 1);
    }
    //200 series

    ecofour17iia(value) {
        console.log(value);
        if (value == 'Yes') {
            this.explainyesclicked1 = true;
        } else {
            this.explainyesclicked1 = false;
        }
        this.finalobj['201-4question18'] = value;
    }
    ecofour17iii(value) {
        this.finalobj['201-4question19'] = value.target.value;
    }

    deleteQ2022(i) {
        this.lookupdtl4.splice(i, 1);
    }
    deleteQ2041(i) {
        this.lookupdtl5.splice(i, 1);
    }

    deleteQ205a(i) {
        this.lookupdtl6.splice(i, 1);
    }
    deleteQ205b(i) {
        this.lookupdtl7.splice(i, 1);
    }
    deleteQ205c(i) {
        this.lookupdtl8.splice(i, 1);
    }
    deleteQ205d(i) {
        this.lookupdtl9.splice(i, 1);
    }
    deleteQ205e(i) {
        this.lookupdtl10.splice(i, 1);
    }
    deleteQ2053(i) {
        this.lookupdtl11.splice(i, 1);
    }
    deleteQ2071(i) {
        this.lookupdtl12.splice(i, 1);
    }

    //400series
    deleteQ4041(i) {
        this.lookupdtl50.splice(i, 1);
    }

    deleteQ4043(i) {
        this.lookupdtl51.splice(i, 1);
    }

    deleteQ4051(i) {
        this.lookupdtl52.splice(i, 1);
    }
    deleteQ4051puta(i) {
        this.lookupdtl52puta.splice(i, 1);
    }
    deleteQ4052(i) {
        this.lookupdtl53.splice(i, 1);
    }
    deleteQ4121(i) {
        this.lookupdtl54.splice(i, 1);
    }
    deleteQ4131(i) {
        this.lookup413.splice(i, 1);
    }
    //100 series
    deleteQ102a(i) {
        this.lookupdtl.splice(i, 1);
    }
    deleteQ102b(i) {
        this.lookupdtl2x.splice(i, 1);
    }
    deleteQ10261(i) {
        this.lookupdtl1.splice(i, 1);
    }

    deleteQ10262(i) {
        this.lookupdtl2.splice(i, 1);
    }
    //materials
    mtptdmt1(value) {
        this.finalobj['Material-1Q1'] = value.target.value;
    }

    mtptdmt2(value) {
        this.finalobj['Material-1Q2'] = value.target.value;
    }

    mtptdmt3(value) {
        this.finalobj['Material-1Q3'] = value.target.value;
    }
    yessorno11(value) {
        if (value == 'Independent') {
            this.evaluationtruef = true;
        } else {
            this.evaluationtruef = false;
        }
        console.log(value);

        this.finalobj['102-18Whether'] = value;
        // if(this.finalobj["102-18Whether"]!=null){
        //   this.evaluationtruef=true;
        // }
        // else{
        //   this.evaluationtruef=false;
        // }
    }

    Evaluation1(value) {
        this.finalobj['102-18Whether frequency'] = value.value;
    }

    mtptdmtone1(value) {
        this.finalobj['Material-2Q1'] = value.value;
    }

    mtptdmtone2(value) {
        this.finalobj['Material-2Q2'] = value.target.value;
    }
    onDone() {
        // Do something when the "Done" button is clicked, such as close the dropdown
    }
    private _filter(CountryName: string): String[] {
        const filterValue = CountryName.toLowerCase();
        // Set selected values to retain the selected checkbox state
        this.setSelectedValues();
        this.selectFormControl.patchValue(this.selectedValues);
        let filteredList = this.data.filter(
            (option) => option.toLowerCase().indexOf(filterValue) === 0
        );
        return filteredList;
    }

    clearSearch(event) {
        event.stopPropagation();
        this.searchTextboxControl.patchValue('');
    }

    openedChange(e) {
        // Set search textbox value as empty while opening selectbox
        this.searchTextboxControl.patchValue('');
        // Focus to search textbox while clicking on selectbox
        if (e == true) {
            this.searchTextBox.nativeElement.focus();
        }
    }

    addFieldgender1() {
        this.newAttribute2in7 = {
            Male1: '',
            Female1: '',
            others1: '',
            Locationlist1: '',
            total1: '',
        };
        this.lookup2in7.push(this.newAttribute2in7);
    }
    addFieldgender2() {
        this.newAttribute2in7bi = {
            genderMale1: '',
            genderFemale1: '',
            genderothers1: '',
            genderLocationlist1: '',
            gendertotal1: '',
        };
        this.lookup2in7bi.push(this.newAttribute2in7bi);
    }
    addFieldgender3() {
        this.newAttribute2in7bii = {
            genderMale2: '',
            genderFemale2: '',
            genderothers2: '',
            genderLocationlist2: '',
            gendertotal2: '',
        };
        this.lookup2in7bii.push(this.newAttribute2in7bii);
    }
    addFieldgender4() {
        this.newAttribute2in7biii = {
            genderMale3: '',
            genderFemale3: '',
            genderothers3: '',
            genderLocationlist3: '',
            gendertotal3: '',
        };
        this.lookup2in7biii.push(this.newAttribute2in7biii);
    }
    addFieldgender5() {
        this.newAttribute2in7biv = {
            genderMale4: '',
            genderFemale4: '',
            genderothers4: '',
            genderLocationlist4: '',
            gendertotal4: '',
        };
        this.lookup2in7biv.push(this.newAttribute2in7biv);
    }
    addFieldgender6() {
        this.newAttribute2in7bv = {
            genderMale5: '',
            genderFemale5: '',
            genderothers5: '',
            genderLocationlist5: '',
            gendertotal5: '',
        };
        this.lookup2in7bv.push(this.newAttribute2in7bv);
    }
    setSelectedValues() {
        console.log('selectFormControl', this.selectFormControl.value);
        if (
            this.selectFormControl.value &&
            this.selectFormControl.value.length > 0
        ) {
            this.selectFormControl.value.forEach((e) => {
                if (this.selectedValues.indexOf(e) == -1) {
                    this.selectedValues.push(e);
                }
            });
        }
    }

    deleteQ3021a(i) {
        this.lookupdtl44a.splice(i, 1);
    }
    deleteQ3021(i) {
        this.lookupdtl44.splice(i, 1);
    }
    Ecwo3i(value) {
        this.finalobj['302-1Q3i'] = value.target.value;
    }
    Ecwo3ii(value) {
        this.finalobj['302-1Q3ii'] = value.target.value;
    }
    Ecwo3iii(value) {
        this.finalobj['302-1Q3iii'] = value.target.value;
    }
    Ecwo3iv(value) {
        this.finalobj['302-1Q3iv'] = value.target.value;
    }
    Ecwo4i(value) {
        this.finalobj['302-1Q4i'] = value.target.value;
    }
    Ecwo4ii(value) {
        this.finalobj['302-1Q4ii'] = value.target.value;
    }
    Ecwo4iii(value) {
        this.finalobj['302-1Q4iii'] = value.target.value;
    }
    Ecwo4iv(value) {
        this.finalobj['302-1Q4iv'] = value.target.value;
    }
    deleteosol5(index) {
        this.lookupdtl3045.splice(index, 1);
    }
    deleteturnover1(index) {
        this.lookupdtlturnover1.splice(index, 1);
    }
    deleteturnover2(index) {
        this.lookupdtlturnover2.splice(index, 1);
    }
    deletemh2(index) {
        this.lookup.splice(index, 1);
    }
    deletemh3(index) {
        this.lookup1.splice(index, 1);
    }
    deletemh4(index) {
        this.lookup2.splice(index, 1);
    }

    deleteecothree2(index) {
        this.lookup4.splice(index, 1);
    }
    deleteecothree3(index) {
        this.lookup5.splice(index, 1);
    }
    deleteecothree4(index) {
        this.lookup6.splice(index, 1);
    }
    deleteecothree5(index) {
        this.lookup7.splice(index, 1);
    }
    addValue9() {
        this.newAttribute14 = { ecofour1: '', currencyecofour1: '' };
        this.lookup9.push(this.newAttribute14);
    }
    addValue10() {
        this.newAttribute15 = { ecofour2: '', currencyecofour2: '' };
        this.lookup10.push(this.newAttribute15);
    }
    addValue11() {
        this.newAttribute16 = { ecofour3: '', currencyecofour3: '' };
        this.lookup11.push(this.newAttribute16);
    }
    addValue12() {
        this.newAttribute17 = { ecofour4: '', currencyecofour4: '' };
        this.lookup12.push(this.newAttribute17);
    }
    addValue13() {
        this.newAttribute18 = { ecofour5: '', currencyecofour5: '' };
        this.lookup13.push(this.newAttribute18);
    }
    addValue14() {
        this.newAttribute19 = { ecofour6: '', currencyecofour6: '' };
        this.lookup14.push(this.newAttribute19);
    }
    addValue15() {
        this.newAttribute20 = { ecofour7: '', currencyecofour7: '' };
        this.lookup15.push(this.newAttribute20);
    }
    addValue16() {
        this.newAttribute21 = { ecofour8: '', currencyecofour8: '' };
        this.lookup16.push(this.newAttribute21);
    }
    addValue17() {
        this.newAttribute22 = { ecofour9: '', currencyecofour9: '' };
        this.lookup17.push(this.newAttribute22);
    }
    addValue18() {
        this.newAttribute23 = { ecofour10: '', currencyecofour10: '' };
        this.lookup18.push(this.newAttribute23);
    }
    addValue19() {
        this.newAttribute24 = { ecofour11: '', currencyecofour11: '' };
        this.lookup19.push(this.newAttribute24);
    }
    addValue20() {
        this.newAttribute25 = { ecofour12: '', currencyecofour12: '' };
        this.lookup20.push(this.newAttribute25);
    }
    addValue21() {
        this.newAttribute26 = { ecofour13: '', currencyecofour13: '' };
        this.lookup21.push(this.newAttribute26);
    }
    addValue22() {
        this.newAttribute27 = { ecofour14: '', currencyecofour14: '' };
        this.lookup22.push(this.newAttribute27);
    }
    addValue23() {
        this.newAttribute28 = { ecofour15: '', currencyecofour15: '' };
        this.lookup23.push(this.newAttribute28);
    }
    changeecofour1(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour1' + i.toString())
            )).value
        );
        this.lookup9[i]['ecofour1'] = (<HTMLInputElement>(
            document.getElementById('ecofour1' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour1(i, value) {
        this.lookup9[i]['currencyecofour1'] = value.value;
    }

    changeecofour2(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour2' + i.toString())
            )).value
        );
        this.lookup10[i]['ecofour2'] = (<HTMLInputElement>(
            document.getElementById('ecofour2' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour2(i, value) {
        this.lookup10[i]['currencyecofour2'] = value.value;
    }

    changeecofour3(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour3' + i.toString())
            )).value
        );
        this.lookup11[i]['ecofour3'] = (<HTMLInputElement>(
            document.getElementById('ecofour3' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour3(i, value) {
        this.lookup11[i]['currencyecofour3'] = value.value;
    }

    changeecofour4(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour4' + i.toString())
            )).value
        );
        this.lookup12[i]['ecofour4'] = (<HTMLInputElement>(
            document.getElementById('ecofour4' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour4(i, value) {
        this.lookup12[i]['currencyecofour4'] = value.value;
    }

    changeecofour5(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour5' + i.toString())
            )).value
        );
        this.lookup13[i]['ecofour5'] = (<HTMLInputElement>(
            document.getElementById('ecofour5' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour5(i, value) {
        this.lookup13[i]['currencyecofour5'] = value.value;
    }

    changeecofour6(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour6' + i.toString())
            )).value
        );
        this.lookup14[i]['ecofour6'] = (<HTMLInputElement>(
            document.getElementById('ecofour6' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour6(i, value) {
        this.lookup14[i]['currencyecofour6'] = value.value;
    }

    changeecofour7(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour7' + i.toString())
            )).value
        );
        this.lookup15[i]['ecofour7'] = (<HTMLInputElement>(
            document.getElementById('ecofour7' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour7(i, value) {
        this.lookup15[i]['currencyecofour7'] = value.value;
    }

    changeecofour8(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour8' + i.toString())
            )).value
        );
        this.lookup16[i]['ecofour8'] = (<HTMLInputElement>(
            document.getElementById('ecofour8' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour8(i, value) {
        this.lookup16[i]['currencyecofour8'] = value.value;
    }

    changeecofour9(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour9' + i.toString())
            )).value
        );
        this.lookup17[i]['ecofour9'] = (<HTMLInputElement>(
            document.getElementById('ecofour9' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour9(i, value) {
        this.lookup17[i]['currencyecofour9'] = value.value;
    }

    changeecofour10(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour10' + i.toString())
            )).value
        );
        this.lookup18[i]['ecofour10'] = (<HTMLInputElement>(
            document.getElementById('ecofour10' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour10(i, value) {
        this.lookup18[i]['currencyecofour10'] = value.value;
    }

    changeecofour11(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour11' + i.toString())
            )).value
        );
        this.lookup19[i]['ecofour11'] = (<HTMLInputElement>(
            document.getElementById('ecofour11' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour11(i, value) {
        this.lookup19[i]['currencyecofour11'] = value.value;
    }

    changeecofour12(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour12' + i.toString())
            )).value
        );
        this.lookup20[i]['ecofour12'] = (<HTMLInputElement>(
            document.getElementById('ecofour12' + i.toString())
        )).value;
    }
    addFieldValue3043a() {
        this.newAttribute3043a = {
            hpr1size: '',
            hpr1units: '',
            hpr1location: '',
            hpr1: '',
        };
        this.lookupdtl304a.push(this.newAttribute3043a);
    }
    OnChangecurrencyecofour12(i, value) {
        this.lookup20[i]['currencyecofour12'] = value.value;
    }
    changeecofour13(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour13' + i.toString())
            )).value
        );
        this.lookup21[i]['ecofour13'] = (<HTMLInputElement>(
            document.getElementById('ecofour13' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour13(i, value) {
        this.lookup21[i]['currencyecofour13'] = value.value;
    }

    changeecofour14(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour14' + i.toString())
            )).value
        );
        this.lookup22[i]['ecofour14'] = (<HTMLInputElement>(
            document.getElementById('ecofour14' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour14(i, value) {
        this.lookup22[i]['currencyecofour14'] = value.value;
    }

    changeecofour15(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour15' + i.toString())
            )).value
        );
        this.lookup23[i]['ecofour15'] = (<HTMLInputElement>(
            document.getElementById('ecofour15' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour15(i, value) {
        this.lookup23[i]['currencyecofour15'] = value.value;
    }

    changeecofour16(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('ecofour16' + i.toString())
            )).value
        );
        this.lookup24[i]['ecofour16'] = (<HTMLInputElement>(
            document.getElementById('ecofour16' + i.toString())
        )).value;
    }
    OnChangecurrencyecofour16(i, value) {
        this.lookup24[i]['currencyecofour16'] = value.value;
    }

    addValue24() {
        this.newAttribute29 = { ecofour16: '', currencyecofour16: '' };
        this.lookup24.push(this.newAttribute29);
    }
    deleteecothree7(index) {
        this.lookup8.splice(index, 1);
    }
    deleteecofour1(index) {
        this.lookup9.splice(index, 1);
    }
    deleteecofour2(index) {
        this.lookup10.splice(index, 1);
    }
    deleteecofour3(index) {
        this.lookup11.splice(index, 1);
    }
    deleteecofour4(index) {
        this.lookup12.splice(index, 1);
    }
    private filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.companylist.filter((option) =>
            option.toLowerCase().includes(filterValue)
        );
    }
    deleteecofour5(index) {
        this.lookup13.splice(index, 1);
    }
    deleteecofour6(index) {
        this.lookup14.splice(index, 1);
    }
    deleteecofour7(index) {
        this.lookup15.splice(index, 1);
    }
    deleteecofour8(index) {
        this.lookup16.splice(index, 1);
    }
    deleteecofour9(index) {
        this.lookup17.splice(index, 1);
    }
    deleteecofour10(index) {
        this.lookup18.splice(index, 1);
    }
    deleteecofour11(index) {
        this.lookup19.splice(index, 1);
    }
    deleteecofour12(index) {
        this.lookup20.splice(index, 1);
    }
    deleteecofour13(index) {
        this.lookup21.splice(index, 1);
    }
    deleteecofour14(index) {
        this.lookup22.splice(index, 1);
    }
    deleteecofour15(index) {
        this.lookup23.splice(index, 1);
    }
    deleteecofour16(index) {
        this.lookup24.splice(index, 1);
    }
    deleteieii1(index) {
        this.lookup25.splice(index, 1);
    }
    deleteieii2(index) {
        this.lookup26.splice(index, 1);
    }
    deleteAcb2(index) {
        this.lookup30.splice(index, 1);
    }
    deleteQ40451(index) {
        this.lookupdtl52.splice(index, 1);
    }
    deletedtl4(i) {
        this.lookupdtl4.splice(i, 1);
    }
    deletedtl50(index) {
        this.lookupdtl50.splice(index, 1);
    }
    deletedtl102(index) {
        this.lookupdtl102.splice(index, 1);
    }
    delete306iii(index) {
        this.lookupdtl306iii.splice(index, 1);
    }
    delete306ii(index) {
        this.lookupdtl306ii.splice(index, 1);
    }
    ecothree6(value) {
        this.finalobj['201-3question6'] = value.target.value;
    }
    ecothree10(value) {
        this.finalobj['201-3question10'] = value.target.value;
    }
    addFieldValue3() {
        this.newAttribute3 = { operation: '', Gender: '', percentage: '' };
        this.lookupdtl3.push(this.newAttribute3);
    }

    changeGender(i, value) {
        this.lookupdtl3[i]['Gender'] = value.value;
    }

    changepercentage(i) {
        console.log(
            (<HTMLInputElement>(
                document.getElementById('percentage' + i.toString())
            )).value
        );
        this.lookupdtl3[i]['percentage'] = (<HTMLInputElement>(
            document.getElementById('percentage' + i.toString())
        )).value;
    }
    Ac1(value) {
        this.finalobj['205-1question1'] = value.target.value;
    }
    Ac1percentage(value) {
        this.finalobj['205-1question1percentage'] = value.target.value;
    }
    deleteQ2021(i) {
        this.lookupdtl3.splice(i, 1);
    }
    //201-2-5
    changeeco5(i) {
        this.lookupdtleco[i]['eco5'] = (<HTMLInputElement>(
            document.getElementById('eco5' + i.toString())
        )).value;
    }
    changeeco599(i) {
        this.lookupdtleco[i]['eco599'] = (<HTMLInputElement>(
            document.getElementById('eco599' + i.toString())
        )).value;
    }
    OnChangecurrencyeco8(i, value) {
        this.lookupdtleco[i]['currencyeco8'] = value.value;
    }
    deleteQ2011v(index) {
        this.lookupdtleco.splice(index, 1);
    }
    hpr1(i) {
        //this.finalobj["304-3Q1"]=value.target.value;
        this.lookupdtl304a[i]['hpr1'] = (<HTMLInputElement>(
            document.getElementById('hpr1' + i.toString())
        )).value;
    }
    hpr1size(i) {
        //  this.finalobj["304-3Q1size"]=value.target.value;
        this.lookupdtl304a[i]['hpr1size'] = (<HTMLInputElement>(
            document.getElementById('hpr1size' + i.toString())
        )).value;
    }
    delete27bi(index) {
        this.lookupdtl27bi.splice(index, 1);
    }
    changecompir5bi(i) {
        this.lookupdtl27bi[i]['compir5bi'] = (<HTMLInputElement>(
            document.getElementById('compir5bi' + i.toString())
        )).value;
    }
    changecompir6bi(i) {
        this.lookupdtl27bi[i]['compir6bi'] = (<HTMLInputElement>(
            document.getElementById('compir6bi' + i.toString())
        )).value;
    }
    OnChangecompir7bi(i, value) {
        this.lookupdtl27bi[i]['compir7bi'] = value.value;
    }

    changecompir5bii(i) {
        this.lookupdtl27bii[i]['compir5bii'] = (<HTMLInputElement>(
            document.getElementById('compir5bii' + i.toString())
        )).value;
    }

    opendidd3034bii(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1vi').setValue(this.is.liquid);
            this.finalobj['303-4Q1vi'] = `${
                this.enviroform.get('wdd1vi').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp7(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd1kek').setValue(this.is.liquid);
            this.finalobj['303-4Q1kek1'] = `${
                this.enviroform.get('wdd1kek').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp8(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd2kek').setValue(this.is.liquid);
            this.finalobj['303-4Q1kek2'] = `${
                this.enviroform.get('wdd2kek').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp9(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd3kek').setValue(this.is.liquid);
            this.finalobj['303-4Q1kek3'] = `${
                this.enviroform.get('wdd3kek').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }
    opendiddforp10(data) {
        console.log(data);

        const dialogRef = this.dialog.open(CalcComponent, {
            autoFocus: false,
            data: { data },
        });
        dialogRef.afterClosed().subscribe((result) => {
            this.enviroform.get('wdd4kek').setValue(this.is.liquid);
            this.finalobj['303-4Q1kek4'] = `${
                this.enviroform.get('wdd4kek').value
            }`;
            if (result) {
                console.log(result);
            }
        });
    }

    changecompir6bii(i) {
        this.lookupdtl27bii[i]['compir6bii'] = (<HTMLInputElement>(
            document.getElementById('compir6bii' + i.toString())
        )).value;
    }
    OnChangecompir7bii(i, value) {
        this.lookupdtl27bii[i]['compir7bii'] = value.value;
    }
    delete27bii(index) {
        this.lookupdtl27bii.splice(index, 1);
    }
    hpr1units(i, value) {
        // this.finalobj["304-3Q1units"]=value.value;
        this.lookupdtl304a[i]['hpr1units'] = value.value;
    }
    OnChangehpr1location(i, value) {
        //this.finalobj["304-3Q1location"]=value.value;
        var empty = '';
        this.onInputChangecountry(empty);
        this.lookupdtl304a[i]['hpr1location'] = value.value;
    }
    delete3043a(index) {
        this.lookupdtl304a.splice(index, 1);
    }
    
    onprevdisclosure() {
        this.is
            .GetSelectedTemplateMenuCategoryTreeView(this.reportid)
            .subscribe((rep) => {
                console.log(rep);
                this.Tallu = rep;

                this.Searchdisc();
                for (
                    var i = 0;
                    i < this.Tallu[this.first]['children'].length;
                    i++
                ) {
                    for (
                        var j = 0;
                        j <
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ].length;
                        j++
                    ) {
                        this.rogue =
                            this.Tallu[this.first]['children'][this.second][
                                'children'
                            ][this.third].text;

                        if (this.codeval != this.rogue) {
                            console.log(i);
                            console.log(j);
                            console.log('Animor Animor');
                            this.second = i;
                            this.third = j;
                        } else {
                            break;
                        }
                    }
                    if (this.codeval == this.rogue) {
                        console.log(this.rogue);
                        console.log(this.codeval);
                        break;
                    }
                }

                console.log(this.rogue);
                console.log(this.third);

                if (this.first == 0 && this.second == 0 && this.third == 0) {
                    console.log('one');
                    var chasy =
                        this.Tallu[0]['children'][0]['children'][0].text;
                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third > 0) {
                    console.log('second');
                    console.log(this.third);
                    this.third -= 1;
                    var chasy =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ][this.third].text;

                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third == 0 && this.second > 0) {
                    console.log('third');
                    this.second = this.second - 1;
                    console.log(this.third);
                    var local1 =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ].length;
                    console.log(local1);
                    this.third = local1 - 1;
                    var chasy =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ][this.third].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                } else {
                    console.log('four');
                    this.first -= 1;
                    var local2 = this.Tallu[this.first]['children'].length;
                    this.second = local2;
                    var local1 =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ].length;
                    this.third = local1;

                    var chasy =
                        this.Tallu[this.first].children[this.second].children[
                            this.third
                        ].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                }
            });
    }
    Searchdisc() {
        console.log(this.codeval);
        var r = this.codeval.split('-');
        console.log(r);
        if (r[0] == '2') {
            console.log('you are in one');
            this.first = 0;
            this.second = 0;
            this.third = 0;
        } else if (r[0] == '3') {
            console.log('you are in material');
            this.first = 1;
            this.second = 0;
            this.third = 0;
        } else if (r[0].includes('20')) {
            console.log('you are in econ');
            this.first = 2;
            this.second = 0;
            this.third = 0;
        } else if (r[0].includes('30')) {
            console.log('you are in environ');
            this.first = 3;
            this.second = 0;
            this.third = 0;
        } else {
            console.log('you are in social');
            this.first = 4;
            this.second = 0;
            this.third = 0;
        }
    }
    onNextdisclosure() {
        this.is
            .GetSelectedTemplateMenuCategoryTreeView(this.reportid)
            .subscribe((rep) => {
                console.log(rep);
                this.Tallu = rep;

                this.Searchdisc();
                for (
                    var i = 0;
                    i < this.Tallu[this.first]['children'].length;
                    i++
                ) {
                    for (
                        var j = 0;
                        j <
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ].length;
                        j++
                    ) {
                        this.rogue =
                            this.Tallu[this.first]['children'][this.second][
                                'children'
                            ][this.third].text;

                        if (this.codeval != this.rogue) {
                            console.log(i);
                            console.log(j);
                            console.log('Animor Animor');
                            this.second = i;
                            this.third = j;
                        } else {
                            this.second = i;
                            this.third = j;
                            break;
                        }
                    }
                    if (this.codeval == this.rogue) {
                        console.log(this.rogue);
                        console.log(this.codeval);
                        break;
                    }
                }

                console.log(this.rogue);

                var local1 =
                    this.Tallu[this.first]['children'][this.second]['children']
                        .length;
                var local2 = this.Tallu[this.first]['children'].length;
                if (
                    this.rogue == '2-1 Organization Details' ||
                    this.rogue == '301-1 Materials used by weight or volume' ||
                    this.rogue ==
                        '401-1 New employee hires and employee turnover' ||
                    this.rogue ==
                        '201-1 Direct economic value generated and distributed'
                ) {
                    var chasy =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ][1].text;
                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third != local1 && this.second != local2) {
                    var chasy =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ][this.third].text;
                    this.third += 1;
                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third == local1 && this.second != local2) {
                    this.third = 0;
                    this.second += 1;
                    var chasy =
                        this.Tallu[this.first]['children'][this.second][
                            'children'
                        ][this.third].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                } else {
                    this.third = 0;
                    this.second = 0;
                    this.first += 1;
                    var chasy =
                        this.Tallu[this.first].children[this.second].children[
                            this.third
                        ].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                }
            });
    }
    onNextdisclosureformat() {
        this.is
            .GetSelectedTemplateMenuCategoryTreeView(this.reportid)
            .subscribe((rep) => {
                console.log(rep);
                this.Tallu = rep;

                this.Searchdisc();
                for (
                    var i = 0;
                    i < this.Tallu[this.first]['children'].length;
                    i++
                ) {
                    this.rogue =
                        this.Tallu[this.first]['children'][this.second].text;

                    if (this.codeval != this.rogue) {
                        console.log(i);

                        console.log('Animor Animor');
                        this.second = i;
                    } else {
                        this.second = i;

                        break;
                    }
                }

                var local1 = this.Tallu[this.first]['children'].length;
                var local2 = this.Tallu.length;

                if (this.rogue == '3-1 Process to determine material topics') {
                    var chasy = this.Tallu[this.first]['children'][1].text;
                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third != local1 && this.second != local2) {
                    var chasy =
                        this.Tallu[this.first]['children'][this.second].text;
                    this.third += 1;
                    console.log(chasy);
                    this.codeval = chasy;
                    this.showguidance(chasy);
                } else if (this.third == local1 && this.second != local2) {
                    this.third = 0;
                    this.second += 1;
                    var chasy =
                        this.Tallu[this.first]['children'][this.second].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                } else {
                    this.third = 0;
                    this.second = 0;
                    this.first += 1;
                    var chasy =
                        this.Tallu[this.first].children[this.second].text;
                    this.codeval = chasy;
                    console.log(chasy);
                    this.showguidance(chasy);
                }
            });
    }
}
function Att3(value: any) {
    throw new Error('Function not implemented.');
}

function setvalue(arg0: null): any {
    throw new Error('Function not implemented.');
}
