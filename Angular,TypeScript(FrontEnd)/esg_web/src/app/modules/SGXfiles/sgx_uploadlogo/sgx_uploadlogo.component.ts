import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { CreatereportforsgxService } from '../createreportforsgx/createreportforsgx.service';
import { SelectsgxService } from '../selectsgx/selectsgx.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportgenerationService } from 'app/services/reportgeneration.service';

@Component({
  selector: 'app-sgx_uploadlogo',
  templateUrl: './sgx_uploadlogo.component.html',
  styleUrls: ['./sgx_uploadlogo.component.scss']
})
export class Sgx_uploadlogoComponent implements OnInit {

  imageUrl
  showimg
  reportid: any;
  reportname: any;
  reportstartdate: any;
  reportenddate: any;
  imgSize;
  imglink:any;
  button:any;
  Stage:any;
  Uploadlogoform:FormGroup
  picifthere:any;
  constructor(  private route: ActivatedRoute,
    private aa: ActivatedRoute,
    private us: UpdatereportService,
    private router: Router,
    private is:Sgx_imagereportService,
    private crs:CreatereportforsgxService,
    private ss:SelectsgxService,
    private cs:UpdatereportService,
    private fb:FormBuilder,
    private st:ReportgenerationService) { }

  ngOnInit() {
    this.button = document.getElementById('ena') as HTMLButtonElement;
    this.button.disabled = !this.button.disabled;
    this.Uploadlogoform = this.fb.group({
       
      Picture: ['',Validators.required],

  });
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
        //console.log(res);
        this.reportname = res[0].ReportName;
        this.reportstartdate = res[0].StartDate;
        this.reportenddate = res[0].EndDate;
    });
    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((dd)=>{
      this.picifthere=dd[0]['Logo']
      this.Uploadlogoform.patchValue({
        Picture:this.picifthere
      })
    })
    if (this.picifthere) {
      this.button.disabled = true;
    } else {
      this.button.disabled = false;
    }
  }
  editimg(){
    this.showimg = true;
    this.button.removeAttribute("disabled");
  }
  next(){
    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
      const reportdata=data[0]
         var obj ={
        Icon : this.imageUrl
      }
      this.us.createimageurl(obj).subscribe((data)=>{
        console.log(data);
        this.imglink=data['url'];
      console.log(this.imglink);
      const selectedboxes:any = {
        Id:reportdata.Id,
        ReportId:this.reportid,
        ReportName:reportdata.ReportName,
        StartDate:reportdata.StartDate,
        EndDate:reportdata.EndDate,
        CoverPageImage:reportdata.CoverPageImage,
        CoverPageLayout:reportdata.CoverPageLayout,
        DesignTemplate:reportdata.DesignTemplate,
        Logo:this.imglink,
        FinalDraftGuidance:this.imageUrl,
        Introduction:reportdata.Introduction,
        IsActive:reportdata.IsActive,
        Messagefromceo:reportdata.Messagefromceo,
        aboutthisreport:reportdata.aboutthisreport,
        keyhighlights:reportdata.keyhighlights,
        vision:reportdata.vision,
        IsValidate:reportdata.IsValidate,
        Settings:0,
        UpdatedByUserId:reportdata.UpdatedByUserId,
        UpdatedDate:reportdata.UpdatedDate,
        CreatedByUserId:reportdata.CreatedByUserId,
        CreatedDate:reportdata.CreatedDate,
        Reportpicbase:reportdata.Reportpicbase
      };
  console.log(selectedboxes);
         this.is.createSGXFinalReport(selectedboxes).subscribe((data)=>{
    console.log(data); 
    })
      })   
    }) ;
    this.Stage = '/sgx_introduction'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  fileToUpload: any;
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      // this.imageUrl = event.target.result;
      const Url = event.target.result;
      const Img = event.target.result[Url.length-1];
      const Img1 = event.target.result[Url.length-2];
      if (Img === '=' && Img1==='=' ) {
      this.imgSize = Url.length * (3/4) -2
      console.log(  this.imgSize);
      
      }
      else {
        this.imgSize =  Url.length * (3/4) -1
        console.log( this.imgSize);
      }
       
      if(this.imgSize<256000){
 this.imageUrl = event.target.result;

 
      }
 
      else {
       this.imageUrl = null;
     
      // console.log(this.imageUrl);
      }
    //  console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  back(){
    this.Stage = '/sgx_secdesign'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
    // this.router.navigate([`/sectemplate`,this.reportid]);
 
  }
  layout(){
    this.Stage = '/sgx_sectemplate'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
  cover(){
    this.Stage = '/sgx_imagereport'
    var obj = {
      "ReportId" : this.reportid,
      "Stage":this.Stage
    }
    this.st.updateSGXStage(obj).subscribe((data=>{
        this.router.navigate([`${this.Stage}/${this.reportid}`]);
    }))
  }
}
