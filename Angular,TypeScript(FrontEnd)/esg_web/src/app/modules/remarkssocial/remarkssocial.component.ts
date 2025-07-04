import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdatereportService } from '../updatereport/updatereport.service';
import { ImagereportService } from '../imagereport/imagereport.service';
import { DashboardService } from '../dashboard/dashboard.service';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from '../importdis/importdis.service';
import { SelectdisService } from '../selectdis/selectdis.service';
import { CreatereportService } from '../createreport/createreport.service';
import { DynamiccontentService } from '../dynamiccontent/dynamiccontent.service';
import  Questions   from '../../../assets/questions.json'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ValidatingreportscreenService } from '../validatingreportscreen/validatingreportscreen.service';
import { MatDialog } from '@angular/material/dialog';
import { UploadimgComponent } from '../remarksgeneral/uploadimg/uploadimg.component';
@Component({
  selector: 'app-remarkssocial',
  templateUrl: './remarkssocial.component.html',
  styleUrls: ['./remarkssocial.component.scss']
})
export class RemarkssocialComponent implements OnInit {
  reportid:any;
  reportname:any
  templatemenu: any;
  qaa:any;
  qa:any;
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
  socialform:FormGroup
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
  constructor(private route:ActivatedRoute,private aa:ActivatedRoute,private AuthService:AuthService,
    private importservice:ImportdisService,private vrs:ValidatingreportscreenService,private dialog:MatDialog,
    private fb:FormBuilder,private dds:DynamiccontentService,private ss:SelectdisService,private crs:CreatereportService,private us:UpdatereportService,private is:ImagereportService,private ds:DashboardService) { }
  finalobj:any={}
  ngOnInit() {
    this.reportid=this.aa.snapshot.paramMap.get('reportId')
    this.us.getReportDetailsByReportId(this.reportid).subscribe(res=>{
      this.reportname=res[0].ReportName
      this.startdate=res[0].StartDate
      this.enddate=res[0].EndDate
     this.qaa=JSON.parse(res[0].InitialDraftReport) 
     this.dynamicobj = JSON.parse(res[0].InitialDraftReport) 
     if(this.dynamicobj==null){
      this.importservice.getReportTemplateMenuSubIdByReportId(this.reportid).subscribe((data:any)=>{
            for(let i=0;i<data.length;i++)
            {
               let yoy=data[i]["TemplateMenuId"];
                if(Questions[yoy] != undefined)
                 {
                   if (JSON.stringify(this.finalobj) == '{}')
                   {
                     this.finalobj = Questions[yoy][0];
                    }
                     else{
                       Object.assign(this.finalobj,Questions[yoy][0])
                       }
                       }
                        if (data.length-1 ==i)
                         {
                          this.dynamicobj=this.finalobj
                          // console.log(this.finalobj)
                           } 
                          }
      }) 
     }

         //100 Series 
        if(this.dynamicobj["102-2AddTable2x"] == null || this.dynamicobj["102-2AddTable2x"] =='' || this.dynamicobj["102-2AddTable2x"]=='[]'|| this.dynamicobj["102-2AddTable2x"] == undefined)
        {
         this.dynamicTable1=null
        }
        else{
         this.dynamicTable1 =JSON.parse(this.dynamicobj['102-2AddTable2x']);
         var dynamicTable1len=this.dynamicTable1.length;
  
        }
        if(this.dynamicobj["102-2AddTable"] == null || this.dynamicobj["102-2AddTable"] =='' || this.dynamicobj["102-2AddTable"]=='[]'|| this.dynamicobj["102-2AddTable"] == undefined)
        {
         this.dynamicTable=null
        }
        else{
         this.dynamicTable =JSON.parse(this.dynamicobj['102-2AddTable']);
         var dynamicTablelen=this.dynamicTable.length;
        }
        if(this.dynamicobj["102-6T1AddTable"] == null || this.dynamicobj["102-6T1AddTable"] =='' || this.dynamicobj["102-6T1AddTable"]=='[]'|| this.dynamicobj["102-6T1AddTable"] == undefined)
        {
         this.dynamicTable10261=null
        }
        else{
         this.dynamicTable10261 =JSON.parse(this.dynamicobj['102-6T1AddTable']);
         var dynamicTable10261len=this.dynamicTable10261.length;
        }
        if(this.dynamicobj["102-6AddTable"] == null || this.dynamicobj["102-6AddTable"] =='' || this.dynamicobj["102-6AddTable"]=='[]'|| this.dynamicobj["102-6AddTable"] == undefined)
        {
         this.dynamicTable10262=null
        }
        else{
         this.dynamicTable10262 =JSON.parse(this.dynamicobj['102-6AddTable']);
         var dynamicTable10262len=this.dynamicTable10262.length;
        }
         if(this.dynamicobj["102-7A-Table"] == null || this.dynamicobj["102-7A-Table"] =='' || this.dynamicobj["102-7A-Table"]=='[]'|| this.dynamicobj["102-7A-Table"] == undefined)
         {
          this.dynamicTable7th=null
         }
         else{
          this.dynamicTable7th =JSON.parse(this.dynamicobj['102-7A-Table']);
         // console.log(this.dynamicTable7th);
          var dynamicTable7thlen=this.dynamicTable7th.length;
         }


     this.keys=Object.keys(this.qaa)
    this.vals=Object.values(this.qaa)
    this.entries=Object.entries(this.qaa)

     })
 
  this.dds.getPreviewReportById(this.reportid).subscribe((data)=>{

    this.templatemenu=data;
    
  })
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
  this.socialform = this.fb.group({
    social1:[''],
    social2:[''],
    social3:[''],
    social4:[''],
    social5:[''],
    social6:[''],
    social7:[''],
    social8:[''],
    social9:[''],
    social10:[''],
    social11:[''],
    social12:[''],
    social13:[''],
    social14:[''],
    social15:[''],
    social16:[''],
    social17:[''],
    social18:[''],
    social19:[''],
    social20:[''],
    social21:[''],
    social22:[''],
    social23:[''],
    social24:[''],
    social25:[''],
    social26:[''],
    social27:[''],
    social28:[''],
    social29:[''],
    social30:[''],
    social31:[''],
    social32:[''],
    social33:[''],
    social34:[''],
    social35:[''],
    social36:[''],
    social37:[''],
    social38:[''],
    social39:[''],
    social40:[''],
    social41:[''],
    social42:[''],
    social43:[''],
    social44:[''],
    social45:[''],
    social46:[''],
    social47:[''],
    social48:[''],
    social49:[''],
    social50:[''],
    social51:[''],
    social52:[''],
    social53:[''],
    social54:[''],
    social55:[''],
    social56:[''],
    social57:[''],
    social58:[''],
    social59:[''],
    social60:[''],
    social61:[''],
    social62:[''],
    social63:[''],
    social64:[''],
    social65:[''],
    social66:[''],
    social67:[''],
    social68:[''],
    social69:[''],
    social70:[''],
    social71:[''],
    social72:[''],
    social73:[''],
    social74:[''],
    social75:[''],
    social76:[''],
    social77:[''],
    social78:[''],
    social79:[''],
    social80:[''],
    social81:[''],
    social82:[''],
    social83:[''],
    social84:[''],
    social85:[''],
    social86:[''],
    social87:[''],
    social88:[''],
    social89:[''],
    social90:[''],
    social91:[''],
    social92:[''],
    social93:[''],
    social94:[''],
    social95:[''],
    social96:[''],
    social97:[''],
    social98:[''],
    social99:[''],
    social100:[''],
    social101:[''],
    social102:[''],
    social103:[''],
    social104:[''],
    social105:[''],
    social106:[''],
    social107:[''],
    social108:[''],
    social109:[''],
    social110:[''],
    social111:[''],
    social112:[''],
    social113:[''],
    social114:[''],
    social115:[''],
    social116:[''],
    social117:[''],
    social118:[''],
    social119:[''],
    social120:[''],
    social121:[''],
    social122:[''],
    social123:[''],
    social124:[''],
    social125:[''],
    social126:[''],
    social127:[''],
    social128:[''],
    social129:[''],
    social130:[''],
    social131:[''],
    social132:[''],
    social133:[''],
    social134:[''],
    social135:[''],
    social136:[''],
    social137:[''],
    social138:[''],
    social139:[''],
    social140:[''],
    social141:[''],
    social142:[''],
    social143:[''],
    social144:[''],
    social145:[''],
    social146:[''],
    social147:[''],
    social148:[''],
    social149:[''],
    social150:[''],
    social151:[''],
    social152:[''],
    social153:[''],
    social154:[''],
    social155:[''],
    social156:[''],
    social157:[''],
    social158:[''],
    social159:[''],
    social160:[''],
    social161:[''],
    social162:[''],
    social163:[''],
    social164:[''],
    social165:[''],
    social166:[''],
    social167:[''],
    social168:[''],
    social169:[''],
    social170:[''],
    social171:[''],
    social172:[''],
    social173:[''],
    social174:[''],
    social175:[''],
    social176:[''],
    social177:[''],
    social178:[''],
    social179:[''],
    social180:[''],
    social181:[''],
    social182:[''],
    social183:[''],
    social184:[''],
    social185:[''],
    social186:[''],
    social187:[''],
    social188:[''],
    social189:[''],
    social190:[''],
    social191:[''],
    social192:[''],
    social193:[''],
    social194:[''],
    social195:[''],
    social196:[''],
    social197:[''],
    social198:[''],
    social199:[''],
    social200:[''],
    social201:[''],
    social202:[''],
    social203:[''],
    social204:[''],
    social205:[''],
    social206:[''],
    social207:[''],
    social208:[''],
    social209:[''],
    social210:[''],
    social211:[''],
    social212:[''],
    social213:[''],
   
    
  });
}
Save(){
  let formva=this.socialform.value
  //console.log(formva);
      this.vrs.GetValidatingFinalReportByReportId(this.reportid,this.AuthService.user.id).subscribe((data)=>{
        //console.log(data);
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
        this.vrs.addfinalreportvalidation(boxes).subscribe((final) => {
        //  console.log(final);
        });
      })
  }
  counter(i: number) {
    return new Array(i);
    console.log(i);
    
    
}

openuploadimgcompo(ReportId: any, GuidanceNumber: any, OrgId: any, ques: any) {
  const dialogRef = this.dialog.open(UploadimgComponent, {
    autoFocus: false,
    data: { ReportId, GuidanceNumber, OrgId, ques },
  });
  console.log(dialogRef)
}

}
