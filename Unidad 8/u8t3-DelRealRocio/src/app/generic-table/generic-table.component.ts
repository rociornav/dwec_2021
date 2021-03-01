import { Component, OnInit, Input } from '@angular/core';
import Utils from '../utils.component';
import { Ciclo } from './../interfaces';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.sass']
})

export class GenericTableComponent implements OnInit {
  @Input() data: Array<Ciclo>;
  @Input() filters: Object;

  constructor() { }

  //observable para crear tabla
  filteredData: Array<Ciclo> = [];
  provincias: Object = Utils.provincias;
  displayedColumns: string[] = [
    'centro',
    'nombre_ciclo',
    'tipo',
    'turno',
    'bilingue',
    'dual'
  ];

  ngOnInit(): void {
    console.log("Soy la supuesta tabla y tengo estos datos: ");
    console.log(this.data);
    console.log(this.filters);
    this.filtrarDatos();
    // (window as any).filters = this.filters; para comprobar la actualizacion de los filtros.
  }

  filtrarDatos() {
    this.data.map((dato) => {
      const entra = [];
      Object.keys(this.filters).map((key) => {
        let dataToCheck = '';
        if (key == "centro.codigo_provincia") {
          dataToCheck = dato.centro.codigo_provincia;
        } else {
          dataToCheck = dato[key];
        }

        if (key == 'turno' && this.filters[key] == 'Ambos') dataToCheck = 'Ambos';

        entra.push(this.filters[key] == '' || this.filters[key] == dataToCheck);
      })
      // entra.push(this.filters['familia'] == '' || this.filters['familia'] == dato.familia);
      // entra.push(this.filters['nombre_ciclo'] == '' || this.filters['nombre_ciclo'] == dato.nombre_ciclo);
      // entra.push(this.filters['centro.codigo_provincia'] == '' || this.filters['centro.codigo_provincia'] == dato.centro.codigo_provincia);
      // entra.push(this.filters['tipo'] == '' || this.filters['tipo'] == dato.tipo);
      // entra.push(this.filters['turno'] == '' || this.filters['turno'] == dato.turno);
      // entra.push(this.filters['bilingue'] == '' || this.filters['bilingue'] == dato.bilingue);
      // entra.push(this.filters['dual'] == '' || this.filters['dual'] == dato.dual);
      if (entra.filter((si) => si == false).length == 0) this.filteredData.push(dato);
    });
    console.warn(this.filteredData);
  }

  // filterValues = {
  //   'familia': '',
  //   'nombre_ciclo': '',
  //   'centro.codigo_provincia': '',
  //   'tipo': '',
  //   'turno': '',
  //   'bilingue': '',
  //   'dual': ''
  // };


}

