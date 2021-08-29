import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from 'src/user';
import { Repository } from 'src/represitory';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
  getRepos() {
    throw new Error('Method not implemented.');
  }
  getMyRepos: any;
  getMyUser() {
    throw new Error('Method not implemented.');
  }
  getUser() {
    throw new Error('Method not implemented.');
  }


    public userName: string;
    private endpoint: string = "/users/";
    public searchTerm: string = "calculator";
    public user: User;
    public repository: Repository;
    public reposArray: any = [];
  updateSearchTerm: any;
  searchRepos: any;
  updateProfile: any;

    constructor(private http:HttpClient) {
        this.userName = "Maureen-1998DEV";
        this.user= new User("","","","","");
        this.repository=  new Repository("","","");
    }

    // getMyUser () { 
    //     interface ApiResponse(){}
    //     let promise = new Promise<void> ((resolve, reject) => {
    //         this.http.get(environment.urlApikey + this.endpoint + "Maureen-1998DEV").toPromise().then(
    //             res => {
    //                 this.user.userName = res.userName;
    //                 this.user.login = res.login;
    //                 this.user.profile = res.profile;
    //                 this.user.links = res.html_url;
    //                 this.user.avatar = res.avatar_;
    //                 resolve();
    //             }, error => {
    //                 reject(error);
    //             }
    //         );
    //     });
    //     return promise;
    // }
     }


//     getUser() {
//         let promise = new Promise<void> ((resolve, reject) => {
//             this.http.get(environment.urlApikey + this.endpoint + this.userName ).toPromise().then(
//                 res => {
//                     this.user.user = res.json().name;
//                     this.user.login = res.json().login;
//                     this.user.profile = res.json().profile;
//                     this.user.links = res.json().html_url;
//                     this.user.avatar = res.json().avatar_url;
//                     resolve();
//                 }, error => {
//                     reject(error);
//                 }
//             );
//         });
//         return promise;
//     }

//     getMyRepos() {
//         let promise = new Promise<void>((resolve, reject) => {
//             this.http.get(environment.urlApikey + this.endpoint + "Maureen-1998DEV" ).toPromise().then(
//                 res => {
//                     for (let repo of res.json()){
//                         this.repository.name = repo.name;
//                         this.repository.description = repo.description;
//                         this.repository.repoLink = repo.html_url;
//                         this.reposArray.push(this.repository);
//                         this.repository=  new Repository("","","");
//                         resolve();
//                     }
//                 }, error => {
//                     reject(error);
//                 }
//             );
//         });
//         return promise;
//     }

//     getRepos() {
//         this.reposArray = [];
//         let promise = new Promise<void>((resolve, reject) => {
//             this.http.get(environment.urlApikey + this.endpoint + this.userName).toPromise().then(
//                 res => {
//                     for (let repo of res.json()){
//                         this.repository.name = repo.name;
//                         this.repository.description = repo.description;
//                         this.repository.repoLink = repo.html_url;
//                         this.reposArray.push(this.repository);
//                         this.repository=  new Repository("","","");
//                         resolve();
//                     }
//                 }, error => {
//                     reject(error);
//                 }
//             );
//         });
//         return promise;
//     }

//     searchRepos() {
//         this.reposArray = [];
//         let promise =new Promise<void>((resolve, reject) => {
//             this.http.get(environment.urlApikey + "/search/repositories?q=" + this.searchTerm + "in:name").toPromise().then(
//                 res => {
//                     for (let repo of res.json().items){
//                         this.repository.name = repo.name;
//                         this.repository.description = repo.description;
//                         this.repository.repo= repo.html_url;
//                         this.reposArray.push(this.repository);
//                         this.repository=  new Repository("","","");
//                         resolve();
//                     }
//                 }, error => {
//                     reject(error);
//                 }
//             )
//         })
//     }

//     updateSearchTerm(searchTerm:string) {
//         this.searchTerm = searchTerm;
//     }

//     updateProfile(username:string) {
//         this.userName = username;
//     }
// }