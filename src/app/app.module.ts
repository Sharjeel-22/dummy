import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NoMatchPageComponent } from './no-match-page/no-match-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    DeleteUserComponent,
    UpdateUserDetailComponent,
    UpdatePasswordComponent,
    RegistrationComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NoMatchPageComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
