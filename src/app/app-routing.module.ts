import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path: '', redirectTo: 'logIn', pathMatch: 'full' },
{ path: 'signUp', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) },
{ path: 'logIn', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
{ path: 'details/:countName', loadChildren: () => import('./details/details.module').then(m => m.DetailsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
