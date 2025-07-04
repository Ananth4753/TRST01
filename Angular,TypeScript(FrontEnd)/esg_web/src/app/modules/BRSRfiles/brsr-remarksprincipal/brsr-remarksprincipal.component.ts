import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { AppService } from 'app/app.service';
import { AuthService } from 'app/core/auth/auth.service';
import { SelectbrsrService } from '../selectbrsr/selectbrsr.service';
import { CreatereportforbrsrService } from '../createreportforbrsr/createreportforbrsr.service';
import Questions from '../../../../assets/brsr_questions.json';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Brsr_validatingreportscreenService } from '../brsr_validatingreportscreen/brsr_validatingreportscreen.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UploadevidenceforbrsrComponent } from '../brsr_remarksgeneral/uploadevidenceforbrsr/uploadevidenceforbrsr.component';

@Component({
  selector: 'app-brsr-remarksprincipal',
  templateUrl: './brsr-remarksprincipal.component.html',
  styleUrls: ['./brsr-remarksprincipal.component.scss']
})
export class BrsrRemarksprincipalComponent implements OnInit {
  prince1:FormGroup
  reportid: any;
  reportname: any;
  templatemenu: any;
  designtemplate: any;
  startdate: any;
  enddate: any;
  currentYear: number;
  PreviousYear:number
  qaaobject:any;
  srno:any;
  table1:any;
  NextYear:any;

  principle6atable1: any =[];
  principle6atable2:any =[];
  principle6atable3:any =[];
  principle6atable4:any =[];
  principle8atable1: any =[];
  principle8atable2: any =[];
  //
  principle1table1:any =[];
  principle1table2:any= [];
  principle1btable1:any= [];
  principle2atable1:any= [];
  principle2btable1:any= [];
  principle2btable2:any= [];
  principle2btable3:any= [];
  principle2btable4:any= [];
  principle4atable1:any= [];
  principle3atable1:any= [];
  principle5atable1:any= [];
  principle5btable1:any= [];
  principle6btable1:any= [];
  //
 
  principle7atable1:any =[];
  principle7atable2:any =[];
  principle7btable1:any =[];
  principle8btable1:any =[];
  principle8btable2:any =[];
  principle8btable3:any =[];
  principle8btable4:any =[];
  principle8btable5:any =[];
  principle3a3yesclicked: boolean = false;
  principle3a4yesclicked: boolean = false;
  principle3a10ayesclicked: boolean = false;
  principle3a10cyesclicked: boolean = false;
  principle3a10dyesclicked: boolean = false;
  principle3b1ayesclicked: boolean = false;
  principle3b1byesclicked: boolean = false;
  principle3b4yesclicked: boolean = false;
  principle3a61yesclicked: boolean = false;
  principle3a62yesclicked: boolean = false;
  principle3a63yesclicked: boolean = false;
  principle3a64yesclicked: boolean = false;
  principle5a4yesclicked: boolean = false;
  principle5b3yesclicked: boolean = false;
  principle8b3ayesclicked: boolean = false;
  principle6b1yesclicked: boolean = false;
  principle6b2yesclicked: boolean = false;
  principle6b3yesclicked: boolean = false;
  principle6b4yesclicked: boolean = false;

  public questionValues: any[] = [];
  public answerValues: any[] = [];
  public questionValues1: any[] = [];
  public answerValues1: any[] = [];
   p1bool1Yes :boolean = false;
   p1bool1No :boolean = false;
   p2Bbool1Yes :boolean = false;
   p2Bbool2Yes : boolean = false;
   p2Bbool4Yes : boolean = false;
   p2Bbool5Yes : boolean = false;
   p4Bbool1Yes :boolean = false;
   p1Bbool1 :boolean = false;
   p6Abool1:boolean = false;
   p6Abool2:boolean = false;
   p6Abool3:boolean = false;
   p6Abool4:boolean = false;
   p6Abool5:boolean = false;
   p6Abool6:boolean = false;
   p6Abool7:boolean = false;
  firstimage =
      'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp1.png';
  secondimage =
      'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp2.png';
  thirdimage =
      'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp3.png';
  fourthimage =
      'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp4.png';
  fifthimage =
      'https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/fp5.png';
  imageUrl: any;
  qaa: any;
  questions: any;
  dynamicobj: any;
  constructor(
      private route: ActivatedRoute,
      private aa: ActivatedRoute,
      private AuthService: AuthService,
      private service: AppService,
      private ss: SelectbrsrService,
      private crs: CreatereportforbrsrService,
      private us: UpdatereportService,
      private is: Brsr_imagereportService,
      private ds: DashboardService,
      public dialog: MatDialog,
      private fb: FormBuilder,private vrs:Brsr_validatingreportscreenService,
  ) {
      this.srno=0;
  }
  finalobj: any = {};
  ngOnInit() {

    this.prince1 = this.fb.group({

      principle1a1: [''],
      principle1a2a: [''],
      principle1a2b: [''],
      principle1a3: [''],
      principle1a4: [''],
      principle1a5: [''],
      principle1a6: [''],
      principle1a7: [''],
      principle1b1: [''],
      principle1b2: [''],
      principle2a1: [''],
      principle2a2a: [''],
      principle2a2b: [''],
      principle2a3: [''],
      principle2a4: [''],
      principle2b1: [''],
      principle2b2: [''],
      principle2b3: [''],
      principle2b4: [''],
      principle2b5: [''],
      principle3a1a: [''],
      principle3a1b: [''],
      principle3a2: [''],
      principle3a3: [''],
      principle3a4: [''],
      principle3a5: [''],
      principle3a6: [''],
      principle3a7: [''],
      principle3a8: [''],
      principle3a9: [''],
      principle3a10a: [''],
      principle3a10aa: [''],
      principle3a10b: [''],
      principle3a10c: [''],
      principle3a10d: [''],
      principle3a11: [''],
      principle3a12: [''],
      principle3a13: [''],
      principle3a14: [''],
      principle3a15: [''],
      principle3b1a: [''],
      principle3b1b: [''],
      principle3b2: [''],
      principle3b3: [''],
      principle3b4: [''],
      principle3b5: [''],
      principle3b6: [''],
      principle4a1: [''],
      principle4a2: [''],
      principle4b1: [''],
      principle4b2a: [''],
      principle4b2b: [''],
      principle4b3: [''],
      principle5a1: [''],
      principle5a2: [''],
      principle5a3: [''],
      principle5a4: [''],
      principle5a5: [''],
      principle5a6: [''],
      principle5a7: [''],
      principle5a8: [''],
      principle5a9: [''],
      principle5a10: [''],
      principle5b1: [''],
      principle5b2: [''],
      principle5b3: [''],
      principle5b4: [''],
      principle5b5: [''],
      principle6a1: [''],
      principle6a1a: [''],
      principle6a2: [''],
      principle6a3: [''],
      principle6a3a: [''],
      principle6a4: [''],
      principle6a5: [''],
      principle6a5a: [''],
      principle6a6: [''],
      principle6a7: [''],
      principle6a8: [''],
      principle6a9: [''],
      principle6a10: [''],
      principle6a11: [''],
      principle6a12: [''],

      prince6bQ1:[''],
      prince6bQ1i:[''],
      prince6bQ2:[''],
      prince6bQ2i:[''],
      prince6bQ3:[''],
      prince6bQ3i:[''],
      prince6bQ3ii:[''],
      prince6bQ3iii:[''],
      prince6bQ3a:[''],
      prince6bQ3b:[''],
      prince6bQ3c:[''],
      prince6bQ4:[''],
      prince6bQ4indicate:[''],
      prince6bQ5:[''],
      prince6bQ6:[''],
      prince6bQ7:[''],
      prince6bQ8:[''],
      prince6bQ9:[''],

      prince7aQ1a:[''],
      prince7aQ1b:[''],
      prince7aQ2:[''],
      prince7bQ1:[''],

      prince8aQ1:[''],
      prince8aQ2:[''],
      prince8aQ3:[''],
      prince8aQ4:[''],
      prince8bQ1:[''],
      prince8bQ2:[''],
      prince8bQ3a:[''],
      prince8bQ3b:[''],
      prince8bQ3c:[''],
      prince8bQ4:[''],
      prince8bQ5:[''],
      prince8bQ6:[''],
     
      prince9aQ1:[''],
      prince9aQ2:[''],
      prince9aQ3:[''],
      prince9aQ4:[''],
      prince9aQ5:[''],
      prince9aQ5if:[''],
      prince9aQ6:[''],
      prince9bQ1:[''],
      prince9bQ2:[''],
      prince9bQ3:[''],
      prince9bQ4a:[''],
      prince9bQ4aif:[''],
      prince9bQ4b:[''],
      prince9bQ4bif:[''],
      prince9bQ5a:[''],
      prince9bQ5b: [''],
    });
    const Today = new Date();
    this.currentYear = Today.getFullYear();
    this.PreviousYear=this.currentYear-1;
    this.NextYear = this.currentYear+1;

      this.reportid = this.aa.snapshot.paramMap.get('reportId');
      this.us
          .getBRSRReportDetailsByReportId(this.reportid)
          .subscribe((res) => {
              this.reportname = res[0].ReportName;
              this.startdate = res[0].StartDate;
              this.enddate = res[0].EndDate;
              this.qaa = JSON.parse(res[0].InitialDraftReport);
              this.qaaobject = this.qaa;
              console.log(this.qaaobject);
            
           console.log(this.qaaobject[16]['one']);
           
            //    this.principle1table1 = JSON.parse(this.qaaobject[9]['Table1']);
             //  console.log(this.qaaobject[13]['threeans']);
               
     if(this.qaaobject[9]['Table1'] != null || this.qaaobject[9]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[9]['Table1']);
      if(localval[0]['Subject'] != '' || localval[0]['Principlelist'] != '' || localval[0]['Regulatory'] != '' || localval[0]['Amount'] != '' || localval[0]['Case'] != '' || localval[0]['YesNo'] != '' ) 
      {
       this.principle1table1 = JSON.parse(this.qaaobject[9]['Table1']);
       console.log(this.principle1table1);
      }
      else 
      {
       this.principle1table1 = [];
      
      }
       
     } else 
     {
       this.principle1table1 = [];
     }

         // this.principle1table2 = JSON.parse(this.qaaobject[9]['Table2']);
        if(this.qaaobject[9]['Table2'] != null || this.qaaobject[9]['Table2'] != undefined )
        {
          let localval = JSON.parse(this.qaaobject[9]['Table2']);
         if(localval[0]['Subject1'] != '' || localval[0]['Principlelist1'] != '' || localval[0]['Regulatory1'] != '' || localval[0]['Amount1'] != '' || localval[0]['Case1'] != '' || localval[0]['YesNo1'] != '' ) 
         {
          this.principle1table2 = JSON.parse(this.qaaobject[9]['Table2']);
          console.log(this.principle1table2);
          
         }
         else 
         {
          this.principle1table2 = [];
         }
          
        } else 
        {
          this.principle1table2 = [];
        }
         //   this.principle1btable1 = JSON.parse(this.qaaobject[10]['Table1']);
     if(this.qaaobject[10]['Table1'] != null || this.qaaobject[10]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[10]['Table1']);
      if(localval[0]['Labs2x'] != '' || localval[0]['Project2x'] != '' || localval[0]['Remarks'] != '' ) 
      {
       this.principle1btable1 = JSON.parse(this.qaaobject[10]['Table1']);
       console.log(this.principle1btable1);
       
      }
      else 
      {
       this.principle1btable1 = [];
      }
       
     } else 
     {
       this.principle1btable1 = [];
     }

     // 03-10-23     
    //   this.principle4atable1 = JSON.parse(this.qaaobject[15]['Table1']);
    if(this.qaaobject[15]['Table1'] != null || this.qaaobject[15]['Table1'] != undefined )
    {
      let localval = JSON.parse(this.qaaobject[15]['Table1']);
     if(localval[0]['Stakeholder'] != '' || localval[0]['Whetheridentified'] != '' || localval[0]['Channels'] != '' || localval[0]['Frequency'] != '' || localval[0]['PurposeScope'] != '' ) 
     {
      this.principle4atable1 = JSON.parse(this.qaaobject[15]['Table1']);
      console.log(this.principle4atable1);
      
     }
     else 
     {
      this.principle4atable1 = [];
     }
      
    } else 
    {
      this.principle4atable1 = [];
    }
      //   this.principle2btable1 = JSON.parse(this.qaaobject[12]['Table1']);
 if(this.qaaobject[12]['Table1'] != null || this.qaaobject[12]['Table1'] != undefined )
 {
   let localval = JSON.parse(this.qaaobject[12]['Table1']);
  if(localval[0]['Projects'] != '' || localval[0]['Labs2x'] != '' || localval[0]['Remarks'] != '' || localval[0]['Project2x'] != '' || localval[0]['Projects1'] != '' || localval[0]['Projects2'] != '') 
  {
   this.principle2btable1 = JSON.parse(this.qaaobject[12]['Table1']);
   console.log(this.principle2btable1);
  }
  else 
  {
   this.principle2btable1 = [];
   console.log(this.principle2btable1)
  }
   
 } else 
 {
   this.principle2btable1 = [];
   console.log(this.principle2btable1)
 }

   //   this.principle2btable2 = JSON.parse(this.qaaobject[12]['Table2']);
   if(this.qaaobject[12]['Table2'] != null || this.qaaobject[12]['Table2'] != undefined )
   {
     let localval = JSON.parse(this.qaaobject[12]['Table2']);
    if(localval[0]['Labs3x'] != '' || localval[0]['Remarks3x'] != '' || localval[0]['Project3x'] != '' ) 
    {
     this.principle2btable2 = JSON.parse(this.qaaobject[12]['Table2']);
     console.log(this.principle2btable2);
    }
    else 
    {
     this.principle2btable2 = [];
    }
     
   } else 
   {
     this.principle2btable2 = [];
   }

     //   this.principle2btable3 = JSON.parse(this.qaaobject[12]['Table3']);
     if(this.qaaobject[12]['Table3'] != null || this.qaaobject[12]['Table3'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[12]['Table3']);
      if(localval[0]['Labs4x'] != '' || localval[0]['Project4x'] != '' || localval[0]['Remarks4x'] != '' ) 
      {
       this.principle2btable3 = JSON.parse(this.qaaobject[12]['Table3']);
       console.log(this.principle2btable3);
       
      }
      else 
      {
       this.principle2btable3 = [];
      }
       
     } else 
     {
       this.principle2btable3 = [];
     }

       //   this.principle2btable4 = JSON.parse(this.qaaobject[12]['Table5']);
       if(this.qaaobject[12]['Table5'] != null || this.qaaobject[12]['Table5'] != undefined )
       {
         let localval = JSON.parse(this.qaaobject[12]['Table5']);
        if(localval[0]['Labs5x'] != '' || localval[0]['Remarks5x'] != '' ) 
        {
         this.principle2btable4 = JSON.parse(this.qaaobject[12]['Table5']);
         console.log(this.principle2btable4);
         console.log(this.qaaobject[19]['Table2']);
        }
        else 
        {
         this.principle2btable4 = [];
        }
         
       } else 
       {
         this.principle2btable4 = [];
       }

  



      // this.principle6atable3 = JSON.parse(this.qaaobject[19]['Table2']);
      if(this.qaaobject[19]['Table2'] != null || this.qaaobject[19]['Table2'] != undefined )
      {
        var localval = JSON.parse(this.qaaobject[19]['Table2']);
         console.log(localval);
         
       if(localval[0]['Assessments2x'] != '' || localval[0]['Labs2x'] != '' || localval[0]['sus2x'] != '' || localval[0]['Type2x'] != '' || localval[0]['Type3x'] != '' || localval[0]['sus3x'] != '')
       {
        this.principle6atable3 = JSON.parse(this.qaaobject[19]['Table2']);
        console.log(this.principle6atable3);
       }
       else
       {
        this.principle6atable3 = [];
       }
      } else
      {
        this.principle6atable3 = [];
      }


         if(this.qaaobject[19]['Table4'] != null || this.qaaobject[19]['Table4'] != undefined )
         {
           let localval = JSON.parse(this.qaaobject[19]['Table4']);
          if(localval[0]['forreal7'] != '' || localval[0]['forreal71'] != '' || localval[0]['forreal72'] != '' || localval[0]['forreal73'] !='' )
          {
           this.principle6atable1 = JSON.parse(this.qaaobject[19]['Table4']);
           console.log(this.principle6atable1)
          }
          else
          {
           this.principle6atable1 = [];
          
          }
         } else
         {
           this.principle6atable1 = [];
         }



        //  this.principle6atable2 = JSON.parse(this.qaaobject[19]['Table1']);
        if(this.qaaobject[19]['Table1'] != null || this.qaaobject[19]['Table1'] != undefined )
        {
          let localval = JSON.parse(this.qaaobject[19]['Table1']);
         if(localval[0]['Assessments'] != '' || localval[0]['Labs'] != '' || localval[0]['Type'] != '')
         {
          this.principle6atable2 = JSON.parse(this.qaaobject[19]['Table1']);
          console.log(this.principle6atable2)
         }
         else
         {
          this.principle6atable2 = [];
         
         }
        } else
        {
          this.principle6atable2 = [];
        }

        
         // this.principle6atable4 = JSON.parse(this.qaaobject[19]['Table3']);
          if(this.qaaobject[19]['Table3'] != null || this.qaaobject[19]['Table3'] != undefined )
          {
            let localval = JSON.parse(this.qaaobject[19]['Table3']);
           if(localval[0]['Yolo'] != '' || localval[0]['Yolo1'] != '' || localval[0]['Yolo2'] != '' || localval[0]['Yolo3'] != '')
           {
            this.principle6atable4 = JSON.parse(this.qaaobject[19]['Table3']);
            console.log(this.principle6atable4)
           }
           else
           {
            this.principle6atable4 = [];
            console.log(this.principle6atable4)
           }
          } else
          {
            this.principle6atable4 = [];
          }
      

 // this.principle8atable2 = JSON.parse(this.qaaobject[23]['Table2']);
 if(this.qaaobject[23]['Table2'] != null || this.qaaobject[23]['Table2'] != undefined )
 {
   let localval = JSON.parse(this.qaaobject[23]['Table2']);
  if(localval[0]['srnumber'] != '' || localval[0]['ongoing'] != '' || localval[0]['state'] != '' || localval[0]['district'] !='' || localval[0]['Families'] !='' || localval[0]['Coveredpafs'] !='' || localval[0]['percentagecovered'] !='' || localval[0]['amountpaid'] !='')
  {
   this.principle8atable2 = JSON.parse(this.qaaobject[23]['Table2']);
   console.log(this.principle8atable2)
  }
  else
  {
   this.principle8atable2 = [];
   console.log(this.principle8atable2)
  }
 } else
 {
   this.principle8atable2 = [];
 }
 
 // this.principle8atable1 = JSON.parse(this.qaaobject[23]['Table1']);   
 if(this.qaaobject[23]['Table1'] != null || this.qaaobject[23]['Table1'] != undefined )
 {
   let localval = JSON.parse(this.qaaobject[23]['Table1']);
  if(localval[0]['project'] != '' || localval[0]['Notification'] != '' || localval[0]['Datenotification'] != '' || localval[0]['independent'] !='' || localval[0]['communicated'] !='' || localval[0]['Weblink'] !='')
  {
   this.principle8atable1 = JSON.parse(this.qaaobject[23]['Table1']);
   console.log(this.principle8atable1);
   
  }
  else
  {
   this.principle8atable1 = [];
  }
 } else
 {
   this.principle8atable1 = [];
 }
 
// this.principle7atable1 = JSON.parse(this.qaaobject[21]['SevenaTable1']);
if(this.qaaobject[21]['SevenaTable1'] != null || this.qaaobject[21]['SevenaTable1'] != undefined )
{
  let localval = JSON.parse(this.qaaobject[21]['SevenaTable1']);
  
 if(localval[0]['Assessments'] != '' || localval[0]['Type'] != '')
 {
  this.principle7atable1 = JSON.parse(this.qaaobject[21]['SevenaTable1']);
  console.log(this.principle7atable1);
  
 }
 else
 {
  this.principle7atable1 = [];
 }
} else
{
  this.principle7atable1 = [];
}


// this.principle7atable2 = JSON.parse(this.qaaobject[21]['SevenbbTable2']); 
if(this.qaaobject[21]['SevenbbTable2'] != null || this.qaaobject[21]['SevenbbTable2'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[21]['SevenbbTable2']);
if(localval[0]['sec1'] != '' || localval[0]['sec2'] != '' || localval[0]['sec3'] != '')
{
 this.principle7atable2 = JSON.parse(this.qaaobject[21]['SevenbbTable2']);
 console.log(this.principle7atable2);
 
}
else
{
 this.principle7atable2 = [];
}
} else
{
 this.principle7atable2 = [];
}

// this.principle7btable1 = JSON.parse(this.qaaobject[22]['SevenbTable1']);
if(this.qaaobject[22]['SevenbTable1'] != null || this.qaaobject[22]['SevenbTable1'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[22]['SevenbTable1']);
if(localval[0]['Subject'] != '' || localval[0]['Type'] != '' || localval[0]['Assessments'] != '' || localval[0]['Assessments2'] != '' || localval[0]['Frequeny'] != '' || localval[0]['webl'] != '')
{
 this.principle7btable1 = JSON.parse(this.qaaobject[22]['SevenbTable1']);
 console.log(this.principle7btable1)
}
else
{
 this.principle7btable1 = [];
// console.log(this.principle7btable1)
}
} else
{
 this.principle7btable1 = [];
}

// this.principle8btable1 = JSON.parse(this.qaaobject[24]['Table1']);
if(this.qaaobject[24]['Table1'] != null || this.qaaobject[24]['Table1'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[24]['Table1']);
if(localval[0]['operation1'] != '' || localval[0]['percentage1'] != '' )
{
 this.principle8btable1 = JSON.parse(this.qaaobject[24]['Table1']);
}
else
{
 this.principle8btable1 = [];
}
} else
{
 this.principle8btable1 = [];
}

//this.principle8btable2 = JSON.parse(this.qaaobject[24]['Table2']);
if(this.qaaobject[24]['Table2'] != null || this.qaaobject[24]['Table2'] != undefined )
{
  let localval = JSON.parse(this.qaaobject[24]['Table2']);
 if(localval[0]['srnumber'] != '' || localval[0]['state'] != '' || localval[0]['district'] !='' || localval[0]['Amountspent'] !='')
 {
  this.principle8btable2 = JSON.parse(this.qaaobject[24]['Table2']);
 }
 else
 {
  this.principle8btable2 = [];
 }
} else
{
  this.principle8btable2 = [];
}

// this.principle8btable3 = JSON.parse(this.qaaobject[24]['Table4']);
if(this.qaaobject[24]['Table4'] != null || this.qaaobject[24]['Table4'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[24]['Table4']);
if(localval[0]['srnumber1'] != '' || localval[0]['state1'] != '' || localval[0]['district1'] !='' || localval[0]['Amountspent1'] !='' || localval[0]['Intellectual1'] !='')
{
 this.principle8btable3 = JSON.parse(this.qaaobject[24]['Table4']);
}
else
{
 this.principle8btable3 = [];
}
} else
{
 this.principle8btable3 = [];
}

// this.principle8btable4 = JSON.parse(this.qaaobject[24]['Table5']);
if(this.qaaobject[24]['Table5'] != null || this.qaaobject[24]['Table5'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[24]['Table5']);
if(localval[0]['district2'] !='' || localval[0]['Amountspent2'] !='' || localval[0]['Intellectual2'] !='')
{
 this.principle8btable4 = JSON.parse(this.qaaobject[24]['Table5']);
}
else
{
 this.principle8btable4 = [];
}
} else
{
 this.principle8btable4 = [];
}

// this.principle8btable5 = JSON.parse(this.qaaobject[24]['Table6']);
if(this.qaaobject[24]['Table6'] != null || this.qaaobject[24]['Table6'] != undefined )
{
 let localval = JSON.parse(this.qaaobject[24]['Table6']);
if(localval[0]['srnumber3'] !='' || localval[0]['state3'] !='' || localval[0]['Amountspent3'] !='' || localval[0]['Intellectual3'] !='')
{
 this.principle8btable5 = JSON.parse(this.qaaobject[24]['Table6']);
}
else
{
 this.principle8btable5 = [];
}
} else
{
 this.principle8btable5 = [];
}

// p1 to p5 and 6b
   
     
   
     
     //   this.principle2atable1 = JSON.parse(this.qaaobject[11]['Table1']);
       if(this.qaaobject[11]['Table1'] != null || this.qaaobject[11]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[11]['Table1']);
      if(localval[0]['Subject'] != '' ) 
      {
       this.principle2atable1 = JSON.parse(this.qaaobject[11]['Table1']);
      }
      else 
      {
       this.principle2atable1 = [];
      }
       
     } else 
     {
       this.principle2atable1 = [];
     }
    
   
   
   
     //   this.principle3atable1 = JSON.parse(this.qaaobject[13]['Table1']);
        if(this.qaaobject[13]['Table1'] != null || this.qaaobject[13]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[13]['Table1']);
      if(localval[0]['eight'] != '' || localval[0]['Type'] != '' || localval[0]['eightytwo'] != '' || localval[0]['eightythree'] != '' || localval[0]['eightyfive'] != '' || localval[0]['eightysix'] != '' || localval[0]['Type2'] != '') 
      {
       this.principle3atable1 = JSON.parse(this.qaaobject[13]['Table1']);
      }
      else 
      {
       this.principle3atable1 = [];
      }
       
     } else 
     {
       this.principle3atable1 = [];
     }
   
     // this.principle5atable1 = JSON.parse(this.qaaobject[17]['Table1']);
     if(this.qaaobject[17]['Table1'] != null || this.qaaobject[17]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[17]['Table1']);
      if(localval[0]['forreal6'] != '' || localval[0]['forreal7'] != '') 
      {
       this.principle5atable1 = JSON.parse(this.qaaobject[17]['Table1']);
      }
      else 
      {
       this.principle5atable1 = [];
      }
       
     } else 
     {
       this.principle5atable1 = [];
     }
     //   this.principle5btable1 = JSON.parse(this.qaaobject[18]['Table1']);
       if(this.qaaobject[18]['Table1'] != null || this.qaaobject[18]['Table1'] != undefined )
     {
       let localval = JSON.parse(this.qaaobject[18]['Table1']);
      if(localval[0]['forreal6'] != '' || localval[0]['forreal7'] != '' ) 
      {
       this.principle5btable1 = JSON.parse(this.qaaobject[18]['Table1']);
      }
      else 
      {
       this.principle5btable1 = [];
      }
       
     } else 
     {
       this.principle5btable1 = [];
     }


// condition for boolean values of Yes or No
    if(this.qaaobject[13]['threeans'] == 'Yes'){
        this.principle3a3yesclicked = true;
    }else{
        this.principle3a3yesclicked = false;
    }

    if(this.qaaobject[13]['fourans'] == 'Yes'){
        this.principle3a4yesclicked = true;
    }else{
        this.principle3a4yesclicked = false;
    }


    if(this.qaaobject[13]['ten1'] == 'Yes'){
        this.principle3a10ayesclicked = true;
    }else{
        this.principle3a10ayesclicked = false;
    }

    if(this.qaaobject[13]['ten4'] == 'Yes'){
        this.principle3a10cyesclicked = true;
    }else{
        this.principle3a10cyesclicked = false;
    }

    if(this.qaaobject[13]['ten6'] == 'Yes'){
        this.principle3a10dyesclicked = true;
    }else{
        this.principle3a10dyesclicked = false;
    }

 

    if(this.qaaobject[14]['one'] == 'Yes'){
        this.principle3b1ayesclicked = true;
    }else{
        this.principle3b1ayesclicked = false;
    }

 

    if(this.qaaobject[14]['one2'] == 'Yes'){
        this.principle3b1byesclicked = true;
    }else{
        this.principle3b1byesclicked = false;
    }

 

    if(this.qaaobject[14]['four1'] == 'Yes'){
        this.principle3b4yesclicked = true;
    }else{
        this.principle3b4yesclicked = false;
    }


    if(this.qaaobject[13]['six1'] == 'Yes'){
        this.principle3a61yesclicked = true;
    }else{
        this.principle3a61yesclicked = false;
    }

 

    if(this.qaaobject[13]['six3'] == 'Yes'){
        this.principle3a62yesclicked = true;
    }else{
    this.principle3a62yesclicked = false;
    }


    if(this.qaaobject[13]['six5'] == 'Yes'){
        this.principle3a63yesclicked = true;
    }else{
        this.principle3a63yesclicked = false;
    }


    if(this.qaaobject[13]['six7'] == 'Yes'){
        this.principle3a64yesclicked = true;
    }else{
        this.principle3a64yesclicked = false;
    }


    if(this.qaaobject[17]['four'] == 'Yes'){
        this.principle5a4yesclicked = true;
    }else{
        this.principle5a4yesclicked = false;
    }

    if(this.qaaobject[18]['three'] == 'Yes'){
        this.principle5b3yesclicked = true;
    }else{
     this.principle5b3yesclicked = false;
    }

    if(this.qaaobject[24]['threea'] == 'Yes'){
        this.principle8b3ayesclicked = true;
    }else{
        this.principle8b3ayesclicked = false;
    }
//




if(this.qaaobject[11]['ten'] == 'Yes'){
this.p1bool1Yes = true;
this.p1bool1No = false;
}else if(this.qaaobject[11]['ten'] == 'No'){
    this.p1bool1Yes = false;
    this.p1bool1No = true;
}else{
    this.p1bool1Yes = false;
    this.p1bool1No = false;
};

if(this.qaaobject[12]['one'] == 'Yes'){
this.p2Bbool1Yes = true; 
console.log(this.p2Bbool1Yes);
}else{
    this.p2Bbool1Yes = false;
};


if(this.qaaobject[12]['two'] == 'Yes'){
    this.p2Bbool2Yes = true;
    }else{
        this.p2Bbool2Yes = false;
    }

    if(this.qaaobject[12]['four'] == 'Yes'){
      this.p2Bbool4Yes = true;
    }else{
        this.p2Bbool4Yes = false;
    }

    if(this.qaaobject[12]['five'] == 'Yes'){
        this.p2Bbool5Yes = true;
      }else{
          this.p2Bbool5Yes = false;
      }

      if(this.qaaobject[16]['two'] == 'Yes'){
        this.p4Bbool1Yes = true;
      }else{
          this.p4Bbool1Yes = false;
      }
      if(this.qaaobject[10]['two'] == 'Yes'){
        this.p1Bbool1 = true;
          }else{
            this.p1Bbool1 = false;
          }
    if(this.qaaobject[19]['sixtyone'] == 'Yes'){
        this.p6Abool1 = true;
    }else{
        this.p6Abool1 = false;
    }

    if(this.qaaobject[19]['sixtythree'] == 'Yes'){
        this.p6Abool2 = true;
    }else{
        this.p6Abool2 = false;
    }

    if(this.qaaobject[19]['sixtyfive'] == 'Yes'){
        this.p6Abool3 = true;
    }else{
        this.p6Abool3 = false;
    }

    if(this.qaaobject[19]['sixtyseven'] == 'Yes'){
        this.p6Abool4 = true;
    }else{
        this.p6Abool4 = false;
    }


    if(this.qaaobject[19]['eightyseven'] == 'Yes'){
        this.p6Abool5 = true;
    }else{
        this.p6Abool5 = false;
    }

    if(this.qaaobject[19]['one'] == 'Yes'){
        this.p6Abool6 = true;
    }else{
        this.p6Abool6 = false;
    }

    if(this.qaaobject[19]['thirtyseven'] == 'Yes'){
        this.p6Abool7 = true;
    }else{
        this.p6Abool7 = false;
    }

console.log(this.qaaobject[24]['threea']);



if(this.qaaobject[20]['PolicyQuestion25'] == 'Yes'){
        this.principle6b1yesclicked = true;
    }else{
        this.principle6b1yesclicked = false;
    }

    if(this.qaaobject[20]['PolicyQuestion49'] == 'Yes'){
        this.principle6b2yesclicked = true;
    }else{
        this.principle6b2yesclicked = false;
    }

    if(this.qaaobject[20]['PolicyQuestion95'] == 'Yes'){
        this.principle6b3yesclicked = true;
    }else{
        this.principle6b3yesclicked = false;
    }

    if(this.qaaobject[20]['PolicyQuestion137'] == 'Yes'){
        this.principle6b4yesclicked = true;
    }else{
        this.principle6b4yesclicked = false;
    }


      //this.principle6btable1 = JSON.parse(this.qaaobject[20]['Table1']);

      if(this.qaaobject[20]['Table1'] != null || this.qaaobject[20]['Table1'] != undefined )
      {
        let localval = JSON.parse(this.qaaobject[20]['Table1']);
       if(localval[0]['Subject'] != '' || localval[0]['Assessments'] != '' || localval[0]['Labs'] != '' || localval[0]['Labs2'] != '' ) 
       {
        this.principle6btable1 = JSON.parse(this.qaaobject[20]['Table1']);
        console.log(this.principle6btable1);
       }
       else 
       {
        this.principle6btable1 = [];
        console.log(this.principle6btable1);
       }
        
      } else 
      {
        this.principle6btable1 = [];
        console.log(this.principle6btable1);
      }

             
          });

      this.is
          .getBRSRFinalReportDetailsByReportId(this.reportid)
          .subscribe((res) => {
              var size = Object.keys(res).length;

              this.designtemplate = res[0].DesignTemplate;
              if (this.designtemplate == 1) {
                  this.imageUrl = this.firstimage;
              } else if (this.designtemplate == 2) {
                  this.imageUrl = this.secondimage;
              } else if (this.designtemplate == 3) {
                  this.imageUrl = this.thirdimage;
              } else if (this.designtemplate == 4) {
                  this.imageUrl = this.fourthimage;
              } else {
                  this.imageUrl = this.fifthimage;
              }
          });
  }

 
  Save(){
    let formva=this.prince1.value
    //console.log(formva);
        this.vrs.GetBRSRValidatingFinalReportByReportId(this.reportid,this.AuthService.user.id).subscribe((data)=>{
         // console.log(data);
          const resdata = data[0];
          const existingRemarks = JSON.parse(resdata.Remarks); // Assuming the existing Remarks data is stored in JSON format
          const newRemarks = {
            ...existingRemarks,
            ...formva // Assuming the 'value' is an object containing new data to be added
          };
          const boxes: any = {
            Id: resdata.Id,
            ReportId: resdata.ReportId,
            OrgId: resdata.OrgId,
            UserId: resdata.UserId,
            IsValidate: 1,
            Remarks: newRemarks,
            IsActive: resdata.IsActive,
            UpdatedByUserId: resdata.UpdatedByUserId,
            UpdatedDate: resdata.UpdatedDate,
            CreatedByUserId: resdata.CreatedByUserId,
            CreatedDate: resdata.CreatedDate,
          };
          this.vrs.addBRSRfinalreportvalidation(boxes).subscribe((final) => {
            //console.log(final);
          });
        })
    }
    openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {

      const dialogRef = this.dialog.open(UploadevidenceforbrsrComponent, {
    
        autoFocus: false,
    
        data: { ReportId, GuidanceNumber, OrgId, ques },
    
      });
    
    }
}
