import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { UpdatereportService } from './updatereport.service';
import { AuthService } from 'app/core/auth/auth.service';
@Component({
  selector: 'app-updatereport',
  templateUrl: './updatereport.component.html',
  styleUrls: ['./updatereport.component.scss']
})
export class UpdatereportComponent implements OnInit {
  reportform: FormGroup;
  currentYear:any;
  show:boolean=false;
  cardid: boolean = false;
  cardidicon: string = "fa fa-plus";
  loading=true;
  reportid:any;
  reportData:any;
  constructor(private router:Router,private fb: FormBuilder,private cs:UpdatereportService,private as:AuthService,private aa:ActivatedRoute) { }

  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    let RepId = this.reportid
    
    this.cs.getReportDetailsByReportId(RepId).subscribe(res=>{
     this.reportData = res;

   this.reportform.get('ReportName')?.setValue(this.reportData[0].ReportName) 
   console.log(this.reportData);
    })
    console.log(this.reportid);
this.currentYear=new Date().getFullYear();
//console.log(this.currentYear);

    this.reportform = this.fb.group({
      Id: [null],
      ReportName: ['', Validators.required],
      currentYear:[this.currentYear],
      StartDate: [''],
      EndDate: [''],
    	CreatedByUserId: [this.as.user.id],	
      UpdatedByUserId: [this.as.user.id],	
    });
    //console.log(this.as.user.id);
    
  }
  next(){
    if(this.reportform.get('StartDate').value==''&& this.reportform.get('EndDate').value==''){
      var currentDate = new Date();
      var theFirst = new Date(currentDate.getFullYear(), 0, 1);
      var theLast = new Date(currentDate.getFullYear(), 11, 31);

      this.reportform.get('Id').setValue(this.reportid)
      this.reportform.get('StartDate').setValue(theFirst)
      this.reportform.get('EndDate').setValue(theLast)
    }
    const ReportDetails: any = this.reportform.value;
this.cs.createreport(ReportDetails).subscribe((data)=>{
console.log(data);
this.router.navigate(['/selectdis',data.reportid]);
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
