import { Component, OnInit,HostListener,ElementRef,Output,EventEmitter } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ActivatedRoute,Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreatereportService } from '../createreport/createreport.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import Swal from 'sweetalert2';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import { ImagefortemplateService } from './imagefortemplate.service';
@Component({
  selector: 'app-imagefortemplate',
  templateUrl: './imagefortemplate.component.html',
  styleUrls: ['./imagefortemplate.component.scss']
})
export class ImagefortemplateComponent implements OnInit {
  constructor(private aa:ActivatedRoute,private us:UpdatereportService,private dcs:DynamiccontentService,private fb:FormBuilder,private ss:SelectdisService,private is:ImagefortemplateService,
    private router :Router,private crs:CreatereportService,private el:ElementRef,private cs:CreatereportService) { }
  reportid:any;
  selectedimage:any;
  reportname:any
  reportstartdate:any;
  reportenddate:any;
  Reportpicform:FormGroup
  imageUrl: any;
  showimg:boolean = false;
  check1:boolean=false;
  check2:boolean=false;
  check3:boolean=false;
  deffir:boolean=true;
  docuUrlforpdf;
  imglink:any;
  imgSize;
  reso:any;
  button:any;
docuUrlforjpg;
  defaultimage="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene1.jpg";
  defaultimage1="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene2.jpg";
  defaultimage2="https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene3.jpg";
  defaultimage3:any;
  ngOnInit() {
    this.button = document.getElementById('end') as HTMLButtonElement;
    this.button.disabled = !this.button.disabled;
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      //console.log(res);
      this.reportname=res[0].ReportName
      this.reportstartdate=res[0].StartDate
      this.reportenddate=res[0].EndDate
     })
     this.Reportpicform = this.fb.group({
      Id:[],
      Name: [''],
      Picture: ['',Validators.required],
      IsActive: [true],
      CreatedDate: [new Date()],
      CreatedByUserId: [1],
      UpdatedDate: [new Date()],
      UpdatedByUserId: [1],
  });

  }
  OnChangeType(event){
    this.check1=true;
    this.check2=false;
    this.check3=false;
  event=this.defaultimage;
  //console.log(event);
  this.selectedimage=event
  console.log(this.selectedimage);
  this.imageUrl = this.selectedimage
  this.button.removeAttribute("disabled");
  }
  OnChangeType1(event){
    this.check1=false;
    this.check2=true;
    this.check3=false;
    event=this.defaultimage1;
   // console.log(event);
    this.selectedimage=event
    console.log(this.selectedimage);
    this.imageUrl = this.selectedimage
    this.button.removeAttribute("disabled");
    }
    OnChangeType2(event){
      this.check2=false;
      this.check3=true;
      this.check1=false;
      event=this.defaultimage2;
   //   console.log(event);
      this.selectedimage=event
      console.log(this.selectedimage);
      this.imageUrl = this.selectedimage
      this.button.removeAttribute("disabled");
      }
      OnChangeType3(event){
        this.check2=false;
        this.check3=false;
        this.check1=false;
        event=this.imageUrl;
     //   console.log(event);
        this.imageUrl=event
        console.log(this.selectedimage);
        this.deffir=false;
        
        }
  Next(){  
    this.dcs.getReportpicDetails().subscribe((jia)=>{
      console.log(jia);
    console.log(this.imageUrl);
      if(this.imageUrl=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene1.jpg')
      {
        this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
          const reportdata=data[0]
            const selectedboxes:any = {
              Id:this.reportid,
              ReportHdrId:this.reportid,
              ReportName:reportdata.ReportName,
              StartDate:reportdata.StartDate,
              EndDate:reportdata.EndDate,
              CoverPageImage:this.selectedimage,
              IsActive:reportdata.IsActive,
              UpdatedByUserId:reportdata.UpdatedByUserId,
              UpdatedDate:reportdata.UpdatedDate,
              CreatedByUserId:reportdata.CreatedByUserId,
              CreatedDate:reportdata.CreatedDate,
              Reportpicbase:jia[0].Picture
            };
        console.log(selectedboxes);
        
        this.is.createFinalReportpic(selectedboxes).subscribe((data)=>{
        console.log(data); 
        })})
            Swal.fire({
              title:'Setting theme Image !',
              text:'Loading the Preview',
              icon:'success',
              // showCancelButton:true,
              confirmButtonText:'Proceed',
              //cancelButtonText:'No,keep it'
            }).then((result)=>{
              if(result.value){
                this.router.navigate([`/sectemplate`,this.reportid]);
               
            }
            else if(result.dismiss === Swal.DismissReason.cancel){}
          })
      }
      else if(this.imageUrl=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene2.jpg'){
        this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
          const reportdata=data[0]
            const selectedboxes:any = {
              Id:this.reportid,
              ReportHdrId:this.reportid,
              ReportName:reportdata.ReportName,
              StartDate:reportdata.StartDate,
              EndDate:reportdata.EndDate,
              CoverPageImage:this.imageUrl,
              IsActive:reportdata.IsActive,
              UpdatedByUserId:reportdata.UpdatedByUserId,
              UpdatedDate:reportdata.UpdatedDate,
              CreatedByUserId:reportdata.CreatedByUserId,
              CreatedDate:reportdata.CreatedDate,
              Reportpicbase:jia[1].Picture
            };
        console.log(selectedboxes);
        
        this.is.createFinalReportpic(selectedboxes).subscribe((data)=>{
        console.log(data); 
        })})
            Swal.fire({
              title:'Setting theme Image !',
              text:'Loading the Preview',
              icon:'success',
              // showCancelButton:true,
              confirmButtonText:'Proceed',
              //cancelButtonText:'No,keep it'
            }).then((result)=>{
              if(result.value){
                this.router.navigate([`/sectemplate`,this.reportid]); 
               
            }
            else if(result.dismiss === Swal.DismissReason.cancel){}
          })
      }
      else if(this.imageUrl=='https://etgdocstorage.s3.ap-south-1.amazonaws.com/ESG/ReportImages/scene3.jpg'){
        this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
          const reportdata=data[0]
            const selectedboxes:any = {
              Id:this.reportid,
              ReportHdrId:this.reportid,
              ReportName:reportdata.ReportName,
              StartDate:reportdata.StartDate,
              EndDate:reportdata.EndDate,
              CoverPageImage:this.imageUrl,
              IsActive:reportdata.IsActive,
              UpdatedByUserId:reportdata.UpdatedByUserId,
              UpdatedDate:reportdata.UpdatedDate,
              CreatedByUserId:reportdata.CreatedByUserId,
              CreatedDate:reportdata.CreatedDate,
              Reportpicbase:jia[2].Picture
            };
        console.log(selectedboxes);
        
        this.is.createFinalReportpic(selectedboxes).subscribe((data)=>{
        console.log(data); 
        })})
            Swal.fire({
              title:'Setting theme Image !',
              text:'Loading the Preview',
              icon:'success',
              // showCancelButton:true,
              confirmButtonText:'Proceed',
              //cancelButtonText:'No,keep it'
            }).then((result)=>{
              if(result.value){
                this.router.navigate([`/sectemplate`,this.reportid]); 
               
            }
            else if(result.dismiss === Swal.DismissReason.cancel){}
          })
      }

      else{
        this.is.getFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
          const reportdata=data[0]
                 var obj ={
                Icon : this.imageUrl
              }
              this.us.createimageurl(obj).subscribe((data)=>{
                console.log(data);
                this.imglink=data['url'];
              console.log(this.imglink);
            const selectedboxes:any = {
              Id:this.reportid,
              ReportHdrId:this.reportid,
              ReportName:reportdata.ReportName,
              StartDate:reportdata.StartDate,
              EndDate:reportdata.EndDate,
              CoverPageImage:this.imglink,
              IsActive:reportdata.IsActive,
              UpdatedByUserId:reportdata.UpdatedByUserId,
              UpdatedDate:reportdata.UpdatedDate,
              CreatedByUserId:reportdata.CreatedByUserId,
              CreatedDate:reportdata.CreatedDate,
              Reportpicbase:this.imageUrl
            };
        console.log(selectedboxes);
        
        this.is.createFinalReport(selectedboxes).subscribe((data)=>{
        console.log(data); 
        })})
        }) ; 
            Swal.fire({
              title:'Setting theme Image !',
              text:'Loading the Preview',
              icon:'success',
              // showCancelButton:true,
              confirmButtonText:'Proceed',
              //cancelButtonText:'No,keep it'
            }).then((result)=>{
              if(result.value){
                this.router.navigate([`/sectemplate`,this.reportid]); 
            }
            else if(result.dismiss === Swal.DismissReason.cancel){}
          })
      }
    })
  }
  back(){
    this.router.navigate([`/importdis`,this.reportid]);
  }
  editimg(){
    this.showimg = true;
    this.button.removeAttribute("disabled");
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
     // console.log(  this.imgSize);
      
      }
      else {
        this.imgSize =  Url.length * (3/4) -1
        console.log( this.imgSize);
      }
       
      if(this.imgSize<256000){
 this.imageUrl = event.target.result;
 console.log(this.imageUrl);
 this.imglink=this.imageUrl
      }
 
      else {
       this.imageUrl = null;
     
      // console.log(this.imageUrl);
      }
    //  console.log(this.imageUrl)
    }
    reader.readAsDataURL(this.fileToUpload);
  }
}
