import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import City from '../model/city';

@Component({
  selector: 'app-city-item',
  templateUrl: './city-item.component.html',
  styleUrls: ['./city-item.component.css']
})
export class CityItemComponent implements OnInit {
  @Input() city?: City; //da padre verso il figlio - dopo binding di attributi

  @Output() citySelected = new EventEmitter<City>();


  constructor() { }
  
  ngOnInit(): void {
  }

  onClickItem = ()=>{
    this.citySelected.emit(this.city);
  }

}
