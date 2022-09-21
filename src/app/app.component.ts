import { Component } from '@angular/core';
import City from './model/city';
import { CITIES } from './utility/constants';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCity?: City; //se la var è stata istanziata
  title = 'Elena Dias';
  cities?:City[];

keyCode?: string;

  constructor(){
    setTimeout(() => 
    {
      this.myCity = new City(1,"Milano", "Lombardia"), 
      this.cities = CITIES;
    }, 1000 );
    
  }

  //Key Up event
  onKeyboard = (event: KeyboardEvent) =>{
    this.keyCode = event.key + " ---> " + event.code;
  }
  onCitySelected = (city: City) =>{
    console.log(city);
    
  }
}
