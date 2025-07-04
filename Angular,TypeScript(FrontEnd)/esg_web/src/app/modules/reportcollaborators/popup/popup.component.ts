import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ReportcollaboratorsService } from '../reportcollaborators.service';
import { AuthService } from 'app/core/auth/auth.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  reportform:FormGroup
  selectedOptions:[];
  orgid:any;
  collabs:any;
  reportid:any;
  reportname:any;
  firstname:any;
  constructor(public dialog: MatDialog,private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: { ReportId: any, ReportName :any },private router:Router,public matDialogRef:MatDialogRef<PopupComponent>,
    private rs:ReportcollaboratorsService,private as:AuthService,private activatedroute :ActivatedRoute) { }

  ngOnInit() {
    console.log(this.as.user);
    this.orgid=this.as.user.orgId
    this.reportname=this._data['ReportName']
    console.log(this._data['ReportId']);
let repinid=this._data['ReportId']    
this.rs.getcollaboratorsbyreportid(repinid).subscribe((data=>{
this.firstname=data;
}))
    this.reportform = this.fb.group({
      Id: [],
      ReportId: [this._data['ReportId']],
      OrgId:[this.as.user.orgId],
      CollaboratorId:[''],
      IsActive: [true],
      CreatedDate: [new Date()],
      UpdatedDate: [new Date()],
      CreatedByUserId: [this.as.user.id],	
      UpdatedByUserId: [this.as.user.id],
  });
  this.rs.GetCollaboratorsinOrganizationById(this.as.user.orgId,this._data['ReportId']).subscribe((data)=>{
    console.log(data);
    this.collabs=data;
  })
  }
  onClose(): void {
    this.matDialogRef.close(false);
}

onCancel(): void {
    this.matDialogRef.close(false);
}
//   onSave(){
//     const reportdata: any = this.reportform.value;
// console.log(reportdata);
// let select=this.reportform.get('CollaboratorId').value;
// console.log(select);
// for (let item of select) {
//     // this.rs.assigncollab(reportdata).subscribe((result) => {
//     //   console.log(result);
      
//     //     this.matDialogRef.close(true);
//     // });
// }
 
//   }
  onSave(){
    let select=this.reportform.get('CollaboratorId').value;
    console.log(select);
    for (let item of select) {
      console.log(item);
    const obj={
      Id:null,
      ReportId:this._data['ReportId'],
      OrgId:this.as.user.orgId,
      CollaboratorId:item,
      IsActive: [true],
      CreatedDate: [new Date()],
      UpdatedDate: [new Date()],
      CreatedByUserId: [this.as.user.id],	
      UpdatedByUserId: [this.as.user.id],
    }
    console.log(obj);
        this.rs.assigncollab(obj).subscribe((result) => {
      console.log(result);
      
        this.matDialogRef.close(true);
    });
  }}
}
