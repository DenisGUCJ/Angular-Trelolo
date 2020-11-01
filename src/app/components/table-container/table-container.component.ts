import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Table } from 'src/app/interfaces/Table';
import { TablesService } from 'src/app/services/tables.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss'],
})
export class TableContainerComponent implements OnInit {
  @ViewChild('container') container: ElementRef;

  parentHeight: number;

  tables: Table[];

  constructor(private tablesService: TablesService) {}

  ngOnInit(): void {
    this.getTables();
  }

  getTables() {
    this.tablesService.getTables().subscribe((tables) => {
      this.tables = tables;
    });
  }

  drop(event: CdkDragDrop<Table[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTable(table: Table) {
    this.tables.push(table);
  }

  onDrag(event) {
    console.log('sas');
    if (this.container) console.log(this.container);
  }
}
