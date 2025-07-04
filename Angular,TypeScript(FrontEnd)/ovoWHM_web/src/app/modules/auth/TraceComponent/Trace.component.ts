import { Component, OnInit } from '@angular/core';
import { BarcodeService } from 'app/modules/BarCode/barcode.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

// import * as data from './sample.json';
@Component({
  selector: 'app-Trace',
  templateUrl: './Trace.component.html',
  styleUrls: ['./Trace.component.scss']
})
export class TraceComponent implements OnInit {
  ProductBarcode;
  private itemsPerSlide: number;
  Description;
  slides = [
   {image: 'assets/images/Processing-0.gif',tittle:'Freshness Test'},
   {image: 'assets/images/Processing-2.gif',tittle:'Candling (U.V Treatment)'},
   {image: 'assets/images/Processing-3.gif',tittle:'Cleaning '},
   {image: 'assets/images/Processing-4.gif',tittle:'Grading '},
   {image: 'assets/images/Processing-5.gif',tittle:'Grading '},
   {image: 'assets/images/Processing-6.gif',tittle:'Printing '},
 ];
  str="Task1Name          :    Success  :   statusCode\n" +
        "Task2NameLonger    :    Failed   :   statusCode\n";
CurrentURL;
  constructor(private bs:BarcodeService,private route:ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('UniqueId');
   
    var text = id.toString();
  
    
    
      this.bs.GetProductBarcodeByUniqueId(id).subscribe(res=>{
      this.ProductBarcode = res[0][0];

     this.Description = res[0][1]
      
      })
   }

  ngOnInit() {
   
    const corosel = document.getElementsByClassName('carousel-inner')
    this.CurrentURL = window.location.href;
    this.itemsPerSlide = this.mobileDevice() ? 2 : 4;
    const id = this.route.snapshot.paramMap.get('UniqueId');
    var text = id.toString();
    this.bs.GetProductBarcodeByUniqueId(id).subscribe(res=>{
      this.ProductBarcode = res[0][0];
      this.Description = res[1][0]
     
      })
  }

 async ShareLink(){
 
  
  // add it to the shareData






    let dataUrl = await fetch('assets/images/logo/ShareImage.jpg')
    const blob =await (dataUrl).blob();
    const image = new File([blob], 'https://ovofarm.in/wp-content/uploads/2023/05/KENKO_OOH.jpg', { type: "image/jpeg"})

    if (navigator.share) {
      
       navigator.share({
       
        
          files: [image],
          url:"https://ovofarm.in/wp-content/uploads/2023/05/KENKO_OOH.jpg",
          text:"I just added some extra protein to my day",
          title:"I just added some extra protein to my day",
              
        })
    
    } else {
      console.log('This device does not support sharing files.')
    }
  }
  ShowNutrition(){
    const id = this.route.snapshot.paramMap.get('UniqueId');
    var text = id.toString();
    this.bs.GetProductBarcodeByUniqueId(id).subscribe(res=>{
    console.log( res[1][0])
      this.Description = res[1][0]

      Swal.fire({
        confirmButtonColor: '#FCB713',
        text:this.Description, 
        html: '<div>'+

        '<div ><h2>Nutritional Facts</h2></div>'+

        '<li style="text-align:left;padding:0px;font-size:15px;">' +  this.Description.DESCRIPTION.split('^').join('<li style="text-align:left;padding:0px;font-size:15px">')+

        '</li>'+ '</div>',


        customClass: 'swal-wide',
        width: 450,

        
       //  imageUrl: 'assets/images/ic-1.png',
        background: '#fff url(assets/images/ovo-new11.jpg)'
   });
     
      })

 
  }
  private mobileDevice(): boolean {
    return navigator.userAgent.match(/Android/i)
      ||  navigator.userAgent.match(/webOS/i)
      ||  navigator.userAgent.match(/iPhone/i)
      ||  navigator.userAgent.match(/iPad/i)
      ||  navigator.userAgent.match(/iPod/i)
      ||  navigator.userAgent.match(/BlackBerry/i)
      ||  navigator.userAgent.match(/Windows Phone/i)
      ? true : false;
  }
}
