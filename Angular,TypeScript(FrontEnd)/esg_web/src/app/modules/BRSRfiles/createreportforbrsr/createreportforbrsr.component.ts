import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { CreatereportforbrsrService } from './createreportforbrsr.service';
import { AuthService } from 'app/core/auth/auth.service';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import { ReportgenerationService } from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-createreportforbrsr',
  templateUrl: './createreportforbrsr.component.html',
  styleUrls: ['./createreportforbrsr.component.scss']
})
export class CreatereportforbrsrComponent implements OnInit {
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
  
  constructor(private router:Router,
    private fb: FormBuilder,
    private cs:CreatereportforbrsrService,
    private as:AuthService,private gs:GlobalvariableService, 
     private aa: ActivatedRoute,private st: ReportgenerationService,) { }

  ngOnInit() {
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    console.log(this.reportid)
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
    back(){
      this.router.navigate(['/brsr']);
    }
    Stage :any;
  next(){
    if(this.reportid == null)
    {
    if(this.reportform.get('StartDate').value==''&& this.reportform.get('EndDate').value==''){
      var currentDate = new Date();
      var theFirst = new Date(this.years[0], 0, 1);
      console.log(theFirst);
      var theLast = new Date(this.years[0], 11, 31);
      console.log(theLast);
      this.reportform.get('StartDate').setValue(theFirst)
      this.reportform.get('EndDate').setValue(theLast)
    }
    const ReportDetails: any = this.reportform.value;
    console.log(ReportDetails);
    
      this.cs.createreport(ReportDetails).subscribe((data) => {
        console.log(data);
        this.Stage = '/selectbrsr'
      
       var obj = {
         "ReportId" : data.Rid,
         "Stage":this.Stage
       }
        this.st.updateBRSRStage(obj).subscribe((data1)=>{
          //this.router.navigate(['/selectdis', data.Rid]);
          this.router.navigate([`${this.Stage}/${data.Rid}`]);
        })
      })
  }
  else{
    this.Stage = '/selectbrsr'
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
      this.st.updateBRSRStage(obj1).subscribe((data1)=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
      })
    })
  }
   
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
