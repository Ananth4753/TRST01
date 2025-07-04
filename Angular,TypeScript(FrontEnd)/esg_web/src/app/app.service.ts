import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { TreeviewItem } from '../../projects/ngx-treeview/src/public-api';
import { SelectbrsrService } from './modules/BRSRfiles/selectbrsr/selectbrsr.service';
import { SelectdisService} from './modules/selectdis/selectdis.service';
import { SelectsgxService } from './modules/SGXfiles/selectsgx/selectsgx.service';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  public counter:number=0;
  public counter1:number=0;
  public counter2:number=0;
  public counter3:number=0;
  public valuserid:any;
  constructor(
    
    private ss: SelectdisService,
    private ss1:SelectbrsrService,
    private ss2:SelectsgxService
) {}

    

//   Arr = [
//     {
//         "text": "General Disclosures",
//         "value": 1,
//         "collapsed": false,
//         "children": "[{\"text\":\"102-1 Organization Details\",\"value\":1,\"checked\":\"true\"},{\"text\":\"102-2 Entities included in the organizations sustainability Reporting\",\"value\":2,\"checked\":\"true\"},{\"text\":\"102-3 Reporting period, frequency and contact point\",\"value\":3,\"checked\":\"true\"},{\"text\":\"102-4 Restatements of information\",\"value\":4,\"checked\":\"true\"},{\"text\":\"102-5 External Assurance\",\"value\":5,\"checked\":\"true\"},{\"text\":\"102-6 Activities, Valuechain and other business relationships\",\"value\":6,\"checked\":\"true\"},{\"text\":\"102-7 Employees\",\"value\":7,\"checked\":\"true\"},{\"text\":\"102-8 Workers who are not Employees\",\"value\":8,\"checked\":\"true\"},{\"text\":\"102-9 Governance structure and composition\",\"value\":9,\"checked\":\"true\"},{\"text\":\"102-10 Nomination and selection of the highest governance body\",\"value\":10,\"checked\":\"true\"},{\"text\":\"102-11 Chair of the highest governance body\",\"value\":11,\"checked\":\"true\"},{\"text\":\"102-12 Role of the highest governance body in overseeing the management of impacts\",\"value\":12,\"checked\":\"true\"},{\"text\":\"102-13 Delegation of responsibility for managing impacts\",\"value\":13,\"checked\":\"true\"},{\"text\":\"102-14 Role of the highest governance body in sustainability reporting\",\"value\":14,\"checked\":\"true\"},{\"text\":\"102-15 Conflicts of interest\",\"value\":15,\"checked\":\"true\"},{\"text\":\"102-16 Communication of critical concerns\",\"value\":16,\"checked\":\"true\"},{\"text\":\"102-17 Collective knowledge of the highest governance body\",\"value\":17,\"checked\":\"true\"},{\"text\":\"102-18 Evaluation of the performance of the highest governance body\",\"value\":18,\"checked\":\"true\"},{\"text\":\"102-19 Remuneration policies\",\"value\":19,\"checked\":\"true\"},{\"text\":\"102-20 Process to determine remuneration\",\"value\":20,\"checked\":\"true\"},{\"text\":\"102-21 Annual total compensation ratio\",\"value\":21,\"checked\":\"true\"},{\"text\":\"102-22 Statement on sustainable development strategy\",\"value\":22,\"checked\":\"true\"},{\"text\":\"102-23 Policy commitments\",\"value\":23,\"checked\":\"true\"},{\"text\":\"102-24 Embedding policy commitments\",\"value\":24,\"checked\":\"true\"},{\"text\":\"102-25 Process to remediate negative impacts\",\"value\":25,\"checked\":\"true\"},{\"text\":\"102-26 Mechanisms for seeking advice and raising concerns\",\"value\":26,\"checked\":\"true\"},{\"text\":\"102-27  Compliance with laws and regulations\",\"value\":27,\"checked\":\"true\"},{\"text\":\"102-28 Membership associations\",\"value\":28,\"checked\":\"true\"},{\"text\":\"102-29 Approach to stakeholder engagement\",\"value\":29,\"checked\":\"true\"},{\"text\":\"102-30 Collective bargaining agreements\",\"value\":30,\"checked\":\"true\"}]"
//     },
//     {
//         "text": "Economic",
//         "value": 2,
//         "collapsed": true,
//         "children": "[{\"text\":\"202-1 Ratios of standard entry level wage by gender compared to local minimum wage\",\"value\":35,\"checked\":\"true\"},{\"text\":\"202-2 Proportion of senior management hired from the local community\",\"value\":36,\"checked\":\"true\"},{\"text\":\"203-1 Infrastructure investments and services supported\",\"value\":37,\"checked\":\"true\"},{\"text\":\"203-2 Significant indirect economic impacts\",\"value\":38,\"checked\":\"true\"},{\"text\":\"204-1 Proportion of spending on local suppliers\",\"value\":39,\"checked\":\"true\"},{\"text\":\"205-1 Operations assessed for risks related to corruption\",\"value\":40,\"checked\":\"true\"},{\"text\":\"205-2 Communication and training about anti-corruption policies and procedures\",\"value\":41,\"checked\":\"true\"},{\"text\":\"205-3 Confirmed incidents of corruption and actions taken\",\"value\":42,\"checked\":\"true\"},{\"text\":\"206-1 Legal actions for anti-competitive behavior, anti-trust, and monopoly practices\",\"value\":43,\"checked\":\"true\"},{\"text\":\"201-1 Direct economic value generated and distributed\",\"value\":31,\"checked\":\"true\"},{\"text\":\"201-2 Financial implications and other risks and opportunities due to climate change\",\"value\":32,\"checked\":\"true\"},{\"text\":\"201-3 Defined benefit plan obligations and other retirement plans\",\"value\":33,\"checked\":\"true\"},{\"text\":\"201-4 Financial assistance received from government\",\"value\":34,\"checked\":\"true\"},{\"text\":\"207-1 Approach to tax\",\"value\":44,\"checked\":\"true\"},{\"text\":\"207-2 Tax Governance, control and risk management\",\"value\":45,\"checked\":\"true\"},{\"text\":\"207-3  Stakeholder engagement and management of concerns related to tax\",\"value\":46,\"checked\":\"true\"},{\"text\":\"207-4 Country-by-country reporting\",\"value\":47,\"checked\":\"true\"}]"
//     },
//     {
//         "text": "Environment",
//         "value": 3,
//         "collapsed": true,
//         "children": "[{\"text\":\"301-1 Materials used by weight or volume\",\"value\":48,\"checked\":\"true\"},{\"text\":\"301-2 Recycled input materials used\",\"value\":49,\"checked\":\"true\"},{\"text\":\"301-3 Reclaimed products and their packaging materials\",\"value\":50,\"checked\":\"true\"},{\"text\":\"302-1 Energy consumption within the organization\",\"value\":51,\"checked\":\"true\"},{\"text\":\"302-2 Energy consumption outside of the organization\",\"value\":52,\"checked\":\"true\"},{\"text\":\"302-3 Energy intensity\",\"value\":53,\"checked\":\"true\"},{\"text\":\"302-4 Reduction of energy consumption\",\"value\":54,\"checked\":\"true\"},{\"text\":\"302-5 Reductions in energy requirements of products and services\",\"value\":55,\"checked\":\"true\"},{\"text\":\"303-1 Interactions with water as a shared resource\",\"value\":56,\"checked\":\"true\"},{\"text\":\"303-2 Management of water discharge-related impacts\",\"value\":57,\"checked\":\"true\"},{\"text\":\"303-3 Water withdrawal\",\"value\":58,\"checked\":\"true\"},{\"text\":\"303-4 Water discharge\",\"value\":59,\"checked\":\"true\"},{\"text\":\"303-5 Water consumption\",\"value\":60,\"checked\":\"true\"},{\"text\":\"304-1 Operational sites owned, leased, managed in, or adjacent to, protected areas and areas of high biodiversity value outside protected areas\",\"value\":61,\"checked\":\"true\"},{\"text\":\"304-2 Significant impacts of activities, products, and services on biodiversity\",\"value\":62,\"checked\":\"true\"}]"
//     },
  
// ]

finalArr:any = [];
templatedata:any;


  
ngOnInit() {

  this.ss.getTemplateSubMenuDetails().subscribe((data) => {
    
    console.log(data);
    
});
this.ss1.getTemplateSubMenuDetails().subscribe((data) => {
    
  console.log(data);
  
});
}
validate(object){
  var b=object;
  
}


  getData(ReportId:number): TreeviewItem[] {
     this.finalArr = [];
    this.ss.GetTestpurposeTemplateMenuDetails(ReportId).subscribe((rep)=>{
      console.log(rep);
      this.templatedata=rep

  
     for(let i=0;i<=this.templatedata.length-1;i++)
     {
              let obj = {
                text: this.templatedata[i].text,
                value: this.templatedata[i].value,
                collapsed: this.templatedata[i].collapsed,
                children: JSON.parse(this.templatedata[i].children),
              };
            
            this.finalArr.push(new TreeviewItem(obj))
            if(this.templatedata.length-1 ==i)
            {
              console.log(this.finalArr);

           
              // return this.finalArr
            }
           
     } //this.validate(this.finalArr.splice(-1))

  
})
console.log(this.finalArr)
var a=this.validate(Object);
console.log(a);
     return this.finalArr
  }

  getData1(ReportId:number): TreeviewItem[] {
    this.finalArr = [];
   this.ss1.GetTestpurposeTemplateMenuDetails(ReportId).subscribe((rep)=>{
     console.log(rep);
     this.templatedata=rep

 
    for(let i=0;i<=this.templatedata.length-1;i++)
    {
             let obj = {
               text: this.templatedata[i].text,
               value: this.templatedata[i].value,
               collapsed: this.templatedata[i].collapsed,
               children: JSON.parse(this.templatedata[i].children),
             };
           
           this.finalArr.push(new TreeviewItem(obj))
           if(this.templatedata.length-1 ==i)
           {
             console.log(this.finalArr);

          
             // return this.finalArr
           }
          
    } //this.validate(this.finalArr.splice(-1))

 
})
console.log(this.finalArr)
var a=this.validate(Object);
console.log(a);
    return this.finalArr
 }

  getTreeViewData(ReportId:any): TreeviewItem[] {
    this.finalArr = [];
   this.ss.GetTreeViewTemplateMenuDetails(ReportId).subscribe((rep:any)=>{
     this.templatedata=rep
    for(let i=0;i<=this.templatedata.length-1;i++)
    {
          
           this.finalArr.push(new TreeviewItem(this.templatedata[i]))
           if(this.templatedata.length-1 ==i)
           {
             console.log(this.finalArr)
           }
          
    } 
 
})
var a=this.validate(Object);
return this.finalArr

 }

 getTreeViewData1(ReportId:any): TreeviewItem[] {
  this.finalArr = [];
 this.ss1.GetBRSRTreeViewTemplateMenuDetails(ReportId).subscribe((rep:any)=>{
   this.templatedata=rep
  for(let i=0;i<=this.templatedata.length-1;i++)
  {
        
         this.finalArr.push(new TreeviewItem(this.templatedata[i]))
         if(this.templatedata.length-1 ==i)
         {
           //console.log(this.finalArr)
         }
        
  } 

})
var a=this.validate(Object);
return this.finalArr

}

getTreeViewData2(ReportId:any): TreeviewItem[] {
  this.finalArr = [];
 this.ss2.GetSGXTreeViewTemplateMenuDetails(ReportId).subscribe((rep:any)=>{
   this.templatedata=rep
  for(let i=0;i<=this.templatedata.length-1;i++)
  {
        
         this.finalArr.push(new TreeviewItem(this.templatedata[i]))
         if(this.templatedata.length-1 ==i)
         {
           //console.log(this.finalArr)
         }
        
  } 

})
var a=this.validate(Object);
return this.finalArr

}
 
  
}




