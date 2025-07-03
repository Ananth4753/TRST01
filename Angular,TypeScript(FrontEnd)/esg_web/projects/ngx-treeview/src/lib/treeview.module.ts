import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Treeview1Component } from './components/treeview1/treeview1.component';
import { TreeviewComponent } from './components/treeview/treeview.component';
import { TreeviewItemComponent } from './components/treeview-item/treeview-item.component';
import { TreeviewItem1Component } from './components/treeview-item1/treeview-item.component1';
import { TreeviewPipe } from './pipes/treeview.pipe';
import { TreeviewI18n, DefaultTreeviewI18n } from './models/treeview-i18n';
import { TreeviewConfig } from './models/treeview-config';
import { TreeviewEventParser, DefaultTreeviewEventParser } from './helpers/treeview-event-parser';

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [
    TreeviewComponent,
    Treeview1Component,
    TreeviewItemComponent,
    TreeviewItem1Component,
    TreeviewPipe,
  ], exports: [
    TreeviewComponent,
    Treeview1Component,
    TreeviewPipe,
  ]
})
export class TreeviewModule {
  static forRoot(): ModuleWithProviders<TreeviewModule> {
    return {
      ngModule: TreeviewModule,
      providers: [
        TreeviewConfig,
        { provide: TreeviewI18n, useClass: DefaultTreeviewI18n },
        { provide: TreeviewEventParser, useClass: DefaultTreeviewEventParser }
      ]
    };
  }
}
