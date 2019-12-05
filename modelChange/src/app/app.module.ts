import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HeaderComponent } from './header/header.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthorisedSideNavTogglerComponent } from './authorised-side-nav-toggler/authorised-side-nav-toggler.component';
import { AuthorisedSideNavComponent } from './authorised-side-nav/authorised-side-nav.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';

import { DataTablesModule } from 'angular-datatables';
import { ItemLocatorComponent } from './item-locator/item-locator.component';
import { LocationComponent } from './location/location.component';
import { FixtureeditorComponent } from './fixtureeditor/fixtureeditor.component';
import { EditorComponent } from './editor/editor.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    AuthorisedSideNavTogglerComponent,
    AuthorisedSideNavComponent,
    ItemLocatorComponent,
    LocationComponent,
    FixtureeditorComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    DataTablesModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}],
  bootstrap: [AppComponent],
  entryComponents: [LocationComponent, EditorComponent]
})
export class AppModule { }
