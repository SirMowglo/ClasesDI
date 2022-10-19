import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './modules/material-imports/material-imports.module';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NewPeopleDialogComponent } from './dialogs/new-people-dialog/new-people-dialog.component';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';


@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    NewPeopleDialogComponent,
    EditPeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
