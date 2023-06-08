import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor() { }
  socket_status = new ReplaySubject(1);
  profile = new ReplaySubject(1);
  friends = new ReplaySubject(1);
  posts = new ReplaySubject(1);
  notifications = new ReplaySubject(1);
  requests = new ReplaySubject(1);
  messages = new ReplaySubject(1);
  searchUser = new ReplaySubject(1);
  userProfile = new ReplaySubject(1);
  savedPosts = new ReplaySubject(1);
  settings = new ReplaySubject(1);
  work_and_experience = new ReplaySubject(1);

}
