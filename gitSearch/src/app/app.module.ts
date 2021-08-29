import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { GitSearchService } from './gitSearch-service/git-search.service';
import { ProfileComponent } from './profile/profile.component';
import { GitPipe } from './git.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReposComponent } from './repos/repos.component';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    ProfileComponent,
    GitPipe,
    NotFoundComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
