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
  selector: 'app-carbonscope1cooling',
  templateUrl: './carbonscope1cooling.component.html',
  styleUrls: ['./carbonscope1cooling.component.scss']
})
export class Carbonscope1coolingComponent implements OnInit {

  constructor(private router:Router,private route: ActivatedRoute,
    private fb: FormBuilder,private as:AuthService,) { }

  ngOnInit() {
  }

}
