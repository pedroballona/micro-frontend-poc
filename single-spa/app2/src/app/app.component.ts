import { Component } from '@angular/core';
import { assetUrl } from '../single-spa/asset-url';

@Component({
  selector: 'two-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  imageUrl = assetUrl('business-dog-space.png');
}
