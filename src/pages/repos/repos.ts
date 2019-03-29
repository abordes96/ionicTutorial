import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Repo } from '../../models/repo';
import { ReposProvider } from '../../providers/repos/repos';

/**
 * Generated class for the ReposPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repos',
  templateUrl: 'repos.html',
})
export class ReposPage {
  username: string;
  repos: Repo[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private reposProvider: ReposProvider) {  }

    getRepos() { 
      this.username = 'abordes96';
      this.reposProvider.getRepos(this.username).subscribe(reposArray => {
        this.repos = reposArray;
      })
    }
  ionViewDidLoad() {
    this.getRepos();
  }

}
