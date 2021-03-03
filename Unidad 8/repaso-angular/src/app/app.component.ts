import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'repaso-angular';

  constructor(private dataService: DataService) { };
  ngOnInit() {
    // Get json data
    if (this.arrayCiclos.length == 0) this.dataService.fetchOfertaEducativa().subscribe((data: Object) => this.jsonProcessing(data));
    console.warn('HOLI')
  }

  //Variables o observables ??(mirarlo)
  arrayCiclos = [];
  allFilters = {
    'familia': [],
    'nombre_ciclo': [],
    'centro.codigo_provincia': [],
    'tipo': [],
    'turno': [],
    'bilingue': [],
    'dual': []
  };
  jsonProcessing(jsonFile) {
    this.arrayCiclos = [];
    //Instanciar los filtros
    this.allFilters = {
      'familia': [],
      'nombre_ciclo': [],
      'centro.codigo_provincia': [],
      'tipo': [],
      'turno': [],
      'bilingue': [],
      'dual': []
    };
    jsonFile.items.map((item) => {
      //Sacamos el centro del ciclo en cuestion
      const centro = jsonFile.info_centros.filter((centro) => item.codigo == centro.codigo)[0];

      //Sacamos opciones de los filtros
      if (this.allFilters['familia'].indexOf(item.familia) == -1) this.allFilters['familia'].push(item.familia);
      if (this.allFilters['nombre_ciclo'].indexOf(item.nombre_ciclo) == -1) this.allFilters['nombre_ciclo'].push(item.nombre_ciclo);
      if (this.allFilters['centro.codigo_provincia'].indexOf(centro.codigo_provincia) == -1) this.allFilters['centro.codigo_provincia'].push(centro.codigo_provincia);
      if (this.allFilters['tipo'].indexOf(item.tipo) == -1) this.allFilters['tipo'].push(item.tipo);

      const turno = item.turno != 'Mañana' && item.turno != 'Tarde' ? 'Ambos' : item.turno;
      if (this.allFilters['turno'].indexOf(turno) == -1) this.allFilters['turno'].push(turno);

      if (this.allFilters['bilingue'].indexOf(item.bilingue) == -1) this.allFilters['bilingue'].push(item.bilingue);
      if (this.allFilters['dual'].indexOf(item.dual) == -1) this.allFilters['dual'].push(item.dual);

      const ciclo = {
        'centro': centro,
        'familia': item.familia,
        'codigo_ciclo': item.codigo_ciclo,
        'nombre_ciclo': item.nombre_ciclo,
        'tipo': item.tipo,
        'turno': item.turno,
        'bilingue': item.bilingue,
        'dual': item.dual
      }
      this.arrayCiclos.push(ciclo);
    });
    console.log(this.arrayCiclos);
    console.log(this.allFilters);
  }


}

// {
//   "request_time": "",
//   "info_centros": [
//     {
//         "codigo": "18009377",
//         "nombre": "C.P.I.F.P. Aynadamar",
//         "direccion": "Paseo Paseo de Cartuja, s/n",
//         "telefono": "958893570",
//         "localidad": "Granada",
//         "codigo_provincia": "18"
//     }
//   ],
//   "items": [
//     {
//         "codigo": "18009377",
//         "familia": "Sanidad",
//         "codigo_ciclo": "19307G",
//         "nombre_ciclo": "Ortoprótesis y Producto de Apoyo",
//         "tipo": "Público",
//         "turno": "Mañana",
//         "bilingue": "No",
//         "dual": "Todas las plazas en oferta dual"
//     }
//   ]
// }



// ciclos: [
//   {
//     'centro': {
//       "codigo": "18009377",
//       "nombre": "C.P.I.F.P. Aynadamar",
//       "direccion": "Paseo Paseo de Cartuja, s/n",
//       "telefono": "958893570",
//       "localidad": "Granada",
//       "codigo_provincia": "18"
//     },
//     "familia": "Sanidad",
//     "codigo_ciclo": "19307G",
//     "nombre_ciclo": "Ortoprótesis y Producto de Apoyo",
//     "tipo": "Público",
//     "turno": "Mañana",
//     "bilingue": "No",
//     "dual": "Todas las plazas en oferta dual"
//   }
// ]