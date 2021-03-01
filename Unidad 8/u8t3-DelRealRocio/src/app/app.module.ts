// librerias externas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// componentes material
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';

//componentes internos
import { AppComponent } from './app.component';
import { FilterComponent } from './filter/filter.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { DataService } from './data.service';

// Unified material components to be used
const materialComponents = [
  MatSelectModule,
  MatFormFieldModule,
  MatTableModule,
  MatListModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    GenericTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    materialComponents
  ],
  // exports: [
  //   materialComponents
  // ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
