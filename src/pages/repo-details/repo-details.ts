import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Repo } from '../../models/repo'; 

@IonicPage()
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})
export class RepoDetailsPage {
  repo: Repo; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.repo = navParams.get('repo'); 

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetailsPage');
  }

}