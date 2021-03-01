import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Filtro } from '../interfaces';
import Utils from './../utils.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.sass']
})
export class FilterComponent implements OnInit {
  @Input() allFiltersProp: Object;
  @Output() handleClick = new EventEmitter();

  //creamos observables
  arrayFilters: Array<Filtro>;
  provincias: Object;

  constructor() { }

  handler(e) {
    this.handleClick.emit(e);
  }

  ngOnInit(): void {
    console.log("Filter loaded")
    // console.log(this.allFiltersProp)
    this.arrayFilters = [
      {
        'filterId': 'family',
        'filterLabel': 'Familia',
        'filterProp': 'familia'
      },
      {
        'filterId': 'cicloName',
        'filterLabel': 'Nombre del ciclo',
        'filterProp': 'nombre_ciclo'
      },
      {
        'filterId': 'province',
        'filterLabel': 'Provincia',
        'filterProp': 'centro.codigo_provincia'
      },
      {
        'filterId': 'type',
        'filterLabel': 'Tipo',
        'filterProp': 'tipo'
      },
      {
        'filterId': 'turno',
        'filterLabel': 'Turno',
        'filterProp': 'turno'
      },
      {
        'filterId': 'bilingue',
        'filterLabel': 'Bilingüe',
        'filterProp': 'bilingue'
      },
      {
        'filterId': 'dual',
        'filterLabel': 'Dual',
        'filterProp': 'dual'
      }
    ];
    this.provincias = Utils.provincias;
  }

}
