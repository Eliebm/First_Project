import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [{ path:'', redirectTo:'Signup', pathMatch: 'full' },
{path:'Signup', loadChildren:() => import('./signup/signup.module').then(m=>m.SignupModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
