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
import { Sgx_introreportComponent } from '../sgx_introreport/sgx_introreport.component';
import { Sgx_dynamicreportComponent } from '../sgx_dynamicreport/sgx_dynamicreport.component';
import { Sgx_previewreportComponent } from '../sgx_previewreport/sgx_previewreport.component';
import { Sgx_imagereportService } from '../sgx_imagereport/sgx_imagereport.service';
import { Sgx_generatereportService } from './sgx_generatereport.service';

import { split } from 'lodash';
import Swal from 'sweetalert2';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import { DashboardService } from 'app/modules/dashboard/dashboard.service';
import { Sgx_generaldisclosureComponent } from '../sgx_generaldisclosure/sgx_generaldisclosure.component';
import { Sgx_governancedisclosureComponent } from '../sgx_governancedisclosure/sgx_governancedisclosure.component';
import { Sgx_socialdisclosureComponent } from '../sgx_socialdisclosure/sgx_socialdisclosure.component';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-sgx_generatereport',
  templateUrl: './sgx_generatereport.component.html',
  styleUrls: ['./sgx_generatereport.component.scss']
})
export class Sgx_generatereportComponent implements OnInit {

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
    private is :Sgx_imagereportService,
    private gsService:Sgx_generatereportService,
    private ds:DashboardService,
    private http: HttpClient) { }

  ngOnInit() {
    (this.dynamicComponent = Sgx_dynamicreportComponent),
   (this.dynamicComponent1 = Sgx_introreportComponent),
   (this.dynamicComponent2 = Sgx_generaldisclosureComponent),
   (this.dynamicComponent4 = Sgx_governancedisclosureComponent),
   (this.dynamicComponent3 = Sgx_socialdisclosureComponent),
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.us.getSGXReportDetailsByReportId(this.reportid).subscribe((res) => {
      this.reportname = res[0].ReportName;
      this.reportstartdate = res[0].StartDate;
      this.reportenddate = res[0].EndDate;
  });
  this.ds.getuserdetails(this.AuthService.user.id).subscribe((data) => {
    this.Username=data[0]['FirstName'];
  });
  
  this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe(res=>{
this.companypic=res[0].FinalDraftGuidance
this.comp=split(this.companypic,'"')
this.anse=this.comp[2];
this.string = this.anse;

this.string = this.string.substring(0, this.string.length-1);
})


  }
  back(){
    this.router.navigate(['/sgx_previewreport',this.reportid]);
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
    this.is.getSGXFinalReportDetailsByReportId(this.reportid).subscribe((data)=>{
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

    this.is.createSGXFinalReport(selectedboxes).subscribe((data)=>{
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

.temp-design-33 {
  background-color: #fff !important;
  width: 100% !important;
  margin-right: auto !important;
  margin-top: 800px !important;
  height: 600px !important;
}
.into-card {
  background: linear-gradient(45deg, #8cc540, #1c75bc) !important;
   border-radius: 0px 0px 100px 100px !important; 
}
.fa-text h6 {
  font-size: 20px !important;
  font-weight: 500 !important;
  margin-left: 35px !important;
}

.badge {
  display: inline-block !important;
  padding: 0.25em 0.4em !important;
  font-size: 17px !important;
  font-weight: 700 !important;
  line-height: 1 !important ;
  text-align: center !important;
  white-space: nowrap !important;
  vertical-align: baseline !important;
  border-radius: 0.25rem !important;
  color: #1c75bc !important;
}
.blockquote {
  padding: 10px 20px !important;
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
