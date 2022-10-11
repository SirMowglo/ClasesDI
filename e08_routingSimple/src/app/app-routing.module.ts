import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewUserComponent } from './components/new-user/new-user.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'new', redirectTo: '/new-user' }, //redigige a otra ruta, en este caso new-user
  { path: '', redirectTo: '/user-list', pathMatch: 'full' }, //si el path esta vacio y no hay contenido a la derecha del servidor, redirige a user-list
  { path: '**', component: PageNotFoundComponent }, //lleva al componente cuando no encuentra coincidencia (la ruta no existe)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
