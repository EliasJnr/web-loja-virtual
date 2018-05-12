import { IPage } from 'app/component/pagination/models/page.interface';
import { Sort } from 'app/component/pagination/models/page-conf';

export class PageModel<T> implements IPage<T> {

  content: Array<T>;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: Sort[];
  first: boolean;
  numberOfElements: number;
  size: number;
  number: number;

  constructor() {
    this.content = undefined;
    this.last = undefined;
    this.totalPages = undefined;
    this.totalElements = undefined;
    this.sort = undefined;
    this.first = undefined;
    this.numberOfElements = undefined;
    this.size = undefined;
    this.number = undefined;
  }
}
