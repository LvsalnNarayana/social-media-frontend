import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private socket: SocketService
  ) { }

  CREATE_USER(data: any) {
    console.log(data);
    this.socket.emit('CREATE_USER_REQUEST', data);
    this.socket.listen('CREATE_USER_RESPONSE').subscribe((data) => {
      if (data !== null || data !== undefined) {
        console.log(data);
      }
    })
  }

  CHECK_USERNAME(data: any) {
    this.socket.emit('CHECK_USERNAME_REQUEST', data);
    this.socket.listen('CHECK_USERNAME_RESPONSE').subscribe((data) => {
      if (data !== null || data !== undefined) {
        console.log(data);
      }
    })
  }
  LOGIN_USER(data: any) {
    this.socket.emit('LOGIN_USER_REQUEST', data);
    this.socket.listen('LOGIN_USER_RESPONSE').subscribe((data) => {
      if (data !== null || data !== undefined) {
        console.log(data);
      }
    })
  }
  LOGOUT_USER() {
    this.socket.emit('LOGOUT_USER_REQUEST', {});
    this.socket.listen('LOGOUT_USER_RESPONSE').subscribe((data) => {
      console.log(data);
    })
  }
}
