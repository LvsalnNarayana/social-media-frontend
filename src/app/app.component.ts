import { Component } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';

// Import any actions required for transformations.
import { fill } from '@cloudinary/url-gen/actions/resize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ngOnInit() {
  }

  title = 'social-media-frontend';
  myImage = new CloudinaryImage('flybook/3_ny3ajg', { cloudName: 'dlc4g33ea' }).resize(fill());
}
