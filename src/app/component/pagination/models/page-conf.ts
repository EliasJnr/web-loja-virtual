import { IPageConf, ISort } from 'app/component/pagination/models/page.interface';
import { isNullOrUndefined } from 'util';

export class PageConf implements IPageConf {

  page: number;
  count: number;
  order: string;
  sort: string;

  constructor(page?: number, count?: number, order?: string, sort?: string) {
    this.page = !isNullOrUndefined(page) ? page : undefined;
    this.count = !isNullOrUndefined(count) ? count : undefined;
    this.order = order ? order : undefined;
    this.sort = sort ? sort : undefined;
  }
}

export enum Direction {
  // ativado
  ASC = 1,

  // desativado
  DESC = 0
}

export class Sort implements ISort {
  direction: Direction;
  property: string;
  ignoreCase: boolean;
  ascending: boolean;
  descending: boolean;
}

export function CreatePageConf(variableToSort: string) {
  const order = Direction;
  return new PageConf(0, 5, order[1], variableToSort);
}
