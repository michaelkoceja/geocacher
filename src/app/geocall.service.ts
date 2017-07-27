import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocallService {

  constructor(private http: Http) { }

  getByLatAndLong(lat: number, long: number) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat +"," + long + "&key=" + geoKey)
  }

  getByAddress(address: string, city: string, state: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address" + address + "," + city + "," + state + "&key=" + geoKey)
  }
}
