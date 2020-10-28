import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Note } from '../interfaces/Note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private notesUrl = 'api/tables';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getNotes(id: number): Observable<Note[]> {
    console.log(id)
    return this.http.get<Note[]>(`${this.notesUrl}/${id}`);
  }

  addNote(note: Note, id: number): Observable<Note> {

    console.log(note)

    return this.http
      .post<Note>(`${this.notesUrl}/${id}`, note, this.httpOptions)
      .pipe(tap((_) => console.log('add')));
  }

  updateNotes(notes: Note[]): Observable<Note[]> {
    return this.http
      .patch<Note[]>(this.notesUrl, notes, this.httpOptions)
      .pipe(tap((_) => console.log('updated')));
  }
}
