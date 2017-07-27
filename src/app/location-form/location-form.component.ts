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
  location: any[]=null;

  constructor(private geoCallService: GeocallService) { }

  getLocation(lat: number, long: number) {
  this.geoCallService.getByLatAndLong(lat, long).subscribe(response => {
      this.location = response.json();
      console.log(response.json().results[0].formatted_address);
  });
}

  ngOnInit() {
  }

}
