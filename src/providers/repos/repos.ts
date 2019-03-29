import { Http} from '@angular/http';
import { Repo } from '../../models/repo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the ReposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReposProvider {
  username: string;

  constructor(public http: Http) { }

  getRepos(username): Observable<Repo[]> {
    return this.http.get(`https://api.github.com/users/${username}/repos`).map(res => <Repo[]>res.json());
    }

}
