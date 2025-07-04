import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackdetailsComponent } from './stackdetails.component';
import { Route, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Import FormsModule


const StackdetailsRoutes: Route[] = [
  {
      path     : '',
      component: StackdetailsComponent
  }
];



@NgModule({
  declarations: [
    StackdetailsComponent
  ],
  imports: [
    CommonModule,FormsModule,
    RouterModule.forChild(StackdetailsRoutes),

  ]
})
export class StackdetailsModule { }
