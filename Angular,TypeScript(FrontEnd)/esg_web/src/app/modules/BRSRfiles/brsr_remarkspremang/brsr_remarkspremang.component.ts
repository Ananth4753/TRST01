import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { AppService } from 'app/app.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { Brsr_validatingreportscreenService } from '../brsr_validatingreportscreen/brsr_validatingreportscreen.service';
import { SelectbrsrService } from '../selectbrsr/selectbrsr.service';
import { CreatereportService } from 'app/modules/createreport/createreport.service';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
@Component({
  selector: 'app-brsr_remarkspremang',
  templateUrl: './brsr_remarkspremang.component.html',
  styleUrls: ['./brsr_remarkspremang.component.scss']
})
export class Brsr_remarkspremangComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  qaa:any;
  qa:any;

  raa:any;
  keys:any;
  vals:any;
  entries:any;
  questions:any;
  answers:any;
  name:any;
  answer1:any;
  answer2:any;
  answer3:any;
  answer4:any;
  htmlContent:any;
  answer5:any;
  pagenumber:any;
  dynamicobj:any;
  str:any[];
  dynamicTable:any[];
  dynamicTable1:any[];
  designtemplate:any;
  dynamicTable10261:any[];
  dynamicTable10262:any[];
  dynamicTable7th:any[];
  dynamicTable2021:any[];
  dynamicTable2022:any[];
  dynamicTable2041:any[];
  dynamicTable2052:any[];
  dynamicTable20523:any[];
  dynamicTable20525:any[];
  dynamicTable20526:any[];

  dynamicTable20534:any[];

  dynamicTable20712:any[];

  dynamicTable3011i:any[];
  dynamicTable3011ii:any[];
  dynamicTable3012:any[];
  dynamicTable3013:any[];
  dynamicTable3021:any[];

  dynamicTable4031:any[];
  dynamicTable4043:any[];
  dynamicTable4051:any[];
  dynamicTable4052:any[];

  dynamicTable4121:any[];
  dynamicTable4151:any[];
  dynamicTable20212:any[];
  dynamicTable20213:any[];
  dynamicTable20214:any[];
  dynamicTable20131:any[];
  dynamicTable20132:any[];
  dynamicTable20133:any[];
  dynamicTable20134:any[];
  dynamicTable20135:any[];
  dynamicTable20137:any[];
  dynamicTable20141:any[];
  dynamicTable20142:any[];
  dynamicTable20143:any[];
  dynamicTable20144:any[];
  dynamicTable20145:any[];
  dynamicTable20146:any[];
  dynamicTable20147:any[];
  dynamicTable20148:any[];
  dynamicTable201410:any[];
  dynamicTable201411:any[];
  dynamicTable201412:any[];
  dynamicTable201413:any[];
  dynamicTable201414:any[];
  dynamicTable201415:any[];
  dynamicTable201416:any[];
  dynamicTable201417:any[];
  dynamicTable20321:any[];
  dynamicTable20322:any[];
  dynamicTable2052b:any[];
  dynamicTable2061b:any[];

  dynamicTable30415:any[];


  dynamicTable3034b1:any[];
  dynamicTable3034b2:any[];
  dynamicTable3034b3:any[];
  dynamicTable3034b4:any[];
  dynamicTable3063:any[];
  dynamicTable3064:any[];
  onlyval:any;
  counter=1;
  dynamicTableturnover1:any[];
  dynamicTableturnover2:any[];
  dynamicTable4122:any[];
  startdate:any;
  enddate:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  tempstore:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService, private ds:DashboardService,private is:Brsr_imagereportService,private service: AppService,
    private vrs:Brsr_validatingreportscreenService,private ss:SelectbrsrService,private us:UpdatereportService,private crs:CreatereportService,) { }
  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    // console.log(this.AuthService.user.id);
    this.vrs.GetBRSRRemarksReportByUserandReportId(this.reportid,this.AuthService.user.id).subscribe((data)=>{
      console.log(data);
      this.dynamicobj=data;
      console.log(this.dynamicobj);
      this.tempstore=JSON.parse(this.dynamicobj[0].Remarks);
       console.log(this.tempstore)
    })
    this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
      var size=Object.keys(res).length;
      
      this.designtemplate=res[0].DesignTemplate
      if(this.designtemplate==1){
        this.imageUrl=this.firstimage;
      }
      else if(this.designtemplate==2){
        this.imageUrl=this.secondimage;
      }
      else if(this.designtemplate==3){
        this.imageUrl=this.thirdimage;
      }
      else if(this.designtemplate==4){
        this.imageUrl=this.fourthimage;
      }
else{
  this.imageUrl=this.fifthimage;
}


    
  })
  }

}
