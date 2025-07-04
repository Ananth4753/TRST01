import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { ImagereportService } from 'app/modules/imagereport/imagereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
import { SelectbrsrService } from 'app/modules/BRSRfiles/selectbrsr/selectbrsr.service';
import { CreatereportService } from 'app/modules/createreport/createreport.service';
import { Sgx_validatingreportscreenService } from '../sgx_validatingreportscreen/sgx_validatingreportscreen.service';
import { SelectsgxService } from '../selectsgx/selectsgx.service';
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';

@Component({
  selector: 'app-sgx_remarkspreenviro',
  templateUrl: './sgx_remarkspreenviro.component.html',
  styleUrls: ['./sgx_remarkspreenviro.component.scss']
})
export class Sgx_remarkspreenviroComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  keys:any;
  vals:any;
  entries:any;
  name:any;
  designtemplate:any;
  qaa:any;
  htmlContent:any;
  answer5:any;
  pagenumber:any;
  dynamicobj:any;
  remarksobj:any;
  str:any[];
  remarksdata:any;
  onlyval:any;
  counter=1;
  startdate:any;
  enddate:any;
  firstimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png";
  secondimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png";
  thirdimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png";
  fourthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png";
  fifthimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png";
  imageUrl:any;
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,private service: AppService,
    private ds:DashboardService,private is:ImagereportService, private vrs:Sgx_validatingreportscreenService,private us:UpdatereportService) { }

    ngOnInit() {
   
      this.reportid=this.aa.snapshot.paramMap.get('reportId');
      
      this.vrs.GetSGXValidatingFinalReportByonlyReportid(this.reportid).subscribe(res =>{
        console.log(res);
        this.remarksdata= res;
        console.log(this.remarksdata[0].Remarks);
        this.remarksobj = JSON.parse(this.remarksdata[0].Remarks)
        console.log(this.remarksobj);
        
      });
    //  console.log(this.AuthService.user.id);
     // console.log(this.service.valuserid);
      // this.vrs.GetSGXValidatingFinalReportByReportId(this.reportid,this.AuthService.user.id).subscribe(datta=>{
      //   console.log(datta);
     
      // this.us.getSGXReportDetailsByReportId(this.reportid).subscribe(res=>{
        
      //   this.reportname=res[0].ReportName
      //   this.startdate=res[0].StartDate
      //   this.enddate=res[0].EndDate
      //  this.qaa=JSON.parse(datta[0].Remarks) 
      //  this.dynamicobj = JSON.parse(datta[0].Remarks) 
     
      
         
      // //  this.keys=Object.keys(this.qaa)
      // // this.vals=Object.values(this.qaa)
      // // this.entries=Object.entries(this.qaa)
  
      //  })
      // });
   
      this.us
      .getSGXReportDetailsByReportId(this.reportid)
      .subscribe((res) => {
          this.reportname = res[0].ReportName;
          this.startdate = res[0].StartDate;
          this.enddate = res[0].EndDate;
          this.qaa = JSON.parse(res[0].InitialDraftReport);
          console.log(this.qaa[0]);
          this.dynamicobj = this.qaa;
          console.log(this.dynamicobj);
          
      

          this.dynamicobj = JSON.parse(res[0].InitialDraftReport);
          console.log(this.dynamicobj[0]);
        

      });


       this.is.getFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
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
