import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from 'src/user';
import { Repository } from 'src/represitory';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {
    public userName: string;
    public user: User;
    public repository: Repository;
    public reposArray: any = [];

    constructor(private http:HttpClient) {
        this.userName = "Maureem-1998DEV";
        this.user= new User("","","","","");
        this.repository=  new Repository("","","");
    }
    
       
    updateProfile() {
        return this.http.get("https://api.github.com/users/"+this.userName+environment.urlApikey)
    }
    updateSearchTerm(){
        return this.http.get("https://api.github.com/repository"+this.repository + environment.urlApikey)
    }
    // updateProfile(username:string) {
    //     this.userName = username;
    // }

}