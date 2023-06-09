import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client/build/esm/socket';
import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(
    private global: GlobalsService
  ) { }
  socket!: Socket;
  connect() {
    this.socket = io({
      path: 'http://localhost:3000',
      withCredentials: true,
    });
    this.socket.on("connect_error", (err) => {
      console.log(err);
      // console.log(`connect_error due to ${err.message}`);
    });
    this.socket.on('connect', () => {
      this.global.socket_status.next(true);
    });
  }
  listen(eventName: string) {
    return new Observable((subscriber: any) => {
      const eventListener = (data: any) => {
        if (data !== null && data !== undefined) {
          subscriber.next(data);
        }
      };
      this.socket?.on(eventName, eventListener);
      // Return a teardown function to remove the event listener when the Observable is unsubscribed
      return () => {
        this.socket?.off(eventName, eventListener);
      };
    });
  }
  emit(eventName: string, data: any) {
    this.socket?.emit(eventName, data);
  }
  unlisten(eventname: any) {
    this.socket.off(eventname);
  }
}
