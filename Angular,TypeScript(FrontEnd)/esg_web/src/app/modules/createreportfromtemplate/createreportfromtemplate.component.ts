import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CreatereportfromtemplateService } from './createreportfromtemplate.service';
import { AuthService } from 'app/core/auth/auth.service';
import { GlobalvariableService } from '../services/globalvariable.service';
import { ReportgenerationService } from 'app/services/reportgeneration.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-createreportfromtemplate',
  templateUrl: './createreportfromtemplate.component.html',
  styleUrls: ['./createreportfromtemplate.component.scss']
})
export class CreatereportfromtemplateComponent implements OnInit {
  reportform: FormGroup;
  currentYear:any;
  years=[];
  show:boolean=false;
  cardid: boolean = false;
  cardidicon: string = "fa fa-plus";
  loading=true;
  yeardrop:Date;
  orgid:any;
  reportid:any;
  tId:any
  public minDate: Date;
  public minDates: Date;
  constructor(private router:Router,
    private fb: FormBuilder,
    private cs:CreatereportfromtemplateService,
    private as:AuthService,private gs:GlobalvariableService, 
     private aa: ActivatedRoute,private st: ReportgenerationService,private _datepipe : DatePipe) {

      const Today = new Date();
      const today = this._datepipe.transform(Today, 'yyyy-MM-dd'); 
      let yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const Yesterday = this._datepipe.transform(yesterday, 'yyyy-MM-dd');
      }

  ngOnInit() {

    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.tId = this.aa.snapshot.paramMap.get('tId');
    console.log(this.reportid)
    console.log(this.tId)
    this.orgid=this.as.user.orgId
    console.log(this.as.user.orgId);
   
    if(this.reportid != null)
    {
      this.cs.getReportById(this.reportid).subscribe((data)=>{
          console.log(data)
          this.reportform.get('ReportName').setValue(data[0]['ReportName'])
      })
    }
    
    
    this.currentYear=new Date().getFullYear();
    for (var i=0;i<=10;i++){
      var a=this.currentYear-i;
    this.years.push(a);
    }
console.log(this.years);
console.log(this.currentYear);

let yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
const Yesterday = this._datepipe.transform(yesterday, 'yyyy-MM-dd');
console.log(Yesterday) 

const Today = new Date();
const today = this._datepipe.transform(Today, 'yyyy-MM-dd');

    this.reportform = this.fb.group({
      Id: [null],
      ReportName: ['', Validators.required],
      currentYear:[this.currentYear],
      StartDate: [''],
      EndDate: [''],
    	CreatedByUserId: [this.as.user.id],	
      UpdatedByUserId: [this.as.user.id],
      OrgId:[this.as.user.orgId]
    });
    this.cs.getReportGenerationByReportId(this.reportid).subscribe((kampeki)=>{})
  }
  handleFileInput(event) {
  //console.log(event.value);
 this.yeardrop=event.value;
 console.log(this.yeardrop);
  var theFirst=('Jan 1,' +this.yeardrop+ ' 00:00:00');
 console.log(theFirst);
  var theLast=('Dec 31,' +this.yeardrop+ ' 00:00:00');
  console.log(theLast);

  
 this.reportform.get('StartDate').setValue(theFirst)
 this.reportform.get('EndDate').setValue(theLast)
    }
    Stage :any;
  next(){
     this.Stage = '/importdis'
    var obj ={
      "ReportId":this.reportid,
      "ReportName" :  this.reportform.get('ReportName').value,
       "UserId" : this.as.user.id
    }
    this.cs.Updatereport(obj).subscribe((data)=>{
      var obj1 = {
        "ReportId" :this.reportid,
        "Stage":this.Stage
      }
      this.st.updateStage(obj1).subscribe((data1)=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
      })
    })
  }
  showhideId(){
    if (this.cardid == false) {
      this.cardid = true;
      this.cardidicon = "fa fa-minus";
    }
    else {
      this.cardid = false;
      this.cardidicon = "fa fa-plus";
    }
    this.loading = false;
  }
  showcustom(){
    this.show=true;
  }
}
