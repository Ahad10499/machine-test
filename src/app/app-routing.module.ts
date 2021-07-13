import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDeatilsComponent } from './user-deatils/user-deatils.component';
import  {HomeComponent }  from './home/home.component'
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
 {
   path: '',
   redirectTo : '/home',
   pathMatch: 'full'
 },
  {
   path : 'user',
   component :UserDeatilsComponent
 },
 {
  path : 'home',
  component: HomeComponent    
},
{
  path: 'register' ,
  component : ReactiveFormComponent
},
{
  path: '**',
  pathMatch: 'full',
  component: PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
