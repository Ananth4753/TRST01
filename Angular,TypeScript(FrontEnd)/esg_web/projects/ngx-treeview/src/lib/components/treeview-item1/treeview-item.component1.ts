import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { isNil } from 'lodash';
import { TreeviewItem } from '../../models/treeview-item';
import { TreeviewConfig } from '../../models/treeview-config';
import { TreeviewItemTemplateContext } from '../../models/treeview-item-template-context';
import { TreeviewComponent } from '../treeview/treeview.component';


@Component({
  selector: 'ngx-treeview-item1',
  templateUrl: './treeview-item.component1.html',
  styleUrls: ['./treeview-item.component1.scss']
})
export class TreeviewItem1Component {
  @Input() config: TreeviewConfig;
  @Input() template: TemplateRef<TreeviewItemTemplateContext>;
  @Input() item: TreeviewItem;
  @Output() checkedChange = new EventEmitter<boolean>();

  constructor(
    private defaultConfig: TreeviewConfig
  ) {
    this.config = this.defaultConfig;
  }

  onCollapseExpand = () => {
    this.item.collapsed = !this.item.collapsed;
  }

  onCheckedChange = () => {
    const checked = this.item.checked;
    
    
    if (!isNil(this.item.children) && !this.config.decoupleChildFromParent) {
      this.item.children.forEach(child => child.setCheckedRecursive(checked));
    }
    this.checkedChange.emit(checked);

  }
  element: HTMLElement;
  dynamicId : any = '';
  onChildCheckedChange(child: TreeviewItem, checked: boolean): void {
    
    if(child.value.includes(":"))
    {
      if(this.dynamicId != '')
      {
        this.element = document.getElementById('clickId'+this.dynamicId) as HTMLElement;
        this.element.classList.remove('dynamicColor');
      }
      
        this.dynamicId = child.value;
        this.element = document.getElementById('clickId'+this.dynamicId) as HTMLElement;
        this.element.classList.add('dynamicColor');
    }
  

    if (!this.config.decoupleChildFromParent) {
      let itemChecked: boolean = null;
      
      
      for (const childItem of this.item.children) {
        if (itemChecked === null) {
          itemChecked = childItem.checked;
         
          
        } else if (itemChecked !== childItem.checked) {
          
          itemChecked = undefined;
          
          break;
        }
      }

      if (itemChecked === null) {
        itemChecked = false;
        
      }

      if (this.item.checked !== itemChecked) {
        this.item.checked = itemChecked;
       
      }

    }

    this.checkedChange.emit(checked);
 
  }


}
