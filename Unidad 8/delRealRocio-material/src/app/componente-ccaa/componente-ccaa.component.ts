import { Component, OnInit } from '@angular/core';

interface Ccaa {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-componente-ccaa',
  templateUrl: './componente-ccaa.component.html',
  styleUrls: ['./componente-ccaa.component.sass']
})

// export class ComponenteCcaaComponent implements OnInit {
//   constructor() { }

//   ngOnInit(): void {
//   }

// }


export class ComponenteCcaaComponent {
  selectedValue: string;
  selectedCar: string;

  comunities: Ccaa[] = [
    { value: 'andalucia', viewValue: 'Andalucía' },
    { value: 'canarias', viewValue: 'Canarias' },
    { value: 'madrid', viewValue: 'Madrid' }
  ];

}