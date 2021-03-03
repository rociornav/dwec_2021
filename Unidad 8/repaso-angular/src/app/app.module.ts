//Librerias externas
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



//Componentes internos
import { AppComponent } from './app.component';
import { FiltersComponent } from './filters/filters.component';
import { TableGeneratedComponent } from './table-generated/table-generated.component';
//servicio
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    TableGeneratedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
