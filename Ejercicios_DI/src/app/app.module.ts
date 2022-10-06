import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportsModule } from './material-imports/material-imports.module';
import { E01BindingComponent } from './e01-binding/e01-binding.component';
import { E02ListComponent } from './e02-list/e02-list.component';
import { E02ListRevisionComponent } from './e02-list-revision/e02-list-revision.component';
import { StorageComponent } from './storage/storage.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    E01BindingComponent,
    E02ListComponent,
    E02ListRevisionComponent,
    StorageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
