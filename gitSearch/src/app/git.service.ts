import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';



import { User } from '../user';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  private username:string;
  private gitUser:string = "/users/";
  public search: string = "calculator";
    public users: User;
    public repository: Repository;
    public repoArray: any = [];


  constructor(private http:HttpClient) { 
    this.username = 'Maureen-1998DEV';
    this.users= new User("","","","","");
        this.repository=  new Repository("","","");
  }






  mygitUser () {
    interface ApiResponse{
      username: string;
      login:string;
      avatar_url:string
      bio:string;
      html_url:string
    
    }
    let promise = new Promise<void> ((resolve, reject) => {
        this.http.get<ApiResponse>(environment.urlApiKey + this.gitUser + "Maureen-1998DEV" + "?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecrets).toPromise().then(
            Response => {
                this.users.username = Response.username;
                this.users.login = Response.login;
                this.users.Bio = Response.bio;
                this.users.gitlink = Response.html_url;
                this.users.Avatar = Response.avatar_url;
                resolve();
            }, err => {
                reject(err);
            }
        );
    });
    return promise;
}

getUser() {
  interface ApiResponse{
  username: string;
  login:string;
  avatar_url:string
  bio:string;
  html_url:string

}



    let promise = new Promise<void> ((resolve, reject) => {
        this.http.get<ApiResponse>(environment.urlApiKey + this.gitUser + this.username + "?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecrets).toPromise().then(
            Response => {
                this.users.username = Response.username;
                this.users.login = Response.login;
                this.users.Bio = Response.bio;
                this.users.gitlink = Response.html_url;
                this.users.Avatar = Response.avatar_url;
                resolve();
            }, err => {
                reject(err);
            }
        );
    });
    return promise;
}

myGitRepos() {
  interface ApiResponse{
  name: string;
  description:string;
  html_url:string

  }


    let promise = new Promise<void>((resolve, reject) => {
        this.http.get(environment.urlApiKey + this.gitUser + "Maureen-1998DEV" + "/repos?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecrets).toPromise().then(
            res => {
                for (let repo of this.repoArray){
                    this.repository.Reponame = repo.name;
                    this.repository.description = repo.description;
                    this.repository.repolinks = repo.html_url;
                    this.repoArray.push(this.repository);
                    this.repository=  new Repository("","","");
                    resolve();
                }
            }, err => {
                reject(err);
            }
        );
    });
    return promise;
}

getRepos() {
  interface ApiResponse{
  name: string;
  description:string;
  html_url:string

  }


    this.repoArray = [];
    let promise = new Promise<void>((resolve, reject) => {
        this.http.get(environment.urlApiKey + this.gitUser + this.username + "/repos?client_id=" + environment.clientid + "&client_secret=" + environment.clientsecrets).toPromise().then(
            res => {
                for (let repo of this.repoArray){
                    this.repository.name = repo.name;
                    this.repository.description = repo.description;
                    this.repository.repolinks = repo.html_url;
                    this.repoArray.push(this.repository);
                    this.repository=  new Repository("","","");
                    resolve();
                }
            }, err => {
                reject(err);
            }
        );
    });
    return promise;
}

repoSearch() {
  interface ApiResponse{
  name: string;
  description:string;
  html_url:string

  }

    this.repoArray = [];
    let promise =new Promise<void>((resolve, reject) => {
        this.http.get(environment.urlApiKey + "/search/repositories?q=" + this.gitUser + "in:name").toPromise().then(
            res => {
                for (let repo of this.repoArray){
                    this.repository.name = repo.name;
                    this.repository.description = repo.description;
                    this.repository.repolinks = repo.html_url;
                    this.repoArray.push(this.repository);
                    this.repository=  new Repository("","","");
                    resolve();
                }
            }, err => {
                reject(err);
            }
        )
    })
}

SearchAccess(gitUser:string) {
    this.search = gitUser;
}

AccessProfile(username:string) {
    this.username = username;
}

}