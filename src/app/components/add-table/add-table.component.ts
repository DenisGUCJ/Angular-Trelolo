import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Table } from 'src/app/interfaces/Table';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.scss'],
})
export class AddTableComponent implements OnInit {
  @Output() tableAdded = new EventEmitter<Table>();
  constructor(private tablesService: TablesService) {}

  ngOnInit(): void {}

  onClick() {
    this.addEmptyTable();
  }

  addEmptyTable() {
    this.tablesService.addTable().subscribe((newTable)=>{
      this.tableAdded.emit(newTable)
    });
  
  }
}
