import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { PageModel } from 'app/component/pagination/models/page.model';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.sass']
})
export class PaginationComponent implements  OnChanges {

  @Input() page: PageModel<any>;
  @Output() action = new EventEmitter();
  @Input() id: 'tablePagination';
  pagesIndexes: Array<number> = [];

  ngOnChanges(changes) {
    if ( changes['page'] ) {
      const pagesIndexes_: Array<number> = [];
      for ( let i = 0; i < this.page.totalPages; i++ ) {
        pagesIndexes_.push(i + 1);
      }
      this.pagesIndexes = pagesIndexes_;
    }
  }
  private previousPage() {
    if (this.page.totalElements > 0) {
      this.page.number = this.page.number - 1;
      this.action.next(this.page.number);
    }
  }

  private nexPage() {
    if (this.page.number < this.page.totalElements) {
      this.action.next(this.page.number + 1);
    }
  }

  private changePage(pageIndex: number) {
    this.action.next(pageIndex - 1);
  }
}
