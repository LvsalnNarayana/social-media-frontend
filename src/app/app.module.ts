import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { AccountComponent } from './pages/account/account.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SinglePostComponent } from './pages/single-post/single-post.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FriendsComponent } from './pages/friends/friends.component';
import { EventsComponent } from './pages/events/events.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';
import { SocketService } from './services/socket.service';
import { AuthService } from './services/auth.service';
import { GlobalsService } from './services/globals.service';
import { MessageService } from './services/message.service';
import { NotificationService } from './services/notification.service';
import { PostService } from './services/post.service';
import { RequestService } from './services/request.service';
import { UserService } from './services/user.service';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    SignupPageComponent,
    AccountComponent,
    ProfileComponent,
    SinglePostComponent,
    SettingsComponent,
    FriendsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CloudinaryModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    HttpService,
    SocketService,
    AuthService,
    GlobalsService,
    MessageService,
    NotificationService,
    PostService,
    RequestService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
