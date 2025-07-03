import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import {Router} from '@angular/router';
import { ImportdisService } from '../importdis.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import  Questions   from '../../../assets/questions.json'

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
 ListForm:FormGroup
 items:any;
  constructor(public dialog: MatDialog,private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) private _data: { ReportId: any,GuidanceNumber:any,Userid:any },private is:ImportdisService,private router:Router,public matDialogRef:MatDialogRef<PopupComponent>) { }
screen:any;
  ngOnInit() {
    console.log(this._data.GuidanceNumber);
    console.log(this._data.Userid);
    
    this.ListForm = this.fb.group({
      selectdrop: [''],
      EmailId: ['', [Validators.email, Validators.required]],
      message:['']
    });
    this.is.GetQuestionsById(this._data.GuidanceNumber).subscribe((data)=>{
      console.log(data);
      this.items=data;
    })
  }
  login(){
    this.matDialogRef.close(false);
  }
  onClose(): void
  {
      this.matDialogRef.close(false);
  }
  onCancel(): void
  {
      this.matDialogRef.close(false);
  }
  getSelectedItems() {
    return this.items.filter(item => item.selected);
  }
  onSave(){
    const selectedItems = this.getSelectedItems();
    console.log(selectedItems);
    for(var i=0;i<selectedItems.length;i++){
    console.log(selectedItems[i]['Label']);  
    let chanduitem=selectedItems[i]['Label'];
    const obj = {
      Id:null,
      ReportId:this._data.ReportId,
      GuidanceNumber:this._data.GuidanceNumber,
      RequestedBy:chanduitem,
      RequestedTo:this.ListForm.get('EmailId').value,
      RequestedMessage:this.ListForm.get('message').value,
      Response:null,
      IsActive:true,
      CreatedDate:new Date(),
      CreatedByUserId:this._data.Userid,
      UpdatedDate: new Date(),
      UpdatedByUserId:this._data.Userid,   
    }
    console.log(obj);
  }}
}
