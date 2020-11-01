import { Injectable } from '@angular/core';
import { Table } from '../interfaces/Table';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const tables: Table[] = [
      {
        id: 11,
        title: 'TO DO',
        notes: [
          'note 111',
          'note 112',
          'note 113',
          'note 114',
          'note 115',
          'note 116',
        ],
      },
      {
        id: 12,
        title: 'DONE',
        notes: [
          'note 121',
          'note 122',
          'note 123',
          'note 124',
          'note 125',
          'note 126',
        ],
      }
    ];
    return { tables };
  }


  genId(tables: Table[]): number {
    return tables.length > 0
      ? Math.max(...tables.map((hero) => hero.id)) + 1
      : 11;
  }
  constructor() {}
}
