import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.sass']
})
export class CustomTableComponent {

  @Input() public columnNames: Array<String>;
  @Input() public rowNames: Array<String>;
  @Input() public rows: Array<Object>;

  @Output() public edit: EventEmitter<Object>;
  @Output() public remove: EventEmitter<Object>;
  @Output() public sort: EventEmitter<Object>;
  @Input() public imageSize = 0;

  constructor() {
    this.columnNames = [];
    this.rowNames = [];
    this.rows = [];
    this.edit = new EventEmitter<Object>();
    this.remove = new EventEmitter<Object>();
    this.sort = new EventEmitter<Object>();
  }

  public editAction(object: Object) {
    this.edit.next(object);
  }

  public removeAction(object: Object) {
    this.remove.next(object);
  }

  public sortAction(column: String) {
    this.sort.next({
      sort: column,
      order: 'asc'
    });
  }

  public isImage(value: any): boolean {
    if (value)
      return value.toString().startsWith('http');
    else
      return false;
  }
}
