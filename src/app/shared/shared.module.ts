import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PostComponent } from './post/post.component';
import { CardComponent } from './card/card.component';
import { MesageBoxComponent } from './mesage-box/mesage-box.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { EventComponent } from './event/event.component';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { ContactSidebarComponent } from './contact-sidebar/contact-sidebar.component';
import { MessageComponent } from './message/message.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PostComponent,
    CardComponent,
    MesageBoxComponent,
    MessageDialogComponent,
    CommentBoxComponent,
    EventComponent,
    ProfileSidebarComponent,
    ContactSidebarComponent,
    MessageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoginComponent,
    SignupComponent,
    PostComponent,
    CardComponent,
    MesageBoxComponent,
    MessageDialogComponent,
    CommentBoxComponent,
    EventComponent,
    ProfileSidebarComponent,
    ContactSidebarComponent,
    MessageComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
