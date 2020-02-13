import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageNoFound'
})
export class ImageNoFoundPipe implements PipeTransform {

  transform(value: any[]): string {
    if ( !value ) {
      return 'assets/img/noImage.png';
    }  else {
      if (value.length > 0) {
        return value[0].url;
      } else {
        return 'assets/img/noImage.png';
      }
    }
  }

}
