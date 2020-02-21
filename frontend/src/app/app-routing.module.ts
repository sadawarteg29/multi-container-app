import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
	{ path: '',redirectTo: 'add-user' ,pathMatch:'full'},
	{ path: '', loadChildren: () => import('./add-user/add-user.module').then(m => m.AddUserModule)},
	{ path: 'user-list', loadChildren: () => import('./user-list/user-list.module').then(m => m.UserListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
