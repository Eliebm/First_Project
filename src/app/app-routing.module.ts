import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path:'', redirectTo:'Login', pathMatch: 'full' },
{path:'Signup', loadChildren:() => import('./signup/signup.module').then(m=>m.SignupModule)},
{ path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
{ path: 'Home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
