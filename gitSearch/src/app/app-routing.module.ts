import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent},
{ path: 'repo', component: ReposComponent},
{ path: 'search', component: SearchComponent},
{ path:'**', component:NotFoundComponent},
{ path: '', redirectTo:"/gitsearch", pathMatch:"full"},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
