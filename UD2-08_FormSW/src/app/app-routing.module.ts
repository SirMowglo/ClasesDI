import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPeopleComponent } from './components/edit-people/edit-people.component';
import { PeopleListComponent } from './components/people-list/people-list.component';

const routes: Routes = [
  {path:'index', component: PeopleListComponent},
  {path:'edit/:id',component: EditPeopleComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
