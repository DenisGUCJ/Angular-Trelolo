import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AutoSizeInputModule } from 'ngx-autosize-input';
import { MatInputModule} from '@angular/material/input'

import { AppComponent } from './app.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { SingleNoteComponent } from './components/single-note/single-note.component';
import { ToggleInputTextComponent } from './components/toggle-input-text/toggle-input-text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryDataService } from './services/in-memory-data.service';
import { AddNoteButtonComponent } from './components/add-note-button/add-note-button.component';
import { TableContainerComponent } from './components/table-container/table-container.component';
import { HeaderComponent } from './components/header/header.component';
import { AddTableComponent } from './components/add-table/add-table.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesContainerComponent,
    SingleNoteComponent,
    ToggleInputTextComponent,
    AddNoteButtonComponent,
    TableContainerComponent,
    HeaderComponent,
    AddTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule,
    AutoSizeInputModule,
    MatInputModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
