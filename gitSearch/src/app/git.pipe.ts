import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'git'
})
export class GitPipe implements PipeTransform {

  transform(value: string): any{
    return 'Repo Name: ' + value;
  }
 

}
