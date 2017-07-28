import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocallService } from '../geocall.service'

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css'],
  providers: [GeocallService]
})
export class LocationFormComponent implements OnInit {

  location: any[] = null;
  addressFromAPI: any[] = null;
  // newCoords: any[];
  // noLocation: boolean = false;

  constructor(private geoCallService: GeocallService) { }

  ngOnInit() {
  }

  getLocation(lat: number, long: number) {
    // this.noLocation = false;
    this.geoCallService.getByLatAndLong(lat, long).subscribe(response => {
      this.location = response.json().results[0].formatted_address;
      console.log(response.json().results[0].formatted_address)
    });
  }

  getAddress(address: string, city: string, state: string) {
    this.geoCallService.getByAddress(address, city, state).subscribe(response => {
      this.addressFromAPI = response.json().results[0].geometry.location;
      console.log(response.json().results[0].geometry.location);

    });
  //   address.slice(0, 1);
  //   console.log(address);
  }
}
