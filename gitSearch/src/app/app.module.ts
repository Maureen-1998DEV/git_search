import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ReposComponent } from './repos/repos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GitPipe } from './git.pipe';
import { GitService } from './git.service';
import { ColorDirective } from './color.directive';
import { BoldenPipe } from './bolden.pipe';

const routes:Routes=[
  {path:"profile",component:ProfileComponent},
  {path:"search",component:SearchComponent},
  {path:"repos",component:ReposComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    SearchComponent,
    ReposComponent,
    NotFoundComponent,
    GitPipe,
    ColorDirective,
    BoldenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
