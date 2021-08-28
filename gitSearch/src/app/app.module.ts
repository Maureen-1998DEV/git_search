import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';
import { RepoSearchComponent } from './repo-search/repo-search.component';
import { GitSearchService } from './gitSearch-service/git-search.service';
import { ProfileComponent } from './profile/profile.component';
import { GitPipe } from './git.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent,
    RepoSearchComponent,
    ProfileComponent,
    GitPipe
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
