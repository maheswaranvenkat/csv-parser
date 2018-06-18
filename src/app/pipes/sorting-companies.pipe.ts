import { User } from '../interface/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortingUsers'
})
export class SortingCompaniesPipe implements PipeTransform {

  transform(companies: User[], path: string[], order: number = 1): User[] {

    // Check if is not null
    if (!companies || !path || !order) { return companies; }

    return companies.sort((a: User, b: User) => {
      // We go for each property followed by path
      path.forEach(property => {
        a = a[property];
        b = b[property];
      })

      // Order * (-1): We change our order
      return a > b ? order : order * (- 1);
    });
  }

}
