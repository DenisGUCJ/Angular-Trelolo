import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Table } from '../interfaces/Table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TablesService {
  private tablesUrl = 'api/tables';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tablesUrl).pipe(
      tap(_=>console.log('get tables'))
    );
  }

  updateTable(table : Table): Observable<any>{
    return this.http.put(this.tablesUrl, table, this.httpOptions).pipe(
      tap(_=>console.log(`updated table ${table.id}`))
    )
  }

  getTableById(id:number): Observable<Table>{
    return this.http.get<Table>(`${this.tablesUrl}/${id}`).pipe(
      tap(_=> console.log(`fetched table ${id}`))
    )
  }
}
