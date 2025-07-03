import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackingslipsearchComponent } from './packingslipsearch.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SearchpackagePipe } from './searchpackage.pipe';



const PackingslipsearchRoutes: Route[] = [
  {
      path     : '',
      component: PackingslipsearchComponent
  }
];



@NgModule({
  declarations: [	
    PackingslipsearchComponent,
      SearchpackagePipe
   ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(PackingslipsearchRoutes),

  ]
})
export class PackingslipsearchModule { }
