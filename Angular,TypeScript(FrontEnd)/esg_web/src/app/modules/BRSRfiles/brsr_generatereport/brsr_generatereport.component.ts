import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatereportService } from 'app/modules/updatereport/updatereport.service';
import * as html2pdf from 'html2pdf.js'
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
} from '@angular/forms';
import { Brsr_introreportComponent } from '../brsr_introreport/brsr_introreport.component';
import { Brsr_dynamicreportComponent } from '../brsr_dynamicreport/brsr_dynamicreport.component';
import { Brsr_previewreportComponent } from '../brsr_previewreport/brsr_previewreport.component';
import { Brsr_imagereportService } from '../brsr_imagereport/brsr_imagereport.service';
import { Brsr_generatereportService } from './brsr_generatereport.service';
import { split } from 'lodash';
import Swal from 'sweetalert2';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { Brsr_generaldisclosureComponent } from '../brsr_generaldisclosure/brsr_generaldisclosure.component';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Brsr_managementComponent } from '../brsr_management/brsr_management.component';
import { Brsr_principalsreportComponent } from '../brsr_principalsreport/brsr_principalsreport.component';

@Component({
  selector: 'app-brsr_generatereport',
  templateUrl: './brsr_generatereport.component.html',
  styleUrls: ['./brsr_generatereport.component.scss']
})
export class Brsr_generatereportComponent implements OnInit {
  reportid: any;
  reportname:any;
  reportstartdate:any;
  reportenddate:any;
  companypic:any;
  comp:any;
  anse:any;
  string:any;
  Username:any;
  dynamicComponent: any;
  dynamicComponent1:any;
  dynamicComponent2:any;
  dynamicComponent3:any;
  dynamicComponent4:any;
  generaldisclosure:any;
  economic:any;
  environment:any;
  social:any;
  materiality:any;
  tableofcontent1:any;
  tableofcontent2:any;
  tableofcontent3:any;
  tableofcontent4:any;
  tableofcontent5:any;
  uploadedevidence:any
  cuck:boolean=false;
  constructor(private AuthService: AuthService,
    private router: Router,
    private aa: ActivatedRoute,
    private fb: FormBuilder,
    private us: UpdatereportService,
    private is :Brsr_imagereportService,
    private gsService:Brsr_generatereportService,
    private ds:DashboardService,
    private http: HttpClient) { }

  ngOnInit() {
    (this.dynamicComponent = Brsr_dynamicreportComponent),
   (this.dynamicComponent1 = Brsr_introreportComponent),
   (this.dynamicComponent2 = Brsr_generaldisclosureComponent),
   (this.dynamicComponent3 = Brsr_managementComponent),
   (this.dynamicComponent4 = Brsr_principalsreportComponent),
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getBRSRReportDetailsByReportId(this.reportid).subscribe((res) => {
      this.reportname = res[0].ReportName;
      this.reportstartdate = res[0].StartDate;
      this.reportenddate = res[0].EndDate;
  });
  this.ds.getuserdetails(this.AuthService.user.id).subscribe((data) => {
    this.Username=data[0]['FirstName'];
  });
  
  this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
this.companypic=res[0].FinalDraftGuidance
this.comp=split(this.companypic,'"')
this.anse=this.comp[2];
this.string = this.anse;

this.string = this.string.substring(0, this.string.length-1);
})


  }
  back(){
    this.router.navigate(['/brsr_previewreport',this.reportid]);
  }
  publishreport(){

    console.log(this.reportid);
    Swal.fire({
      title: `Dear ${this.Username},
      We are in the beta phase, so the report will be published to Testnet. 
     Please Confirm if you want to proceed.`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
      imageUrl: './assets/img/blockchainpublished.png',
  imageWidth: 200,
  imageHeight: 170,
  imageAlt: 'Custom image',
    }).then((result) => {
     
      if (result.isConfirmed) {
        let timerInterval
        Swal.fire({
          timer: 5000,
          imageUrl: './assets/img/footprintmodalpop.gif',
          showConfirmButton: false,
          didOpen: () => {
            const b = Swal.getHtmlContainer().querySelector('b');
            timerInterval = setInterval(() => {
              // Code inside the interval function
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
  if (result.dismiss === Swal.DismissReason.timer) {
    this.is.getBRSRFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
      const reportdata=data[0]
        const selectedboxes:any = {
          Id:reportdata.Id,
          ReportId:this.reportid,
          ReportName:reportdata.ReportName,
          StartDate:reportdata.StartDate,
          EndDate:reportdata.EndDate,
          CoverPageImage:reportdata.CoverPageImage,
          CoverPageLayout:reportdata.CoverPageLayout,
          DesignTemplate:reportdata.DesignTemplate,
          Logo:reportdata.Logo,
          Introduction:reportdata.Introduction,
          IsActive:reportdata.IsActive,
          FinalDraftGuidance:reportdata.FinalDraftGuidance,
          Messagefromceo:reportdata.Messagefromceo,
          aboutthisreport:reportdata.aboutthisreport,
          keyhighlights:reportdata.keyhighlights,
          vision:reportdata.vision,
          IsSignoff:reportdata.IsSignoff,
          IsValidate:reportdata.IsValidate,
          Settings:0,
          UpdatedByUserId:reportdata.UpdatedByUserId,
          UpdatedDate:reportdata.UpdatedDate,
          CreatedByUserId:reportdata.CreatedByUserId,
          CreatedDate:reportdata.CreatedDate,
          Reportpicbase:reportdata.Reportpicbase,
          isPublished:1,
        };

    this.is.createBRSRFinalReport(selectedboxes).subscribe((data)=>{
    })
   
    })
    
    this.gsService.GetblockchainReportJsonByReportId(this.reportid).subscribe((resu) => {
       var url = `<a target="_blank" href='https://testnet.algoscan.app/tx/${resu['txId']}'>Click to verify Blockchain Transaction</a>`
      Swal.fire({
        imageUrl: './assets/img/blockchainpublished.png',
        imageWidth: 100, // Adjust the image width as per your preference
        imageHeight: 100, // Adjust the image height as per your preference
        imageAlt: 'Custom image',
        title: `Your Blockchain transaction details are:`,
        html: `<div style="text-align: left">
                  <p><strong>Owner:</strong> ${resu['addr']}</p>
                  <p><strong>Network:</strong> ${resu['gen']}</p>
                  <p><strong>Gas Fee:</strong> ${resu['fee']}</p>
                  <p><strong>Transaction Address:</strong> ${resu['txId']}</p>
                  <p style="text-align: center"><i>${url}</i></p>
                </div>`,
        width: '400px', // Adjust the width of the popup as per your preference
        showClass: {
          popup: 'animate__animated animate__fadeInDown',
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp',
        },
      });
      
      this.router.navigate(['/dashboard']);
    });
    
   
           
  }
  
})
   }
     
      
    })

  }

  download(){
    var element = document.getElementById('pagenumber');
var opt = {
  filename:     'Report.pdf',
   //image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 2 },
  image:        { type: 'jpg'},
};
//html2pdf().from(element).set(opt).save();

const pages = Array.from(document.querySelectorAll('div[aria-label^="pdf-page-"]'))
let worker = html2pdf()
    .set(opt)
    .from(pages[0])

  if (pages.length > 1) {
    worker = worker.toPdf() // worker is now a jsPDF instance

    // add each element/page individually to the PDF render process
    pages.slice(1).forEach((element, index) => {
      worker = worker
        .get('pdf')
        .then(pdf => {
          pdf.addPage()
        })
        .from(element)
        .toContainer()
        .toCanvas()
        .toPdf()
    })
  }

  worker = worker.save()

  }
  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
          
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.bundle.min.js" rel="stylesheet">
    <link href="assets/libs/jsvectormap/css/jsvectormap.min.css" rel="stylesheet" type="text/css" />
    
      <style>
      @page {
        size: auto;
        margin: -40px 5px -100px 5px ;
      
        
      }
      
      @page :footer {
        display: none
      }
      
      @page :header {
        display: none
      }
      }

      .footer {
        bottom: 0;
        
        position: absolute;
        right: 0;
        color: var(--vz-footer-color);
        height: 60px;
       
    }
.my-img-0 {
  
transform: translateY(0px);

}

.card {
  border: 0px solid rgba(0,0,0,.125) !important;
 }
// .general-alert {
//   background-color: #1c75bc94 !important;
//   border-left: 3px solid !important;
// }



.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-1 {
width: 30%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}

.temp-design-33 {

background-color: #fff !important;

width: 100%;

margin-right: auto;

margin-top: 900px;

height: 500px;

}


///templatetwo///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-2 {
width: 45%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}

.temp-design-2 {
background-color: #fff !important;
width: 80%;
margin-left: auto;
height: 600px;
}

///templatetwo///




///templatethree///
.mydesign {
background-color: #fff !important;
}
.design-text {
color: #000 !important;
}

.badge {
   display: inline-block; 
   padding: 0.25em 0.4em; 
  font-size: 17px !important;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
 border:0px solid #000 !important;
  color: #066b5e !important;
}
.footer-print{
  display:flex;
  justify-content:center;
}
.card-header {
  padding: 0.75rem 1.25rem;
  margin-bottom: 0;
  border-bottom: 0px solid rgba(0,0,0,.125) !important;
  background-color: rgb(0 0 0 / 0%);
}

.mydesign-logo-3 {
width: 50%;
margin-left: 18px;
object-fit: contain;
margin-top: 300px;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}
.temp-design-4 {
background-color: #fff !important;
width: 100%;
margin-right: auto;
height: 1500px;
}
///templatethree///





///templatefour///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-4 {
width: 45%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}

.temp-design-5 {
background-color: #fff !important;
width: 70%;
margin-right: auto;
margin-top: 665px;
height: 450px;

}
///templatefour///




///templatefive///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-5 {
width: 45%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}

.temp-design-6 {
background-color: #fff !important;
width: auto;
margin-right: auto;


}


.my-img-0 {
  
transform: translateY(0px);

}
.pretext {
color: #e57d38;
}
.pretext-1 {
color: #8cc540;
}
.preview-d-text h3 {
color: #8cc540;
}
.esg-head {
text-align: left;
}
.pretext1 {
text-align: left;
font-size: 20px;
margin-top: 25px;
padding-left: 50px;
}
.dynamic-text {
text-align: left;
margin-left: 45px;
}
.dynamic-text-2 {
margin-right: 50px;
}
.dynamic-page {
margin-top: 5px;
}
.footer-text {
padding-top: 30px;
}
.footer-text-1 {
padding-top: 80px;
}

.nested-1 h3{
font-size: 20px;
text-align: left;
color: #165a57;
padding-left: 50px;
margin-top: 5px;

}
.general-alert {
text-align: left;
}
.general-alert i {
margin-left: 15px;
}
.fa-102 {
font-size: 17px !important;
}
.fa-text h6 {
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  font-family: 'Inter', sans-serif;
  }
.fa-text {
text-align: left;
margin-top: 0px;
}
.fa-text-1 {
text-align: left;
}
.fa-text-1 h6 {
  font-size: 20px;
  margin-left: 40px;
  margin-top: -5px;
  color: #000 !important;
  font-weight: 400;
line-height: 30px;
font-family: 'Inter' sans-serif;
text-align: justify;      
  }
.esg-head .float-end {
margin-right: 15px;
}

.preview-d-text {
text-align: justify;
font-size: 18px;
padding-left: 50px;
margin-bottom: 0px;
margin-top: 8px;

}


.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
// .mydesign-logo-1 {
// width: 50%;
// object-fit: contain;
// margin: auto;
// }
// .design-img {
// width: 100%;
// height: 375px;
// object-fit: cover;
// }

// .temp-design-33 {
// background-color: #fff !important;
// width: 100%;
// margin-right: auto;
// margin-top: 342px;
// height: 409px;


// }


///templatetwo///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-2 {
width: 60%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}

.temp-design-2 {
background-color: #fff !important;
width: 80%;
margin-left: auto;
height: 700px;
}

///templatetwo///




///templatethree///
.mydesign {
background-color: #fff !important;
}
.design-text {
color: #000 !important;
}
.mydesign-logo-3 {
width: 50%;
margin-left: 18px;
object-fit: contain;
margin-top: 300px;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}
.temp-design-0 {
background-color: #fff !important;
width: 70%;
margin-right: auto;
height: 1400px;
}
///templatethree///





///templatefour///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-4 {
width: 40%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}
.temp-design-14 {
  background-color: #fff !important;
  width: 70%;
  margin-top: 900px;
  height: 500px;
}
///templatefour///




///templatefive///
.mydesign {
background-color: #fff !important;

}
.design-text {
color: #000 !important;
}
.mydesign-logo-5 {
width: 50%;
object-fit: contain;
margin: auto;
}
.design-img {
width: 100%;
height: 375px;
object-fit: cover;
}
.upload-text {
  background-color: #1076bc;
  padding: 25px 0px 10px 10px;
  border-radius: 5px;
  box-shadow: 0 8px 20px -2px rgb(158 152 153 / 50%);
  margin-top: 60px;

}
.upload-text h3 {
 
  color: #fff;
  font-size: 25px;
  text-decoration: none !important;

}
.upload-text-1 h3 {
  text-align: left;
  margin-left: 50px;
 margin-top: 50px;
 font-size: 20px;
 color: #8bc541;
}
.upload-style {
  text-align: left;
  line-break: anywhere;
  font-size: 18px;
  margin: 10px 30px 25px 18px;

}
.upload-style a {
  color: #1c75bc !important;
}
.upload-style a:hover {
  color: #1a344b !important;
}


a, a > span {
  position: relative;
  color: inherit;
  text-decoration: none;
  line-height: 24px;
}
a:before, a:after, a > span:before, a > span:after {
  content: '';
  position: absolute;
  transition: transform .5s ease;
}

.hover-4 {
  padding: 10px;
  display: inline-flex;
  overflow: hidden;
}
.hover-4:before, .hover-4:after {
  left: 0;
  width: 100%;
  height: 2px;
  background: #492059;
}
.hover-4:before {
  bottom: 0;
  transform: translateX(-100%);
}
.hover-4:after {
  top: 0;
  transform: translateX(100%);
}
.hover-4:hover:before, .hover-4:hover:after {
  transform: translateX(0);
}
.temp-design-6 {
background-color: #fff !important;
width: auto;
margin-right: auto;

}
.jalsa {
background-color: #fff0 !important;
}
.sun {
background-color: rgba(255, 255, 255, 0) !important;
margin-top:-50px ;
}
.pagenumber {
counter-reset: section;
}

.float-page::before {
counter-increment: section;
content: counter(section);
}

.in-pages {
color: #000;
margin-top: -25px;
margin-right: 20px;
font-size: 15px;
}
.pagenumber {
  counter-reset: section;
}

.float-page::before {
  counter-increment: section;
  content: counter(section);
}
.mypower {
  margin-left: 30px;
}
.mypower1 {
  margin-left: 5px;
}
.mypower2 {
  margin-top: 0px !important;
  margin-left: 250px !important;
}
.list-group-item {
  border: 0px solid !important;
}

.ttm1 h3 {
  font-size: 30px !important;
  font-weight: 600!important;
  color: #155aa3!important; 
  font-family: inter,sans-serif;         
}

.ttm2 h3 {
  color: #219ddc !important;
  font-weight: 600 !important;    
  font-family: inter,sans-serif;        
}
.ttm3 h3 {
  font-size: 17px !important;
  text-align: left !important;
  font-weight: bold !important;
  color: #000 !important;  
  font-family: inter,sans-serif;            
}

.ttm4 h3 {
  font-size: 17px !important;
  text-align: left !important;
  color: #000 !important;
  font-weight: 500 !important; 
  line-height: 20px; 
  font-family: inter,sans-serif;            
}

.intro-1 {
  
  font-size: 17px !important;
  text-align: justify !important;
  color: #000 !important; 
  line-height: 30px; 
  font-family: inter,sans-serif;            
}

.intor-text{
  font-family: inter,sans-serif; 
  font-size: 18px;
  background-color: #fff; 
  color: #000;
  border:none;
}
.in-pages {
  color: #000;
  margin-top: -25px;
  margin-right: 20px;
  font-size: 15px;
}


article {
  position: relative;
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
}


/*== Table of contents == */

ol,
ul,
li {
  margin: 0;
  padding: 0;
}

.toc {  margin:0.4rem;}
.toc,
.toc ol > li:before,
.chapter {
  position: relative;
  z-index: 2;
  font-size: 14px;
}

.toc ol {
  counter-reset: item;
  position: relative; }
  .toc ol > li:before {
   
    display: table-cell;
    padding-right: .8rem;
    width: 2.4rem; }
  .toc ol li li:before {
    content: counters(item, ".") " "; }

.toc li {
  counter-increment: item;
  display: table;
  font-weight: 400;
 
  margin-left: 0;
  -webkit-transition: .3s;
  transition: .3s;
  width: 100%; }
  .toc li li {
    font-weight: 300;
    margin-bottom: 0;
    margin-left: 0; }
  .toc li .toc-page:before {
    content: '';
    display: block;
    left: 0;
    margin-top: 1.8rem;
    position: absolute;
    right: 4rem; }
  .toc li > a {
    display: inline-block;
    width: 100%;
    color: #000 !important;
    font-family: Inter,sans-serif;

   }
  

.chapter {
  display: inline-block;
  float: left;
  line-height: 1.3rem !important;
  }

.toc-page {
  float: left;
  text-align: left;
  line-height: 1.3rem !important;

}

/*=== Colors === */




.my-img-0 {
  
  transform: translateY(0px);

}
.pretext {
  color: #1c75bc;
}
.pretext-1 {
  color: #8cc540;
}
.preview-d-text h3 {
  color: #8cc540;
}
.esg-head {
  text-align: left;
}
.pretext1 {
  text-align: left;
  font-size: 20px;
  margin-top: 25px;
  padding-left: 50px;
}
.dynamic-text {
  text-align: left;
  margin-left: 45px;
}
.dynamic-text-2 {
  margin-right: 50px;
}
.dynamic-page {
  margin-top: 5px;
}
.footer-text {
  padding-top: 30px;
}
.footer-text-1 {
  padding-top: 80px;
}

.nested-1 h3{
  font-size: 20px;
  text-align: left;
  color: #165a57;
  padding-left: 50px;
  margin-top: 5px;

}
.general-alert {
  text-align: left;
}
.general-alert i {
  margin-left: 15px;
}
.fa-102 {
  font-size: 17px !important;
}
.fa-text h6 {
  font-size: 20px;
  font-weight: 500;
  margin-left: 35px;
 
}
.fa-text {
  text-align: left;
  margin-top: 0px;
}
.fa-text-1 {
  text-align: left;
}
.fa-text-1 h6 {
  font-size: 20px;
  font-weight: 500;
  margin-left: 20px;
  margin-top: -5px;
  color: #000 !important;


}
.esg-head .float-end {
  margin-right: 15px;
}

.preview-d-text {
  text-align: justify;
  font-size: 18px;
  padding-left: 50px;
  margin-bottom: 0px;
  margin-top: 8px;

}


.mydesign {
  background-color: #fff !important;
  
}
.design-text {
  color: #000 !important;
}
.mydesign-logo-1 {
  width: 50%;
  object-fit: contain;
  margin: auto;
}
.design-img {
  width: 100%;
  height: 375px;
  object-fit: cover;
}

.temp-design-33 {
  background-color: #fff !important;
  width: 100%;
  margin-right: auto;
  margin-top: 342px;
  height: 409px;

 
}


///templatetwo///
.mydesign {
  background-color: #fff !important;
  
}
.design-text {
  color: #000 !important;
}
.mydesign-logo-2 {
  width: 60%;
  object-fit: contain;
  margin: auto;
}
.design-img {
  width: 100%;
  height: 375px;
  object-fit: cover;
}

.temp-design-2 {
  background-color: #fff !important;
  width: 80%;
  margin-left: auto;
  height: 400px;
}

///templatetwo///




///templatethree///
.mydesign {
  background-color: #fff !important;
}
.design-text {
  color: #000 !important;
}
.mydesign-logo-3 {
  width: 50%;
  margin-left: 18px;
  object-fit: contain;
  margin-top: 300px;
}
.design-img {
  width: 100%;
  height: 375px;
  object-fit: cover;
}
.temp-design-4 {
  background-color: #fff !important;
  width: 100%;
  margin-right: auto;
  height: 1500px;
}
///templatethree///





///templatefour///
.mydesign {
  background-color: #fff !important;
  
}
.design-text {
  color: #000 !important;
}
.mydesign-logo-4 {
  width: 60%;
  object-fit: contain;
  margin: auto;
}
.design-img {
  width: 100%;
  height: 375px;
  object-fit: cover;
}

.temp-design-5 {
  background-color: #fff !important;
  width: 70%;
  margin-right: auto;
  margin-top: 665px;
  height: 450px;
 
}
///templatefour///




///templatefive///
$grigeneraldisclosure-var:10;
.mydesign {
  background-color: #fff !important;
  
}
.design-text {
  color: #000 !important;
}
.mydesign-logo-5 {
  width: 50%;
  object-fit: contain;
  margin: auto;
}
.design-img {
  width: 100%;
  height: 375px;
  object-fit: cover;
}

.temp-design-6 {
  background-color: #fff !important;
  width: auto;
  margin-right: auto;

}
.jalsa {
  background-color: #fff0 !important;
}
.sun {
  background-color: rgba(255, 255, 255, 0) !important;
} 
.pagenumber {
 counter-reset: section;
  // $var: section;
}

.float-page::before {
  counter-increment: section;
  content: counter(section);
  &:last-child {
      $grigeneraldisclosure-var: counter(section);
    }
}

.in-pages {
  color: #000;
  margin-top: -25px;
  margin-right: 20px;
  font-size: 15px;
}

.bg-preview {
  height: 1050px;
}
.brsr-title {
  font-size: 28px;
  padding-left: 25px;
  margin-top: 20px;
}
.brsr-title-sub2 {
  text-align: left; 
  float: left;
  font-size: 16px;
  padding-left: 35px;
  font-family: Inter, sans-serif;
  margin-top:10px;
}
.brsr-title-princi1 {
  color: #1076bc;
  padding-left: 65px;
  text-align: center important;
  float: left;
  font-family: Inter, sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
.brsr-title-princi01 {
  color: #000;
  padding-left: 65px;
  text-align: center important;
  float: left;
  font-family: Inter, sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
.brsr-title-sub1 {
  color: #1076bc;
  padding-left: 65px;
  text-align: left;
  float: left;
  font-family: Inter, sans-serif;
  font-size: 18px;
  margin-top: 5px;
}
.report-inname {
  margin-top: 15px;
}
.question-text {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;

}
.number-text {
  float: left;
}
.question-text01 {
  margin-top: 0px;
  margin-left: 20px;
  text-align: left;
}
.question-text02 {
  margin-top: -22px;
    margin-left: 35px;
    text-align: left;

}
.question-text03 {
  margin-top: 0px;
  margin-left: 22px;
  text-align: left;

}

.brsr-table-35 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 55% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}

.brsr-table-36 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 55% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}

.brsr-table-37 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 0px 0px !important;
  border-color: #dee2e6;
}

.brsr-table-38 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 0px !important;
}

.brsr-table-39 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 2px 2px 0px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-40 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-41 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 1% !important;
  padding: 10px 10px 70px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}
.brsr-table-42 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 20px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-table-43 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
}

.brsr-table-44 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 58px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}

.brsr-table-45 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 5px 2px 0px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-46 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 2px 2px 5px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-47 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 1px !important;
}
.brsr-table-48 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 2px 5px !important;
}
.brsr-table-49 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-width: 0px 5px 1px 1px !important;
}
.brsr-table-50 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-width: 3px 1px 2px 0px !important;
}

.brsr-table-51 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-table-52 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 58px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 2px 0px !important;
}

.brsr-table-53 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-54 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;;
  padding: 10px 2px 5px 0px !important;
  border-width: 1px 1px 0px 1px !important;
  border-color: #dee2e6;
}
.brsr-table-55 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-56 {
  text-align: center !important;
  font-weight: 600 !important;
  text-align: center !important;;
  border-width: 1px 1px 1px 1px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-57 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-58 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 5px !important;
    border-color: #dee2e6 !important;  
}

.brsr-table-59 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-60 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 0px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-61 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-62 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 1px 3px 5px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-63 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 2px 2px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 2px !important;
  border-color: #dee2e6;
}

.brsr-table-64 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 10px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 2px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-65 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 10px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 5px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-66 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-67 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 1px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 2px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-68 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 1px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-69 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-70 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 20px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}

.brsr-table-71 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0rem 3rem 5rem 3rem !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;

}

.brsr-table-72 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 1px 2px 1px !important;
  border-color: #dee2e6 !important;
}
.brsr-table-73 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 0rem 1rem 4rem 1rem !important;
  background-color: #00000000 !important;
  border-width: 2px 1px 2px 1px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-74 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 1px 2px 5px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-75 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 1px 2px 5px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-076 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 0rem 1rem 3rem 1rem !important;
  background-color: #f7f7f7 !important;
  
  border-width: 3px 5px 2px 5px !important;
}


.brsr-table-76 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 0rem 1rem 3rem 1rem !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}



.brsr-title-sub3 {
  font-size: 16px !important;
  font-family: Inter, sans-serif !important;
  padding-left: 42px !important;
  text-align: left !important;
  float: left !important;
  margin-top: 15px !important;

}
.brsr-table-00 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 2% !important;
  padding: 10px 0px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
}

.brsr-table-01 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 10% !important;
  padding: 10px 0px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #ededed;
}
.brsr-table-02 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 15% !important;
  padding: 10px 0px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #ededed;
}
.brsr-table-03 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: right !important;
  width: 10% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
}
.brsr-table-04 {
  font-size: 14px !important;
  text-align: left !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  
}
.brsr-table-05 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
}
.brsr-tr {
  background-color: rgba(0,0,0,.00) !important;
}
.brsr-tablebody {
  padding: 0px 30px 0px 40px !important;
}
.bw {
  border-width: 0px 5px 0px 5px !important;
  border-color: #ededed;
  
}

.table-striped>tbody>tr:nth-of-type(odd)>* {
  --bs-table-accent-bg: rgb(0 0 0 / 0%) !important;
}

.brsr-table-06 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 25% !important;
  padding: 10px 0px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 5px !important;
  border-color: #ededed;
}
.brsr-table-07 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 12% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #ededed;
}

.brsr-table-08 {
  font-size: 14px !important;
  text-align: left !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 5px 0px 0px !important;
  border-color: #ededed;
  
}
.brsr-table-09 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 0px 0px 0px !important;
  border-color: #ededed;
  
}
// .brsr-top {
//   margin-top: 40px !important;
// }

.brsr-table-10 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 0px !important;
}
.brsr-table-11 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-table-12 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 0px !important;
}
.brsr-table-12 {
  font-size: 14px !important;
  text-align: left !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 5px 0px 0px !important;
  
}

.brsr-table-013 {
  font-size: 14px !important;
  text-align: left !important;
  font-weight: 700 !important;
  padding: 0.5rem !important;
  background-color: #00000000 !important;
  border-width: 1px 5px 0px 1px !important;

 
  
}

.brsr-table-13 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 5px 0px 1px !important;
  
}
.brsr-table-14 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 1px 0px 0px !important;
  
}
.brsr-top-card {
  background-color: transparent !important;
  border-bottom: 1px solid #dee2e6 !important;
}

.report-title {
  background-color: transparent !important;
}
.brsr-table-15 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}
.brsr-table-16 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 0px !important;
}
.brsr-card01 {
  background-color: transparent !important;
  border-bottom: 1px solid #dee2e6 !important;

}

.brsr-table-017 {
  font-size: 14px !important;
  text-align: left !important;
  font-weight: 500 !important;
      padding: 0.5rem !important;
  background-color: #00000000 !important;
  border-width: 1px 0px 0px 1px !important;
  
}

.brsr-table-17 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 0px 10px !important;
  background-color: #00000000 !important;
  border-width: 1px 0px 0px 1px !important;
  
}
.question-text-1 {
  margin-top: 20px !important;
}
.brsr-table-18 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
}
.brsr-table-19 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
}
.brsr-emp {
  padding: 0px 10px 10px 0px !important;
  font-size: 14px;
}
.brsr-emp1 {
  padding: 0px 10px 10px 0px !important;
  font-size: 14px;
}
.brsrtext02 {
  margin-top: 20px !important;
}
.brsr-table-20 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  width: 2% !important;
  padding: 10px 1px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
}
.brsr-table-21 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 5px 3px 5px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-22 {
  font-size: 11px !important;
}
.brsr-table-23 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 5px 3px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-24 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-25 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 2px 5px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-26 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 15px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-28 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 1px 1px !important;
    border-color: #dee2e6 !important;  
}

.brsr-table-29 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 1px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}



.pimg-height {
  height: 1380px !important;
}
.freport01 {
  padding: 0px 30px 0px 40px !important;
}

.brsr-table-35 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 55% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}

.brsr-table-36 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 55% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}

.brsr-table-37 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 0px 0px !important;
  border-color: #dee2e6;
}

.brsr-table-38 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 0px !important;
}

.brsr-table-39 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 2px 2px 0px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-40 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-41 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 1% !important;
  padding: 10px 10px 70px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}
.brsr-table-42 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 20px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-table-43 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
}

.brsr-table-44 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 58px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}

.brsr-table-45 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 5px 2px 0px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-46 {
  font-size: 14px !important;
  text-align: center !important;
  font-weight: 500 !important;
  padding: 5px 10px 5px 10px !important;
  background-color: #00000000 !important;
  border-width: 2px 2px 2px 5px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-47 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 1px !important;
}
.brsr-table-48 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 2px 5px !important;
}
.brsr-table-49 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-width: 0px 5px 1px 1px !important;
}
.brsr-table-50 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 10px !important;
  border-width: 3px 1px 2px 0px !important;
}

.brsr-table-51 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-table-52 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 10px 10px 58px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 1px 2px 0px !important;
}

.brsr-table-53 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-54 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;;
  padding: 10px 2px 5px 0px !important;
  border-width: 1px 1px 0px 1px !important;
  border-color: #dee2e6;
}
.brsr-table-55 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-56 {
  text-align: center !important;
  font-weight: 600 !important;
  text-align: center !important;;
  border-width: 1px 1px 1px 1px !important;
  border-color: #dee2e6 !important;
}

.brsr-table-57 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 0px !important;
}
.brsr-table-58 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 5px !important;
    border-color: #dee2e6 !important;  
}

.brsr-table-59 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-60 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 0px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-61 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-62 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 1px 3px 5px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 0px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-63 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 2px 2px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 0px 2px !important;
  border-color: #dee2e6;
}

.brsr-table-64 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 10px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 2px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-65 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 10px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 5px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-66 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 10px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 1px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-67 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 1px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 5px 2px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-68 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 1px 10px 1px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 2px 2px !important;
    border-color: #dee2e6 !important;  
}
.brsr-table-69 {
  font-size: 14px !important;
    text-align: center !important;
    font-weight: 500 !important;
    padding: 5px 10px 0px 10px !important;
    background-color: #00000000 !important;
    border-width: 2px 1px 0px 1px !important;
    border-color: #dee2e6 !important;  
}

.trp1 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 0% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}

.trp10 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 0% !important;
  padding: 0px 0px 0px 0px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}

.trp2 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 0% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}
.tpr3  {
  text-align: center !important;
font-size: 14px !important;
font-weight: 500 !important;
padding: 20px 0px 0px 0px !important;
}  
.tpr4 {
  text-align: center !important;
  font-size: 14px !important;
  font-weight: 500 !important;
  padding: 20px 0px 0px 0px !important;
}
.trp4 {
  line-break: anywhere !important;
  font-size: 14px !important;
  color: #0461f8 !important;
  font-weight: 500 !important;
}
.trp0 {
  font-size: 14px !important;
  font-weight: 500 !important;
  text-align: center !important;
  width: 0% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 0px !important;
}
.hello-babys {
  width: 5% !important;
}
.sec-text {
  font-size: 14px !important;
  font-weight: 500 !important;

}
.sec-text0 {
  font-size: 10px !important;
  font-weight: 500 !important;
}


.brsr-table-p0 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 30px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #ffe100 !important;
  border-width: 3px 0px 2px 0px !important;
  border-color: #dee2e6;
}
.brsr-table-p1 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-p2 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 5px 2px 5px !important;
  border-color: #dee2e6;
}
.brsr-table-p3 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 12% !important;
  padding: 0px 3px 10px 3px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #dee2e6;
}
.brsr-text00 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  padding : 7px !important;
}

.brsr-text01 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  padding : 7px !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-text02 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  padding : 7px !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-text03 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  padding : 7px !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-text04 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  padding : 7px !important;
  border-width: 3px 5px 2px 5px !important;
}
.brsr-tablep4 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep5 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep6 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep7 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 27% !important;
  padding: 10px 0px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text05 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 1px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text06 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text07 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep8 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 20px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep9 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text09 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text08 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep10 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;

  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep11 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep12 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text11 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep13 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep14 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep15 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text12 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep16 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep17 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep18 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text13 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep19 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep20 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep21 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-text14 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text15 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text16 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep22 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep23 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep24 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep25 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep26 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text17 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep27 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep28 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep29 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text18 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep30 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep31 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep32 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep33 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep34 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-text19 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep35 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep36 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep37 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep38 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep39 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep40 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 35% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep41 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 35% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep42 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep43 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep44 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep45 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep46 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep47 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep48 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep49 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep50 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep51 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep52 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep53 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep54 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep55 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep56 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep57 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep58 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep59 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep60 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep61 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep62 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep63 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep64 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep65 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep66 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep67 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep68 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep69 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep70 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep71 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep72 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep73 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep74 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep75 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep76 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep77 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep78 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep79 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep80 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep81 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep82 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep83 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep84 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep85 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep86 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep87 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep88 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep89 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep90 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep91 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep92 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 10% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep93 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 3% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep94 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep95 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 7% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep96 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 7% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep97 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep98 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep99 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 25% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep100 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep101 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep102 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep103 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep104 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep105 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep107 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep108 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep109 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep110 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep112 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep113 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep114 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep115 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep116 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 35% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep117 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep118 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep119 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep120 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep121 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep122 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 35% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep123 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 35% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep124 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep125 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep126 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep127 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep128 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep129 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep130 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep131 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep132 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 50% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep133 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep134 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-textleft {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: left !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-textcenter {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  border-width: 3px 2px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep135 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep136 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep137 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep138 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep139 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep140 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep141 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep142 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep143 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep144 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep145 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep146 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep147 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep148 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
  border: 2px solid #1c75bc !important;
}
.brsr-tablep149 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep150 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep151 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep152 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep153 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}

.brsr-tablep153 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep155 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 40% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep156 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 15% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep157 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep158 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep159 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 5% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep160 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep161 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 30% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep162 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}
.brsr-tablep163 {
  font-size: 14px !important;
  font-weight: 600 !important;
  text-align: center !important;
  width: 20% !important;
  padding: 10px 10px 10px 10px !important;
  background-color: #f7f7f7 !important;
  border-top: 3px solid #1076bc !important;
  border-width: 3px 0px 2px 5px !important;
  border-color: #ededed;
}



.bg-preview {
height: 1050px;
}
      </style>
      </head>
    <body onload="window.print();window.close();">${printContents}</body>
      </html>`
    );
 popupWin.document.close();
  }
}