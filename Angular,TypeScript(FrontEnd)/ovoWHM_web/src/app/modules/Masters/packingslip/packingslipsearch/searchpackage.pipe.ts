import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpackage'
})
export class SearchpackagePipe implements PipeTransform {

  transform(value: any, args?: any): any { if (!args)
    
    { return value; } return value.filter((value: any) => 
    { return (value.WareHouse.toLocaleLowerCase().includes(args)) || (value.Code.toLocaleLowerCase().includes(args)) || (value.PackingType.toLocaleLowerCase().includes(args)) || (value.packingStatus.toLocaleLowerCase().includes(args))  || (value.CreatedDate.toLocaleLowerCase().includes(args)) }) }

}
