import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { SelectsgxService } from '../../selectsgx/selectsgx.service';
import {
    FormControl,
    FormGroup,
    Validators,
    FormBuilder,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { GlobalvariableService } from 'app/modules/services/globalvariable.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-uploadevidenceforsgx',
  templateUrl: './uploadevidenceforsgx.component.html',
  styleUrls: ['./uploadevidenceforsgx.component.scss']
})
export class UploadevidenceforsgxComponent implements OnInit {
  reportid: any;
  selectedFiles?: FileList;
  filename: any;
  progressInfos: any[] = [];
  message: string[] = [];
  previews: string[] = [];
  uploadedLinks: any = [];
  imageInfos?: Observable<any>;
  constructor(
      public dialog: MatDialog,
      private fb: FormBuilder,
      @Inject(MAT_DIALOG_DATA)
      private _data: {
          ReportId: any;
          GuidanceNumber: any;
          OrgId: any;
          ques: any;
      },
      private is: SelectsgxService,
      private router: Router,
      public matDialogRef: MatDialogRef<UploadevidenceforsgxComponent>,
      private uploadService: GlobalvariableService,
      private aa: ActivatedRoute
  ) {}
  ngOnInit(): void {
      this.getReportEvidence(this._data.ReportId, this._data.ques);
  }

  getReportEvidence(ReportId, Ques) {
      this.uploadService
          .GetSGXUploadEvidenceByReportId(ReportId, Ques)
          .subscribe((data: any) => {
              console.log(data);
              if (data.length > 0) {
                  this.uploadedLinks = data;
                  //this.uploadedLinks= JSON.parse(data[0]['UploadedObj']);
                  console.log(this.uploadedLinks);
              } else {
                  this.uploadedLinks = [];
              }
          });
  }

  docArr: any[] = [];
  selectFiles(files: FileList): void {
      console.log(this.docArr);
      console.log(files);
      if (files.length > 0) {
          const imageFiles: File[] = [];
          const pdfFiles: File[] = [];
          const docFiles: File[] = [];
          const docxFiles: File[] = [];
          const xlsxFiles: File[] = [];

          for (let i = 0; i < files.length; i++) {
              const file = files[i];
              if (
                  file.type === 'image/jpeg' ||
                  file.type === 'image/png' ||
                  file.type === 'image/jpg'
              ) {
                  imageFiles.push(file);
              } else if (file.type === 'application/pdf') {
                  pdfFiles.push(file);
              } else if (file.type === 'application/msword') {
                  docFiles.push(file);
              } else if (
                  file.type ===
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
              ) {
                  docxFiles.push(file);
              } else if (
                  file.type ===
                  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
              ) {
                  docFiles.push(file);
              }
          }

          this.uploadImageFiles(imageFiles, 0);
          this.uploadPDFFiles(pdfFiles, 0);
          this.uploadDocFiles(docFiles, 0);
          this.uploadDocxFiles(docxFiles, 0);
          this.uploadExcelFiles(docxFiles, 0);
      }
  }

  uploadImageFiles(files: File[], index: number): void {
      if (index >= files.length) {
          return;
      }

      const file = files[index];
      const formData = new FormData();
      formData.append('file', file);

      this.is.uploadImageFiles(formData).subscribe((data) => {
          console.log(data);
          const obj = { id: uuidv4(), DocUrl: data['location'] };
          this.docArr.push(obj);
          this.previews.push(data['location']);
          console.log(file);
          this.filename = file.name; // Assign the file name to the filename variable

          // Process the next file
          this.uploadImageFiles(files, index + 1);
      });
  }

  uploadPDFFiles(files: File[], index: number): void {
      if (index >= files.length) {
          return;
      }

      const file = files[index];
      const formData = new FormData();
      formData.append('file', file);

      this.is.uploadPDFFiles(formData).subscribe((data) => {
          console.log(data);
          const obj = { id: uuidv4(), DocUrl: data['location'] };
          this.docArr.push(obj);
          //this.uploadedLinks.push(file.name); // Add file name to uploadedLinks array
          this.filename = file.name;

          // Process the next file
          this.uploadPDFFiles(files, index + 1);
      });
  }

  uploadDocFiles(files: File[], index: number): void {
      if (index >= files.length) {
          return;
      }

      const file = files[index];
      const formData = new FormData();
      formData.append('file', file);

      this.is.uploadDocFiles(formData).subscribe((data) => {
          console.log(data);
          const obj = { id: uuidv4(), DocUrl: data['location'] };
          this.docArr.push(obj);
          //this.uploadedLinks.push(file.name); // Add file name to uploadedLinks array
          this.filename = file.name;

          // Process the next file
          this.uploadDocFiles(files, index + 1);
      });
  }
  uploadDocxFiles(files: File[], index: number): void {
      if (index >= files.length) {
          return;
      }

      const file = files[index];
      const formData = new FormData();
      formData.append('file', file);

      this.is.uploadDocxFiles(formData).subscribe((data) => {
          console.log(data);
          const obj = { id: uuidv4(), DocUrl: data['location'] };
          this.docArr.push(obj);
          //this.uploadedLinks.push(file.name); // Add file name to uploadedLinks array
          this.filename = file.name;

          // Process the next file
          this.uploadDocxFiles(files, index + 1);
      });
  }

  uploadExcelFiles(files: File[], index: number): void {
      if (index >= files.length) {
          return;
      }

      const file = files[index];
      const formData = new FormData();
      formData.append('file', file);

      this.is.uploadExcelFiles(formData).subscribe((data) => {
          console.log(data);
          const obj = { id: uuidv4(), DocUrl: data['location'] };
          this.docArr.push(obj);
          //this.uploadedLinks.push(file.name); // Add file name to uploadedLinks array
          this.filename = file.name;

          // Process the next file
          this.uploadExcelFiles(files, index + 1);
      });
  }

  onClose() {
      this.matDialogRef.close(false);
  }

  uploadFiles() {
      console.log(this.previews);
      let uploadedObj = [];
      console.log(this.docArr);
      for (let i = 0; i < this.docArr.length; i++) {
          const obj = {
              Id: null,
              ReportId: this._data.ReportId,
              OrgId: this._data.OrgId,
              GuidanceNumber: this._data.GuidanceNumber,
              QuestionCode: this._data.ques,
              FileName: this.filename,
              UploadedObj: this.docArr[i].DocUrl,
              IsActive: true,
              CreatedDate: new Date(),
              CreatedByUserId: 1,
              UpdatedDate: new Date(),
              UpdatedByUserId: 1,
          };
          console.log(obj);
          this.uploadService.createSGXImages(obj).subscribe((res) => {
              console.log(res);
          });
          if (this.docArr.length - 1 == i) {
              this.matDialogRef.close(false);
          }
      }
  }
  deleteFile(item: any, index: number): void {
      console.log(item);
      if (this.uploadedLinks.length > 0) {
          const obj = {
              Id: item.Id,
              ReportId: item.ReportId,
              OrgId: item.OrgId,
              GuidanceNumber: item.GuidanceNumber,
              QuestionCode: item.QuestionCode,
              FileName: item.FileName,
              UploadedObj: item.UploadedObj,
              IsActive: 0,
              CreatedDate: new Date(),
              CreatedByUserId: 1,
              UpdatedDate: new Date(),
              UpdatedByUserId: 1,
          };
          console.log(obj);
          this.uploadService.createSGXImages(obj).subscribe((res) => {
              console.log(res);
              this.getReportEvidence(item.ReportId, item.QuestionCode);
              //this.matDialogRef.close(false);
          });
      }
  }
}
