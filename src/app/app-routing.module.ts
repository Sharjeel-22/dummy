import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoMatchPageComponent } from './no-match-page/no-match-page.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserDetailComponent } from './update-user-detail/update-user-detail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent,
    children: [
      {
        path:'user-login',
        component:UserLoginComponent
      },
      {
        path:'user-registration',
        component:UserRegistrationComponent
      },
      {
        path:'user-profile',
        component:UserProfileComponent
      },
      {
        path:'add-new-user',
        component:AddUserComponent
      },
      {
        path:'remove-user/:id',
        component:DeleteUserComponent
      },
      {
        path:'update-user-detail/:id',
        component:UpdateUserDetailComponent
      },
      {
        path:'update-passowrd/:id',
        component:UpdatePasswordComponent
      }
    ]
  },
  {
    path:'**',
    component:NoMatchPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
