import { Component } from '@angular/core';
import { CloudinaryImage } from '@cloudinary/url-gen';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { HttpService } from './services/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { SocketService } from './services/socket.service';
import { AuthService } from './services/auth.service';
import { GlobalsService } from './services/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  httpSubscription!: Subscription;
  constructor(
    private http: HttpService,
    private socket: SocketService,
    private authService: AuthService,
    private global: GlobalsService
  ) { }
  ngOnInit() {
    this.http.get('http://localhost:3000').subscribe((data) => {
      if (data instanceof HttpErrorResponse) {
        // window.location.reload();
      }
      console.log(data);
      this.socket.connect();
      this.global.socket_status.subscribe((data) => {
        console.log(data);

      })
      // this.authService.CHECK_USERNAME('testy@77');
      // this.authService.CREATE_USER({
      //   username: 'testy@76',
      //   email: 'test@example.com',
      //   mobile: '9876543210',
      //   country: 'LONDON',
      //   gender: 'MALE',
      //   password: 'thispassword',
      //   dob: new Date()
      // });
      // this.authService.LOGIN_USER({ username: 'testy@76', password: 'thisispassword' });
      // this.authService.LOGOUT_USER();
    },
      (err) => {
        console.log(err);
      });
  }

  // myImage = new CloudinaryImage('flybook/3_ny3ajg', { cloudName: 'dlc4g33ea' }).resize(fill());
}
