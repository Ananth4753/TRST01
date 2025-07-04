import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'app/core/auth/auth.service';
import { ImportdisService } from 'app/modules/importdis/importdis.service';
@Component({
  selector: 'app-carbondashboard',
  templateUrl: './carbondashboard.component.html',
  styleUrls: ['./carbondashboard.component.scss']
})
export class CarbondashboardComponent implements OnInit {
  isHome: boolean;
  isMenu1: boolean;
  constructor(private router:Router,private route: ActivatedRoute,
    private fb: FormBuilder,private as:AuthService,) {
      this.route.url.subscribe(urlSegments => {
        this.isHome = urlSegments.some(segment => segment.path === 'home');
        this.isMenu1 = urlSegments.some(segment => segment.path === 'menu1');
      });
     }

  ngOnInit() {
    this.isHome=true;
  }

}
