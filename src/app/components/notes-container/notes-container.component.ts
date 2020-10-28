import { Component, OnInit, Input } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';
import { NotesService } from '../../services/notes.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Table } from 'src/app/interfaces/Table';
import { TablesService } from 'src/app/services/tables.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  @Input() table: Table;

  constructor(private tablesService: TablesService) {}

  ngOnInit(): void {}

  getTable(): void {
    this.tablesService.getTableById(this.table.id).subscribe((table) => {
      this.table = table;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    //this.tablesService.updateTable(this.table).subscribe();
    console.log(this.table.notes);
  }

  onNoteChanged(event: string){
    let index = event[0];
    let note = event[1];
    this.table.notes[index] = note;
    this.updateTable();
  }

  updateTable(){
    this.tablesService.updateTable(this.table).subscribe()
  }
}
