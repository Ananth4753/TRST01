import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DragDropModule
    ]
})
export class SharedModule
{
}
