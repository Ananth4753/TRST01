import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
    selector: 'app-uploadimg',
    templateUrl: './uploadimg.component.html',
    styleUrls: ['./uploadimg.component.scss'],
})
export class UploadimgComponent implements OnInit {
    reportid: any;
    selectedFiles?: FileList;
    filename: any;
    progressInfos: any[] = [];
    message: string[] = [];
    previews: string[] = [];
    uploadedLinks: any = [];
    orgId:any
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
        
        private router: Router,
        public matDialogRef: MatDialogRef<UploadimgComponent>,
        private uploadService: GlobalvariableService,
        private aa: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.getReportEvidence(this._data.ReportId, this._data.ques);
    }

    getReportEvidence(ReportId, Ques) {
        this.uploadService
            .GetUploadEvidenceByReportId(ReportId, Ques)
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
  

    onClose() {
        this.matDialogRef.close(false);
    }

}
