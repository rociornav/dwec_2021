import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { ComponenteCcaaComponent } from './componente-ccaa/componente-ccaa.component';
import { ComponenteLoggingComponent } from './componente-logging/componente-logging.component';
import { ComponenteTablaComponent } from './componente-tabla/componente-tabla.component';
// import { ModuloComponentesModule } from './modulo-componentes/modulo-componentes.module';

// Unified material components to be used
const materialComponents = [
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule
];

// Modules

@NgModule({
  declarations: [
    AppComponent,
    ComponenteCcaaComponent,
    ComponenteLoggingComponent,
    ComponenteTablaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // ModuloComponentesModule
    materialComponents
  ],
  exports: [
    materialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
