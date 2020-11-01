import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Table } from 'src/app/interfaces/Table';
import { TablesService } from 'src/app/services/tables.service';
import { ResizedEvent } from 'angular-resize-event';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss'],
})
export class NotesContainerComponent implements OnInit {
  @Input() table: Table;
  @ViewChild('notesContainer') notesContainer: ElementRef;

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
    this.tablesService.updateTable(this.table).subscribe();
  }

  onNoteChanged(event: [number, string]) {
    let index = event[0];
    let note = event[1];
    if (note.length === 0) {
      this.table.notes.splice(index, 1);
    } else if (index === this.table.notes.length - 1) {
      this.table.notes[index] = note;
      setTimeout(() => {
        this.table.notes.push('');
      }, 1);
    } else {
      //this.table.notes[index] = note;
    }
    console.log(this.table.notes);
    this.updateTable();
  }

  updateTable() {
    this.tablesService.updateTable(this.table).subscribe();
  }

  titleChanged(event: string) {
    this.table.title = event;
    this.updateTable();
  }
}
