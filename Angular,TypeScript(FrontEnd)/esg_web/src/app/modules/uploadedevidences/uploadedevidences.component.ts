import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';
import { GlobalvariableService } from '../services/globalvariable.service';

@Component({
  selector: 'app-uploadedevidences',
  templateUrl: './uploadedevidences.component.html',
  styleUrls: ['./uploadedevidences.component.scss']
})
export class UploadedevidencesComponent implements OnInit {
  reportid: any;
  orgid: any;
  uploadedeviGrouped: any[];

  constructor(private gs: GlobalvariableService, private auth: AuthService, private aa: ActivatedRoute) { }

  ngOnInit() {
    this.orgid = this.auth.user.orgId;
    this.reportid = this.aa.snapshot.paramMap.get('reportId');
    this.gs.GetUploadEvidenceByReportIdandOrgId(this.reportid, this.orgid).subscribe((data) => {
      console.log(data);
      this.uploadedeviGrouped = this.groupData(data);
    });
  }

  groupData(data: any[]): any[] {
    const groupedData = [];
    const guidanceNumMap = new Map();

    for (const item of data) {
      const key = item.GuidanceNumber + item.QuestionCode;
      if (!guidanceNumMap.has(key)) {
        guidanceNumMap.set(key, {
          GuidanceNumber: item.GuidanceNumber,
          QuestionCode: item.QuestionCode,
          UploadedObj: []
        });
        groupedData.push(guidanceNumMap.get(key));
      }
      guidanceNumMap.get(key).UploadedObj.push(item.UploadedObj);
    }

    return groupedData;
  }
}
