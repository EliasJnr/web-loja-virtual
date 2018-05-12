import { Direction } from 'app/component/pagination/models/page-conf';

export interface IPagination {

  paginationChanged(event: any);
  previousPage();
  nextPage();
}

export interface IPage<T> {
  content?: Array<T>;
  last?: boolean;
  totalPages?: number;
  totalElements: number;
  sort?: Array<ISort>;
  first?: boolean;
  numberOfElements?: number;
  size: number;
  number: number;
}


export interface ISort {
  direction: Direction;
  property: string;
  ignoreCase?: boolean;
  ascending?: boolean;
  descending?: boolean;
}

export interface IPageConf {
  page: number;
  count: number;
  order: string;
  sort: string;
}
