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
  selector: 'app-sgx_remarkspresocial',
  templateUrl: './sgx_remarkspresocial.component.html',
  styleUrls: ['./sgx_remarkspresocial.component.scss']
})
export class Sgx_remarkspresocialComponent implements OnInit {
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
  remarksdata:any;
  remarksobj:any;
  str:any[];
  dynamicobj: any;
dynamicobjTable1: any=[];
dynamicobjTable2: any=[];
dynamicobjTable3: any=[];
dynamicobjTable4: any =[];
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
  
  
      
    });

   // this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us
        .getSGXReportDetailsByReportId(this.reportid)
        .subscribe((res) => {
            this.reportname = res[0].ReportName;
            this.startdate = res[0].StartDate;
            this.enddate = res[0].EndDate;
            this.qaa = JSON.parse(res[0].InitialDraftReport);
         
            this.dynamicobj = JSON.parse(res[0].InitialDraftReport);
            if(this.dynamicobj!=null){
            console.log(this.dynamicobj[7]);
            //this.dynamicobjTable1 = JSON.parse(this.dynamicobj[7]['Table1']);
            console.log(this.dynamicobj[9]['social202aQuestion1']);
          if(this.dynamicobj[7]['Table1'] != null || this.dynamicobj[7]['Table1'] != undefined )
          {
            let localval = JSON.parse(this.dynamicobj[7]['Table1']);
           if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
           {
            this.dynamicobjTable1 = JSON.parse(this.dynamicobj[7]['Table1']);
            console.log(this.dynamicobjTable1);
            
           }
           else 
           {
            this.dynamicobjTable1 = [];
           }
            
          } else 
          {
            this.dynamicobjTable1 = [];
          }
  
           var dynamicobjTable1len = this.dynamicobjTable1[0]['Gender'];
           console.log(dynamicobjTable1len);
           
            //this.dynamicobjTable2 = JSON.parse(this.dynamicobj[8]['SocialTable1']);
            if(this.dynamicobj[8]['SocialTable1'] != null || this.dynamicobj[8]['SocialTable1'] != undefined )
            {
              let localval = JSON.parse(this.dynamicobj[8]['SocialTable1']);
             if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
             {
              this.dynamicobjTable2 = JSON.parse(this.dynamicobj[8]['SocialTable1']);
              //console.log(this.dynamicobjTable1);
              
             }
             else 
             {
              this.dynamicobjTable2 = [];
             }
              
            } else 
            {
              this.dynamicobjTable2 = [];
            }
    
            //this.dynamicobjTable3 = JSON.parse(this.dynamicobj[8]['SocialTable2']);
            if(this.dynamicobj[8]['SocialTable2'] != null || this.dynamicobj[8]['SocialTable2'] != undefined )
            {
              let localval = JSON.parse(this.dynamicobj[8]['SocialTable2']);
             if(localval[0]['Subject1'] != '' || localval[0]['Gender1'] != '' || localval[0]['Assessments1'] != '' ) 
             {
              this.dynamicobjTable3 = JSON.parse(this.dynamicobj[8]['SocialTable2']);
              //console.log(this.dynamicobjTable1);
              
             }
             else 
             {
              this.dynamicobjTable3 = [];
             }
              
            } else 
            {
              this.dynamicobjTable3 = [];
            }
    
            //this.dynamicobjTable4 = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
            if(this.dynamicobj[14]['Social204bTable1'] != null || this.dynamicobj[7]['Social204bTable1'] != undefined )
            {
              let localval = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
             if(localval[0]['Subject'] != '' || localval[0]['Gender'] != '' || localval[0]['Assessments'] != '' ) 
             {
              this.dynamicobjTable4 = JSON.parse(this.dynamicobj[14]['Social204bTable1']);
              console.log(this.dynamicobjTable4);
              
             }
             else 
             {
              this.dynamicobjTable4 = [];
             }
              
            } else 
            {
              this.dynamicobjTable4 = [];
            }
    
            console.log(this.dynamicobjTable4);
            }
  
  
           
          
            
        });

  }
 

}
