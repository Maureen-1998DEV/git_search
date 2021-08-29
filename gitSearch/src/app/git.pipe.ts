import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'git'
})
export class GitPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
