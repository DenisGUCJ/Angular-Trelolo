import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss'],
})
export class SingleNoteComponent implements OnInit {
  @Input() note: string;
  @Input() index: number;
  @Output() noteChanged = new EventEmitter<[number, string]>();

  constructor() {}

  ngOnInit(): void {}

  onNoteChanged(event: string) {
    this.noteChanged.emit([this.index, event]);
  }
}
