import { Component, OnInit, Input } from '@angular/core';
import { Table } from 'src/app/interfaces/Table';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-add-note-button',
  templateUrl: './add-note-button.component.html',
  styleUrls: ['./add-note-button.component.scss'],
})
export class AddNoteButtonComponent implements OnInit {
  @Input() table: Table;

  constructor(private tablesService: TablesService) {}

  ngOnInit(): void {}

  onClick() {
    this.addEmptyNote();
  }

  addEmptyNote() {
    this.table.notes.push('');
    this.tablesService
      .updateTable(this.table)
      .subscribe();
  }
}
