import {Component, input} from '@angular/core';

export interface HousingLocationInfo {
  id: number;
  name: string;
  city: string;
  state: string;
  photo: string;
  availableUnits: number;
  wifi: boolean;
  laundry: boolean;
}

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: `
    <section class="location">
    <img class="listing-photo">
    <h2 class="listing-heading"></h2>
    <p class="listing-location"></p>
    </section>
  `,
  styles: ``,
  styleUrls: ['./housing-location.css']
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
