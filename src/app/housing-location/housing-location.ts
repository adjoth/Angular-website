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
    <p>
      housing-location works!
    </p>
  `,
  styles: ``,
  styleUrls: ['./housing-location.css']
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
